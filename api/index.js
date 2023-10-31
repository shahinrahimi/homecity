require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const path = require('path')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const { logger, logEvents } = require('./middleware/logger')

// socket
const http = require('http');
const server = http.createServer(app);
const socketHandler = require('./sockets/mySocket')
const io = socketHandler(server)

// scraping price
// const priceScrapper = require('./lib/priceScrapper')

// middlewares
app.use(logger)
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

// routes
app.use('/api', express.static(path.join(__dirname, 'public')))

app.use("/api", require('./routes/root'))
app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/posts", require("./routes/postRoutes"))
app.use("/api/messages", require("./routes/messageRoute"))
app.all('*', (req,res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: "404 Not Found" })
    } else {
        res.type('txt').send('404 not Found')
    }
})

// error handler
app.use(errorHandler)

// node environments
const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT
console.log(`env\tnode_env:{${NODE_ENV}}\tport:{${PORT}}`)

// connecting to DB
connectDB()

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))  
  // priceScrapper.infiniteRun(interval=5)
})

mongoose.connection.on('error', err => {
  console.log(err)
  logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})


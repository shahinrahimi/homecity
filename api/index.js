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

// socket io
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:5173"
  }
})
const livePrices = require("./lib/livePrices")

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.emit('live prices signal', JSON.stringify(livePrices.prices));
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.disconnect()
});


// scraping price
const priceScrapper = require('./lib/priceScrapper')

// middlewares
app.use(logger)
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

// node environments
const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT
console.log(`env\tnode_env:{${NODE_ENV}}\tport:{${PORT}}`)

// routes
app.use(express.static(path.join(__dirname, 'public')))
app.use("/uploads", express.static(path.join(__dirname, 'uploads')))
app.use("/api", express.static(path.join(__dirname, 'public')))
app.use("/api", require('./routes/root'))
app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/blogs", require("./routes/blogRoutes"))
app.use("/api/tags", require("./routes/tagRoutes"))
app.use("/api/facilities", require("./routes/facilityRoutes"))
app.use("/api/projects", require("./routes/projectRoute"))
app.use("/api/franchises", require("./routes/franchiseRoutes"))
app.use("/api/messages", require("./routes/messageRoute"))
app.all('/api/*', (req,res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: "404 Not Found" })
    } else {
        res.type('txt').send('404 not Found')
    }
})

// serving frontend
if (NODE_ENV === "production"){
  
  // client 
  app.use(express.static(path.join(__dirname,"..","client","dist")))
  app.use("/", express.static(path.join(__dirname,"..","client","dist")))

  // handling to react clinet router
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "client", "dist", "index.html")
    )
  })
  
} else {
  app.use("/", require('./routes/root'))
}

// error handler
app.use(errorHandler)

// connecting to DB
connectDB()

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  priceScrapper.infiniteRun(interval=1)
})

mongoose.connection.on('error', err => {
  console.log(err)
  logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})


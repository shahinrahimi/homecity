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
const { Server } = require('socket.io')
const http = require('http');
const server = http.createServer(app);
const io = new Server(server)
const livePrices = require("./lib/livePrices")

io.on('connection', (socket) => {
  // console.log(socket?.handshake)
  console.log('A user connected');

  // You can emit data to the connected clients
  setInterval(() => {
    socket.emit('live prices signal', JSON.stringify(livePrices));
  }, 1000);

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
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
app.use('/api', express.static(path.join(__dirname, 'public')))
app.use("/api", require('./routes/root'))
app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/posts", require("./routes/postRoutes"))
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

  // admin
  app.use(express.static(path.join(__dirname,"..","admin","dist")))
  app.use("/admin", express.static(path.join(__dirname,"..","admin","dist")))

  // handling to react router
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


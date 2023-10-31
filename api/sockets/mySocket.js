const socketIo = require('socket.io');
const livePrices = require('../lib/livePrices')

module.exports = (server, interval = 1) => {
  const io = socketIo(server, {
    cors: {
      // origin: "http://localhost:82",
      origin: "*:*",
      methods: ["GET"],
      // allowedHeaders: ["my-custom-header"],
      // credentials: true
    }
  });

  io.on('connection', (socket) => {
    // console.log(socket?.handshake)
    console.log('A user connected');

    // You can emit data to the connected clients
    setInterval(() => {
      socket.emit('data', JSON.stringify(livePrices));
    }, interval * 1000 * 60);

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return io;
};
const allowedOrigins = [
    'http://localhost:5173', // vite
    `http://localhost:${process.env.PORT}`,
]

module.exports = allowedOrigins
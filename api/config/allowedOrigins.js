const allowedOrigins = [
    'http://localhost:5173', // vite
    `http://localhost:${process.env.PORT}`,
    'http://homecitygroup.com.tr',
    'http://www.homecitygroup.com.tr'
]

module.exports = allowedOrigins
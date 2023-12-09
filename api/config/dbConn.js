const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            serverSelectionTimeoutMS: 5000,
            minPoolSize:10,
            connectTimeoutMS: 10000,
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB
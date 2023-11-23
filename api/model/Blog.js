const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: String,
    summary: String,
    content: String,
    image: String,
},{ timestamps: true })


module.exports = mongoose.model("Blog", blogSchema)
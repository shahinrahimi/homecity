const mongoose = require("mongoose")

const translationSchema = new mongoose.Schema({
    language: String,
    title: String,
    summary: String,
    content: String
})

module.exports = mongoose.model("Translation", translationSchema)
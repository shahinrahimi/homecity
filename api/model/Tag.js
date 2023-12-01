const mongoose = require("mongoose")

const tagSchema = new mongoose.Schema({
    fa: String,
    en: String,
    ar: String,
    tr: String
})

module.exports = mongoose.model("Tag", tagSchema)
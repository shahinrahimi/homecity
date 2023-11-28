const mongoose = require("mongoose")

const TagSchema = new mongoose.Schema({
    fa: String,
    en: String,
    ar: String,
    tr: String
})

module.exports = mongoose.model("Tag", TagSchema)
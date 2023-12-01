const mongoose = require("mongoose")

const facilitySchema = new mongoose.Schema({
    fa: String,
    en: String,
    ar: String,
    tr: String,
    icon: String,
})

module.exports = mongoose.model("Facility", facilitySchema)
const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: String,
    summary: String,
    content: String,
    image: String,
    translations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "TranslationBlog"
        }
    ],
    tags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tag",
        }
    ]
},{ timestamps: true })


module.exports = mongoose.model("Blog", blogSchema)
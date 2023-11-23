const mongoose = require("mongoose")

const translationBlogSchema = new mongoose.Schema({
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Blog",
        require: true
    },
    language: String,
    title: String,
    summary: String,
    content: String
})

module.exports = mongoose.model("TranslationBlog", translationBlogSchema)
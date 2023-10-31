const mongoose = require('mongoose')

const translationSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    require: true,
  },
  language: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("Translation", translationSchema)


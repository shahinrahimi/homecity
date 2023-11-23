const Blog = require("../model/Blog")
const TranslationBlog = require("../model/BlogTranslation")
const multer = require("multer")
const uploadMiddleware = multer({ dest: "uploads/"})
const fs = require('fs')

// @desc Get all blogs
// @route GET /blogs
// @access public
const getAllBlogs = async (req, res) => {
    const blogs = await Blog.find().lean()

    const translations = await TranslationBlog.find().lean()

    const blogsWithTranslations = blogs.map(blog => {
        const trans = translations.filter(t => t.postId.toString() === post._id.toString())
        return {
            ...blog,
            trans
        }
    })

    return res.status(200).json(blogsWithTranslations)
}

// @desc Create new blog
// @route POST /blogs
// @access private
const createNewBlog = async (req, res) => {
    const {
        title,
        summary,
        content,
        title_fa,
        title_tr,
        title_ar,
        summary_fa,
        summary_tr,
        summary_ar,
        content_fa,
        content_tr,
        content_ar,
    } = req.body

    const {
        path: imagePath
    } = req.file

    const requiredFields = [
        imagePath,
        title,
        summary,
        content,
        title_fa,
        title_tr,
        title_ar,
        summary_fa,
        summary_tr,
        summary_ar,
        content_fa,
        content_tr,
        content_ar,
    ]

    const confirmData = requiredFields.every(item => typeof item === "string" )

    if (!confirmData){
        return res.status(400).json({ message: "All fields required" })
    }

    const newBlog = await Blog.create({
        title,
        summary,
        content,
        image: imagePath
    })

    if (!newBlog){
        return res.status(400).json({ message: 'Invalid blog data received' })
    }

    const translationFa = await TranslationBlog.create({
        blogId: newBlog.id,
        language: "fa",
        title: title_fa,
        summary: summary_fa,
        content: content_fa,
      })
    
      const translationTr = await TranslationBlog.create({
        blogId: newBlog.id,
        language: "tr",
        title: title_tr,
        summary: summary_tr,
        content: content_tr
      })
    
      const translationAr = await TranslationBlog.create({
        blogId: newBlog.id,
        language: "ar",
        title: title_ar,
        summary: summary_ar,
        content: content_ar
      })

      res.status(201).json({ message: `New blog created`})

}


// @desc Update a blog
// @route PATCH /blogs
// @access Private
const updateBlog = async (req, res) => {
    const {
        title,
        summary,
        content,
        title_fa,
        title_tr,
        title_ar,
        summary_fa,
        summary_tr,
        summary_ar,
        content_fa,
        content_tr,
        content_ar,
    } = req.body

    const requiredFields = [
        title,
        summary,
        contetn,
        title_fa,
        title_tr,
        title_ar,
        summary_fa,
        summary_tr,
        summary_ar,
        content_fa,
        content_tr,
        content_ar,
    ]

    // check if every fields is exists and have type of string
    const confirmData = requiredFields.every(item => typeof item === "string" )

    if (!confirmData){
        return res.status(400).json({ message: "All fields required" })
    }

    const blog = await Blog.findById(id).exec()
    if (!blog){
        return res.status(400).json({ message: "Blog not found"})
    }

    const translationFa = await TranslationBlog.findOne({ blogId: id, language: "fa" }).exec()
    const translationTr = await TranslationBlog.findOne({ blogId: id, language: "tr" }).exec()
    const translationAr = await TranslationBlog.findOne({ blogId: id, language: "ar" }).exec()
        if (!translationFa || !translationTr || !translationAr){
        return res.status(400).json({ message: "Translation for post not found"})
    }

    // update fields
    blog.title = title
    blog.summary = summary
    blog.content = content
    translationFa.title = title_fa
    translationFa.summary = summary_fa
    translationFa.content = content_fa
    translationTr.title = title_tr
    translationTr.summary = summary_tr
    translationTr.content = content_tr
    translationAr.title = title_ar
    translationAr.summary = summary_ar
    translationAr.content = content_ar

    const updateAll = await Promise.all([
        post.save(),
        translationFa.save(),
        translationTr.save(),
        translationAr.save()
    ])

    return res.status(200).json({ message: "Blog updated" })

}

// @desc Delete a blog
// @route DELETE /blogs
// @access Private

const deleteBlog = async (req, res) => {
    const { id } = req.body

    if (!id){
        return res.status(400).json({ message: "Blog ID required"})
    }

    const blog = await Blog.findById(id).exec()
    if (!blog){
        return res.status(400).json({ message: "Blog  not found"})
    }

    const translationFa = await TranslationBlog.findOne({ blogId: id, language: "fa"}).exec()
    const translationTr = await TranslationBlog.findOne({ blogId: id, language: "tr"}).exec()
    const translationAr = await TranslationBlog.findOne({ blogId: id, language: "ar"}).exec()
    if (!translationFa || !translationTr || !translationAr){
        return res.status(400).json({ message: "Translation for blog not found"})
    }

    const deleteAll = await Promise.all([
        post.deleteOne(),
        translationFa.deleteOne(),
        translationTr.deleteOne(),
        translationAr.deleteOne()
    ])

    const reply = `Post ${id} deleted`

    res.json(reply)
}


module.exports = {
    getAllBlogs,
    createNewBlog,
    updateBlog,
    deleteBlog
}
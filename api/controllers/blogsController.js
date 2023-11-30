const Blog = require("../model/Blog")
const TranslationBlog = require("../model/BlogTranslation")
const Tag = require("../model/Tag")
const fs = require('fs')
const ObjectId = require('mongoose').Types.ObjectId

// @desc Get all blogs
// @route GET /blogs
// @access public
const getAllBlogs = async (req, res) => {
    const blogs = await Blog.find().sort({ createdAt: 'desc' }).populate("tags").populate("translations").lean()

    return res.status(200).json(blogs)
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
        tags_csv
    } = req.body

    if (!req.file) {
        return res.status(400).json({ message: "No file found for image" })
    }
    
    const { path } = req.file
    const requiredFields = [
        path,
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

    let tagIds = []
    let tags = []

    if (tags_csv){
        tagIds = tags_csv.split(",")
        const validIds = tagIds.every(tagId => ObjectId.isValid(tagId))
        if (!validIds){
            return res.status(400).json({ message: "Not valid tagId or tagIds provided" })
        }
        tags = await Promise.all(tagIds.map(tagId => Tag.findById(tagId)))
    }

    const newBlog = await Blog.create({
        title,
        summary,
        content,
        image: path,
        tags: tags.map(tag => tag._id)
    })

    if (!newBlog){
        return res.status(400).json({ message: 'Invalid blog data received' })
    }

    const translationFa = await TranslationBlog.create({
        language: "fa",
        title: title_fa,
        summary: summary_fa,
        content: content_fa,
      })
    
      const translationTr = await TranslationBlog.create({
        language: "tr",
        title: title_tr,
        summary: summary_tr,
        content: content_tr
      })
    
      const translationAr = await TranslationBlog.create({
        language: "ar",
        title: title_ar,
        summary: summary_ar,
        content: content_ar
      })

      newBlog.translations = [
        translationFa._id,
        translationAr._id,
        translationTr._id
      ]

      const result = await newBlog.save()

      res.status(201).json({ message: `New blog created`})

}


// @desc Update a blog
// @route PATCH /blogs
// @access Private
const updateBlog = async (req, res) => {

    const { id } = req.params
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
        tags_csv
    } = req.body

    const requiredFields = [
        id,
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

    
    // check if every fields is exists and have type of string
    const confirmData = requiredFields.every(item => typeof item === "string" )
    if (!confirmData || !ObjectId.isValid(id)){
        return res.status(400).json({ message: "All fields required" })
    }

    let tagIds = []
    let tags = []

    if (tags_csv){
        tagIds = tags_csv.split(",")
        const validIds = tagIds.every(tagId => ObjectId.isValid(tagId))
        if (!validIds){
            return res.status(400).json({ message: "Not valid tagId or tagIds provided" })
        }
        tags = await Promise.all(tagIds.map(tagId => Tag.findById(tagId)))
    }

    const blog = await Blog.findById(id).populate("translations").exec()
    if (!blog){
        return res.status(400).json({ message: "Blog not found"})
    }

    blog.title = title
    blog.summary = summary
    blog.content = content
    blog.tags = tags.map(tag => {
        return tag._id
    })

    const translationFa = blog.translations.filter(translation => translation.language === "fa")[0]
    const translationAr = blog.translations.filter(translation => translation.language === "ar")[0]
    const translationTr = blog.translations.filter(translation => translation.language === "tr")[0]

    translationFa.title = title_fa
    translationFa.summary = summary_fa
    translationFa.content = content_fa

    translationAr.title = title_ar
    translationAr.summary = summary_ar
    translationAr.content = content_ar

    translationTr.title = title_tr
    translationTr.summary = summary_tr
    translationTr.content = content_tr

    // if req.file is exist so the new file should replace with old one
    if (req.file){
        const { path } = req.file
        fs.unlinkSync(blog.image)
        blog.image = path
    }

    const updateAll = await Promise.all([
        blog.save(),
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
    const { id } = req.params

    if (!id || !ObjectId.isValid(id)){
        return res.status(400).json({ message: "Blog ID required"})
    }

    const blog = await Blog.findById(id).populate("translations").exec()
    if (!blog){
        return res.status(400).json({ message: "Blog  not found"})
    }

    const translationFa = blog.translations.filter(translation => translation.language === "fa")[0]
    const translationAr = blog.translations.filter(translation => translation.language === "ar")[0]
    const translationTr = blog.translations.filter(translation => translation.language === "tr")[0]

    const deleteAll = await Promise.all([
        blog.deleteOne(),
        translationFa.deleteOne(),
        translationTr.deleteOne(),
        translationAr.deleteOne(),
        fs.unlinkSync(blog.image)
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
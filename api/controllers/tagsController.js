const Tag = require("../model/Tag")
const Blog = require("../model/Blog")
const ObjectId = require('mongoose').Types.ObjectId

// @desc Get all tags
// @route GET /tags
// @access public
const getAllTags = async (req, res) => {
    const tags = await Tag.find().lean()

    return res.status(200).json(tags)
}

const createNewTag = async (req, res) => {
    const {
        fa,
        en,
        ar,
        tr
    } = req.body

    const requiredFields = [
        fa, en, ar, tr
    ]

    const confirmData = requiredFields.every(item => typeof item === "string" )

    if (!confirmData){
        return res.status(400).json({ message: "All fields required" })
    }

    const newTag = await Tag.create({
        fa,
        en,
        ar,
        tr
    })

    if (!newTag){
        return res.status(400).json({ message: `Invalid tag data received`})
    }

    res.status(201).json({ message: `New tag ${en} created`})
    
}

// @desc Create new tag
// @route POST /tags
// @access private
const updateTag = async (req, res) => {
    const { id } = req.params
    const {
        fa,
        en,
        tr,
        ar
    } = req.body

    const requiredFields = [
        id, fa, en, ar, tr
    ]

    const confirmData = requiredFields.every(item => typeof item === "string" )

    if (!confirmData){
        return res.status(400).json({ message: "All fields required" })
    }

    const tag = await Tag.findById(id).exec()
    if (!tag){
        return res.status(400).json({ message: "Tag not found"})
    }

    tag.fa = fa
    tag.en = en
    tag.ar = ar
    tag.tr = tr

    const updateTag = await tag.save()

    if (!updateTag){
        return res.status(400).json({ message: `Invalid tag data received`})
    }

    return res.status(200).json({ message: "Tag updated "})
    
}

const deleteTag = async (req, res) => {
    const { id } = req.params

    if (!id || !ObjectId.isValid(id)){
        return res.status(400).json({ message: "All fields required" })
    }

    const tag = await Tag.findById(id).exec()
    const blogs = await Blog.find({ tags: {
        $in: [tag._id]
    }}).exec()

    // delete all tag in blogs
    for (let i=0; i < blogs.length; i++){
        const blog = blogs[i]
        blog.tags = blog.tags.filter(t => t._id !== tag._id)
    }

    
    // blogs = blogs.map(blog => {
    //     return {
    //         ...blog,
    //         tags: blog.tags.filter(t => t._id !== tag._id)
    //     }
    // })
    const saveResult = await Promise.all(blogs.map(b => b.save()))

    // delete tag
    const result = await tag.deleteOne()

    return res.status(200).json({ message: `Tag deleted`})

}



module.exports = {
    getAllTags,
    createNewTag,
    updateTag,
    deleteTag
}
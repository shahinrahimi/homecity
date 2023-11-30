const Project = require("../model/Project")
const Translation = require("../model/Transaltion")
const Tag = require("../model/Tag")
const fs = require('fs')
const ObjectId = require('mongoose').Types.ObjectId

// @desc Get all projects
// @route GET /projects
// @access public
const getAllProjects = async (req, res) => {
    const projects = await Project.find().sort({ createdAt: 'desc' }).populate("tags").populate("translations").lean()
    
    return res.status(200).json(projects)
}


// @desc Create new project
// @route POST /projects
// @access private
const createNewProject = async (req, res) => {
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

    const newProject = await Project.create({
        title,
        summary,
        content,
        image: path,
        tags: tags.map(tag => tag._id)
    })

    if (!newProject){
        return res.status(400).json({ message: 'Invalid blog data received' })
    }

    // create translation
    const translationFa = await Translation.create({
        language: "fa",
        title: title_fa,
        summary: summary_fa,
        content: content_fa,
      })
    
      const translationTr = await Translation.create({
        language: "tr",
        title: title_tr,
        summary: summary_tr,
        content: content_tr
      })
    
      const translationAr = await Translation.create({
        language: "ar",
        title: title_ar,
        summary: summary_ar,
        content: content_ar
      })

      newProject.translations = [
        translationFa._id,
        translationAr._id,
        translationTr._id
      ]

      const result = await newProject.save()

      res.status(201).json({ message: `New project created`})
}

// @desc Update a project
// @route PATCH /projects
// @access Private
const updatePost = async (req, res) => {

}

// @desc Delete a project
// @route DELETE /projects
// @access Private
const deleteProject = async (req, res) => {

}

module.exports = {
    getAllProjects,
    createNewProject,
    updatePost,
    deleteProject
}



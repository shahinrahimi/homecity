const Project = require("../model/Project")
const Translation = require("../model/Transaltion")
const Tag = require("../model/Tag")
const Facility = require("../model/Facility")
const fs = require('fs')
const ObjectId = require('mongoose').Types.ObjectId
const arrayFilesRemover = require("../lib/arrayFilesRemover")

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
        // strings
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
        tags_csv,
        facilities_csv,

        // numbers
        starting_price,
        total_area,
        total_units,

        // boolean
        isPreSale,
        isInstallment
    } = req.body

    const {
        files // images
    } = req

    if (!files) {
        return res.status(400).json({ message: "No file found for images or video" })
    }
    let requiredFields, confirmData
    requiredFields = [
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
    confirmData = requiredFields.every(item => typeof item === "string" )
    if (!confirmData){
        return res.status(400).json({ message: "All fields required" })
    }

    try{
        requiredFields = [
            starting_price,
            total_area,
            total_units
        ].map(item => parseInt(item))
    }catch (e){
        console.log(e)
        return res.status(400).json({ message: "Error convrting fields to number"})
    }

    confirmData = requiredFields.every(item => typeof item === "number" )
    if (!confirmData){
        return res.status(400).json({ message: "All fields required" })
    }


    try{
        requiredFields = [
            isPreSale,
            isInstallment
        ].map(item => !!item)
    }catch (e){
        console.log(e)
        return res.status(400).json({ message: "Error convrting fields to number"})
    }

    confirmData = requiredFields.every(item => typeof item === "boolean" )
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

    let facilityIds = []
    let facilities = []

    if (tags_csv){
        facilityIds = facilities_csv.split(",")
        const validIds = facilityIds.every(facilityId => ObjectId.isValid(facilityId))
        if (!validIds){
            return res.status(400).json({ message: "Not valid facilityId or tagIds provided" })
        }
        facilities = await Promise.all(facilityIds.map(facilityId => Facility.findById(facilityId)))
    }

    const {
        project_images,
        project_video
    } = files

    if (!project_images || !project_video){
        return res.status(400).json({ message : "can't locate images or videos"})
    }

    const newProject = await Project.create({
        title,
        summary,
        content,
        tags: tags.map(tag => tag._id),
        facilities: facilities.map(f => f._id),
        images: project_images.map(image => image.path),
        video: project_video[0].path,
    })

    if (!newProject){
        return res.status(400).json({ message: 'Invalid project data received' })
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

    const result = await Promise.all([
        translationFa.save(),
        translationAr.save(),
        translationTr.save(),
        newProject.save()
    ])

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
    const { id } = req.params

    if (!id || !ObjectId.isValid(id)){
        return res.status(400).json({ message: "Project ID required"})
    }

    const project = await Project.findById(id).populate("translations").exec()
    if (!project){
        return res.status(400).json({ message: "Blog  not found"})
    }

    const translationFa = project.translations.filter(translation => translation.language === "fa")[0]
    const translationAr = project.translations.filter(translation => translation.language === "ar")[0]
    const translationTr = project.translations.filter(translation => translation.language === "tr")[0]

    if (translationFa){
        await translationFa.deleteOne()
    }

    if (translationAr){
        await translationAr.deleteOne()
    }

    if (translationTr){
        await translationTr.deleteOne()
    }

    if (project.images && project.images.length > 0 ){
        const deleteImages = await arrayFilesRemover(project.images)
    }

    if (project.video) {
        const deleteVideo = await  arrayFilesRemover([project.video])
    }

    const result = await project.deleteOne()

    const reply = `Prokect ${id} deleted`

    res.json(reply)
}

module.exports = {
    getAllProjects,
    createNewProject,
    updatePost,
    deleteProject
}



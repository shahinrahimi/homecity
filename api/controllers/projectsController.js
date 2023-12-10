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
    const projects = await Project.find().sort({ createdAt: 'desc' }).populate("tags").populate("translations").populate("facilities").lean()
    
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
        country,
        city,
        district,
        tags_csv,
        facilities_csv,

        // numbers
        start_year,
        end_year,
        starting_price,
        total_area,
        total_units,
        max_room_count,
        max_bath_count,

        // boolean
        is_presale,
        is_installment
    } = req.body

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
        country,
        city,
        district
    ]
    confirmData = requiredFields.every(item => typeof item === "string" )
    if (!confirmData){
        return res.status(400).json({ message: "All strings fields required" })
    }

    try{
        requiredFields = [
            starting_price,
            total_area,
            total_units,
            max_room_count,
            max_bath_count,
            start_year,
            end_year,
        ].map(item => parseInt(item))
    }catch (e){
        return res.status(400).json({ message: "Error convrting fields to number"})
    }

    confirmData = requiredFields.every(item => typeof item === "number" )
    if (!confirmData){
        return res.status(400).json({ message: "All number fields required" })
    }


    try{
        requiredFields = [
            is_presale,
            is_installment
        ].map(item => item.toString().toLocaleLowerCase() === "false" && item.toString().toLocaleLowerCase() === "true")
    }catch (e){
        return res.status(400).json({ message: "Error convrting fields to boolean"})
    }

    confirmData = requiredFields.every(item => typeof item === "boolean" )
    if (!confirmData){
        return res.status(400).json({ message: "All boolean fields required" })
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

    if (facilities_csv){
        facilityIds = facilities_csv.split(",")
        const validIds = facilityIds.every(facilityId => ObjectId.isValid(facilityId))
        if (!validIds){
            return res.status(400).json({ message: "Not valid facilityId or tagIds provided" })
        }
        facilities = await Promise.all(facilityIds.map(facilityId => Facility.findById(facilityId)))
    }

    const newProject = await Project.create({
        title,
        summary,
        content,
        country,
        city,
        district,

        startYear: parseInt(start_year),
        endYear: parseInt(end_year),
        startingPrice: parseInt(starting_price),
        totalArea: parseInt(total_area),
        totalUnits: parseInt(total_units),
        maxRoomCount: parseInt(max_room_count),
        maxBathCount: parseInt(max_bath_count),

        isPreSale: is_presale.toString().toLocaleLowerCase() === "true" ? true : false,
        isInstallment: is_installment.toString().toLocaleLowerCase() === "true" ? true : false,

        tags: tags.map(tag => tag._id),
        facilities: facilities.map(f => f._id)
    })

    if (!newProject){
        return res.status(400).json({ message: 'Invalid project data received' })
    }

    const {
        project_cover,
        project_images,
        project_video
    } = req.files

    if (project_cover){
        newProject.cover = project_cover.map(image => image.path)
    }

    if (project_images){
        newProject.images = project_images.map(image => image.path)
    }

    if (project_video){
        newProject.video = project_video.map(video => video.path)
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
    const { id } = req.params

    if (!id || !ObjectId.isValid(id)){
        return res.status(400).json({ message: "Project ID required"})
    }

    const project = await Project.findById(id).populate("translations").exec()
    if (!project){
        return res.status(400).json({ message: "Blog  not found"})
    }

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
        country,
        city,
        district,
        tags_csv,
        facilities_csv,

        // numbers
        start_year,
        end_year,
        starting_price,
        total_area,
        total_units,
        max_room_count,
        max_bath_count,

        // boolean
        is_presale,
        is_installment
    } = req.body

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
        country,
        city,
        district
    ]
    confirmData = requiredFields.every(item => typeof item === "string" )
    if (!confirmData){
        return res.status(400).json({ message: "All fields required" })
    }

    try{
        requiredFields = [
            starting_price,
            total_area,
            total_units,
            max_room_count,
            max_bath_count,
            start_year,
            end_year,
        ].map(item => parseInt(item))
    }catch (e){
        return res.status(400).json({ message: "Error convrting fields to number"})
    }

    confirmData = requiredFields.every(item => typeof item === "number" )
    if (!confirmData){
        return res.status(400).json({ message: "All fields required" })
    }


    try{
        requiredFields = [
            is_presale,
            is_installment
        ].map(item => item.toString().toLocaleLowerCase() === "false" && item.toString().toLocaleLowerCase() === "true")
    }catch (e){
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

    if (facilities_csv){
        facilityIds = facilities_csv.split(",")
        const validIds = facilityIds.every(facilityId => ObjectId.isValid(facilityId))
        if (!validIds){
            return res.status(400).json({ message: "Not valid facilityId or tagIds provided" })
        }
        facilities = await Promise.all(facilityIds.map(facilityId => Facility.findById(facilityId)))
    }

    project.title = title
    project.summary = summary
    project.content = content
    project.country = country
    project.city = city
    project.district = district
    project.startYear = parseInt(start_year)
    project.endYear = parseInt(end_year)
    project.startingPrice = parseInt(starting_price)
    project.totalArea = parseInt(total_area)
    project.totalUnits = parseInt(total_units)
    project.maxRoomCount = parseInt(max_room_count)
    project.maxBathCount = parseInt(max_bath_count)
    project.isPreSale = is_presale.toString().toLocaleLowerCase() === "true" ? true : false,
    project.isInstallment = is_installment.toString().toLocaleLowerCase() === "true" ? true : false,
    project.tags = tags.map(tag => tag._id)
    project.facilities = facilities.map(f => f._id)

    const translationFa = project.translations.filter(translation => translation.language === "fa")[0]
    const translationAr = project.translations.filter(translation => translation.language === "ar")[0]
    const translationTr = project.translations.filter(translation => translation.language === "tr")[0]

    translationFa.title = title_fa
    translationFa.summary = summary_fa
    translationFa.content = content_fa

    translationTr.title = title_tr
    translationTr.summary = summary_tr
    translationTr.content = content_tr

    translationAr.title = title_ar
    translationAr.summary = summary_ar
    translationAr.content = content_ar


    const {
        project_cover,
        project_images,
        project_video
    } = req.files

    // delete cover
    if (project_cover){
        const deletedOldFiles = await arrayFilesRemover(project.cover)
        project.cover = project_cover.map(image => image.path)
    }

    // delete all old images
    if (project_images){
        const deletedOldFiles = await arrayFilesRemover(project.images)
        project.images = project_images.map(image => image.path)
    }

    // delete video
    if (project_video){
        const deletedOldVideo = await arrayFilesRemover(project.video)
        project.video = project_video.map(video => video.path)
    }

    const result = await Promise.all([
        translationFa.save(),
        translationAr.save(),
        translationTr.save(),
        project.save()
    ])

    return res.status(200).json({ message: "project updated"})
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

    if (translationFa) await translationFa.deleteOne()
    if (translationAr) await translationAr.deleteOne()
    if (translationTr) await translationTr.deleteOne()

    if (project.cover) await arrayFilesRemover(project.cover)
    if (project.images) await arrayFilesRemover(project.images)
    if (project.video) await arrayFilesRemover(project.video)
    
    const result = await project.deleteOne()

    const reply = `Project with ${id} deleted`

    res.json(reply)
}

module.exports = {
    getAllProjects,
    createNewProject,
    updatePost,
    deleteProject
}



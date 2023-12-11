const Franchise = require("../model/Franchise")
const Translation = require("../model/Transaltion")
const Tag = require("../model/Tag")
const ObjectId = require('mongoose').Types.ObjectId
const arrayFilesRemover = require("../lib/arrayFilesRemover")

// @desc Get all franchises
// @route GET /franchises
// @access public
const getAllFranchises = async (req, res) => {
    const franchises = await Franchise.find().sort({ createdAt: 'desc' }).populate("tags").populate("translations").lean()
    
    return res.status(200).json(franchises)
}


// @desc Create new franchise
// @route POST /franchises
// @access private
const createNewFranchise = async (req, res) => {

    const {
        // strings
        title,
        content,
        title_fa,
        title_tr,
        title_ar,
        content_fa,
        content_tr,
        content_ar,
        country,
        tags_csv,

        // numbers
        start_year,
        average_cost,
        branch_count
    } = req.body

    let requiredFields, confirmData
    requiredFields = [
        title,
        content,
        title_fa,
        title_tr,
        title_ar,
        content_fa,
        content_tr,
        content_ar,
        country,
    ]
    confirmData = requiredFields.every(item => typeof item === "string" )
    if (!confirmData){
        return res.status(400).json({ message: "All strings fields required" })
    }

    requiredFields = [
        average_cost,
        branch_count,
        start_year
    ].map(item => parseInt(item))

    confirmData = requiredFields.every(field => typeof field === "number" && !isNaN(field))
    if (!confirmData){
        return res.status(400).json({ message: "Can't convert field to number"})
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

    const newFranchise = await Franchise.create({
        title,
        content,
        country,
        startYear: parseInt(start_year),
        averageCost: parseInt(average_cost),
        branchCount: parseInt(branch_count),
        tags: tags.map(tag => tag._id),
    })

    if (!newFranchise){
        return res.status(400).json({ message: 'Invalid franchise data received' })
    }

    const {
        franchise_brand,
        franchise_cover,
        franchise_images,
    } = req.files

    if (franchise_brand){
        newFranchise.brand = franchise_brand.map(image => image.path)
    }

    if (franchise_cover){
        newFranchise.cover = franchise_cover.map(image => image.path)
    }

    if (franchise_images){
        newFranchise.images = franchise_images.map(image => image.path)
    }

    // create translation
    const translationFa = await Translation.create({
        language: "fa",
        title: title_fa,
        content: content_fa,
    })
    
    const translationTr = await Translation.create({
        language: "tr",
        title: title_tr,
        content: content_tr
    })

    const translationAr = await Translation.create({
        language: "ar",
        title: title_ar,
        content: content_ar
    })

    newFranchise.translations = [
        translationFa._id,
        translationAr._id,
        translationTr._id
    ]

    const result = await Promise.all([
        translationFa.save(),
        translationAr.save(),
        translationTr.save(),
        newFranchise.save()
    ])

    res.status(201).json({ message: `New franchise created`})
}

// @desc Update a franchise
// @route PATCH /franchises
// @access Private
const updatePost = async (req, res) => {
    const { id } = req.params

    if (!id || !ObjectId.isValid(id)){
        return res.status(400).json({ message: "Franchise ID required"})
    }

    const franchise = await Franchise.findById(id).populate("translations").exec()
    if (!franchise){
        return res.status(400).json({ message: "Blog  not found"})
    }

    const {
        // strings
        title,
        content,
        title_fa,
        title_tr,
        title_ar,
        content_fa,
        content_tr,
        content_ar,
        country,
        tags_csv,

        // numbers
        start_year,
        average_cost,
        branch_count,
    } = req.body

    let requiredFields, confirmData
    requiredFields = [
        title,
        content,
        title_fa,
        title_tr,
        title_ar,
        content_fa,
        content_tr,
        content_ar,
        country,
    ]
    confirmData = requiredFields.every(item => typeof item === "string" )
    if (!confirmData){
        return res.status(400).json({ message: "All fields required" })
    }

    requiredFields = [
        start_year,
        average_cost,
        branch_count,
    ].map(item => parseInt(item))

    confirmData = requiredFields.every(field => typeof field === "number" && !isNaN(field))
    if (!confirmData){
        return res.status(400).json({ message: "Can't convert field to number"})
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


    franchise.title = title
    franchise.content = content
    franchise.country = country
    franchise.startYear = parseInt(start_year)
    franchise.branchCount = parseInt(branch_count)
    franchise.averageCost = parseInt(average_cost)
    franchise.tags = tags.map(tag => tag._id)


    const translationFa = franchise.translations.filter(translation => translation.language === "fa")[0]
    const translationAr = franchise.translations.filter(translation => translation.language === "ar")[0]
    const translationTr = franchise.translations.filter(translation => translation.language === "tr")[0]

    translationFa.title = title_fa
    translationFa.content = content_fa

    translationTr.title = title_tr
    translationTr.content = content_tr

    translationAr.title = title_ar
    translationAr.content = content_ar


    const {
        franchise_brand,
        franchise_cover,
        franchise_images
    } = req.files

    if (franchise_brand){
        const deletedOldFiles = await arrayFilesRemover(franchise.brand)
        franchise.brand = franchise_brand.map(image => image.path)
    }

    // delete cover
    if (franchise_cover){
        const deletedOldFiles = await arrayFilesRemover(franchise.cover)
        franchise.cover = franchise_cover.map(image => image.path)
    }

    // delete all old images
    if (franchise_images){
        const deletedOldFiles = await arrayFilesRemover(franchise.images)
        franchise.images = franchise_images.map(image => image.path)
    }

    const result = await Promise.all([
        translationFa.save(),
        translationAr.save(),
        translationTr.save(),
        franchise.save()
    ])

    return res.status(200).json({ message: "franchise updated"})
}

// @desc Delete a franchise
// @route DELETE /franchises
// @access Private
const deleteFranchise = async (req, res) => {
    const { id } = req.params

    if (!id || !ObjectId.isValid(id)){
        return res.status(400).json({ message: "Franchise ID required"})
    }

    const franchise = await Franchise.findById(id).populate("translations").exec()
    if (!franchise){
        return res.status(400).json({ message: "Franchise  not found"})
    }

    const translationFa = franchise.translations.filter(translation => translation.language === "fa")[0]
    const translationAr = franchise.translations.filter(translation => translation.language === "ar")[0]
    const translationTr = franchise.translations.filter(translation => translation.language === "tr")[0]

    if (translationFa) await translationFa.deleteOne()
    if (translationAr) await translationAr.deleteOne()
    if (translationTr) await translationTr.deleteOne()

    if (franchise.brand) await arrayFilesRemover(franchise.brand)
    if (franchise.cover) await arrayFilesRemover(franchise.cover)
    if (franchise.images) await arrayFilesRemover(franchise.images)
    
    const result = await franchise.deleteOne()

    const reply = `Franchise with ${id} deleted`

    res.json(reply)
}

module.exports = {
    getAllFranchises,
    createNewFranchise,
    updatePost,
    deleteFranchise
}



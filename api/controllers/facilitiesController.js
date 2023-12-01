const Facility = require("../model/Facility")
const Project = require("../model/Project")
const fs = require('fs')
const ObjectId = require('mongoose').Types.ObjectId

// @desc Get all facilities
// @route GET /facilities
// @access public
const getAllFacilities = async (req, res) => {
    const facilities = await Facility.find().lean()

    return res.status(200).json(facilities)
}

const createNewFacility = async (req, res) => {
    const {
        fa,
        en,
        ar,
        tr
    } = req.body

    if (!req.file) {
        return res.status(400).json({ message: "No file found for icon" })
    }

    const { path } = req.file
    const requiredFields = [
        fa, en, ar, tr, path
    ]
    const confirmData = requiredFields.every(item => typeof item === "string" )
    if (!confirmData){
        return res.status(400).json({ message: "All fields required" })
    }

    const newFacility = await Facility.create({
        fa,
        en,
        ar,
        tr,
        icon: path
    })

    if (!newFacility){
        return res.status(400).json({ message: `Invalid facility data received`})
    }

    res.status(201).json({ message: `New facility ${en} created`})
    
}

// @desc Create new facility
// @route POST /facilities
// @access private
const updateFacility = async (req, res) => {
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
    console.log(requiredFields)
    const confirmData = requiredFields.every(item => typeof item === "string" )

    if (!confirmData || !ObjectId.isValid(id)){
        return res.status(400).json({ message: "All fields required" })
    }

    const facility = await Facility.findById(id).exec()
    if (!facility){
        return res.status(400).json({ message: "Facility not found"})
    }

    facility.fa = fa
    facility.en = en
    facility.ar = ar
    facility.tr = tr

    // if req.file is exist so the new file should replace with old one
    if (req.file){
        const { path } = req.file
        fs.unlinkSync(facility.icon)
        facility.icon = path
    }


    const updateFacility = await facility.save()

    if (!updateFacility){
        return res.status(400).json({ message: `Invalid facility data received`})
    }

    return res.status(200).json({ message: "Facility updated "})
    
}

const deleteFacility = async (req, res) => {
    const { id } = req.params

    if (!id || !ObjectId.isValid(id)){
        return res.status(400).json({ message: "All fields required" })
    }

    // find projects that has facilityId
    const facility = await Facility.findById(id).exec()
    const projects = await Project.find({ facilities: {
        $in: [facility._id]
    }}).exec()

    // remove facilityId from project
    for (let i=0; i < projects.length; i++){
        const project = projects[i]
        project.facilities = project.facilities.filter(t => t._id !== facility._id)
    }

    
    const saveResult = await Promise.all(projects.map(b => b.save()))

    // delete facility and icon
    const result = Promise.all([
        fs.unlinkSync(facility.icon),
        facility.deleteOne(),
    ])

    return res.status(200).json({ message: `Facility deleted`})

}



module.exports = {
    getAllFacilities,
    createNewFacility,
    updateFacility,
    deleteFacility
}
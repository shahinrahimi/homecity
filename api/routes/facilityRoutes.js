const express = require("express")
const router = express.Router()
const facilityController = require("../controllers/facilitiesController")
const verifyJWT = require('../middleware/verifyJWT')
const upload = require('../middleware/upload')

router.route("/")
    .get(facilityController.getAllFacilities)
    .post([verifyJWT , upload.single('facility-icon')],facilityController.createNewFacility)

router.route("/:id")
    .patch([verifyJWT, upload.single('facility-icon')] , facilityController.updateFacility)
    .delete(verifyJWT, facilityController.deleteFacility)

module.exports = router
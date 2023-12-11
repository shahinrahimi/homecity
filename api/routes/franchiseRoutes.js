const express = require("express")
const router = express.Router()
const franchisesController = require("../controllers/franchisesController")
const verifyJWT = require("../middleware/verifyJWT")
const upload = require('../middleware/upload')

router.route("/")
        .get(franchisesController.getAllFranchises)
        .post([verifyJWT, 
                upload.fields([
                        { name: "franchise_brand", maxCount: 1},
                        { name: "franchise_cover", maxCount: 1 },
                        { name: "franchise_images", maxCount: 4 }
                ])], franchisesController.createNewFranchise)

router.route("/:id")
        .patch([verifyJWT, 
                upload.fields([
                        { name: "franchise_brand", maxCount: 1},
                        { name: "franchise_cover", maxCount: 1 },
                        { name: "franchise_images", maxCount: 4 }
                ])], franchisesController.updatePost)
        .delete(verifyJWT, franchisesController.deleteFranchise)

module.exports = router
const express = require("express")
const router = express.Router()
const projectsController = require("../controllers/projectsController")
const verifyJWT = require("../middleware/verifyJWT")
const upload = require('../middleware/upload')

router.route("/")
        .get(projectsController.getAllProjects)
        .post([verifyJWT, 
                upload.fields([
                        { name: "project_cover", maxCount: 1 },
                        { name: "project_images", maxCount: 10 },
                        { name: "project_video", maxCount:1 }
                ])], projectsController.createNewProject)

router.route("/:id")
        .patch([verifyJWT, 
                upload.fields([
                        { name: "project_cover", maxCount: 1 },
                        { name: "project_images", maxCount: 10 },
                        { name: "project_video", maxCount:1 }
                ])], projectsController.updatePost)
        .delete(verifyJWT, projectsController.deleteProject)

module.exports = router
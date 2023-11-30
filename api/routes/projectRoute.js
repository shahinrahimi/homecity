const express = require("express")
const router = express.Router()
const projectsController = require("../controllers/projectsController")
const verifyJWT = require("../middleware/verifyJWT")

router.route("/")
        .get(projectsController.getAllProjects)
        .post(verifyJWT, projectsController.createNewProject)

router.route("/:id")
        .patch(verifyJWT, projectsController.updatePost)
        .delete(verifyJWT, projectsController.deleteProject)

module.exports = router
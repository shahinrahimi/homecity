const express = require("express")
const router = express.Router()
const tagController = require("../controllers/tagsController")
const verifyJWT = require('../middleware/verifyJWT')

router.route("/")
    .get(tagController.getAllTags)
    .post(verifyJWT,tagController.createNewTag)

router.route("/:id")
    .patch(verifyJWT, tagController.updateTag)
    .delete(verifyJWT, tagController.deleteTag)

module.exports = router
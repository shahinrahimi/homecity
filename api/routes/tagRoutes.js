const express = require("express")
const router = express.Router()
const tagController = require("../controllers/tagsController")
const verifyJWT = require('../middleware/verifyJWT')

router.route("/")
    .get(tagController.getAllTags)
    .post(tagController.createNewTag)

router.route(":id")
    .patch(tagController.updateTag)
    .delete(tagController.deleteTag)

module.exports = router
const express = require('express')
const router = express.Router()
const messageController = require('../controllers/messagesController')
const recaptcha = require("../middleware/recaptcha")
const verifyJWT = require("../middleware/verifyJWT")

router.route("/")
  .get(verifyJWT, messageController.getAllMessages)
  .post(recaptcha.middleware.verify ,messageController.createNewMessage)

router.route("/:id")
  .delete(verifyJWT, messageController.deleteMessage)

module.exports = router

const express = require('express')
const router = express.Router()
const messageController = require('../controllers/messagesController')
const recaptcha = require("../middleware/recaptcha")
const recaptchav3 = require("../middleware/recaptchav3")
const verifyJWT = require("../middleware/verifyJWT")

router.route("/")
  .get(verifyJWT, messageController.getAllMessages)
  .post(recaptchav3 ,messageController.createNewMessage)

router.route("/:id")
  .delete(verifyJWT, messageController.deleteMessage)

module.exports = router

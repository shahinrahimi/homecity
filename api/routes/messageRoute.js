const express = require('express')
const router = express.Router()
const messageController = require('../controllers/messagesController')

router.route('/')
  .get(messageController.getAllMessages)
  .post(messageController.createNewMessage)
  .delete(messageController.deleteMessage)

module.exports = router

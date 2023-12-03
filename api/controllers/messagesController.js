const Message = require("../model/Message")
const ObjectId = require('mongoose').Types.ObjectId

// @desc get all messages
// @route GET /messages
// @access Private
const getAllMessages = async (req, res) => {
  const messages = await Message.find().lean()

  res.json(messages)
}

// @desc create new message
// @route POST /messages
// @access Public
const createNewMessage = async (req, res) => {
  const {
    username,
    contact,
    content
  } = req.body

  const requiredFields = [
    username,
    contact,
    content
  ]

  // confirm data
  const confirmData = requiredFields.every(field => typeof field === 'string')
  if (!confirmData){
    return res.status(400).json({ message: "All fields required"})
  }

  const newMessage = await Message.create({
    username,
    contact,
    content
  })

  if (!newMessage){
    return res.status(400).json({ message: 'Invalid message data received' })
  }


  res.status(201).json({ message: `New message created` })
}

// @desc delete a message
// @route DELETE /messages
// @access Private
const deleteMessage = async (req, res) => {
  const { id } = req.params

  // confirm data
  if (!id || !ObjectId.isValid(id)){
    return res.status(400).json({ message: "All fields required" })
  }

  //check if message exists
  const message = await Message.findById(id).exec()
  if (!message){
    return res.status(400).json({ message: "Message not found"})
  }

  const result = await message.deleteOne()

  const reply = `Message related to ${result.username} with ID ${result._id} deleted`

  res.json(reply)
}

module.exports = {
  getAllMessages,
  createNewMessage,
  deleteMessage
}


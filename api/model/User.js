const mongoose = require('mongoose')
const ROLES = require('../constant/roles')

const userSchema = new mongoose.Schema({
  username: {
    type:String,
    required: true
  },
  password: {
    type:String,
    required: true
  }
})

module.exports = mongoose.model('User', userSchema)
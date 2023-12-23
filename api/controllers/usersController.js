const User = require('../model/User')
const bcrypt = require('bcrypt')
const ObjectId = require('mongoose').Types.ObjectId

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = async (req, res) => {
    const users = await User.find().select('-password').lean()

    if (!users?.length) {
        return res.status(400).json({ message: 'No users found'})
    }
    res.json(users)
}

// @desc Create new user
// @route POST /users
// @access Private
const createNewUser = async (req, res) => {
    const { username, password } = req.body
    
    // confirm data
    console.log(username,password)
    if (!username || !password){
        return res.status(400).json({ message: 'All fields are required'})
    }

    // check for duplicate
    const duplicate = await User.findOne({ username }).collation({ locale:'en', strength:2 }).lean().exec()
    // lean=> remove unncessery data  and functions on mongodb object
    // exec=> if you pass data to user model object better to call exec at the end
    // collation => for case insensetive

    if (duplicate){
        return res.status(409).json({ message: 'Duplicate username'})
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10) // salt rounds

    const userObject = { username, "password": hashPassword}

    // Create and store user
    const user = await User.create(userObject)

    if (user){
        res.status(201).json({ message: `New user ${username} created`})
    } else {
        res.status(400).json({ message: 'Invalid user data received'})
    }
    
}

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = async (req, res) => {
    const { id } = req.params

    const {
        username,
        password
    } = req.body

    // confirm data
    if (!id || !username || !ObjectId.isValid(id)){
        return res.status(400).json({ message: 'All fields except password are required'})
    }

    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found'})
    }

    // check for duplicate
    const duplicate = await User.findOne({ username }).collation({ locale:'en', strength:2 }).lean().exec()
    // lean=> remove unnecessary data  and functions on mongodb object
    // exec=> if you pass data to user model object better to call exec at the end
    // collation => for case insensitive

    if (duplicate && duplicate?._id.toString() !== id){
        return res.status(409).json({ message: 'Duplicate username'})
    }

    user.username = username

    if (password) {
        user.password = await bcrypt.hash(password, 10) // salt rounds
    }

    const updatedUser = await user.save()

    res.json({ message: `${updatedUser.username} updated`})
}

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = async (req, res) => {
    const { id } = req.params
    if (!id || !ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'User ID Required'})
    }

    // Does user exists to delete
    const user = await User.findById(id).exec()
    if (!user) {
        return res.status(400).json({ message: 'User Not Found'})
    }

    const result = await user.deleteOne()

    const reply = `Username ${user.username} with ID ${user._id} deleted`

    res.json(reply)
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}


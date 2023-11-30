const express = require('express')
const router = express.Router()
const userController = require("../controllers/usersController")
const verifyJWT = require('../middleware/verifyJWT')

router.route("/")
  .get(userController.getAllUsers)
  .post(userController.createNewUser)

router.route("/:id")
  .patch(userController.updateUser)
  .delete(userController.deleteUser)

module.exports = router
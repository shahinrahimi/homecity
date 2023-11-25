const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const loginLimiter = require('../middleware/loginLimiter')
const verifyJWT = require('../middleware/verifyJWT')

router.route('/')
  .post(loginLimiter, authController.login)

router.route('/refresh')
  .get(authController.refresh)

router.route('/logout')
  .post(authController.logout)

router.route('/validate')
  .get(verifyJWT, authController.validate)

module.exports = router
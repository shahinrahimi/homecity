const express = require('express')
const router = express.Router()
const blogsController = require('../controllers/blogsController')
const upload = require('../middleware/upload')

router.route("/")
    .get(blogsController.getAllBlogs)
    .post(upload.single('image'), blogsController.createNewBlog)
    .patch(blogsController.updateBlog)
    .delete(blogsController.deleteBlog)

module.exports = router
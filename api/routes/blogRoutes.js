const express = require('express')
const router = express.Router()
const blogsController = require('../controllers/blogsController')
const upload = require('../middleware/upload')

router.route("/")
        .get(blogsController.getAllBlogs)
        .post(upload.single('blog-image'), blogsController.createNewBlog)
        
router.route("/:id")
        .patch(upload.single('blog-image'), blogsController.updateBlog)
        .delete(blogsController.deleteBlog)

module.exports = router
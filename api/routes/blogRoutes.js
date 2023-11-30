const express = require('express')
const router = express.Router()
const blogsController = require('../controllers/blogsController')
const verifyJWT = require("../middleware/verifyJWT")
const upload = require('../middleware/upload')

router.route("/")
        .get(blogsController.getAllBlogs)
        .post([verifyJWT, upload.single('blog-image')], blogsController.createNewBlog)
        
router.route("/:id")
        .patch([verifyJWT,upload.single('blog-image')], blogsController.updateBlog)
        .delete(verifyJWT, blogsController.deleteBlog)

module.exports = router
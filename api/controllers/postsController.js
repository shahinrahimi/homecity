const Post = require("../model/Post")
const Translation = require("../model/Translation")

// @desc Get all posts
// @route GET /posts
// @access public
const getAllPosts = async (req , res) => {
  const posts = await Post.find().lean()
  
  // if (posts.length === 0){
  //   return res.status(400).json({ message : "No post found" })
  // }
  const translations = await Translation.find().lean()

  const postsWithTranslations = posts.map(post => {
    const trans = translations.filter(t => t.postId.toString() === post._id.toString())
    return {
      ...post,
      trans
    }
  })

  return res.status(200).json(postsWithTranslations)
}

// @desc Create new post
// @route POST /posts
// @access private
const createNewPost = async (req, res) => {
  const { 
    title,
    content,
    title_fa: titleFa,
    title_tr: titleTr,
    title_ar: titleAr,
    content_fa: contentFa,
    content_tr: contentTr,
    content_ar: contentAr
  } = req.body

  const requiredFields = [
    title,
    content,
    titleFa,
    contentFa,
    titleTr,
    contentTr,
    titleAr,
    contentAr
  ]

  // check if every fields is exists and have type of string
  const confirmData = requiredFields.every(item => typeof item === "string" )

  if (!confirmData){
    return res.status(400).json({ message: "All fields required" })
  }

  const newPost = await Post.create({
    title,
    content
  })

  if (!newPost){
    return res.status(400).json({ message: 'Invalid post data received' })
  }

  const translationFa = await Translation.create({
    postId: newPost.id,
    language: "fa",
    title: titleFa,
    content: contentFa
  })

  const translationTr = await Translation.create({
    postId: newPost.id,
    language: "tr",
    title: titleTr,
    content: contentTr
  })

  const translationAr = await Translation.create({
    postId: newPost.id,
    language: "ar",
    title: titleAr,
    content: contentAr
  })

  res.status(201).json({ message: `New post created`})
  
}

const updatePost = async (req, res) => {
  const { 
    id,
    title,
    content,
    title_fa: titleFa,
    title_tr: titleTr,
    title_ar: titleAr,
    content_fa: contentFa,
    content_tr: contentTr,
    content_ar: contentAr
  } = req.body

  const requiredFields = [
    id,
    title,
    content,
    titleFa,
    contentFa,
    titleTr,
    contentTr,
    titleAr,
    contentAr
  ]

  // check if every fields is exists and have type of string
  const confirmData = requiredFields.every(item => typeof item === "string" )

  if (!confirmData){
    return res.status(400).json({ message: "All fields required" })
  }

  const post = await Post.findById(id).exec()
  if (!post){
    return res.status(400).json({ message: "Post not found"})
  }

  const translationFa = await Translation.findOne({ postId: id, language: "fa" }).exec()
  const translationTr = await Translation.findOne({ postId: id, language: "tr" }).exec()
  const translationAr = await Translation.findOne({ postId: id, language: "ar" }).exec()
    if (!translationFa || !translationTr || !translationAr){
    return res.status(400).json({ message: "Translation for post not found"})
  }

  // update fields
  post.title = title
  post.content = content
  translationFa.title = titleFa
  translationFa.content = contentFa
  translationTr.title = titleTr
  translationTr.content = contentTr
  translationAr.title = titleAr
  translationAr.content = contentAr

  const updateAll = await Promise.all([
    post.save(),
    translationFa.save(),
    translationTr.save(),
    translationAr.save()
  ])
  
  return res.status(200).json({ message: "Post updated" })

}

const deletePost = async (req, res) => {
  const { id } = req.body

  if (!id){
    return res.status(400).json({ message: "Post ID required"})
  }

  const post = await Post.findById(id).exec()
  if (!post){
    return res.status(400).json({ message: "Post not found"})
  }

  const translationFa = await Translation.findOne({ postId: id, language: "fa"}).exec()
  const translationTr = await Translation.findOne({ postId: id, language: "tr"}).exec()
  const translationAr = await Translation.findOne({ postId: id, language: "ar"}).exec()
  if (!translationFa || !translationTr || !translationAr){
    return res.status(400).json({ message: "Translation for post not found"})
  }

  const deleteAll = await Promise.all([
    post.deleteOne(),
    translationFa.deleteOne(),
    translationTr.deleteOne(),
    translationAr.deleteOne()
  ])

  const reply = `Post ${id} deleted`

  res.json(reply)

}


module.exports = {
  getAllPosts,
  createNewPost,
  updatePost,
  deletePost
}

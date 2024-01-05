const Post = require('../models/post');
const asyncHandler = require('express-async-handler');
const { v4: uuidv4 } = require('uuid');

let posts = {};

//GET all blog posts
exports.post_get_all = asyncHandler(async (req, res, next) => {
  return res.send(Object.values(posts));
})

// POST new blog post
exports.post_create_post  = asyncHandler(async (req, res, next) => {
  try {
    const id = uuidv4();
    const post = new Post({
      id,
      title: "New test post",
      name: "Riley VanderPol",
      content: "New post sent to test",
      date: "01/04/24",
    })
    posts[id] = post;
    const result = await post.save();
    return res.send(post);
  } catch(err) {
    return next(err)
  }
})

//DELETE a blog post
exports.post_delete = asyncHandler(async (req, res, next) => {

})

//UPDATE a blog post
exports.post_update = asyncHandler(async (req, res, next) => {

})
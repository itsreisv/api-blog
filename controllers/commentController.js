const Comment = require('../models/comment');
const asyncHandler = require('express-async-handler');
const { v4: uuidv4 } = require('uuid');

let comments = {
  1: {
    name: "Carla",
    content: "Hello Reis! Nice article!",
    date: "01/04/24"
  }
};

//GET all comments
exports.comments_get = asyncHandler(async (req, res, next) => {
  return res.send(Object.values(comments));
})

//POST new comment
exports.comments_post = asyncHandler(async (req, res, next) => {
  const id = uuidv4();
  const comment = {
    id,
    name: "Adam",
    content: "Wow, I loved this post, thanks for sharing!",
    date: "01/04/24",
  }
  comments[id] = comment;

  return res.send(comment)
})

//DELETE comment
exports.comments_delete = asyncHandler(async (req, res, next) => {
  const commentId = parseInt(req.params.id)

  const index = comments.findIndex(comment => comment.id === commentId)

  if (index !== -1) {
    comments.splice(index, 1)
    res.status(204).send()
  } else {
    res.status(404).json ({ error: "item not found"})
  }

})
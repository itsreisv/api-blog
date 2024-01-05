const User = require('../models/user');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');


exports.index = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED')
})

//GET user form
exports.user_create_get = asyncHandler(async (req, res, next) => {
  res.render('sign-up')
})

// Create new user
exports.user_create_post = asyncHandler(async (req, res, next) => {
  try {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      const user = new User({
        username: req.body.username,
        password: hashedPassword
      })
      const result = await user.save();
    })
    res.redirect('/catalog/sign-up')
  } catch(err) {
    return next(err)
  }
});
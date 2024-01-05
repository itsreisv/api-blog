const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  name: {type: String, required: true},
  content: {type: String, required: true, minLength: 10, maxLength: 200},
  date: {type: Date},
});

module.exports = mongoose.model("Comment", CommentSchema)
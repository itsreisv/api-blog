const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {type: String, required: true, minLength: 5, maxLength: 50},
  name: {type: String, required: true},
  content: {type: String, required: true, maxLength: 200},
  date: {type: Date},
});

module.exports = mongoose.model("Post", PostSchema)
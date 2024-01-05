const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {type: String, required: true, minLength: 3, maxLength: 20},
  password: {type: String, required: true, minLength: 5},
  admin: {type: Boolean},
});

module.exports = mongoose.model("User", UserSchema)
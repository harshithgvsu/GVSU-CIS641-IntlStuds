const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    JobTitle: { type: String },
    Skills: { type: String },
    Education: { type: String },
    Projects: { type: String },
    Experience: { type: String },
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;

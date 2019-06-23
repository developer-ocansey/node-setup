const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  passowrd: String,
})

module.exports = mongoose.model('User', userSchema)
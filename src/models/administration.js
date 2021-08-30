const mongoose = require('mongoose')

const administratorSchema = new mongoose.Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  role: {type: String, required: true},
  created: {type: String, required: true},
})

const administrator = mongoose.model('administrator', administratorSchema)

module.exports = administrator

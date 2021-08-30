const mongoose = require('mongoose')

const vaccinationSchema = new mongoose.Schema({
  a1_d1: Number,
  a1_d2: Number,
  a2_d1: Number,
  a2_d2: Number,
  a3_d1: Number,
  a3_d2: Number,
  a4_d1: Number,
  a4_d2: Number,
  a5_d1: Number,
  a5_d2: Number,
  date: String
})

const vaccination = mongoose.model('vaccination', vaccinationSchema)

module.exports = vaccination

const mongoose = require('mongoose')

const facilitiesSchema = new mongoose.Schema({
  hospital: {type: String, unique: true},
  facilities: Number,
  date: String,
  city: String,
  icu_beds_occupied: Number,
  icu_beds_vacant: Number,
  iso_beds_occupied: Number,
  iso_beds_vacant: Number,
  ward_beds_occupied: Number,
  ward_beds_vacant: Number,
  equipment_occupied: Number,
  equipment_vacant: Number
})

const facility = mongoose.model('facilities', facilitiesSchema)

module.exports = facility

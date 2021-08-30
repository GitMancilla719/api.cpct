const mongoose = require('mongoose')

const recordsSchema = new mongoose.Schema({
      slug: {type: String, unique: true},
      location: {type: String, unique: true},
      records: [
        {
          Confirmed: Number,
          Deaths: Number,
          Recovered: Number,
          Date: String,
        },
      ]
})

const records = mongoose.model('records', recordsSchema)

module.exports = records

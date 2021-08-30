const mongoose = require('mongoose')

const logsSchema = new mongoose.Schema({
      name: String,
      activity: String,
      role: String,
      date: String
})

const logs = mongoose.model('logs', logsSchema)

module.exports = logs
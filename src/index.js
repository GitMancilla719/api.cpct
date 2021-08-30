const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const dotenv = require('dotenv')
dotenv.config()

const records = require('./routes/records')
const logs = require('./routes/logs')
const facilities = require('./routes/facilities')
const vaccination = require('./routes/vaccination')
const administration = require('./routes/administration')

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(cookieParser())

//Routes
app.get('/', (req, res) => {res.status(200).json({msg: 'hello'})})
app.use('/records', records)
app.use('/logs', logs)
app.use('/facilities', facilities)
app.use('/vaccination', vaccination)
app.use('/admin', administration)

const PORT = process.env.PORT || 5000
const username = process.env.USERNAME || process.env.USERNAME_LOCAL
const password = process.env.PASSWORD || process.env.PASSWORD_LOCAL

mongoose
  .connect(`mongodb+srv://${username}:${password}@projects.ci7ba.mongodb.net/cpct?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => app.listen(PORT), console.log('SERVER & DB : 200'))
  .catch((err) => console.log(err.message))
mongoose.set('useFindAndModify', false)

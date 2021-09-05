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
app.use(
  cors({
    origin: [process.env.APP_BASE_URL, '*'],
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'DNT',
      'X-CustomHeader',
      'Keep-Alive',
      'User-Agent',
      'X-Requested-With',
      'If-Modified-Since',
      'Cache-Control',
      'Content-Type',
      'Content-Range',
      'Range',
      'Authorization',
      'timezone',
    ],
    credentials: true,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
)
app.use(express.json())
app.use(cookieParser())

//Routes
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'hello' })
})
app.use('/records', records)
app.use('/logs', logs)
app.use('/facilities', facilities)
app.use('/vaccination', vaccination)
app.use('/admin', administration)

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.DB_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => app.listen(PORT), console.log('SERVER & DB : 200'))
  .catch((err) => console.log(err.message))
mongoose.set('useFindAndModify', false)

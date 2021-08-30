const express = require('express')
const logs = require('../controllers/services/logs')
const { logValidator, logValidationResult } = require('../controllers/helpers/validators/logs/add_log_validator')
const { validate_token } = require('../controllers/helpers/auth/auth')

const router = express.Router()

router.get('/', logs.get_logs)

router.post('/',
  validate_token,
  logValidator, 
  logValidationResult, 
  logs.add_logs
)

module.exports = router
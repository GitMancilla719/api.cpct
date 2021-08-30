const express = require('express')
const { updateVaccinationRecordValidator, updateVaccinationRecordValidationResult } = require('../controllers/helpers/validators/vaccination/update_vaccination_records')
const { validate_token } = require('../controllers/helpers/auth/auth')
const vaccination = require('../controllers/services/vaccination')

const router = express.Router()

router.get('/', validate_token, vaccination.get_vaccination_records)
router.post('/', validate_token, vaccination.add_vaccination_records)
router.put('/', 
  validate_token,
  updateVaccinationRecordValidator,
  updateVaccinationRecordValidationResult,
  vaccination.update_vaccination_records
)

module.exports = router
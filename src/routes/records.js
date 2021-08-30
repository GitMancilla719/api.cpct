const express = require('express')
const { addRecordValidator, addRecordValidationResult } = require('../controllers/helpers/validators/records/add_record_validator')
const { deleteRecordValidator, deleteRecordValidationResult } = require('../controllers/helpers/validators/records/delete_record_validator')
const { updateRecordValidator, updateRecordValidationResult } = require('../controllers/helpers/validators/records/update_record_validator')
const { validate_token } = require('../controllers/helpers/auth/auth')
const records = require('../controllers/services/records')

const router = express.Router()

router.get('/', validate_token,  records.get_all_records)
router.get('/:location', validate_token,  records.get_by_location)

router.delete('/',
  validate_token, 
  deleteRecordValidator,
  deleteRecordValidationResult,
  records.delete_records_by_location
)

router.patch('/add-record/:location', 
  validate_token, 
  addRecordValidator,
  addRecordValidationResult,
  records.add_records_by_location
)

router.patch('/update-record',
  validate_token, 
  updateRecordValidator,
  updateRecordValidationResult,
  records.update_records_by_location
)

module.exports = router
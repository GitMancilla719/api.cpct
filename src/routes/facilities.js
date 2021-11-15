const express = require('express')
const {
  addFacilitiesValidator,
  addFacilitiesValidationResult,
} = require('../controllers/helpers/validators/facilities/add_facilities_validator')
const {
  deleteFacilitiesValidator,
  deleteFacilitiesValidationResult,
} = require('../controllers/helpers/validators/facilities/delete_facilities_validator')
const {
  updateFacilitiesValidator,
  updateFacilitiesValidationResult,
} = require('../controllers/helpers/validators/facilities/update_facilities_validator')
const { validate_token } = require('../controllers/helpers/auth/auth')
const facilities = require('../controllers/services/facilities')

const router = express.Router()

// router.get('/', validate_token, facilities.get_facilities)
// router.get('/stats', validate_token, facilities.get_facilities_stats)

router.get('/', facilities.get_facilities)
router.get('/stats', facilities.get_facilities_stats)

router.post('/', validate_token, addFacilitiesValidator, addFacilitiesValidationResult, facilities.add_facilities)

router.delete(
  '/',
  validate_token,
  deleteFacilitiesValidator,
  deleteFacilitiesValidationResult,
  facilities.delete_facilities
)

router.put(
  '/',
  validate_token,
  updateFacilitiesValidator,
  updateFacilitiesValidationResult,
  facilities.update_facilities
)

module.exports = router

const express = require('express')
const { validate_token } = require('../controllers/helpers/auth/auth')
const { add_admin_validator, add_admin_validation_result } = require('../controllers/helpers/validators/administrator/add_admin_validator')
const administrator = require('../controllers/services/administrator')

const router = express.Router()

router.post('/register',
  validate_token, 
  add_admin_validator,
  add_admin_validation_result,
  administrator.add_admin
)

router.post('/login', administrator.login_admin)

router.get('/', validate_token, administrator.get_all_accounts)
router.delete('/', validate_token, administrator.delete_account)
router.put('/', validate_token, administrator.update_account)

module.exports = router
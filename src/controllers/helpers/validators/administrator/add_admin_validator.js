const { body, validationResult } = require('express-validator')

exports.add_admin_validator = [
    body('username', 'Username field is required.')
      .not()
      .isEmpty(),
    
    body('password', 'Password field is required.')
      .not()
      .isEmpty(),
    
    body('passwordConfirm')
      .not()
      .isEmpty()
      .withMessage('Confirm password field is required.')
      .bail()
      .custom((value, { req }) => value === req.body.password)
      .withMessage('Password does not match.'),
    
    body('firstName', 'First name field is required.')
      .not()
      .isEmpty(),
    
    body('lastName', 'Last name field is required.')
      .not()
      .isEmpty(),
    
    body('role', 'Role field is required.')
      .not()
      .isEmpty(),
]


exports.add_admin_validation_result = (req, res, next) => {
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(422).json({
      errors: errors.array()
    })
  }

  next()
}

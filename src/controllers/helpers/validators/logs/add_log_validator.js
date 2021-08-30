const { body, validationResult } = require('express-validator')

exports.logValidator = [
    body('name', 'Something went wrong: user was not specified')
      .not()
      .isEmpty(),

    body('activity', 'Something went wrong: activity was not specified')
      .not()
      .isEmpty(),
    
    body('role', 'Something went wrong: role was not specified')
      .not()
      .isEmpty(),
]


exports.logValidationResult = (req, res, next) => {
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(422).json({
      errors: errors.array()
    })
  }

  next()
}

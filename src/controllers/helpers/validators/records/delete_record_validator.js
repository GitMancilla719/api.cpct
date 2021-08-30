const { query, validationResult } = require('express-validator')

exports.deleteRecordValidator = [
    query('location')
      .not()
      .isEmpty()
      .withMessage('Location was not specified.'),
    
    query('record')
      .not()
      .isEmpty()
      .withMessage('Record ID was not specified.')

]


exports.deleteRecordValidationResult = (req, res, next) => {
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(422).json({
      errors: errors.array()
    })
  }

  next()
}

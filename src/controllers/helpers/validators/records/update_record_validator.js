const { query, body, validationResult } = require('express-validator')

exports.updateRecordValidator = [
    query('location')
      .not()
      .isEmpty()
      .withMessage('Location was not specified.'),
    
    query('record')
      .not()
      .isEmpty()
      .withMessage('Record ID was not specified.'),
    
    body('Confirmed')
      .not()
      .isEmpty()
      .withMessage('Confirmed quantity was not specified.')
      .bail()
      .isNumeric()
      .withMessage('Confirmed input must be a number.'),

    body('Deaths')
      .not()
      .isEmpty()
      .withMessage('Death quantity was not specified.')
      .bail()
      .isNumeric()
      .withMessage('Confirmed input must be a number.'),
    
    body('Recovered')
      .not()
      .isEmpty()
      .withMessage('Recovered quantity was not specified.')
      .bail()
      .isNumeric()
      .withMessage('Confirmed input must be a number.'),

    body('Date')
      .not()
      .isEmpty()
      .withMessage('Date was not specified.')

]


exports.updateRecordValidationResult = (req, res, next) => {
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(422).json({
      errors: errors.array()
    })
  }

  next()
}

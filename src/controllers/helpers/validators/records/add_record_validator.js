const { body, param, validationResult } = require('express-validator')

exports.addRecordValidator = [
    param('location')
      .not()
      .isEmpty()
      .withMessage('Location was not specified.'),

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


exports.addRecordValidationResult = (req, res, next) => {
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(422).json({
      errors: errors.array()
    })
  }

  next()
}

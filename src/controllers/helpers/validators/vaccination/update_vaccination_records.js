const { body, validationResult } = require('express-validator')

exports.updateVaccinationRecordValidator = [
    body('a1_d1')
      .not()
      .isEmpty()
      .withMessage('A1-1st dose was not specified.')
      .bail()
      .isNumeric()
      .withMessage('A1-1st dose must be a number.'),

    body('a1_d2')
      .not()
      .isEmpty()
      .withMessage('A1-2nd dose was not specified.')
      .bail()
      .isNumeric()
      .withMessage('A1-2nd dose must be a number.'),

    body('a2_d1')
      .not()
      .isEmpty()
      .withMessage('A2-1st dose was not specified.')
      .bail()
      .isNumeric()
      .withMessage('A2-1st dose must be a number.'),

    body('a2_d2')
      .not()
      .isEmpty()
      .withMessage('A2-2nd dose was not specified.')
      .bail()
      .isNumeric()
      .withMessage('A2-2nd dose must be a number.'),
    
    body('a3_d1')
      .not()
      .isEmpty()
      .withMessage('A3-1st dose was not specified.')
      .bail()
      .isNumeric()
      .withMessage('A3-1st dose must be a number.'),

    body('a3_d2')
      .not()
      .isEmpty()
      .withMessage('A3-2nd dose was not specified.')
      .bail()
      .isNumeric()
      .withMessage('A3-2nd dose must be a number.'),

    body('a4_d1')
      .not()
      .isEmpty()
      .withMessage('A4-1st dose was not specified.')
      .bail()
      .isNumeric()
      .withMessage('A4-1st dose must be a number.'),

    body('a4_d2')
      .not()
      .isEmpty()
      .withMessage('A4-2nd dose was not specified.')
      .bail()
      .isNumeric()
      .withMessage('A4-2nd dose must be a number.'),

    body('a5_d1')
      .not()
      .isEmpty()
      .withMessage('A5-1st dose was not specified.')
      .bail()
      .isNumeric()
      .withMessage('A5-1st dose must be a number.'),

    body('a5_d2')
      .not()
      .isEmpty()
      .withMessage('A5-2nd dose was not specified.')
      .bail()
      .isNumeric()
      .withMessage('A5-2nd dose must be a number.')
]


exports.updateVaccinationRecordValidationResult = (req, res, next) => {
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(422).json({
      errors: errors.array()
    })
  }

  next()
}

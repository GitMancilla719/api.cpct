const { query, validationResult } = require('express-validator')

exports.deleteFacilitiesValidator = [
    query('hospital', 'No hospital selected.')
      .not()
      .isEmpty()
]


exports.deleteFacilitiesValidationResult = (req, res, next) => {
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(422).json({
      errors: errors.array()
    })
  }

  next()
}

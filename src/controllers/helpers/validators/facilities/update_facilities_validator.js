const { body, query, validationResult } = require('express-validator')

exports.updateFacilitiesValidator = [
    query('hospital', 'No hospital selected.')
      .not()
      .isEmpty(),

    body('hospital', 'Hospital name was not specified.')
      .not()
      .isEmpty(),

    body('facilities', 'Number of facilities was not specified.')
      .not()
      .isEmpty(),
    
    body('city', 'location was not specified.')
      .not()
      .isEmpty(),

    body('icu_beds_occupied', 'Number of occupied ICU beds was not specified.')
      .not()
      .isEmpty(),

    body('icu_beds_vacant', 'Number of vacant ICU beds was not specified.')
      .not()
      .isEmpty(),
    
    body('iso_beds_occupied', 'Number of occupied isolation beds was not specified.')
      .not()
      .isEmpty(),

    body('iso_beds_vacant', 'Number of vacant isolation beds was not specified.')
      .not()
      .isEmpty(),

    body('ward_beds_occupied', 'Number of occupied ward beds was not specified.')
      .not()
      .isEmpty(),
    
    body('ward_beds_vacant', 'Number of vacant ward beds was not specified.')
      .not()
      .isEmpty(),
    
    body('equipment_occupied', 'Number of occupied equipments was not specified.')
      .not()
      .isEmpty(),
    
    body('equipment_vacant', 'Number of vacant equipments was not specified.')
      .not()
      .isEmpty(),
]


exports.updateFacilitiesValidationResult = (req, res, next) => {
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(422).json({
      errors: errors.array()
    })
  }

  next()
}

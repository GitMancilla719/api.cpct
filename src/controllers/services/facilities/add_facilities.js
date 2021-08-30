const facility = require('../../../models/facilities')

module.exports = async (req, res) => {
    try {
      const {
        hospital,
        facilities,
        date,
        city,
        icu_beds_occupied,
        icu_beds_vacant,
        iso_beds_occupied,
        iso_beds_vacant,
        ward_beds_occupied,
        ward_beds_vacant,
        equipment_occupied,
        equipment_vacant
      } = req.body

      const get_facility = await facility.findOne({hospital: hospital})

      if(get_facility) {
        return res.status(404).json({ error_msg: `A record already exists for ${hospital}` })
      }

      const new_facility = new facility({
        hospital,
        facilities,
        date,
        city,
        icu_beds_occupied,
        icu_beds_vacant,
        iso_beds_occupied,
        iso_beds_vacant,
        ward_beds_occupied,
        ward_beds_vacant,
        equipment_occupied,
        equipment_vacant
      })

      const save_new_facility = await new_facility.save()

      res.status(200).json({ msg: 'New records were added successfully'})
    } catch (error) {
      res.status(500).json({
        source: 'add facilities', 
        error: error.message 
      })
    }
}
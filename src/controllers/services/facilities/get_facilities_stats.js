const facility = require('../../../models/facilities')

module.exports = async (req, res) => {
    try {
      const get_facilities = await facility.find()

      if(!get_facilities) {
        return res.status(404).json({ error_msg: 'No Data found.' })
      }

      const total_facilities = get_facilities.map(data => data.facilities).reduce((accumulator, current) => accumulator + current)
      const total_icu_beds_occupied = get_facilities.map(data => data.icu_beds_occupied).reduce((accumulator, current) => accumulator + current)
      const total_icu_beds_vacant = get_facilities.map(data => data.icu_beds_vacant).reduce((accumulator, current) => accumulator + current)
      const total_iso_beds_occupied = get_facilities.map(data => data.iso_beds_occupied).reduce((accumulator, current) => accumulator + current)
      const total_iso_beds_vacant = get_facilities.map(data => data.iso_beds_vacant).reduce((accumulator, current) => accumulator + current)
      const total_ward_beds_occupied = get_facilities.map(data => data.ward_beds_occupied).reduce((accumulator, current) => accumulator + current)
      const total_ward_beds_vacant = get_facilities.map(data => data.ward_beds_vacant).reduce((accumulator, current) => accumulator + current)
      const total_equipment_occupied = get_facilities.map(data => data.equipment_occupied).reduce((accumulator, current) => accumulator + current)
      const total_equipment_vacant = get_facilities.map(data => data.equipment_vacant).reduce((accumulator, current) => accumulator + current)

      res.status(200).json({
        total_facilities,
        total_icu_beds_occupied,
        total_icu_beds_vacant,
        total_iso_beds_occupied,
        total_iso_beds_vacant,
        total_ward_beds_occupied,
        total_ward_beds_vacant,
        total_equipment_occupied,
        total_equipment_vacant
      })
    } catch (error) {
      res.status(500).json({ error_msg: error.message })
    }
}
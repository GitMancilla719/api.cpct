const facility = require('../../../models/facilities')

module.exports = async (req, res) => {
    try {
      const hospital = req.query.hospital

      if(hospital) {
        const get_facilities = await facility.findOne({hospital: hospital})

        if(!get_facilities) {
          return res.status(404).json({ error_msg: 'No Data found.' })
        }

        const facilities_record = {
          id: get_facilities._id,
          hospital: get_facilities.hospital,
          facilities: get_facilities.facilities,
          date: get_facilities.date,
          city: get_facilities.city,
          icu_beds_occupied: get_facilities.icu_beds_occupied,
          icu_beds_vacant: get_facilities.icu_beds_vacant,
          iso_beds_occupied: get_facilities.iso_beds_occupied,
          iso_beds_vacant: get_facilities.iso_beds_vacant,
          ward_beds_occupied: get_facilities.ward_beds_occupied,
          ward_beds_vacant: get_facilities.ward_beds_vacant,
          equipment_occupied: get_facilities.equipment_occupied,
          equipment_vacant: get_facilities.equipment_vacant  
        }

        return res.status(200).json(facilities_record)
      }

      const get_facilities = await facility.find()

      if(!get_facilities) {
        return res.status(404).json({ error_msg: 'No Data found.' })
      }

      const facilities_record = get_facilities.map(data => {
        const facilities = {
            id: data._id,
            hospital: data.hospital,
            facilities: data.facilities,
            date: data.date,
            city: data.city,
            icu_beds_occupied: data.icu_beds_occupied,
            icu_beds_vacant: data.icu_beds_vacant,
            iso_beds_occupied: data.iso_beds_occupied,
            iso_beds_vacant: data.iso_beds_vacant,
            ward_beds_occupied: data.ward_beds_occupied,
            ward_beds_vacant: data.ward_beds_vacant,
            equipment_occupied: data.equipment_occupied,
            equipment_vacant: data.equipment_vacant
        }

        return facilities
      })

      res.status(200).json(facilities_record)
    } catch (error) {
      res.status(500).json({ error_msg: error.message })
    }
}
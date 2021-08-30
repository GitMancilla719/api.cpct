const facility = require('../../../models/facilities')

module.exports = async (req, res) => {
    try {
      const hospital = req.query.hospital
      const updates = req.body

      const get_facility = await facility.findOne({hospital: hospital})

      if(!get_facility) {
        return res.status(404).json({ error_msg: 'No Data found.' })
      }

      await facility.findByIdAndUpdate({_id: get_facility._id}, updates)

      res.status(200).json({ msg: `${get_facility.hospital} has been successfully updated.`})
    } catch (error) {
      res.status(500).json({
        source: 'update facilities', 
        error: error.message 
      })
    }
}
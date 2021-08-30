const facility = require('../../../models/facilities')

module.exports = async (req, res) => {
    try {
      const hospital = req.query.hospital

      const get_facility = await facility.findOne({hospital: hospital})

      if(!get_facility) {
        return res.status(404).json({ error_msg: 'No Data found.' })
      }

      await facility.findByIdAndDelete({_id: get_facility._id})

      res.status(200).json({ msg: 'Hospital deleted successfully'})
    } catch (error) {
      res.status(500).json({
        source: 'delete facilities', 
        error: error.message 
      })
    }
}
const records = require('../../../models/records')

module.exports = async (req, res) => {
    try {
      // add express validator here

      const location = req.params.location
      const get_location = await records.findOne({location: location})

      if(!get_location) {
        return res.status(404).json({ error_msg: 'No Data found.' })
      }

      return res.status(200).json({
        location_id: get_location._id,
        slug: get_location.slug,
        location: get_location.location,
        records: get_location.records
      })
    } catch (error) {
      return res.status(500).json({ error_msg: error.message })
    }
}
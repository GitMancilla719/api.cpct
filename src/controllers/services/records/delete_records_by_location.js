const records = require('../../../models/records')

module.exports = async (req, res) => {
    try {
      // add express validator here

      const location = req.query.location
      const record_id = req.query.record

      const get_location = await records.findOne({location: location})
      const existing_record = get_location.records.find(data => data._id == record_id)

      if(!existing_record) {
        return res.status(404).json({ error_msg: 'No Data found.' })
      }

      const readable_date = new Date(existing_record.Date).toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' })
      
      await records.findOneAndUpdate(
        {location: location}, 
        { $pull: { records: { _id: record_id } }},
        { new: true}
      )

      return res.status(200).json({ msg: `${readable_date} record for ${get_location.location} has been successfully deleted.`})
    } catch (error) {
      return res.status(500).json({ error_msg: error.message })
    }
}
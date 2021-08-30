const records = require('../../../models/records')

module.exports = async (req, res) => {
    try {
      const get_all_records = await records.find() 

      if(!get_all_records) {
        return res.status(404).json({ error_msg: 'No Data found.' })
      }
      
      const data_records = get_all_records.map(data => {
        const record = {
          location_id: data._id,
          slug: data.slug,
          location: data.location,
          records: data.records
        }

        return record
      })

      return res.status(200).json(data_records)
    } catch (error) {
      return res.status(500).json({ error_msg: error.message })
    }
}
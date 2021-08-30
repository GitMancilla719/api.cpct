const records = require('../../../models/records')

module.exports = async (req, res) => {
    try {
      // add express validator here
      
      const location = req.query.location
      const record_id = req.query.record
      const update_record = {
        Confirmed: req.body.Confirmed,
        Deaths: req.body.Deaths,
        Recovered: req.body.Recovered,
        Date: req.body.Date
      }

      await records.findOneAndUpdate(
        {location: location}, 
        {$set: {
          "records.$[el].Confirmed": update_record.Confirmed,
          "records.$[el].Deaths": update_record.Deaths,
          "records.$[el].Recovered": update_record.Recovered, 
          "records.$[el].Date": update_record.Date
        }},
        { 
          arrayFilters: [{ "el._id": record_id }],
          new: true
        }
      )

      return res.status(200).json({ msg: `${req.body.Date} record for ${location} has been successfully updated.`})
    } catch (error) {
      return res.status(500).json({ error_msg: error.message })
    }
}
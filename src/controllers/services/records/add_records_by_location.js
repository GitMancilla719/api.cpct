const records = require('../../../models/records')

module.exports = async (req, res) => {
    try {
      // add express validator here
      
      const location = req.params.location
      const new_record = {
        Confirmed: req.body.Confirmed,
        Deaths: req.body.Deaths,
        Recovered: req.body.Recovered,
        Date: req.body.Date
      }

      await records.findOneAndUpdate(
        {location: location}, 
        { $push: { records: new_record } },
        { new: true}
      )

      return res.status(200).json({ msg: `${req.body.Date} record for ${location} has been successfully added.`})
    } catch (error) {
      return res.status(500).json({ error_msg: error.message })
    }
}
const vaccination = require('../../../models/vaccination')

module.exports = async (req, res) => {
    try {
      const fakeData = {
        a1_d1: 10,
        a1_d2: 10,
        a2_d1: 10,
        a2_d2: 10,
        a3_d1: 10,
        a3_d2: 10,
        a4_d1: 10,
        a4_d2: 10,
        a5_d1: 10,
        a5_d2: 10,
        date: new Date()
      }
      
      const add_vaccination_record = new vaccination(fakeData)

      await add_vaccination_record.save()

      return res.status(200).json({ msg: `Record successfully added.`})
    } catch (error) {
      return res.status(500).json({ error_msg: error.message })
    }
}
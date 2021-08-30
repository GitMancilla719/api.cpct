const vaccination = require('../../../models/vaccination')

module.exports = async (req, res) => {
    try {
      const perma_id = '6127a8527d249201bc42460f'
      const get_vaccination_records = await vaccination.findById({_id: perma_id}) 

      if(!get_vaccination_records) {
        return res.status(404).json({ error_msg: 'No Data found.' })
      }
      
      const vaccination_record = {
        a1_d1: get_vaccination_records.a1_d1,
        a1_d2: get_vaccination_records.a1_d2,
        a2_d1: get_vaccination_records.a2_d1,
        a2_d2: get_vaccination_records.a2_d2,
        a3_d1: get_vaccination_records.a3_d1,
        a3_d2: get_vaccination_records.a3_d2,
        a4_d1: get_vaccination_records.a4_d1,
        a4_d2: get_vaccination_records.a4_d2,
        a5_d1: get_vaccination_records.a5_d1,
        a5_d2: get_vaccination_records.a5_d2,
        date: get_vaccination_records.date
      }

      return res.status(200).json(vaccination_record)
    } catch (error) {
      return res.status(500).json({ error_msg: error.message })
    }
}
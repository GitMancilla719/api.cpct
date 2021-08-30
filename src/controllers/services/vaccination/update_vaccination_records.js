const vaccination = require('../../../models/vaccination')

module.exports = async (req, res) => {
    try {
      const perma_id = '6127a8527d249201bc42460f'
      const updates = req.body

      await vaccination.findOneAndUpdate({_id: perma_id}, updates)

      return res.status(200).json({ msg: 'Vaccination statistics has been successfully updated.'})
    } catch (error) {
      return res.status(500).json({ error_msg: error.message })
    }
}
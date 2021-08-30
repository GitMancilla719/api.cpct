const administrator = require("../../../../models/administration")
const bcrypt = require('bcryptjs')

const update_account = async(req, res) => {
    try {
        const account_id = req.query.id
        const {
          username,
          password,
          firstName,
          lastName,
          role
        } = req.body

        const hashed_password = await bcrypt.hash(password, 10)
        const account_updates = {
          username,
          password: hashed_password,
          firstName,
          lastName,
          role
        }
        const account = await administrator.findByIdAndUpdate({_id: account_id}, account_updates)

        if(!account) {
          return res.status(404).json({ error_msg: 'No Data found.' })
        }

        res.status(201).json({ msg: 'Account has been updated successfully.'})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = update_account
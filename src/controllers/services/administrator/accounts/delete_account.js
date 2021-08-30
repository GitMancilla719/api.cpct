const administrator = require("../../../../models/administration")

const delete_account = async(req, res) => {
    try {
        const account_id = req.query.id
        const account = await administrator.findByIdAndDelete({_id: account_id})

        if(!account) {
          return res.status(404).json({ error_msg: 'No Data found.' })
        }

        res.status(201).json({ msg: 'Account has been removed successfully.'})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = delete_account
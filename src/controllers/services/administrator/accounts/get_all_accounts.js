const administrator = require("../../../../models/administration")

const get_all_accounts = async(req, res) => {
    try {
        const accounts = await administrator.find()

        if(!accounts) {
          return res.status(404).json({ error_msg: 'No Data found.' })
        }

        const response = accounts
          .filter(acc => acc.role !== 'super administrator')
          .map(data => {
          const response = {
            id: data._id,
            name: `${data.firstName} ${data.lastName}`,
            role: data.role,
            created: data.created,
          }
          return response
        })
        
    
        res.status(201).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = get_all_accounts
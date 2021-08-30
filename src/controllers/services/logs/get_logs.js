const logs = require('../../../models/logs')

const get_logs = async(req, res) => {
    try {
        const get_logs = await logs.find()

        const logs_record = get_logs.map(data => {
            const log = {
                name: data.name,
                activity: data.activity,
                role: data.role,
                date: data.date
            }

            return log
        })

        res.status(200).json(logs_record)
    } catch (error) {
        res.status(500).json({ error_msg: error.message })
    }
}

module.exports = get_logs
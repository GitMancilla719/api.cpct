const logs = require('../../../models/logs')
const { validationResult } = require('express-validator')

const addLogs = async(req, res) => {
    const date = new Date()
    const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000)
    const timeOffset = 8
    const phDate = new Date(utcTime + (3600000 * timeOffset))
        .toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' })
    const phTime = new Date(utcTime + (3600000 * timeOffset)).toLocaleTimeString()

    try {
        const { 
            name,
            activity,
            role
        } = req.body
        
        const new_log = new logs({
            name: name,
            activity: activity,
            role: role,
            date: `${phDate} ${phTime}`
        })

        await new_log.save()
    
        res.status(201).json({ msg: 'Logs added successfully.'})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = addLogs
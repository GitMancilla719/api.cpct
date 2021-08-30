const administrator = require("../../../../models/administration")
const bcrypt = require('bcryptjs')

const add_admin = async(req, res) => {
    const date = new Date()
    const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000)
    const timeOffset = 8
    const phDate = new Date(utcTime + (3600000 * timeOffset))
        .toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' })
    const phTime = new Date(utcTime + (3600000 * timeOffset)).toLocaleTimeString()

    try {
        const new_admin_info = {
          username: req.body.username,
          password: req.body.password,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          role: req.body.role,
          created: `${phDate} ${phTime}`
        }

        const check_username = await administrator.findOne({username: new_admin_info.username})
        
        if(check_username) return res.status(400).json({ 
          location: 'username',
          error_msg: 'This username cannot be used.'
        })

        for (const key in new_admin_info) {
          new_admin_info[key].toLowerCase()
        }

        const hashed_password = await bcrypt.hash(new_admin_info.password, 10)
        new_admin_info.password = hashed_password

        const new_admin = new administrator(new_admin_info)
        await new_admin.save()
    
        res.status(201).json({ msg: `${new_admin_info.role} account for ${new_admin_info.firstName} has been successfully created.`})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = add_admin
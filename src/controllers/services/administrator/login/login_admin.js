const administrator = require("../../../../models/administration")
const bcrypt = require('bcryptjs')
const { create_tokens  } = require("../../../helpers/auth/auth")

const login_admin = async(req, res) => {
    try {
        const {
          username,
          password
        } = req.body
        
        const check_username = await administrator.findOne({username: username})

        if(!check_username) return res.status(400).json({ 
          error_msg: 'Invalid username or password.'
        })
        
        const check_password = await bcrypt.compare(password, check_username.password)

        if(!check_password) return res.status(400).json({ 
          error_msg: 'Invalid username or password.'
        })
    
        const access_token = create_tokens(check_username)
    
        res.cookie('access_token', JSON.stringify(access_token), {
          maxAge: 60*60*24*30*1000, //expires in 30 days
          httpOnly: true //protect cookies
        })
        
        res.status(201).json({ msg: 'Logged in successfully.'})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = login_admin
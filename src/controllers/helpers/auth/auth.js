const { sign, verify } = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const create_tokens = (user) => {
  const access_token = sign({ username: user.username, id: user._id }, process.env.JWT_SECRET)

  return {
    username: user.username,
    firstname: user.firstName,
    lastname: user.lastName,
    role: user.role,
    access_token,
  }
}

const validate_token = (req, res, next) => {
  const access_token = req.headers.authorization.replace('Bearer ', '')

  if (!access_token) return res.status(401).json({ error_msg: 'Unauthorized.' })

  try {
    const valid_token = verify(access_token, process.env.JWT_SECRET)

    if (valid_token) {
      req.authenticated = true
      return next()
    }
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}

module.exports = { create_tokens, validate_token }

const { compare } = require('bcryptjs')
const config = require('config')

function createAdmin(req, res, next) {
  const secretKey = req.header('x-secret-key')

  // Check for secret key
  if(!secretKey) return res.status(401).json({msg: 'No secret key, authorization denied'})
  
  // Verify secret key
  if(secretKey === config.get('secretKeyToCreateAdmin')) {
    next()
  } else {
    res.status(400).json({msg:"secret key is not valid"})
  }
  // Add user from payload

}

module.exports = createAdmin
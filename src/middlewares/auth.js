const jwt = require('jsonwebtoken');

const AuthClient = async (req, res, next) => {
  
  const auth = req.headers.authorization
  
  if (!auth) {
    return res.status(401).json({
      success: false,
      message: 'Token not informed!'
    })
  }
  
  const [, token] = auth.split(' ')
  
  if (token !== process.env.TOKEN) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized.'
    })
  }
  
  next()
}

module.exports = { AuthClient }
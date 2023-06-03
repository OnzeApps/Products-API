
function auth(req, res, next) {
  const auth = req.headers.authorization
  if (!auth) {
    return res.status(401).json({
      'success': 'false',
      'message': 'Não authenticado!'
    })
  }
  const [, token] = auth.split(' ')
  if (token != process.env.TOKEN) {
    return res.status(401).json({
      'success': 'false',
      'message': 'Não permitido!'
    })
  }
  next()
}

module.esports = { auth }
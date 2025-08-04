require('dotenv').config()
const jwt = require('jsonwebtoken')
const APP_SECRET = process.env.APP_SECRET

exports.verifyToken = (req, res, next) => {
  //1.get token from header
  let token = req.headers['authorization'].split(' ')[1]

  //2. check if token exsits token

  if (token) {
    //save token in the locals
    res.locals.token = token
    //verfiy token
    let payload = jwt.verify(token, APP_SECRET)
    if (payload) {
      //save payload in locals
      res.locals.payload = payload
      return next()
    }
  }
  res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
}

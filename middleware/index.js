require('dotenv').config()
const jwt = require('jsonwebtoken')
const APP_SECRET = process.env.APP_SECRET

exports.verifyToken = (req, res, next) => {
  //1.get token from header
  let token = req.headers['authorization'].split(' ')[1]
  console.log(token)

  //2. check if token exsits token

  if (token && token !== null) {
    console.log(token + " is here")
    //save token in the locals
    res.locals.token = token
    //verfiy token
    let payload = jwt.verify(token, APP_SECRET)
    if (payload) {
      console.log("payload"+ " is here too")
      //save payload in locals
      res.locals.payload = payload
      return next()
    }
  }
  console.log("on thing is here")
  res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
}

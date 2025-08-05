const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin.js')
const bcrypt = require('bcrypt')
require('dotenv').config()

const APP_SECRET = process.env.APP_SECRET
exports.Login = async (req, res) => {
  try {
    const { username, password } = req.body
    const admin = await Admin.findOne({ username })

    let matched = await bcrypt.compare(password, admin.password)

    if (matched) {
      let payload = {
        id: admin.id,
        role: 'admin'
      }
      //token creation
      let token = jwt.sign(payload, APP_SECRET)
      return res.status(200).send({ admin: payload, token: token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    console.log(error)
    res
      .status(401)
      .send({ status: 'Error', msg: 'An error has occurred logging in!' })
  }
}

exports.checkSession = (req, res) => {
  const { payload } = res.locals
  res.status(200).send(payload)
}

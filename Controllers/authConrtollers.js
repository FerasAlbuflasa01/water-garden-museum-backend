const Admin = require('../models/Admin.js')
const bcrypt = require('bcrypt')
exports.Login = async (req, res) => {
  try {
    const { username, password } = req.body

    const admin = await Admin.findOne({ username })

    let matched = await bcrypt.compare(password, admin.password)

    if (matched) {
      let payload = {
        id: admin.id
      }

      return res.status(200).send({ admin: payload })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    console.log(error)
    res
      .status(401)
      .send({ status: 'Error', msg: 'An error has occurred logging in!' })
  }
}

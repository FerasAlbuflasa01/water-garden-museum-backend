const { Admin } = require('../modules/Admin')
const Login = async (req, res) => {
  try {
    // Extracts the necessary fields from the request body
    const { username, password } = req.body
    console.log(req.body)
    // Finds a user by a particular field (in this case, email)
    const user = await Admin.findOne(req.body.username )
    // Checks if the password matches the stored digest
    let matched = await bcrypt.compare(password,user.password)

    // If they match, constructs a payload object of values we want on the front end
    if (matched) {
      let payload = {
        id: user.id,
        email: user.email
      }
      // Creates our JWT and packages it with our payload to send as a response

      return res.status(200).send({ user: payload })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    console.log(error)
    res
      .status(401)
      .send({ status: 'Error', msg: 'An error has occurred logging in!' })
  }
}

module.exports = {
  Login
  // CheckSession
}

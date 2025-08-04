require('dotenv').config()
const mongoose = require('./db/config')
const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')

const app = express()
const methodOverride = require('method-override')
const authRouter = require('./routes/authRouter')
const Admin = require('./models/Admin')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(methodOverride('_method'))

//////////////////////////////////////////////////////////////////////////////

const firstAdmin = async () => {
  const listOfAdmin = await Admin.findOne({ username: 'admin' })
  if (!listOfAdmin) {
    const password = 'admin123'
    const hashedPassword = await bcrypt.hash(password, 12)
    await Admin.create({
      name: 'admin',
      username: 'admin',
      password: hashedPassword
    })
  }
}
firstAdmin()

//////////////////////////////////////////////////////////////////////////////

app.get('/', async (req, res) => {
  res.send('connected')
})

app.use('/login', authRouter)
app.listen(3001, () => {
  console.log('server is running on port 3001')
})

require('dotenv').config()
const mongoose = require('./db/config')
const express = require('express')
const cors = require('cors')

const app = express()
const methodOverride = require('method-override')
// const userRouter = require('./routes/user')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use(methodOverride('_method'))

app.get('/',async (req, res) => {
  res.send('connected')
})

// app.use('/user', userRouter)
app.listen(3001, () => {
  console.log('server is running on port 3001')
})
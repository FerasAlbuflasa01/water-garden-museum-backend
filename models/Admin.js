const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    game:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
      }
  }
)

const Admin = mongoose.model('Admin',adminSchema)
module.exports = Admin
const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    discreption: { type: String, required: true },
    price: { type: String, required: true },
    img: { type: String, required: true }
  }
)

const Game = mongoose.model('Game',gameSchema)
module.exports = Game
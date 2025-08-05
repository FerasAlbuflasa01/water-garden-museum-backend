const Game = require('../models/Games')
const jwt = require('jsonwebtoken')
const APP_SECRET = process.env.APP_SECRET
exports.newGamess = async (req, res) => {
  let token = req.headers['authorization'].split(' ')[1]
  let payload = jwt.verify(token, APP_SECRET)
  console.log(payload)
  req.body.created = payload.id
  const { name } = req.body
  const newGame = await Game.findOne({ name })
  if (newGame) {
    if (newGame.name !== name) {
      await Game.create(req.body)
      return res.json({ message: 'Game created successfully' })
    } else {
      return res.json({ message: 'Game already exists' })
    }
  } else {
    await Game.create(req.body)
    return res.json({ message: 'Game created successfully' })
  }
}

exports.showGames = async (req, res) => {
  const games = await Game.find()
  return res.json(games)
}

exports.showGamesDetails = async (req, res) => {
  const gameId = req.params.gameId
  const games = await Game.findById(gameId)
  return res.json(games)
}
exports.deleteGame = async (req, res) => {
  const gameId = req.params.gameId
  let token = req.headers['authorization'].split(' ')[1]
  let payload = jwt.verify(token, APP_SECRET)
  console.log(payload)
  let admin = await Game.findById(gameId).populate('Admin')
  if (admin._id === payload.id) {
    console.log('yes')
  }
  await Game.findByIdAndDelete(gameId)
  return res.json({ message: 'Game deleted successfully' })
}

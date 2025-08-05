const Game = require('../models/Games')

exports.newGamess = async (req, res) => {
  const { name, discription, price, img } = req.body
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

exports.showGames = async (req,res) => {
  const games = await Game.find()
  return res.json(games)
}

exports.showGamesDetails = async (req,res) => {
  const gameId = req.params.gameId
  const games = await Game.findById(gameId)
  return res.json(games)
}


const router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../Controllers/GameController')
const { checkSession } = require('../Controllers/authConrtollers')
router.post('/new', middleware.verifyToken, controller.newGamess)
router.get('/', controller.showGames)
router.get('/:gameId', controller.showGamesDetails)
router.delete('/:gameId', controller.deleteGame)

module.exports = router

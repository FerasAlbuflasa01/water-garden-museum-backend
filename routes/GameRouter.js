const router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../Controllers/GameController')

router.post('/new', middleware.verifyToken, controller.newGamess )
router.get('/' , controller.showGames)
router.get('/:gameId' , controller.showGamesDetails)

// router.get('/session', middleware.verifyToken, controller.checkSession)

module.exports = router

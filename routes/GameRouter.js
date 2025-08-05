const router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../Controllers/GameController')

router.post('/new', middleware.verifyToken, controller.newGamess )

// router.get('/session', middleware.verifyToken, controller.checkSession)

module.exports = router

const router = require('express').Router()
const controller = require('../Controllers/authConrtollers')
const middleware = require('../middleware')
router.post('/login', controller.Login)

router.get('/session', middleware.verifyToken, controller.checkSession)

module.exports = router

const router = require('express').Router()
const controller = require('../Controllers/authConrtollers')
const middleware = require('../middleware')
router.post('/login', controller.Login)

router.get('/session',  controller.checkSession)

module.exports = router

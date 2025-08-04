const router = require('express').Router()
const controller = require('../Controllers/authConrtollers')

router.post('/', controller.Login)

// router.get(
//   '/session',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.CheckSession
// )

module.exports = router

const aboutController = require('../Controllers/aboutController')
const router = require('express').Router()
router.get('/', aboutController.sendEmail2)

module.exports = router
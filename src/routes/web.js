const express = require('express')
const {getHomepage, exPage}= require('../controllers/homeController')
const router = express.Router()
router.get('/homepage', getHomepage)
router.get('/ex', exPage)

module.exports = router
const express = require('express')
const {getHomepage, exPage, postCreateUser}= require('../controllers/homeController')
const router = express.Router()
router.get('/homepage', getHomepage)
router.get('/ex', exPage)
router.post('/create-user', postCreateUser);
module.exports = router
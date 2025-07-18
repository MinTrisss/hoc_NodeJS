const express = require('express')
const {getHomepage, exPage, postCreateUser, getCreatePage, getUpdatePage}= require('../controllers/homeController')
const router = express.Router()
router.get('/', getHomepage)
router.get('/ex', exPage)
router.get('/create', getCreatePage)
router.get('/update/:id', getUpdatePage)

router.post('/create-user', postCreateUser);
module.exports = router
'use strict'

const router = require('express').Router()
const {signUp} = require('../controller/AuthController/authController')

router.post('/signup', signUp)

module.exports = router
'use strict'

const Router = require('koa-router')
const controllers = require('../controllers')

const router = new Router()
router.prefix('/api/v1')

router.post('/login', controllers.login.login)

module.exports = router

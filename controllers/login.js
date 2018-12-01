'use strict'

const jwt = require('jsonwebtoken')
const config = require('../config')

const login = {}

login.login = async (ctx, next) => {
  const { username } = ctx.request.body
  console.log(username)
  ctx.result = { token: jwt.sign({ username }, config.secret) }
  return next()
}

module.exports = login

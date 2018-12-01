'use strict'

const User = require('../models/user')

const crud = {}

crud.search = async (ctx, next) => {
  ctx.result = await User.findAll()
  return next()
}

crud.add = async (ctx, next) => {
  const { username } = ctx.request.body
  ctx.result = await User.create({ username })
  return next()
}

crud.delete = async (ctx, next) => {
  const { id } = ctx.request.body
  ctx.result = await User.destroy({ where: { id } })
  return next()
}

module.exports = crud

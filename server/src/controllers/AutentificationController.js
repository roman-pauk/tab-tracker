const { User } = require('../models')

const jwt = require('jsonwebtoken')
const config = require('../config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.autentification.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      return res.send({
        user: user.toJSON(),
        token: jwtSignUser(user.toJSON())
      })
    } catch (err) {
      res.status(400).send({
        error: 'Email must be unique'
      })
    }
  },
  async login (req, res) {
    const { email, password } = req.body
    try {
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'Wrong email address'
        })
      }
      const isValidPassword = await user.comparePassword(password)
      if (!isValidPassword) {
        return res.status(403).send({
          error: 'Wrong password'
        })
      }
      return res.send({
        user: user.toJSON(),
        token: jwtSignUser(user.toJSON())
      })
    } catch (err) {
      console.log(err)
      res.status(403).send({
        error: 'Wrong email or password'
      })
    }
  }
}

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config')

const db = {}

const sequelize = new Sequelize(
  config.db.name,
  config.db.name,
  config.db.password,
  config.db.options
)

fs.readdirSync(__dirname)
  .filter((file) => {
    return file !== 'index.js'
  }).forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

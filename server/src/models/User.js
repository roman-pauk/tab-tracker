const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, option) {
  const SALT = 8
  if (!user.changed('password')) {
    return false
  }

  return bcrypt.genSaltAsync(SALT).then(salt => {
    return bcrypt.hashAsync(user.password, salt, null)
  }).then(hash => {
    user.setDataValue('password', hash)
  })
}

module.exports = (sequelize, dataType) => {
  const User = sequelize.define('User', {
    email: {
      type: dataType.STRING,
      unique: true
    },
    password: dataType.STRING
  }, {
    hooks: {
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }

  return User
}

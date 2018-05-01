module.exports = (sequelize, dataType) =>
  sequelize.define('User', {
    email: {
      type: dataType.STRING,
      unique: true
    },
    password: dataType.STRING
  })

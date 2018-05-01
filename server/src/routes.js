const AutentificationController = require('./controllers/AutentificationController')

module.exports = (app) => {
  app.post('/register', AutentificationController.register)
}

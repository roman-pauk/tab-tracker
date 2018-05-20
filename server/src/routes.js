const AutentificationController = require('./controllers/AutentificationController')
const SongsController = require('./controllers/SongsController')
const AutentificicationControlPolicies = require('./policies/AutentificicationControlPolicies')

module.exports = (app) => {
  app.post('/register',
    AutentificicationControlPolicies.register,
    AutentificationController.register)
  app.post('/login',
    AutentificicationControlPolicies.register,
    AutentificationController.login)

  app.get('/songs',
    SongsController.index)
  app.post('/songs',
    SongsController.post)
}

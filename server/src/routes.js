const AutentificationController = require('./controllers/AutentificationController')

const AutentificicationControlPolicies = require('./policies/AutentificicationControlPolicies')

module.exports = (app) => {
  app.post('/register',
    AutentificicationControlPolicies.register,
    AutentificationController.register)
}

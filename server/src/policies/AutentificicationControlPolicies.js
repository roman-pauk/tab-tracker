const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/)
    }

    Joi.validate(req.body, schema, (err) => {
      if (err) {
        console.log('--------', err)
        switch (err.details[0].context.key) {
          case 'email':
            res.status(400).send({
              error: 'invalid Email address'
            })
            break
          case 'password':
            res.status(400).send({
              error: 'invalid Password'
            })
            break
          default:
            res.status(400).send({
              error: 'invalid Registration'
            })
        }
        console.log(err.details[0].context)
      } else {
        next()
      }
    })
  }
}

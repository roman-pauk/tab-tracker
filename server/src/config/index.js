module.exports = {
  port: process.env.PORT || 8081,
  db: {
    name: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'Roman',
    password: process.env.DB_PASS || '1111',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tabtracker.sqlite'
    }
  },
  autentification: {
    jwtSecret: process.env.JWT_SECRET || 's8325p'
  }
}

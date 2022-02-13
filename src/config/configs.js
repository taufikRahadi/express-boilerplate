const envFilePath = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env'

require('dotenv').config({
  path: envFilePath,
})

const config = {
  appPort: parseInt(process.env.APP_PORT),
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbDatabase: process.env.DB_DATABASE,
  jwtSecret: process.env.JWT_SECRET,
  jwtDefaultExpiresIn: process.env.JWT_DEFAULT_EXPIRES_IN,
}

module.exports = {
  ...config,
}

const {
  dbDatabase,
  dbHost,
  dbPassword,
  dbPort,
  dbUsername,
} = require('./configs')

module.exports = {
  development: {
    host: dbHost,
    port: dbPort,
    username: dbUsername,
    password: dbPassword,
    database: dbDatabase,
    dialect: 'postgres',
    dialectOptions: { useUTC: false },
    logging: true, // boleh dimatiin aja kalo gamau consolenya penuh
    timezone: '+07:00',
  },
  test: {
    host: dbHost,
    port: dbPort,
    username: dbUsername,
    password: dbPassword,
    database: dbDatabase?.endsWith('-test') ? dbDatabase : dbDatabase + '-test',
    dialect: 'postgres',
    dialectOptions: { useUTC: false },
    timezone: '+07:00',
    logging: false,
  },
  production: {
    host: dbHost,
    port: dbPort,
    username: dbUsername,
    password: dbPassword,
    database: dbDatabase,
    dialect: 'postgres',
    dialectOptions: { useUTC: false },
    timezone: '+07:00',
    logging: false,
  },
}

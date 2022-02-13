const http = require('http')
const api = require('./config/api')

const { appPort } = require('./config/configs')

api.set('port', appPort)

const server = http.createServer(api)

server.listen(appPort, () => {
  console.log(`Server is listening on port`, appPort)
})

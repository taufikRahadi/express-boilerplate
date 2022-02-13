const userService = require('./user.service')

module.exports = {
  helloUser: (req, res, next) => {
    return res.send(userService.helloUser())
  },
}

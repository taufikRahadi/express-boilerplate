const router = require('express').Router()
const { helloUser } = require('../api/user/user.controller')

/**
 * @openapi
 *
 * paths:
 *  /user/hello-user/:
 *    get:
 *      summary: Returns 'hello' string
 *      responses:
 *        "200":
 *          description: Hello
 */
router.get('/hello-user', helloUser)

module.exports = router

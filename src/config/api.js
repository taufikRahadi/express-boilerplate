const express = require('express')
const errorResponder = require('../misc/errorResponder')
const errorHandler = require('../misc/errorHandler')
const cors = require('cors')
const morgan = require('morgan')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const specs = swaggerJsDoc({
  apis: ['./src/application/routes/*.js'],
  definition: {
    basePath: '/api',
    info: {
      title: 'API Documentation',
    },
  },
})

const app = express()

// import router
const userRoutes = require('../application/routes/user')
const httpResponseCode = require('../misc/const/httpResponseCode')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('combined'))

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))

app.use((req, res, next) => {
  res.error = errorResponder(req, res, next)
  next()
})

// any routes here
app.use('/api/user', userRoutes)
//

app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(httpResponseCode.UNPROCESSABLE_ENTITY).json(err)
  }

  return res.status(httpResponseCode.INTERNAL_SERVER_ERROR).json(err)
})

// error handler middleware
app.use(errorHandler)

module.exports = app

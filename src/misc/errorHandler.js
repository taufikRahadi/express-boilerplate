const responseCode = require('./const/httpResponseCode')
const { HttpError } = require('./error')

const errorHandler = (err, req, res, next) => {
  const error =
    err instanceof HttpError
      ? err
      : new HttpError({
          message: err.message,
          name: err.name,
          statusCode: responseCode.INTERNAL_SERVER_ERROR,
        })

  return res.status(error.statusCode).json({
    message: error.message,
    data: error.data,
    ...(process.env.NODE_ENV !== 'production' && { stack: error.stack }),
  })
}

module.exports = errorHandler

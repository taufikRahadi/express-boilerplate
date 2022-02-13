const {
  HttpBadRequest,
  HttpUnauthorized,
  HttpNotFound,
  HttpInternalServerError,
  HttpForbidden,
} = require('./error')

const errorResponder = (req, res, next) => {
  const response = {
    _forwardError(error, errorClass = Error, data) {
      const errorMessage = error instanceof Error ? error.message : error
      const errorToForward = new errorClass(errorMessage, data)

      // forwards error to an error handler middleware
      next(errorToForward)
    },
    badRequest(error, data) {
      return response._forwardError(error, HttpBadRequest, data)
    },
    unauthorized(error, data) {
      return response._forwardError(error, HttpUnauthorized, data)
    },
    forbidden(data) {
      return response._forwardError('Forbidden', HttpForbidden, data)
    },
    notFound(error, data) {
      return response._forwardError(error, HttpNotFound, data)
    },
    internalServerError(error, data) {
      return response._forwardError(error, HttpInternalServerError, data)
    },
  }

  return response
}

module.exports = errorResponder

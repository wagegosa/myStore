function logErrors(err, req, res, next) {
  console.error(err);
  nex(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

function boomErrorHandler(err, req, res, next) {
  if (!err.isBoom) {
    next(err)
  } else {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler}

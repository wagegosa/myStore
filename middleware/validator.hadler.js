const boom = require('@hapi/boom');

function validatorHandler(schemas, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schemas.validate(data);
    if (error) {
      next(boom.badRequest(error));
    } else {
      next();
    }
  }
}

module.exports = validatorHandler;

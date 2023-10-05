const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoryRouter = require('./categoryRouter');
const carritoRouter = require('./carritoRouter');
const pagoRouter = require('./pagoRouter');
const terminosCondicionesRouter = require('./terminosCondicionesRouter');
const blogRouter = require('./blogRouter');

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
  app.use('/category', categoryRouter);
  app.use('/carrito', carritoRouter);
  app.use('/pagos', pagoRouter);
  app.use('/terminosCondiciones', terminosCondicionesRouter);
  app.use('/blog', blogRouter);
}

module.exports = routerApi;

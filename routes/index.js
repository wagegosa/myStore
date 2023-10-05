const express = require('express');

const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoryRouter = require('./categoryRouter');
const carritoRouter = require('./carritoRouter');
const pagoRouter = require('./pagoRouter');
const terminosCondicionesRouter = require('./terminosCondicionesRouter');
const blogRouter = require('./blogRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/category', categoryRouter);
  router.use('/carrito', carritoRouter);
  router.use('/pagos', pagoRouter);
  router.use('/terminosCondiciones', terminosCondicionesRouter);
  router.use('/blog', blogRouter);
}

module.exports = routerApi;

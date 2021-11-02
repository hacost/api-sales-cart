const express = require('express');

const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');
const router = express.Router();

function routerApi(app){
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;

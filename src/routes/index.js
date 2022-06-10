const {Router} = require('express');
const routes = new Router();
const homeController = require('../controllers/home.controller');
const formController = require('../controllers/form.controller');
const productsController = require('../controllers/products.controller');
const internalProductController = require('../controllers/internalProduct.controller');

// Página Inicial
routes.get('/', homeController.list);

// Formulário
routes.get('/contato', formController.list);

// Produtos
routes.get('/produtos', productsController.list);

// Produto Interna
routes.get('/produto/:slug?', internalProductController.list);

module.exports = routes;
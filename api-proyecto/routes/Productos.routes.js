const express = require('express');

const productosController = require('../controllers/productos.controller');

const api= express.Router();

api.post("/createProduct", productosController.createProducto);

module.exports = api;
const express = require('express');

const productosController = require('../controllers/productos.controller');

const api= express.Router();

api.post("/createProduct", productosController.createProducto);
api.get("/getProducto", productosController.getProducto);
api.put("/updateProducto/:id", productosController.updateProducto);
api.delete("/delProducto/:id", productosController.delProducto);

module.exports = api;
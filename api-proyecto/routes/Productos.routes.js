const express = require('express');

const multiparty = require("connect-multiparty")

const productosController = require('../controllers/productos.controller');

const md_mparty = multiparty({uploadDir:"./uploads"})
const api = express.Router();

api.post("/createProducto", [md_mparty], productosController.createProducto);
api.get("/getProducto", productosController.getProducto);
api.patch("/updateProducto/:id", [md_mparty], productosController.updateProducto);
api.delete("/delProducto/:id", productosController.delProducto);

module.exports = api;
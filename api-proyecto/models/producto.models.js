const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    cantidad: { type: Number, required: true },
    unidad: { type: String, required: true },
    imagen: { type: String },
    createdAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Producto", ProductoSchema);
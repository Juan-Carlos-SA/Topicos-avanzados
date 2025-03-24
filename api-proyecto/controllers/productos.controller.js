//const productoModels = require('../models/producto.models');
const fs = require('fs');
const path = require('path');
const Producto = require('../models/producto.models');
const imagen = require('../utils/image');

async function createProducto(req, res) {
    const producto = new Producto(req.body);

    if (req.files.imagep) {
        const imagePath = imagen.getfilePath(req.files.imagep)
        producto.imagep = imagePath

    }

    try {
        const datos = await producto.save();
        res.status(200).send(datos)
    } catch (error) {
        console.log(error);
        //res.status(500).send({ message: "error al guardar los producto" })

    }
}

async function getProducto(req, res) {
    try {
        const buscarProducto = await Producto.find()
        res.status(200).send(buscarProducto)
    } catch (error) {
        res.status(500).send({ message: "error al obtener la información" })
    }
}
async function delProducto(req, res) {
    const { id } = req.params;
    try {
        const producto = await Producto.findById(id);
        if (!producto) {
            return res.status(404).send({ message: "Producto no encontrado" });
        }

        // Verifica si el producto tiene una imagen antes de intentar eliminarla
        if (producto.imagep) {
            const imagePath = path.join(__dirname, '..', producto.imagep);

            fs.unlink(imagePath, (error) => {
                if (error) {
                    console.error("Error al eliminar la imagen:", error);
                    return res.status(500).send({ message: "Error al eliminar la imagen" });
                }
            });
        }

        await Producto.findByIdAndDelete(id);
        res.status(200).send({ message: "Producto eliminado" });
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        res.status(500).send({ message: "Error al eliminar" });
    }
}
async function updateProducto(req, res) {
    const { id } = req.params
    const updateproductos = req.body
    try {
        await Producto.findByIdAndUpdate({ _id: id }, updateproductos)
        res.status(200).send({ message: 'Datos actualizados correctamente' })
    } catch (error) {
        res.status(400).send({ message: 'Error al actualizar' })
    }

}


module.exports = {
    createProducto,
    getProducto,
    delProducto,
    updateProducto
}

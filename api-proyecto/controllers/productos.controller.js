const productoModels = require('../models/producto.models');
const Producto = require('../models/producto.models');
const imagen=require("../utils/image")

async function createProducto(req, res) {
    const producto = new Producto(req.body);

    if(req.files.imagep){
        const imagePath=imagen.getfilePath(req.files.imagep)
        producto.imagep=imagePath
    
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
    const { id } = req.params
    try {
        await Producto.findByIdAndDelete(id)
        res.status(200).send({ message: 'Dato eliminado correctamente' })
    } catch (error) {
        res.status(500).send({ message: 'No se ha podido eliminar el dato' })
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

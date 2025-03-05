async function createProducto(req, res) {
    res.status(200).send({ message: 'crear productos' })

}

async function getProducto(req, res) {
    res.json("ver productos")

}
async function delProducto(req, res) {
    res.status(200).send({ message: 'borrar productos' })


}
async function updateProducto(req, res) {
    res.status(200).send({ message: 'actualizar productos' })


}


module.exports = {
    createProducto,
    getProducto,
    delProducto,
    updateProducto
}

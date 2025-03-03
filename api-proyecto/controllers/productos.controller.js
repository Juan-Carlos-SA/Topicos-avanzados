async function createProducto(req, res) {
    res.status(200).send({ message: 'crear productos' });

}

module.exports = {
    createProducto
}

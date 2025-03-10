const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path=require("path")

//importar rutas
const productosRoutes = require('./routes/productos.routes');

const app = express();

//parsear la infomaciòn
app.use(bodyParser.urlencoded({ extended: true }));
app. use(bodyParser.json());

//configurar carpeta de carga de files
//app.use(express.static('uploads'));
app.use(express.static('uploads'))

app.use(cors());

//uso de rutas
app.use('/api', productosRoutes);


/*app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })*/

module.exports = app;
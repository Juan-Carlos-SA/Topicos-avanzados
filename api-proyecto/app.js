const express = require('express');
const cors = require('cors');

//importar rutas
const productosRoutes = require('./routes/productos.routes');

const app = express();

app.use(cors());

//uso de rutas
app.use('/api', productosRoutes);


/*app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })*/

module.exports = app;
const express = require('express');
const mongoose = require('mongoose');
const registerRoutes = require('./routes/register.js');
const loginRoutes = require('./routes/login.js');

const app = express();
app.use(express.json());
app.use(express.static('public'));
mongoose.connect('mongodb://localhost/login_and_register');
const db = mongoose.connection;

mongoose.connection.on('error', (err) => {
    console.error('Error de Conexión:', err);
});

db.once('open', function () {

    console.log("Conexión a la Base de Datos Exitosa");

    app.use(registerRoutes);
    app.use(loginRoutes);

});


function onServerStart() {
    console.log('Servidor Corriendo en el Puerto 3000');
}

app.listen(3000, onServerStart);


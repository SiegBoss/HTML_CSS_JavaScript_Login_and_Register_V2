// Importar los módulos necesarios | Import required modules
const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

// Crear una instancia del enrutador de Express | Create an instance of the Express router
const routerLogin = express.Router();
// Obtener el modelo de la colección de usuarios de MongoDB | Get the model of the MongoDB users collection
const collection = mongoose.model('users');

// Definir la ruta POST '/login' | Define the POST '/login' route
routerLogin.post('/login', async (req, res) => {

    // Obtener el nombre de usuario y la contraseña del cuerpo de la solicitud  | Get the username and password from the request body
    const { username, password } = req.body;
    // Buscar un usuario en la colección con el nombre de usuario proporcionado | Find a user in the collection with the provided username    
    const user = await collection.findOne({ username });

    // Si no se encuentra ningún usuario con el nombre de usuario proporcionado | If no user is found with the provided username
    if (!user) {
        console.log('Usuario no encontrado');
        return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    // Comparar la contraseña proporcionada con la contraseña almacenada en la base de datos | Compare the provided password with the password stored in the database
    const match = await bcrypt.compare(password, user.password);

    // Si la contraseña no coincide | If the password does not match
    if (!match) {
        console.log('Contraseña incorrecta');
        return res.status(400).json({ error: 'Contraseña incorrecta' });
    }
    
    // Si el inicio de sesión es exitoso | If the login is successful
    console.log('Inicio de sesión exitoso');
    res.status(200).send('Inicio de sesión exitoso');
});

// Exportar el enrutador
module.exports = routerLogin;

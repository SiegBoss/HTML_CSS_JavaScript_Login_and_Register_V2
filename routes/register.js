// Importar los módulos necesarios | Import required modules 

// Express framework para crear aplicaciones web | Express framework for creating web applications
const express = require('express'); 
// Librería para el hash de contraseñas | Library for hashing passwords
const bcrypt = require('bcrypt'); 
// Herramienta de modelado de objetos MongoDB | MongoDB object modeling tool
const mongoose = require('mongoose'); 

// Crear un objeto de enrutador | Create a router object
const routerRegister = express.Router();

// Establecer el número de rondas de sal para el hash de contraseñas | Set the number of salt rounds for password hashing 
const saltRounds = 10;

// Definir el esquema de usuario para MongoDB | Define the user schema for MongoDB 
const userSchema = new mongoose.Schema({
    user : String,
    username: String,
    email: String,
    password: String,
});

// Crear un modelo de usuario basado en el esquema de usuario | Create a User model based on the user schema
const User = mongoose.model('users', userSchema);

// Definir una ruta para registrar un nuevo usuario | Define a route for registering a new user 
routerRegister.post('/register', async (req, res) => {

    // Obtener los datos del cuerpo de la solicitud | Get the request body data 
    const data = req.body; 

    // Hash de la contraseña usando bcrypt | Hash the password using bcrypt
    data.password = await bcrypt.hash(data.password, saltRounds);

    // Crear una nueva instancia de usuario con los datos | Create a new User instance with the data | 
    const newUser = new User(data);

    try {

        // Guardar el nuevo usuario en la base de datos | Save the new user to the database 
        await newUser.save();
        console.log("Usuario Registrado Exitosamente");
        res.status(200).send('Usuario Registrado Exitosamente');

    } catch (err) {

        // Manejar cualquier error que ocurra durante el registro | Handle any errors that occur during registration 
        console.log('Error al Registrar el Usuario:', err.message);
        res.status(500).send('Error al Registrar el Usuario');
    }
});

// Exportar el objeto de enrutador | Export the router object
module.exports = routerRegister;

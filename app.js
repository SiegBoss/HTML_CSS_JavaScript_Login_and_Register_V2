// Import required modules

// Express framework para crear aplicaciones web. | Express framework for building web applications
const express = require('express'); 
// Mongoose para modelado de objetos MongoDB. | Mongoose for MongoDB object modeling 
const mongoose = require('mongoose'); 
// Importar rutas de registro | Import register routes 
const registerRoutes = require('./routes/register.js'); 
// Importar rutas de inicio de sesión | Import login routes
const loginRoutes = require('./routes/login.js'); 

// Crear una instancia de la aplicación Express | Create an instance of the Express application
const app = express(); 
// Middleware para analizar datos JSON | Middleware to parse JSON data
app.use(express.json()); 
// Servir archivos estáticos desde el directorio 'public' | Serve static files from the 'public' directory 
app.use(express.static('public')); 

// Conectar a MongoDB | Connect to MongoDB
mongoose.connect('mongodb://localhost/login_and_register'); 
// Obtener la conexión predeterminada | Get the default connection 
const db = mongoose.connection;

mongoose.connection.on('error', (err) => {
    // Registrar error de conexión | Log connection error 
    console.error('Error de Conexión:', err); 
});

db.once('open', function () {
    // Registrar conexión exitosa a la base de datos | Log successful database connection
    console.log("Conexión a la Base de Datos Exitosa"); 
     // Registrar las rutas de registro | Register the register routes
    app.use(registerRoutes);
    // Registrar las rutas de inicio de sesión | Register the login routes
    app.use(loginRoutes); 
});

// Función que se llama cuando el servidor se inicia. | Function that is called when the server starts. 
function onServerStart() {
    // Registra un mensaje que indica que el servidor se está ejecutando en el puerto 3000. | It logs a message indicating that the server is running on port 3000.
    console.log('Servidor Corriendo en el Puerto 3000'); 
}

// Iniciar el servidor en el puerto 3000 | Start the server on port 3000 
app.listen(3000, onServerStart);

# Sistema de Inicio de Sesión y Registro con Node.js, Express y MongoDB V2

Este proyecto es un sistema de inicio de sesión y registro que permite a los usuarios realizar algunas operaciones (Registro e Inicio de Sesión) a través de una interfaz web esta es la `Version 2` ya que tiene el inicio de sesion y registro en paginas diferentes asi como tambien un diseño mejorado, tambien en la parte del Backend se separo por rutos ahora esta el app que es el servidor principal y estan las rutas de login y register que se mandan a llamar. 

La parte del frontend está desarrollada con HTML, CSS y JavaScript, mientras que la lógica del backend se ha implementado utilizando Node.js, Express y Mongoose para interactuar con una base de datos MongoDB. Además, se encripta la contraseña para una mayor seguridad y se comprueba si el usuario existe y si la contraseña es correcta.


## Estructura del Proyecto

El proyecto está organizado en los siguientes archivos:

- `app.js` : Archivo principal del servidor Node.js que utiliza Express para manejar las solicitudes HTTP.
- `login.js` : Es una ruta para hacer las operaciones de inicio de sesión.
- `register.js` : Es una ruta para hacer las operaciones de registro.
- `index.html` : Archivo HTML que contiene la interfaz de usuario para interactuar con el sistema (login).
- `index.css` : Archivo CSS que define los estilos y el diseño de la interfaz de usuario (login).
- `index.js` : Archivo JavaScript que proporciona la interactividad y la lógica del frontend (login).
- `register.html`: Archivo HTML que contiene la interfaz de usuario para interactuar con el sistema (Register).
- `register.css` : Archivo CSS que define los estilos y el diseño de la interfaz de usuario (Register).
- `register.js`: Archivo JavaScript que proporciona la interactividad y la lógica del frontend (Register).


## Tecnologías Utilizadas

### Frontend:

- HTML: Para la estructura y los elementos de la página web.
- CSS: Para dar estilo y diseño a la interfaz de usuario.
- JavaScript: Para la lógica y la interactividad de la página web.

### Backend:

- Node.js: Entorno de ejecución para JavaScript en el servidor.
- Express: Framework de Node.js para construir aplicaciones web.
- Mongoose: Base de datos NoSQL y ODM (Object Data Modeling) para almacenar y gestionar los datos de los usuarios.
- bcrypt : Para encriptación de las contraseñas 


## Funcionalidades

El sistema de inicio de sesión y registro permite realizar las siguientes operaciones:

- Registro de usuario: Los usuarios pueden agregar su nombre, edad, correo, número y género a la base de datos.
- Inicio de sesión: Comprueba si el usuario existe y si la contraseña es correcta.
- Redirección: Si la contraseña es correcta, redirige al usuario a otra página.


## Licencia
Este proyecto sigue la licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles sobre los términos de uso y distribución.


------------------------------


# Login and Registration System with Node.js, Express, and MongoDB

This project is a login and registration system that allows users to perform some operations (Registration and Login) through a web interface. This is `Version 2` as it has the login and registration on different pages as well as an improved design. Also, on the backend part, it is separated by routes now there is the app which is the main server and there are the login and register routes that are called.

The frontend part is developed with HTML, CSS, and JavaScript, while the backend logic has been implemented using Node.js, Express, and Mongoose to interact with a MongoDB database. In addition, the password is encrypted for greater security and it checks if the user exists and if the password is correct.

## Project Structure
The project is organized into the following files:

- `app.js` : Main file of the Node.js server that uses Express to handle HTTP requests.
- `login.js` : It is a route to perform login operations.
- `register.js` : It is a route to perform registration operations.
- `index.html` : HTML file that contains the user interface to interact with the system (login).
- `index.css` : CSS file that defines the styles and design of the user interface (login).
- `index.js` : JavaScript file that provides interactivity and frontend logic (login).
- `register.html` : HTML file that contains the user interface to interact with the system (Register).
- `register.css` : CSS file that defines the styles and design of the user interface (Register).
- `register.js`: JavaScript file that provides interactivity and frontend logic (Register).

## Technologies Used

### Frontend:
- HTML: For the structure and elements of the web page.
- CSS: To style and design the user interface.
- JavaScript: For the logic and interactivity of the web page.

### Backend:
- Node.js: Execution environment for JavaScript on the server.
- Express: Node.js framework for building web applications.
- Mongoose: NoSQL database and ODM (Object Data Modeling) to store and manage user data.
- bcrypt : For password encryption


## Functionalities

The login and registration system allows the following operations:

- User registration: Users can add their name, age, email, number, and gender to the database.
- Login: Checks if the user exists and if the password is correct.
- Redirection: If the password is correct, it redirects the user to another page.

## License

This project follows the MIT license. Check the `LICENSE` file for more details about the terms of use and distribution.
// Obtener el formulario de inicio de sesión | Get the login form
const loginForm = document.getElementById('login_form');

// Obtener los campos de nombre de usuario y contraseña | Get the username and password fields
const usernameDate = document.getElementById('username');
const passwordDate = document.getElementById('password');

// Agregar un evento de escucha al formulario cuando se envía | Add a listener event to the form when it is submitted
loginForm.addEventListener('submit', async (event) => {
    
    // Evitar que el formulario se envíe de forma predeterminada | Prevent the form from being submitted by default
    event.preventDefault(); 

    // Obtener los valores de nombre de usuario y contraseña | Get the username and password values
    const data = {
        username: usernameDate.value,
        password: passwordDate.value
    };

    // Configurar las opciones para la solicitud de inicio de sesión | Set up options for the login request
    const options = {

        // Especificar el método HTTP | Specify the HTTP method
        method: 'POST',
        // Especificar el tipo de contenido | Specify the content type
        headers: { 'Content-Type': 'application/json' },
        // Especificar el cuerpo de la solicitud | Specify the request body
        body: JSON.stringify(data),
    };

    try {

        // Enviar la solicitud de inicio de sesión al servidor | Send the login request to the server
        const response = await fetch('/login', options);

        // Si la respuesta no es exitosa, mostrar un mensaje de error | If the response is not successful, show an error message
        if (!response.ok) {
            const errorData = await response.json();
            errorMessage.textContent = errorData.error;
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Redirigir al usuario a la página del sistema solar | Redirect the user to the solar system page
        window.location.href = '../pages/solar_system/index.html';

    } catch (error) {

        // Registrar el error en la consola | Log the error to the console
        console.error('Error:', error);
    }
});

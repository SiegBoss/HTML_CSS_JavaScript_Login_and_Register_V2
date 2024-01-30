// Obtener referencias a los elementos del formulario de registro | Get references to the registration form elements
const registerForm = document.getElementById('register_form');
const userDate = document.getElementById('user');
const usernameDate = document.getElementById('username');
const emailDate = document.getElementById('email');
const passwordDate = document.getElementById('password');
const confirm_passwordDate = document.getElementById('confirm_password');

// Agregar un evento de escucha al formulario de registro | Add a listener event to the registration form
registerForm.addEventListener('submit', async (event) => {

    // Prevenir el envío del formulario | Prevent the form from being submitted
    event.preventDefault(); 

    // Obtener el valor del campo de contraseña | Get the value of the password field
    const password = passwordDate.value; 
    // Obtener el valor del campo de confirmación de contraseña | Get the value of the password confirmation field 
    const confirm_password = confirm_passwordDate.value; 

    // Verificar si las contraseñas coinciden | Check if the passwords match
    if (password !== confirm_password) {
        alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        return; 
    }

    // Verificar si la contraseña tiene al menos 8 caracteres | Check if the password is at least 8 characters
    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres. Por favor, inténtalo de nuevo.');
        return;
    }

    // Verificar si la contraseña contiene al menos una letra | Check if the password contains at least one letter
    if (password.search(/[a-z]/i) < 0) {
        alert('La contraseña debe contener al menos una letra. Por favor, inténtalo de nuevo.');
        return;
    }

    // Verificar si la contraseña contiene al menos un dígito | Check if the password contains at least one digit
    if (password.search(/[0-9]/) < 0) {
        alert('La contraseña debe contener al menos un dígito. Por favor, inténtalo de nuevo.');
        return; 
    }

    // Verificar si la contraseña contiene al menos un carácter especial | Check if the password contains at least one special character
    if (password.search(/[!@#$%^&*]/) < 0) {
        alert('La contraseña debe contener al menos un carácter especial. Por favor, inténtalo de nuevo.');
        return;
    }

    // Verificar si la contraseña contiene al menos una letra mayúscula | Check if the password contains at least one uppercase letter
    if (password.search(/[A-Z]/) < 0) {
        alert('La contraseña debe contener al menos una letra mayúscula. Por favor, inténtalo de nuevo.');
        return;
    }

    // Crear un objeto con los datos del usuario | Create an object with the user data
    const data = {
        user: userDate.value,
        username: usernameDate.value,
        email: emailDate.value,
        password: passwordDate.value,
    };

    // Configurar las opciones para la solicitud HTTP | Set up options for the HTTP request
    const options = {
         // Método de la solicitud | Request method
        method: 'POST',
        // Encabezados de la solicitud | Request headers
        headers: { 'Content-Type': 'application/json' }, 
        // Cuerpo de la solicitud en formato JSON | Request body in JSON format
        body: JSON.stringify(data) 
    };

    try {
        // Realizar la solicitud HTTP al servidor | Make the HTTP request to the server
        const response = await fetch('/register', options);

        // Verificar si la respuesta del servidor no es correcta | Check if the response from the server is not correct
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Obtener la respuesta del servidor en formato JSON | Get the response from the server in JSON format
        const json = await response.json();
        console.log(json);

    } catch (error) {

        // Registrar el error en la consola | Log the error to the console
        console.error('Error:', error);
    }
});

const registerForm = document.getElementById('register_form');

registerForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;

    if (password !== confirm_password) {

        alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        return; 
    }

    const data = {
        user: document.getElementById('user').value,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        confirm_password: document.getElementById('confirm_password').value,
        
    };

    const options = {
        method: 'POST',     
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    try {

        const response = await fetch('/register', options);

        if (!response.ok) {

            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        
    } catch (error) {
        console.error('Error:', error);
    }
});

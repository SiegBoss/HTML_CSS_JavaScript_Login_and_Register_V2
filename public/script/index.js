const loginForm = document.getElementById('login_form');

loginForm.addEventListener('submit', async (event) => {
    
    event.preventDefault();

    const data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    };

    const options = {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    };

    try {

        const response = await fetch('/login', options);

        if (!response.ok) {

            const errorData = await response.json();
            errorMessage.textContent = errorData.error;
            throw new Error(`HTTP error! status: ${response.status}`);
            
        }

        window.location.href = '../pages/solar_system/solar_system.html';

    } catch (error) {
        console.error('Error:', error);
    }
});

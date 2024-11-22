// Seleccionar los contenedores
const mainContainer = document.getElementById('main-container');
const userPassContainer = document.getElementById('user-pass-container');

// Seleccionar las opciones
const adminOption = document.getElementById('admin');
const empleadoOption = document.getElementById('empleado');
const roleField = document.getElementById('position');
const submitButton = document.getElementById('submitbutton');

// Añadir eventos de clic
adminOption.addEventListener('click', () => {
    roleField.value = 'manager'; // Establecer rol en "gerente"
    console.log(roleField.value);
    toggleContainers();
});

empleadoOption.addEventListener('click', () => {
    roleField.value = 'worker'; // Establecer rol en "empleado"
    toggleContainers();
});

// Función para alternar visibilidad
function toggleContainers() {
    mainContainer.classList.add('hidden'); // Oculta el contenedor principal
    userPassContainer.classList.remove('hidden'); // Muestra el contenedor de usuario y contraseña
}

// Manejo del envío del formulario
submitButton.addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const position = roleField.value;
    try {
        const response = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, position })
        });
        
        console.log("vamos bbien");
        const data = await response.json();

        if (response.ok) {
            // Guardar el token y el rol en sessionStorage
            sessionStorage.setItem('token', data.access_token);
            sessionStorage.setItem('position', position);
            console.log("se guardó el token");
            alert(`Bienvenido, ${position}`);

            // Redirigir al dashboard correspondiente
            if (position === 'manager') {
                console.log("vamos bien");
                window.location.href = 'index.html';
            } else if (position === 'worker') {
                window.location.href = 'dashboard-empleado.html';
            }
        } else {
            alert(`Error: ${data.error}`);
        }
    } catch (error) {
        console.error('Error en la autenticación:', error);
    }
});

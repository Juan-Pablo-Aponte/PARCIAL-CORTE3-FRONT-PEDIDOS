// Seleccionar los contenedores
const mainContainer = document.getElementById('main-container');
const userPassContainer = document.getElementById('user-pass-container');

// Seleccionar las opciones
const adminOption = document.getElementById('admin');
const empleadoOption = document.getElementById('empleado');

// Añadir eventos de clic
adminOption.addEventListener('click', () => {
    toggleContainers();
});

empleadoOption.addEventListener('click', () => {
    toggleContainers();
});

// Función para alternar visibilidad
function toggleContainers() {
    mainContainer.classList.add('hidden'); // Oculta el contenedor principal
    userPassContainer.classList.remove('hidden'); // Muestra el contenedor de usuario y contraseña
}

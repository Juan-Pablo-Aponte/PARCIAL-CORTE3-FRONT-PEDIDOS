// Datos de prueba para trabajadores
const testWorkers = [
    { name: 'Ana López', cargo: 'Diseñadora Gráfica', cedula: '12345678' },
    { name: 'Carlos Pérez', cargo: 'Gerente de Ventas', cedula: '87654321' },
    { name: 'María Fernández', cargo: 'Desarrolladora Frontend', cedula: '11223344' },
    { name: 'Luis Gómez', cargo: 'Analista de Datos', cedula: '34567890' }
];

// Cargar información del usuario en el aside al abrir la página
function cargarInformacionUsuario() {
    const infoContainer = document.querySelector('.info-container');

    if (infoContainer) {
        infoContainer.innerHTML = `
            <span>Nombre: Fermin</span>
            <span>Cargo: Backend Developer</span>
        `;
    }
}

// Función para agregar trabajadores desde un array
function addWorkersFromArray(workersArray) {
    const mainContainer = document.getElementById('main-container');

    workersArray.forEach(worker => {
        const workerCard = document.createElement('div');
        workerCard.classList.add('worker-card');

        // Contenedor de información
        const workerInfoContainer = document.createElement('div');
        workerInfoContainer.classList.add('worker-info-container');
        workerInfoContainer.innerHTML = `
            <p><strong>${worker.name}</strong></p>
            <p>${worker.cargo}</p>
            <p>C.C: ${worker.cedula}</p>
        `;
        workerCard.appendChild(workerInfoContainer);

        // Botón para eliminar trabajador
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-worker');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => {
            workerCard.remove();
        });
        workerCard.appendChild(deleteButton);

        mainContainer.appendChild(workerCard);
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    cargarInformacionUsuario();

    // Cargar trabajadores de prueba al hacer clic
    document.getElementById('load-test-data').addEventListener('click', () => {
        addWorkersFromArray(testWorkers);
    });

    // Agregar un trabajador individual
    document.getElementById('add-worker').addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const cargo = document.getElementById('cargo').value.trim();
        const cedula = document.getElementById('cedula').value.trim();
    
        if (name && cargo && cedula) {
            addWorkersFromArray([{ name, cargo, cedula }]);
            document.getElementById('name').value = '';
            document.getElementById('cargo').value = '';
            document.getElementById('cedula').value = '';
        } else {
            alert('Por favor, completa todos los campos correctamente.');
        }
    });    
});

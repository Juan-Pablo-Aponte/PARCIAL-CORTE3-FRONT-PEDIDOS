// Datos de prueba para trabajadores
const testWorkers = [
    { name: 'Ana López', cargo: 'Diseñadora Gráfica', cedula: '12345678', image: 'img/FotoFermin.jpeg' },
    { name: 'Carlos Pérez', cargo: 'Gerente de Ventas', cedula: '87654321', image: 'img/FotoMario.jpeg' },
    { name: 'María Fernández', cargo: 'Desarrolladora Frontend', cedula: '11223344', image: 'img/FotoJuan.jpeg' },
    { name: 'Luis Gómez', cargo: 'Analista de Datos', cedula: '34567890', image: 'img/FotoFermin.jpeg' }
];

// Cargar información del usuario en el aside al abrir la página
function cargarInformacionUsuario() {
    const imgContainer = document.querySelector('.image');
    const infoContainer = document.querySelector('.info-container');

    if (imgContainer) {
        imgContainer.src = 'img/FotoFermin.jpeg'; // Cambia esta ruta según sea necesario
        imgContainer.alt = 'Imagen de Fermin';

        // Verifica si la imagen se cargó correctamente
        imgContainer.onerror = () => {
            imgContainer.src = 'img/default-worker.jpg'; // Fallback en caso de error
        };
    }

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

        // Contenedor de imagen
        const workerImg = document.createElement('img');
        workerImg.src = worker.image || 'img/default-worker.jpg';
        workerImg.alt = `Imagen de ${worker.name}`;
        workerImg.onerror = () => {
            workerImg.src = 'img/default-worker.jpg'; // Fallback en caso de error
        };
        workerCard.appendChild(workerImg);

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



// Verificar si hay trabajadores restantes
function verificarTrabajadoresRestantes(container) {
    if (container.childNodes.length === 0) {
        container.innerHTML = '<p>No hay trabajadores registrados.</p>';
    }
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
            addWorkersFromArray([{ name, cargo, cedula, image: 'img/default-worker.jpg' }]);
            document.getElementById('name').value = '';
            document.getElementById('cargo').value = '';
            document.getElementById('cedula').value = '';
        } else {
            alert('Por favor, completa todos los campos correctamente.');
        }
    });    
});

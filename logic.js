// Diferentes pedidos de ejemplo
const pedidosEjemplo = [
    {
        nombre: "Carlos Martínez",
        telefono: "3156784321",
        direccion: "Calle 45 #23-56",
        platos: [
            { nombre: "Pizza Margarita", cantidad: "1", precio: "35000.00" },
            { nombre: "Coca Cola", cantidad: "2", precio: "5000.00" },
            { nombre: "Helado de Vainilla", cantidad: "1", precio: "12000.00" },
            { nombre: "Helado de Vainilla", cantidad: "1", precio: "12000.00" },
            { nombre: "Helado de Vainilla", cantidad: "1", precio: "12000.00" },
            { nombre: "Helado de Vainilla", cantidad: "1", precio: "12000.00" },
            { nombre: "Helado de Vainilla", cantidad: "1", precio: "12000.00" },
            { nombre: "Helado de Vainilla", cantidad: "1", precio: "12000.00" },
            { nombre: "Helado de Vainilla", cantidad: "1", precio: "12000.00" },    
        ],
        total: "57000.00"
    },
    {
        nombre: "Laura Gómez",
        telefono: "3149876543",
        direccion: "Carrera 12 #34-56",
        platos: [
            { nombre: "Hamburguesa Clásica", cantidad: "1", precio: "28000.00" },
            { nombre: "Papas Fritas", cantidad: "1", precio: "8000.00" },
            { nombre: "Jugo de Naranja", cantidad: "1", precio: "6000.00" }
        ],
        total: "42000.00"
    },
    {
        nombre: "Andrés Pérez",
        telefono: "3124567890",
        direccion: "Avenida Siempre Viva 742",
        platos: [
            { nombre: "Sushi Roll", cantidad: "2", precio: "45000.00" },
            { nombre: "Té Verde", cantidad: "1", precio: "7000.00" }
        ],
        total: "97000.00"
    },
    {
        nombre: "María Rodríguez",
        telefono: "3101234567",
        direccion: "Calle Falsa 123",
        platos: [
            { nombre: "Pasta Carbonara", cantidad: "1", precio: "38000.00" },
            { nombre: "Pan de Ajo", cantidad: "1", precio: "5000.00" },
            { nombre: "Limonada", cantidad: "1", precio: "6000.00" }
        ],
        total: "49000.00"
    }
];

// Función para crear un pedido aleatorio de los ejemplos
function crearPedidoTemporal() {
    const pedidoAleatorio = pedidosEjemplo[Math.floor(Math.random() * pedidosEjemplo.length)];
    createNotificationPedido(pedidoAleatorio);
}

function createNotificationPedido(pedido) {
    const { nombre, telefono, direccion, platos, total } = pedido;

    const notification = document.createElement('div');
    notification.classList.add('notification-container');

    const notificationBadge = document.createElement('div');
    notificationBadge.classList.add('notification-badge');
    notification.appendChild(notificationBadge);

    notification.addEventListener('mouseenter', () => {
        if (notificationBadge) {
            notificationBadge.remove();
        }
    });

    const table = document.createElement('table');
    table.classList.add('pedido-table');
    const tableHeader = `<tr><th>Nombre del Plato</th><th>Cantidad</th><th>Precio</th></tr>`;
    table.innerHTML = tableHeader;
    platos.forEach(plato => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${plato.nombre}</td><td>${plato.cantidad}</td><td>${plato.precio}</td>`;
        table.appendChild(row);
    });
    notification.appendChild(table);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const btnPendiente = document.createElement('button');
    btnPendiente.classList.add('pending');
    btnPendiente.innerText = 'Pendiente';
    buttonsContainer.appendChild(btnPendiente);

    const btnAtendido = document.createElement('button');
    btnAtendido.classList.add('attended');
    btnAtendido.innerText = 'Atendido';
    buttonsContainer.appendChild(btnAtendido);

    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('delete');
    btnEliminar.innerText = 'Eliminar';
    btnEliminar.onclick = () => eliminarPedido(notification, pedido);
    buttonsContainer.appendChild(btnEliminar);

    notification.appendChild(buttonsContainer);

    const clienteInfo = document.createElement('div');
    clienteInfo.innerHTML = `<strong>Nombre:</strong> ${nombre} <br>
                             <strong>Dirección:</strong> ${direccion} <br>
                             <strong>Teléfono:</strong> ${telefono}`;
    clienteInfo.classList.add('cliente-info');
    notification.appendChild(clienteInfo);

    const mainContainer = document.getElementById('main-container');
    mainContainer.insertBefore(notification, mainContainer.firstChild);

    if (mainContainer.childNodes.length > 4) {
        mainContainer.style.overflowY = 'scroll';
        mainContainer.style.maxHeight = '80vh';
    }
}

function eliminarPedido(notification, pedido) {
    notification.remove();
    mostrarPedidoEliminado(pedido);
}

function mostrarPedidoEliminado(pedido) {
    const { nombre, telefono, direccion, platos } = pedido;

    const eliminado = document.createElement('div');
    eliminado.classList.add('deleted-notification');

    const orderDetails = document.createElement('div');
    orderDetails.classList.add('order-details');
    orderDetails.innerHTML = `<h4>${nombre}</h4>
                              <p><strong>Dirección:</strong> ${direccion}</p>
                              <p><strong>Teléfono:</strong> ${telefono}</p>`;
    
    const listaPlatos = document.createElement('ul');
    platos.forEach(plato => {
        const item = document.createElement('li');
        item.innerText = `${plato.nombre} x${plato.cantidad} - $${plato.precio}`;
        listaPlatos.appendChild(item);
    });
    
    orderDetails.appendChild(listaPlatos);
    eliminado.appendChild(orderDetails);

    const containerEliminados = document.querySelector('.eliminated-container');
    containerEliminados.appendChild(eliminado);
    containerEliminados.scrollTop = containerEliminados.scrollHeight;
}

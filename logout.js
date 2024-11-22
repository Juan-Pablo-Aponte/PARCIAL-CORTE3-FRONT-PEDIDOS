document.getElementById('logoutButton').addEventListener('click', () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    alert('Sesión cerrada con éxito');
    window.location.href = 'login.html';
});

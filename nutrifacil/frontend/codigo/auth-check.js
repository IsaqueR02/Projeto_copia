
// Função para verificar se o usuário está autenticado
function verificarAutenticacao() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        // Redirecionar para página de login
        window.location.href = 'Login.html';
        return false;
    }
    return true;
}

// Função para fazer logout
function logout() {
    localStorage.removeItem('authToken');
    window.location.href = 'Login.html';
}
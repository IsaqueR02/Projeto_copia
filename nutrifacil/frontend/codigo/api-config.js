const API_BASE_URL = 'http://localhost:3000'; // Ajuste conforme a URL do seu backend

const API = {
    // Endpoints de usuário
    USUARIOS: {
        CADASTRO: `${API_BASE_URL}/usuarios`,
        LOGIN: `${API_BASE_URL}/usuarios/login`
    },
    // Endpoints para cálculos
    CALCULOS: {
        IMC: `${API_BASE_URL}/calculos/imc`,
        METABOLISMO: `${API_BASE_URL}/calculos/metabolismo`,
        AGUA: `${API_BASE_URL}/calculos/agua`
    },
    // Endpoints para dietas
    DIETAS: {
        LISTAR: `${API_BASE_URL}/dietas`,
        CRIAR: `${API_BASE_URL}/dietas/criar`
    }
};
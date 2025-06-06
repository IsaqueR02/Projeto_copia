// Função para fazer requisições genéricas à API
async function fetchAPI(url, method = 'GET', data = null) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Se tiver token de autenticação salvo, incluir no cabeçalho
    const token = localStorage.getItem('authToken');
    if (token) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    // Se tiver dados, adiciona ao corpo da requisição
    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);
        
        // Verificar se a resposta está ok (status 2xx)
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Ocorreu um erro na requisição');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
}

// Funções específicas para cada operação
const APIService = {
    // Usuários
    usuarios: {
        cadastrar: async (dadosUsuario) => {
            return fetchAPI(API.USUARIOS.CADASTRO, 'POST', dadosUsuario);
        },
        login: async (credentials) => {
            const response = await fetchAPI(API.USUARIOS.LOGIN, 'POST', credentials);
            // Salva o token no localStorage se estiver presente na resposta
            if (response.token) {
                localStorage.setItem('authToken', response.token);
            }
            return response;
        }
    },
    
    // Cálculos
    calculos: {
        calcularIMC: async (peso, altura) => {
            return fetchAPI(API.CALCULOS.IMC, 'POST', { peso, altura });
        },
        calcularMetabolismo: async (peso, altura, idade, sexo) => {
            return fetchAPI(API.CALCULOS.METABOLISMO, 'POST', { peso, altura, idade, sexo });
        },
        calcularAgua: async (peso) => {
            return fetchAPI(API.CALCULOS.AGUA, 'POST', { peso });
        }
    },
    
    // Dietas
    dietas: {
        listar: async () => {
            return fetchAPI(API.DIETAS.LISTAR);
        },
        criar: async (dadosDieta) => {
            return fetchAPI(API.DIETAS.CRIAR, 'POST', dadosDieta);
        }
    }
};
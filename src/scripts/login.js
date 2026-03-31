// Função para obter parâmetros da URL
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Configurar informações do perfil na página de login
function setupProfileInfo() {
    const profileImage = document.getElementById('profile-image');
    const profileName = document.getElementById('profile-name');
    
    const image = getUrlParameter('image');
    const name = getUrlParameter('name');
    
    if (image) {
        // Ajusta o caminho da imagem para funcionar em diferentes ambientes
        let imagePath = image;
        
        // Se estiver no GitHub Pages, precisa ajustar o caminho base
        if (window.location.hostname.includes('github.io')) {
            const pathParts = window.location.pathname.split('/');
            const repoName = pathParts[1]; // Nome do repositório
            imagePath = `/${repoName}/${image}`;
        }
        
        profileImage.src = imagePath;
        
        // Debug: mostra o caminho no console
        console.log('Image path:', imagePath);
    }
    
    if (name) {
        profileName.textContent = name;
    }
}

// Manipular o login
function handleLogin(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    
    // Simulação de verificação de senha
    if (password === '1234') {
        // Redirecionar para a página principal ou dashboard
        alert('Login realizado com sucesso!');
        // window.location.href = 'dashboard.html';
    } else {
        // Mostrar mensagem de erro
        const input = document.getElementById('password');
        input.style.borderColor = '#e50914';
        input.placeholder = 'Senha incorreta. Tente novamente.';
        input.value = '';
        
        setTimeout(() => {
            input.style.borderColor = '#666';
            input.placeholder = 'Senha';
        }, 3000);
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    setupProfileInfo();
});

// Manipular o envio do formulário de esqueci senha
function handleForgotPassword(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const successMessage = document.querySelector('.success-message');
    const errorMessage = document.querySelector('.error-message');
    const submitBtn = document.querySelector('.forgot-btn');
    
    // Simulação de envio
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        // Simulação de verificação de email
        if (email && email.includes('@')) {
            // Mostrar mensagem de sucesso
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            
            // Limpar formulário
            document.getElementById('email').value = '';
            
            // Mudar texto do botão
            submitBtn.textContent = 'Email enviado!';
            submitBtn.style.background = '#ffffff';
            submitBtn.style.color = '#000';
            
            // Desabilitar formulário
            document.getElementById('email').disabled = true;
            submitBtn.disabled = true;
            
            // Redirecionar após 3 segundos
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 3000);
            
        } else {
            // Mostrar mensagem de erro
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            
            // Restaurar botão
            submitBtn.textContent = 'Enviar instruções';
            submitBtn.disabled = false;
            
            // Limpar erro após 3 segundos
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        }
    }, 1500);
}

// Adicionar mensagens de sucesso e erro dinamicamente
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('forgot-form');
    
    // Criar elementos de mensagem
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = 'Instruções enviadas para seu email!';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = 'Email não encontrado. Tente novamente.';
    
    // Inserir antes do formulário
    form.parentNode.insertBefore(successDiv, form);
    form.parentNode.insertBefore(errorDiv, form);
});

# VendraX - Login Interface

Uma interface de login inspirada na tela "Quem está assistindo?" da Netflix, desenvolvida com HTML, CSS e JavaScript puro.

## 🎬 Sobre o Projeto

O VendraX é uma recriação moderna da interface de seleção de perfis da Netflix, com funcionalidades completas de login e recuperação de senha. O projeto demonstra habilidades de desenvolvimento frontend com design responsivo e animações suaves.

## ✨ Funcionalidades

### 📱 Tela Principal
- **Seleção de Perfis**: Interface com múltiplos perfis de usuário
- **Design Responsivo**: Adaptável para desktop, tablet e mobile
- **Animações Suaves**: Efeitos hover e transições elegantes
- **Perfil "Criar Conta"**: Opção para adicionar novos usuários com ícone de +

### 🔐 Sistema de Login
- **Tela de Login Personalizada**: Exibe foto e nome do perfil selecionado
- **Validação de Senha**: Sistema de autenticação (senha padrão: `1234`)
- **Feedback Visual**: Mensagens de erro e sucesso
- **Design Moderno**: Cores temáticas e bordas arredondadas

### 🔄 Recuperação de Senha
- **Tela "Esqueci a Senha"**: Interface para recuperação de conta
- **Validação de Email**: Verificação de formato de email
- **Simulação de Envio**: Feedback visual do processo
- **Redirecionamento Automático**: Retorno ao login após sucesso

## 🎨 Design e UI/UX

- **Paleta de Cores**: Tema escuro inspirado na Netflix com acentos em verde (#09e577)
- **Tipografia**: Fontes modernas e legíveis
- **Layout Flexbox**: Alinhamento perfeito e distribuição uniforme
- **Responsividade**: Breakpoints para 900px e 600px
- **Acessibilidade**: Atributos ARIA e navegação por teclado

## 🚀 Tecnologias Utilizadas

- **HTML5**: Semântico e acessível
- **CSS3**: Flexbox, animações, responsividade
- **JavaScript Vanilla**: ES6+, manipulação DOM, eventos
- **Design Patterns**: Módulos, funções puras, tratamento de erros

## 📁 Estrutura do Projeto

```
├── index.html          # Tela principal de seleção de perfis
├── login.html          # Tela de login com perfil selecionado
├── forgot.html         # Tela de recuperação de senha
├── style.css           # Estilos gerais e da página principal
├── login.css           # Estilos das telas de login e esqueci senha
├── forgot.css          # Estilos específicos da tela de esqueci senha
├── login.js            # Funcionalidades da tela de login
├── forgot.js           # Funcionalidades da tela de esqueci senha
└── assets/             # Imagens dos perfis
    ├── perfil-1.jpg
    ├── perfil-2.jpg
    ├── perfil-3.jpg
    └── perfil-4.jpg
```

## 🎯 Como Usar

### 1. Seleção de Perfil
- Acesse `index.html`
- Escolha um dos perfis disponíveis
- Clique para ir para a tela de login

### 2. Login
- Digite a senha `1234` para acessar
- Use "Esqueceu a senha?" se necessário

### 3. Recuperação de Senha
- Digite qualquer email válido
- Aguarde o processamento
- Será redirecionado automaticamente

## 🔧 Personalização

### Alterar Perfis
Edite os links em `index.html`:
```html
<a href="login.html?image=/assets/perfil-1.jpg&name=Seu%20Nome">
```

### Mudar Senha Padrão
Altere em `login.js`:
```javascript
if (password === 'sua-nova-senha') {
    // Login bem-sucedido
}
```

### Personalizar Cores
Modifique as variáveis em `style.css`:
```css
:root {
    --primary-color: #09e577;
    --background-dark: #141414;
    --text-light: #ffffff;
}
```

## 📱 Responsividade

- **Desktop (>900px)**: Layout em grade horizontal
- **Tablet (600-900px)**: Layout adaptado com espaçamento reduzido
- **Mobile (<600px)**: Layout vertical com perfis em coluna

## 🌟 Destaques Técnicos

- **Sem Frameworks**: JavaScript puro, sem dependências externas
- **Performance Otimizada**: CSS eficiente, DOM manipulation mínima
- **Cross-browser**: Compatível com navegadores modernos
- **Acessível**: Navegação por teclado e leitores de tela
- **SEO Friendly**: Semântica HTML5 adequada

## 🎮 Demonstração

1. **Tela Principal**: Seleção visual dos perfis
2. **Tela de Login**: Interface personalizada com foto do perfil
3. **Tela de Esqueci Senha**: Processo de recuperação simulado
4. **Feedback Visual**: Animações e transições suaves

## 🔮 Futuras Melhorias

- [ ] Sistema de temas (claro/escuro)
- [ ] Validação de formulários mais robusta
- [ ] Animações avançadas com CSS animations
- [ ] Integração com backend real
- [ ] Sistema de notificações toast
- [ ] Suporte a múltiplos idiomas

## 📄 Licença

Este projeto é open source e está disponível sob a [MIT License](LICENSE).

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests
- Compartilhar o projeto

---

**Desenvolvido com ❤️ durante a Imersão Front-end** 

*Inspiração: Netflix Interface Design*

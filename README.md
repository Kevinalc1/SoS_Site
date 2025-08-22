# Site para a Vereadora Suzi Racinha - SOS Tudo pelo Social

Site moderno e responsivo desenvolvido para a Vereadora Suzi Racinha de Paulista-PE, apresentando seus programas sociais e facilitando o contato com a comunidade.

## 🎨 Design e Características

- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Paleta de Cores**: Baseada na logo fornecida (rosa predominante)
- **Tipografia Moderna**: Fontes claras e legíveis
- **Navegação Intuitiva**: Menu fixo com links suaves entre seções
- **Interatividade**: Hover effects, transições suaves e micro-interações

## 📱 Seções do Site

### 1. **Página Inicial (Home)**
- Apresentação da vereadora
- Missão e visão do projeto "SOS Tudo pelo Social"
- Cards destacando as principais áreas de atuação

### 2. **Sobre**
- História e trajetória da vereadora
- Causas que defende
- Missão pessoal e política

### 3. **Programas e Ações**
8 programas sociais com imagens ilustrativas:
- **Educar e Incluir**: Educação para crianças neurodivergentes
- **Lute como uma Mãe Atípica**: Empoderamento de mães atípicas
- **Nutrir com Afeto**: Atendimento nutricional especializado
- **Cuidar +**: Atenção integral à saúde do idoso
- **Nutrindo Vidas**: Distribuição de alimentos e kits
- **Sorriso do Bem**: Atendimento odontológico gratuito
- **SOS Direitos**: Apoio jurídico e documental
- **Campanhas Emergenciais**: Ajuda em situações de urgência

### 4. **Galeria**
- Fotos das ações realizadas
- Modal interativo para visualização ampliada
- Navegação entre imagens

### 5. **Instagram Feed**
- Simulação de posts do Instagram
- Links para redes sociais
- Call-to-action para seguir nas redes

### 6. **Serviços e Contato**
- Lista completa de serviços oferecidos
- Informações de contato detalhadas
- Formulário funcional de contato
- Horários de atendimento

### 7. **Rodapé**
- Links rápidos para navegação
- Informações de contato
- Lista de todos os programas
- Copyright e créditos

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework JavaScript moderno
- **Vite**: Build tool rápido e eficiente
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide React**: Ícones modernos e consistentes
- **Framer Motion**: Animações suaves (pré-configurado)

## 📦 Estrutura do Projeto

```
suzi-racinha-site/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/            # Imagens e recursos
│   │   ├── logosemfundo.png
│   │   └── programs/      # Imagens dos programas
│   ├── components/        # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── Gallery.jsx
│   │   ├── InstagramFeed.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos personalizados
│   └── main.jsx          # Ponto de entrada
├── dist/                 # Build de produção
├── package.json          # Dependências do projeto
└── README.md            # Esta documentação
```

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou pnpm

### Instalação e Execução

1. **Instalar dependências:**
   ```bash
   cd suzi-racinha-site
   npm install
   ```

2. **Executar em modo desenvolvimento:**
   ```bash
   npm run dev
   ```
   O site estará disponível em `http://localhost:5173`

3. **Gerar build de produção:**
   ```bash
   npm run build
   ```
   Os arquivos otimizados estarão na pasta `dist/`

## 🌐 Deploy

### Opções de Deploy Gratuito

1. **Netlify** (Recomendado)
   - Faça upload da pasta `dist/` no Netlify
   - Ou conecte o repositório Git para deploy automático

2. **Vercel**
   - Importe o projeto no Vercel
   - Deploy automático a cada commit

3. **GitHub Pages**
   - Suba o código para um repositório GitHub
   - Configure GitHub Pages para usar a pasta `dist/`

### Deploy Manual
- Faça upload dos arquivos da pasta `dist/` para qualquer servidor web
- Configure o servidor para servir `index.html` como página padrão

## 📝 Personalização

### Alterando Cores
Edite o arquivo `src/App.css` na seção `:root` para modificar as cores:
```css
--primary: oklch(0.6 0.2 330); /* Rosa principal */
```

### Adicionando Conteúdo
- **Programas**: Edite `src/components/Programs.jsx`
- **Galeria**: Adicione imagens em `src/assets/programs/`
- **Contato**: Modifique `src/components/Contact.jsx`

### Integração Real com Instagram
Para conectar com o Instagram real, você precisará:
1. Configurar Instagram Basic Display API
2. Obter token de acesso
3. Modificar `src/components/InstagramFeed.jsx`

## 📱 Responsividade

O site foi desenvolvido com abordagem "mobile-first" e é totalmente responsivo:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🎯 Funcionalidades Implementadas

✅ Design responsivo completo
✅ Navegação suave entre seções
✅ Galeria interativa com modal
✅ Formulário de contato funcional
✅ Feed do Instagram (simulado)
✅ Links para redes sociais
✅ Otimização para SEO básico
✅ Carregamento rápido
✅ Acessibilidade básica

## 📞 Suporte

Para dúvidas sobre o código ou modificações, consulte:
- Documentação do React: https://react.dev
- Documentação do Tailwind: https://tailwindcss.com
- Documentação do Vite: https://vitejs.dev

## 📄 Licença

Este projeto foi desenvolvido por Kevin Alcantara, especificamente para a Vereadora Suzi Racinha e seu uso é restrito aos fins acordados.

---

**Desenvolvido com ❤️ para a comunidade de Paulista-PE**


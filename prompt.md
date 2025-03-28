# Portfólio Yuri Fernandes

## Objetivo Geral
Desenvolvimento de um portfólio profissional e moderno que destaque minhas habilidades como Desenvolvedor, Analista de Dados Senior e Engenheiro de Dados, com foco em projetos de Power BI e GitHub. O design será inspirado na interface da landing page do GitHub, com elementos modernos, animações suaves e efeitos neon.
Obs.: Não criar notebook com tutorial de nada nem mexer no readme-file.

## Stack Tecnológica
- Frontend: React.js
- Backend: Node.js
- Estilização: Styled-components
- Animações: GSAP
- Gerenciamento de Estado: Context API

## Esquema de Cores
- Preto (#000000) e branco (#FFFFFF) como cores base
- Tons amarelados para destaque
- Efeitos neon para elementos interativos
- Glassmorphism em componentes específicos

# Etapas de Desenvolvimento

## Etapa 1: Configuração do Projeto
### Setup Inicial
- Criação da estrutura de diretórios
- Inicialização do projeto React com Vite
- Configuração do Node.js backend
- Instalação das dependências principais:
  - styled-components
  - gsap
  - react-router-dom
  - express
- Configuração do ESLint e Prettier
- Setup do ambiente de desenvolvimento
- Setup do ambiente para o deploy com todas as dependências necessárias.
- Configuração do Git e .gitignore

## Estrutura de Arquivos
```
portfolio/
├── client/                     # Frontend React
│   ├── public/
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src/
│   │   ├── components/        # Componentes React
│   │   ├── pages/            # Páginas do site
│   │   ├── styles/           # Styled-components
│   │   ├── contexts/         # Context API
│   │   ├── services/         # APIs e integrações
│   │   ├── hooks/            # Custom hooks
│   │   ├── assets/           # Imagens e recursos
│   │   └── utils/            # Funções utilitárias
│   └── package.json
│
├── server/                    # Backend Node.js
│   ├── src/
│   │   ├── controllers/      # Controladores
│   │   ├── models/           # Modelos MongoDB
│   │   ├── routes/           # Rotas da API
│   │   ├── config/          # Configurações
│   │   └── utils/           # Utilitários
│   └── package.json
│
└── README.md
```


## Etapa 2: Desenvolvimento da Identidade Visual
### Logo e Favicon
- Design minimalista representando análise de dados
- Elemento principal: Combinação das iniciais "YF" com símbolos de dados/código
- Versões:
  - Logo principal para header
  - Favicon simplificado
- Cores: 
  - Principal: Amarelo neon (#FFD700)
  - Secundária: Branco (#FFFFFF)
  - Fundo: Transparente/preto (#000000)
- Formatos: SVG, ICO (16x16, 32x32), PNG transparente
- Estilo: Linhas geométricas, elementos de dados/análise

## Etapa 3: Header e Navegação
- Implementação do header fixo com efeito glassmorphism
- Logo/Nome "Yuri Fernandes"
- Menu de navegação responsivo
- Links para GitHub e Instagram com efeitos neon
- Smooth scroll para seções

## Etapa 4: Hero Section
- Layout da seção principal
- Integração da foto profissional
- Animação de texto com skills
- CTA principal
- Efeitos parallax

## Etapa 5: Sobre Mim
- Timeline animada
- Lista de competências técnicas
- Indicadores visuais de proficiência
- Biografia profissional concisa

## Etapa 6: Power BI Showcase
- Grid de dashboards
- Área para embed do Power BI
- Descrições dos projetos
- Sistema de preview

## Etapa 7: Projetos GitHub
- Cards interativos (3 projetos principais)
- Sistema de preview
- Integração com API do GitHub
- Efeitos de hover e flip

## Etapa 8: Experiência Profissional
- Timeline de empresas
- Lista de certificações
- Destaque de conquistas
- Animações de reveal

## Etapa 9: Informações Pessoais
- Layout em grid
- Ícones animados
- Soft skills com visual diferenciado
- Seção de objetivos

## Etapa 10: Footer
- Links para redes sociais
- Informações de contato
- Copyright dinâmico
- Links rápidos

## Observações Técnicas
- Performance e otimização
- Responsividade
- Cross-browser compatibility
- Documentação clara
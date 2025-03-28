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

link foto perfil: https://raw.githubusercontent.com/yurivfernandes/portifolio/refs/heads/main/client/public/fotos/hero.jpeg
link foto 2: https://raw.githubusercontent.com/yurivfernandes/portifolio/refs/heads/main/client/public/fotos/hero2.jpeg
link foto 3: https://raw.githubusercontent.com/yurivfernandes/portifolio/refs/heads/main/client/public/fotos/interagindo.jpeg

MEU GITHUB: https://github.com/yurivfernandes/
MEU INSTAGRAM: https://www.instagram.com/yurivfernandes/
MEU LINKEDIN: https://www.linkedin.com/in/yurianalistabi/
MEU WHATSAPP: https://wa.me/5531987798823
MEU TELEFONE: (31)98779-8823

projeto 1 pbo: https://app.powerbi.com/view?r=eyJrIjoiNDI0OWJhNzYtMmEwOC00ZWU1LWExNzktOTc5ZTk5Y2QxZTgzIiwidCI6ImU0MWIzZGQzLWIzMWEtNDU1MC1hNzg0LWY3YjBmYTZhMGIwNiJ9
Descrição: Enfrentei o desafio de criar um dashboard de análise de vendas para a BUH Fashion, mergulhando em um extenso processo de pesquisa e desenvolvimento. O verdadeiro destaque foi superar as complexidades da integração com a API do sistema Totvs Moda, uma tarefa que demandou uma abordagem única. Navegar pela complexidade dessa API, especialmente com seu método POST para retornar dados, exigiu um entendimento profundo e inúmeras iterações.

Ao superar esses obstáculos técnicos, o dashboard resultante tornou-se uma ferramenta essencial para a BUH Fashion. Agora, a empresa pode analisar de forma abrangente as operações de vendas e estoque, tomando decisões estratégicas fundamentadas em dados em tempo real. Este projeto não apenas simplificou processos internos, mas também gerou insights valiosos que impulsionaram a eficiência operacional e reduziram custos significativamente. A conquista final foi proporcionar à BUH Fashion uma visão clara e informada, capacitando a empresa a prosperar no dinâmico cenário da moda. O dashboard pode ser visualizado no link em anexo, com dados fictícios obviamente.

projeto 2 pbi:https://app.powerbi.com/view?r=eyJrIjoiYWJjNjcyZWEtNDU1MS00ODk4LTg4MjAtYTAzMDg3ZTg0MThmIiwidCI6ImU0MWIzZGQzLWIzMWEtNDU1MC1hNzg0LWY3YjBmYTZhMGIwNiJ9
descrição:
Na MCD, embarquei em um projeto desafiador que envolveu a criação de um dashboard abrangente para análise de vendas e estoque, baseado na API do sistema Linx. O principal desafio foi a complexidade da API, que requer o uso do método POST e a passagem de parâmetros no corpo da solicitação como um XML. Esta foi uma tarefa intensiva, especialmente considerando minha limitada familiaridade com a linguagem XML.

O esforço dedicado valeu a pena, resultando em um dashboard excepcional que se tornou uma ferramenta essencial para os gestores das lojas. Agora, eles podem entender detalhadamente os KPIs de vendas, monitorar o estoque de produtos e tomar decisões estratégicas sobre as promoções mais eficazes. Este projeto não apenas superou desafios técnicos, mas também fortaleceu minha habilidade em lidar com tecnologias complexas e adaptar soluções inovadoras para atender às necessidades específicas do cliente.

A contribuição desse trabalho vai além da tecnologia; ele impacta diretamente a capacidade da MCD de tomar decisões informadas e estratégicas para impulsionar o sucesso das lojas. Estou orgulhoso do resultado alcançado e da maneira como meu trabalho continuou a agregar valor significativo ao ambiente de negócios da MCD.

Projeto 3 pbi: https://app.powerbi.com/view?r=eyJrIjoiYmUwMDAwMTQtMThlNi00NzU2LTk2MmEtMTAxYTIwZTU1ZWM0IiwidCI6ImU0MWIzZGQzLWIzMWEtNDU1MC1hNzg0LWY3YjBmYTZhMGIwNiJ9&pageName=ReportSection6e782eb147d1a761619c
Descrição:
Relatório de Chamados e Dispositivos - Statera TI: Este relatório desempenha um papel essencial na tomada de decisões e na análise diária dos dados por nossa equipe e gestão de TI. Diferenciando-se por ser alimentado automaticamente por APIs externas, eliminando a dependência de arquivos de Excel ou bancos de dados no Power BI, a ferramenta oferece uma visão abrangente da operação de atendimento aos clientes da Statera TI.

O primeiro dashboard possibilita uma análise detalhada do atual quadro de chamados, identificando as categorias, subcategorias, clientes e tipos de tickets com maior incidência. No segundo dashboard, números cruciais sobre a evolução mensal do SLA, tempo médio de atendimento, nota de satisfação do cliente e outros são apresentados, permitindo uma avaliação abrangente do desempenho operacional.

Além disso, o relatório oferece insights valiosos sobre a equipe, apresentando uma performance resumida dos técnicos e indicando em qual fila cada técnico está atendendo, sinalizando a necessidade de contratações específicas nos níveis 1, 2 ou 3. A análise de tickets por mesas de trabalho e a comparação de dados de inventário entre os sistemas Milvus e RMM também são abordadas.

A versatilidade desse dashboard completo possibilita uma série de análises profundas, culminando em decisões estratégicas fundamentadas. Destacamos um caso em que a análise detalhada dos relatórios revelou a necessidade de mais técnicos de nível 2 do que de nível 1 em determinado período, otimizando recursos e melhorando a eficiência operacional. Importante mencionar que os dados dos clientes foram ocultados para preservar a confidencialidade, e o relatório está disponível na versão mobile para acesso fácil e ágil em qualquer lugar.

link imagem projeto1:https://raw.githubusercontent.com/yurivfernandes/portifolio/refs/heads/main/client/public/dashboards/Projeto1.png
link imagem projeto2: https://raw.githubusercontent.com/yurivfernandes/portifolio/refs/heads/main/client/public/dashboards/Projeto2.png
link imagem projeto3: https://raw.githubusercontent.com/yurivfernandes/portifolio/refs/heads/main/client/public/dashboards/Projeto3.png
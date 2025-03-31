// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Garantir que todos os elementos estejam visíveis por padrão
document.addEventListener('DOMContentLoaded', () => {
  gsap.set('body', { visibility: 'visible' });
  
  // Inicializa as animações com delay para garantir que tudo seja carregado
  setTimeout(() => {
    setupAnimations();
  }, 100);
});

// Configuração para navegação com scroll suave
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

// Atualiza a navegação durante o scroll
function updateNavigation() {
  const scrollPos = window.scrollY + 200;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      const currentId = section.getAttribute('id');
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Atualiza a navegação quando a página é rolada
window.addEventListener('scroll', updateNavigation);

// Configuração das transições fade entre seções
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    // Adiciona transição fade-out a todos os sections
    gsap.to(sections, {
      opacity: 0.3,
      duration: 0.3,
      ease: 'power1.out'
    });
    
    // Adiciona transição fade-in para a seção alvo
    gsap.to(targetSection, {
      opacity: 1,
      duration: 0.5,
      ease: 'power1.in',
      onComplete: () => {
        // Volta a visibilidade dos outros sections após a transição
        gsap.to(sections, {
          opacity: 1,
          duration: 0,
          overwrite: true
        });
      }
    });
    
    // Rola suavemente para a seção
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Funcionalidade das abas com animações
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    
    // Atualiza os botões
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Verificar se a aba selecionada é a de repositórios GitHub
    // e carregar os projetos apenas quando esta aba for selecionada
    if (target === 'github-tab') {
      const githubGrid = document.querySelector('.github-grid');
      // Verificar se já carregamos os repositórios antes de fazer a chamada à API
      if (!githubGrid.hasChildNodes() || githubGrid.dataset.loaded !== 'true') {
        // Mostrar indicador de carregamento
        githubGrid.innerHTML = '<div class="loading-indicator"><i class="fas fa-spinner fa-spin"></i> Carregando repositórios...</div>';
        // Chamar API do GitHub
        fetchGitHubProjects();
      }
    }
    
    // Animação de saída
    gsap.to('.tab-content.active', {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        // Atualiza o conteúdo
        tabContents.forEach(content => {
          content.classList.remove('active');
          if (content.id === target) {
            content.classList.add('active');
            // Animação de entrada
            gsap.fromTo(content, 
              { opacity: 0, y: 20 },
              { 
                opacity: 1, 
                y: 0, 
                duration: 0.5,
                ease: 'power2.out'
              }
            );
            
            // Anima os cards do conteúdo ativo
            const cards = content.querySelectorAll('.project-card');
            gsap.fromTo(cards, 
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out'
              }
            );
          }
        });
      }
    });
  });
});

// Função simplificada para carregar o token do GitHub sem depender do dotenv
async function loadGitHubToken() {
  try {
    // Em ambiente de produção, usamos a variável de ambiente da aplicação
    if (typeof process !== 'undefined' && process.env && process.env.GITHUB_TOKEN) {
      return process.env.GITHUB_TOKEN;
    }
    
    // Em ambiente de desenvolvimento, tentamos obter do localStorage
    const token = localStorage.getItem('GITHUB_TOKEN');
    if (token) return token;
    
    // Retornar null se não encontrar
    console.warn('Token do GitHub não encontrado. Configure o token para evitar limites de requisição da API.');
    return null;
  } catch (error) {
    console.error('Erro ao carregar token do GitHub:', error);
    return null;
  }
}

// Função para buscar e exibir projetos do GitHub
async function fetchGitHubProjects() {
  try {
    const githubGrid = document.querySelector('.github-grid');
    // Exibir indicador de carregamento
    githubGrid.innerHTML = '<div class="loading-indicator"><i class="fas fa-spinner fa-spin"></i> Carregando repositórios...</div>';
    
    const token = await loadGitHubToken();
    
    // Configuração do cabeçalho com autenticação obrigatória
    const headers = {
      'Accept': 'application/vnd.github.v3+json'
    };
    
    if (token) {
      headers['Authorization'] = `token ${token}`;
      console.log('Usando autenticação para API do GitHub');
    } else {
      console.warn('Token do GitHub não encontrado. As requisições podem ser limitadas pela API.');
    }
    
    // Buscar todos os repositórios do usuário usando a API autenticada
    const response = await fetch('https://api.github.com/users/yurivfernandes/repos', {
      headers: headers
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Erro na API do GitHub: ${errorData.message}`);
    }
    
    // Verificar se estamos atingindo o limite de taxa da API
    const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining');
    if (rateLimitRemaining && parseInt(rateLimitRemaining) < 10) {
      console.warn(`Aviso: Restam apenas ${rateLimitRemaining} requisições à API do GitHub.`);
    }
    
    let repos = await response.json();
    
    // Verificar se a resposta contém um erro
    if (repos.message) {
      throw new Error(`Erro na API do GitHub: ${repos.message}`);
    }
    
    // Ordenar os repositórios pelo número de estrelas (do maior para o menor)
    repos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    
    // Limitar a 6 repositórios
    repos = repos.slice(0, 6);
    
    githubGrid.innerHTML = '';
    
    // Verificar se temos repositórios para exibir
    if (repos.length === 0) {
      githubGrid.innerHTML = '<div class="project-card github-card"><h3>Nenhum repositório encontrado</h3></div>';
      githubGrid.dataset.loaded = 'true';
      return;
    }
    
    // Mapear linguagens para suas cores correspondentes
    const languageColors = {
      "JavaScript": "#f1e05a",
      "TypeScript": "#3178c6",
      "HTML": "#e34c26",
      "CSS": "#563d7c",
      "Python": "#3572A5",
      "Java": "#b07219",
      "C": "#555555",
      "C++": "#f34b7d",
      "C#": "#178600",
      "Ruby": "#701516",
      "PHP": "#4F5D95",
      "Go": "#00ADD8",
      "Swift": "#ffac45",
      "Kotlin": "#A97BFF",
      "Dart": "#00B4AB",
      "Rust": "#DEA584",
      "Shell": "#89e051",
      "Objective-C": "#438eff",
      "Vue": "#41b883"
    };
    
    // Para cada repositório, buscar detalhes adicionais incluindo as linguagens
    for (const repo of repos) {
      try {
        // Obter detalhes das linguagens do repositório
        const languagesResponse = await fetch(`https://api.github.com/repos/${repo.full_name}/languages`, {
          headers: headers
        });
        
        if (!languagesResponse.ok) {
          throw new Error(`Erro ao obter linguagens: ${languagesResponse.statusText}`);
        }
        
        const languages = await languagesResponse.json();
        
        // Converter linguagens em um array e pegar as 3 principais
        const languagesArray = Object.keys(languages);
        const topLanguages = languagesArray.slice(0, 3);
        
        const card = document.createElement('div');
        card.className = 'project-card github-card';
        
        // HTML com múltiplas linguagens
        let languagesHTML = '';
        if (topLanguages.length > 0) {
          languagesHTML = topLanguages.map(lang => {
            const color = languageColors[lang] || "#858585"; // cor padrão se não encontrar
            return `<span class="github-lang">
              <span class="lang-color" style="background-color: ${color};"></span>
              ${lang}
            </span>`;
          }).join(' ');
        } else {
          languagesHTML = '<span class="github-lang">N/A</span>';
        }
        
        card.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description || 'Sem descrição disponível.'}</p>
          <div class="github-stats">
            <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
            <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
            <span><i class="fas fa-eye"></i> ${repo.watchers_count}</span>
          </div>
          <div class="github-card-footer">
            <div class="github-languages">
              ${languagesHTML}
            </div>
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </div>
        `;
        
        githubGrid.appendChild(card);
      } catch (detailError) {
        console.error('Erro ao buscar detalhes do repositório:', detailError);
      }
    }
    
    // Marca que os dados foram carregados com sucesso
    githubGrid.dataset.loaded = 'true';
    
  } catch (error) {
    console.error('Erro ao buscar projetos do GitHub:', error);
    const githubGrid = document.querySelector('.github-grid');
    githubGrid.innerHTML = `<div class="project-card github-card">
      <h3>Erro ao carregar repositórios</h3>
      <p>${error.message || 'Não foi possível carregar os repositórios do GitHub.'}</p>
    </div>`;
    githubGrid.dataset.loaded = 'false';
  }
}

// Busca os projetos ao carregar a página
fetchGitHubProjects();

// Animações para a seção Skills
function setupSkillsAnimations() {
  const skillCards = document.querySelectorAll('.skill-card');
  const githubStats = document.querySelectorAll('.github-stats-card');
  
  // Animação responsiva para os skill cards
  gsap.from(skillCards, {
    scrollTrigger: {
      trigger: '#skills',
      start: 'top center+=100',
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out'
  });
  
  // Animar as barras de progresso quando entrarem na tela
  skillCards.forEach(card => {
    const skillLevel = card.querySelector('.skill-level');
    const widthValue = skillLevel.style.width;
    
    // Armazenar o valor original da largura
    const originalWidth = widthValue;
    
    // Iniciar com largura zero
    gsap.set(skillLevel, { width: 0 });
    
    ScrollTrigger.create({
      trigger: card,
      start: 'top bottom-=100',
      once: true,
      onEnter: () => {
        gsap.to(skillLevel, {
          width: originalWidth,
          duration: 1.5,
          ease: 'power2.out'
        });
      }
    });
  });
  
  // Animação para os GitHub stats cards
  gsap.from(githubStats, {
    scrollTrigger: {
      trigger: '.github-stats-container',
      start: 'top bottom-=50',
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  });
  
  // Adicionar media query para versão mobile das animações
  const mm = gsap.matchMedia();
  
  mm.add("(max-width: 768px)", () => {
    // Ajustes específicos para mobile
    gsap.from(skillCards, {
      scrollTrigger: {
        trigger: '#skills',
        start: 'top center+=100',
      },
      opacity: 0,
      y: 20, // Menor deslocamento em dispositivos móveis
      duration: 0.6, // Animação mais rápida em dispositivos móveis
      stagger: 0.08,
      ease: 'power2.out',
      overwrite: true
    });
    
    // GitHub stats têm aparência diferente em mobile
    gsap.from(githubStats, {
      scrollTrigger: {
        trigger: '.github-stats-container',
        start: 'top bottom-=20',
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      overwrite: true
    });
    
    return () => {
      // Limpeza quando o media query não se aplica mais
    };
  });
}

// Adicionar o setup de animações de skills na função principal de animações
function setupAnimations() {
  // Animações para a seção Sobre
  const sobreSection = document.querySelector('#sobre');
  
  gsap.from('#sobre', {
    scrollTrigger: {
      trigger: '#sobre',
      start: 'top center+=100',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out'
  });

  gsap.from('#sobre .about-text p', {
    scrollTrigger: {
      trigger: '#sobre',
      start: 'top center+=100',
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  });

  gsap.from('#sobre .about-photo', {
    scrollTrigger: {
      trigger: '#sobre',
      start: 'top center+=100',
    },
    opacity: 0,
    x: 50,
    duration: 0.8,
    ease: 'power2.out'
  });

  // Home - animações imediatas na carga da página
  gsap.from('.hero img', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });
  
  gsap.from('.hero h1', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    delay: 0.3,
    ease: 'power2.out'
  });
  
  gsap.from('.hero p', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    ease: 'power2.out'
  });

  // Adicionar animações para a seção de habilidades técnicas
  setupSkillsAnimations();
  
  // Configurar animações iniciais para as barras de skills caso a página carregue diretamente nessa seção
  if (window.location.hash === '#skills') {
    setTimeout(() => {
      document.querySelectorAll('.skill-card .skill-level').forEach(skillLevel => {
        const originalWidth = skillLevel.style.width;
        gsap.fromTo(skillLevel, 
          { width: 0 }, 
          { width: originalWidth, duration: 1.5, ease: 'power2.out' }
        );
      });
    }, 500);
  }
  
  // Projetos - animação baseada em scroll
  ScrollTrigger.batch('.project-card', {
    onEnter: batch => gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out',
      overwrite: true
    }),
    start: 'top bottom-=100',
    once: true
  });
  
  // Experiência - animação baseada em scroll
  ScrollTrigger.batch('.experience-photo', {
    onEnter: batch => gsap.to(batch, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power2.out',
      overwrite: true
    }),
    start: 'top bottom-=100',
    once: true
  });
  
  ScrollTrigger.batch('.experience-item', {
    onEnter: batch => gsap.to(batch, {
      opacity: 1,
      x: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out',
      overwrite: true
    }),
    start: 'top bottom-=100',
    once: true
  });
  
  // Contato - animação baseada em scroll
  ScrollTrigger.batch('.contact-info', {
    onEnter: batch => gsap.to(batch, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      overwrite: true
    }),
    start: 'top bottom-=100',
    once: true
  });
}

// Inicialização
window.addEventListener('load', () => {
  // Determinar a seção inicial
  const initialSection = window.location.hash ? window.location.hash.substring(1) : sections[0].id;
  
  // Ativa o link de navegação correspondente
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${initialSection}`) {
      link.classList.add('active');
    }
  });
  
  // Atualiza a navegação inicialmente
  updateNavigation();
});

// Corrigir comportamento dos links das redes sociais
const socialLinks = document.querySelectorAll('.header-social a');
socialLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Garante que o comportamento padrão seja evitado
    const url = link.getAttribute('href');
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer'); // Abre o link em uma nova aba
    }
  });
});
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

// Função para buscar e exibir projetos do GitHub
async function fetchGitHubProjects() {
  try {
    // Primeiro, buscar repositórios fixados
    const pinnedResponse = await fetch('https://api.github.com/users/yurivfernandes/starred');
    const starredRepos = await pinnedResponse.json();
    
    // Depois, buscar todos os repositórios
    const reposResponse = await fetch('https://api.github.com/users/yurivfernandes/repos?sort=updated');
    const allRepos = await reposResponse.json();
    
    // Combinar e priorizar repositórios favoritados
    const repos = [...starredRepos, ...allRepos]
      .filter((repo, index, self) => 
        index === self.findIndex((r) => r.id === repo.id)
      )
      .slice(0, 6);
    
    const githubGrid = document.querySelector('.github-grid');
    githubGrid.innerHTML = '';
    
    repos.forEach(repo => {
      const card = document.createElement('div');
      card.className = 'project-card github-card';
      
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || 'Sem descrição disponível.'}</p>
        <div class="github-stats">
          <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
          <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
          <span><i class="fas fa-eye"></i> ${repo.watchers_count}</span>
        </div>
        <div class="github-card-footer">
          <span class="github-lang">
            <span class="lang-color ${repo.language?.toLowerCase()}"></span>
            ${repo.language || 'N/A'}
          </span>
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>
      `;
      
      githubGrid.appendChild(card);
    });
  } catch (error) {
    console.error('Erro ao buscar projetos do GitHub:', error);
  }
}

// Busca os projetos ao carregar a página
fetchGitHubProjects();

// Animações para a seção Skills
function setupSkillsAnimations() {
  const skillCards = document.querySelectorAll('.skill-card');
  
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
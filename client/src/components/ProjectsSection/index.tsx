import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SectionContainer,
  Title,
  Description,
  ProjectGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectTech,
  ProjectLinks,
  ProjectLink,
  TechList
} from './styles';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/yurivf/repos?sort=stars&per_page=3');
        const repos = await response.json();
        setProjects(repos);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (projectsRef.current) {
      gsap.fromTo(
        projectsRef.current.children,
        { 
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top center+=100',
          }
        }
      );
    }
  }, [projects]);

  return (
    <SectionContainer id="projetos" ref={sectionRef}>
      <Title>Projetos Web</Title>
      <Description>
        Conheça alguns dos meus projetos em desenvolvimento web,
        utilizando as tecnologias mais recentes do mercado.
      </Description>

      <ProjectGrid ref={projectsRef}>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage 
              src={`https://raw.githubusercontent.com/yurivf/${project.name}/main/preview.png`} 
              alt={project.name}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder-project.jpg';
              }}
            />
            <ProjectContent>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechList>
                {project.topics.map((tech) => (
                  <ProjectTech key={tech}>{tech}</ProjectTech>
                ))}
              </TechList>
              <ProjectLinks>
                {project.homepage && (
                  <ProjectLink href={project.homepage} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </ProjectLink>
                )}
                <ProjectLink href={project.html_url} target="_blank" rel="noopener noreferrer">
                  GitHub
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </SectionContainer>
  );
}
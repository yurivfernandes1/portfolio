import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SectionContainer,
  Title,
  Description,
  ProjectContent,
  ProjectImage,
  ProjectLink,
} from './styles';

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <SectionContainer id="projetos" ref={sectionRef}>
      <Title>Desenvolvimento de Aplicações</Title>
      <Description>
        Explore meus projetos no GitHub e conheça um pouco mais sobre meu trabalho como desenvolvedor.
      </Description>

      <ProjectContent>
        <ProjectImage 
          src="https://raw.githubusercontent.com/yurivfernandes/portifolio/main/client/public/fotos/hero2.jpeg"
          alt="Projetos de desenvolvimento"
        />
        <ProjectLink 
          href="https://github.com/yurivf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Ver Projetos no GitHub
        </ProjectLink>
      </ProjectContent>
    </SectionContainer>
  );
}
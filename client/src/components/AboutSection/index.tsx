import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  AboutContainer, 
  AboutContent, 
  Title, 
  Biography,
  SkillsContainer,
  SkillCard
} from './styles';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Python', level: 95 },
  { name: 'Power BI', level: 92 },
  { name: 'ETL', level: 90 },
  { name: 'SQL', level: 88 },
  { name: 'Data Engineering', level: 85 },
  { name: 'React', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Node.js', level: 70 }
];

export function AboutSection() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillsRef.current) {
      gsap.fromTo(
        skillsRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top center+=100',
          },
        }
      );
    }
  }, []);

  return (
    <AboutContainer id="sobre">
      <AboutContent>
        <Title>Sobre Mim</Title>
        <Biography>
          Sou um profissional apaixonado por tecnologia e dados, com mais de 5 anos de experiência em análise de dados e desenvolvimento. 
          Como Analista de Dados na Vivo Vita, trabalho com projetos de análise e engenharia de dados que impactam diretamente a tomada de decisão estratégica da empresa. 
          Formado em Sistemas de Informação pela UNA e pós-graduando em Engenharia de Dados pela Anhanguera, combino habilidades técnicas sólidas com uma forte compreensão de negócios.
        </Biography>
        
        <SkillsContainer ref={skillsRef}>
          {skills.map((skill) => (
            <SkillCard key={skill.name} level={skill.level}>
              <h3>{skill.name}</h3>
              <div className="skill-level">
                <div className="skill-progress" style={{ width: `${skill.level}%` }} />
              </div>
            </SkillCard>
          ))}
        </SkillsContainer>
      </AboutContent>
    </AboutContainer>
  );
}
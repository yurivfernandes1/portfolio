import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  AboutContainer, 
  AboutContent, 
  Title, 
  Biography,
  SkillsContainer,
  SkillCard,
  TimelineContainer,
  TimelineItem,
  TimelineDot,
  TimelineContent
} from './styles';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Power BI', level: 95 },
  { name: 'SQL', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'Data Engineering', level: 90 },
  { name: 'ETL', level: 85 }
];

const timeline = [
  {
    year: '2023',
    title: 'Senior Data Engineer',
    description: 'Liderança em projetos de transformação de dados e implementação de soluções em Power BI.'
  },
  {
    year: '2021',
    title: 'Data Analyst Lead',
    description: 'Desenvolvimento de dashboards e análises avançadas para tomada de decisão.'
  },
  {
    year: '2019',
    title: 'Frontend Developer',
    description: 'Desenvolvimento de aplicações web com React e TypeScript.'
  }
];

export function AboutSection() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillsRef.current && timelineRef.current) {
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

      gsap.fromTo(
        timelineRef.current.children,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.3,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
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
          Sou um profissional apaixonado por tecnologia e dados, com mais de 5 anos de experiência
          em desenvolvimento web e análise de dados. Minha expertise abrange desde o desenvolvimento
          frontend com React até a engenharia de dados e criação de soluções em Power BI.
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

        <TimelineContainer ref={timelineRef}>
          {timeline.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineDot />
              <TimelineContent>
                <h3>{item.year}</h3>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </AboutContent>
    </AboutContainer>
  );
}
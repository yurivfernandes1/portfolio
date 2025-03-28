import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBrain, FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa';
import {
  SectionContainer,
  Title,
  GridContainer,
  InfoCard,
  IconWrapper,
  CardTitle,
  CardContent,
  SkillsContainer,
  SkillItem,
  SkillBar,
  SkillProgress,
  ObjectivesContainer,
  Objective
} from './styles';

const softSkills = [
  { name: 'Liderança', level: 90, icon: <FaUsers /> },
  { name: 'Resolução de Problemas', level: 95, icon: <FaBrain /> },
  { name: 'Inovação', level: 85, icon: <FaLightbulb /> },
  { name: 'Análise Estratégica', level: 92, icon: <FaChartLine /> }
];

const objectives = [
  'Liderar projetos de transformação digital',
  'Desenvolver soluções inovadoras em BI',
  'Compartilhar conhecimento e mentoria'
];

export function PersonalSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      cardsRef.current?.children || [],
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top center+=100"
        }
      }
    );

    // Animação das barras de progresso
    gsap.fromTo(
      skillsRef.current?.querySelectorAll('.skill-progress') || [],
      {
        width: 0
      },
      {
        width: "var(--progress)",
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top center+=100"
        }
      }
    );
  }, []);

  return (
    <SectionContainer id="personal" ref={sectionRef}>
      <Title>Informações Pessoais</Title>

      <GridContainer ref={cardsRef}>
        <InfoCard>
          <IconWrapper>
            <FaBrain />
          </IconWrapper>
          <CardTitle>Soft Skills</CardTitle>
          <SkillsContainer ref={skillsRef}>
            {softSkills.map((skill) => (
              <SkillItem key={skill.name}>
                <div className="skill-header">
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
                <SkillBar>
                  <SkillProgress
                    className="skill-progress"
                    style={{ '--progress': `${skill.level}%` } as React.CSSProperties}
                  />
                </SkillBar>
              </SkillItem>
            ))}
          </SkillsContainer>
        </InfoCard>

        <InfoCard>
          <IconWrapper>
            <FaLightbulb />
          </IconWrapper>
          <CardTitle>Objetivos</CardTitle>
          <ObjectivesContainer>
            {objectives.map((objective, index) => (
              <Objective key={index}>
                {objective}
              </Objective>
            ))}
          </ObjectivesContainer>
        </InfoCard>
      </GridContainer>
    </SectionContainer>
  );
}
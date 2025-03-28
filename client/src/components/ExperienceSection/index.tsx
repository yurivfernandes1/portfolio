import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SectionContainer,
  Title,
  TimelineContainer,
  TimelineItem,
  CompanyInfo,
  Period,
  Role,
  Achievement,
  CertificationsGrid,
  CertificationCard,
  CertificationTitle,
  CertificationIssuer,
  CertificationDate
} from './styles';

const experiences = [
  {
    company: "Vivo Vita",
    period: "2023 - Presente",
    role: "Analista de Dados",
    achievements: [
      "Projetos de análise e engenharia de dados",
      "Desenvolvimento de soluções em SQL, Python e Power BI",
      "Tomada de decisão estratégica baseada em dados"
    ]
  },
  {
    company: "VP6 IT",
    period: "2022 - 2023",
    role: "Analista de Dados/Desenvolvimento",
    achievements: [
      "Desenvolvimento de sistemas de planejamento e orçamento",
      "Criação de relatórios em Python e Power BI",
      "Entrega de insights estratégicos"
    ]
  },
  {
    company: "Statera TI",
    period: "2020 - 2022",
    role: "Analista de Processos/Dados",
    achievements: [
      "Desenvolvimento de projetos de Análise de Dados",
      "Implementação de soluções em Power BI",
      "Melhoria de processos internos"
    ]
  },
  {
    company: "Sonda IT",
    period: "2011 - 2014",
    role: "Líder de Service Desk",
    achievements: [
      "Gerenciamento de equipes de suporte técnico",
      "Garantia de excelência no atendimento",
      "Otimização de processos de resolução"
    ]
  }
];

const certifications = [
  {
    title: "Power BI Express",
    issuer: "Xperian",
    date: "2023"
  },
  {
    title: "Sistemas de Informação",
    issuer: "UNA",
    date: "2021"
  },
  {
    title: "Pós-graduação em Engenharia de Dados",
    issuer: "Anhanguera",
    date: "Em andamento"
  }
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top center+=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    timeline.fromTo(
      timelineRef.current?.children || [],
      { 
        opacity: 0, 
        x: -50 
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.3,
        duration: 0.8
      }
    );

    gsap.fromTo(
      certificationsRef.current?.children || [],
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
        scrollTrigger: {
          trigger: certificationsRef.current,
          start: "top center+=150"
        }
      }
    );
  }, []);

  return (
    <SectionContainer id="experiencia" ref={sectionRef}>
      <Title>Experiência Profissional</Title>

      <TimelineContainer ref={timelineRef}>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <CompanyInfo>
              <Period>{exp.period}</Period>
              <Role>{exp.role}</Role>
            </CompanyInfo>
            {exp.achievements.map((achievement, i) => (
              <Achievement key={i}>{achievement}</Achievement>
            ))}
          </TimelineItem>
        ))}
      </TimelineContainer>

      <Title as="h3">Certificações</Title>
      <CertificationsGrid ref={certificationsRef}>
        {certifications.map((cert, index) => (
          <CertificationCard key={index}>
            <CertificationTitle>{cert.title}</CertificationTitle>
            <CertificationIssuer>{cert.issuer}</CertificationIssuer>
            <CertificationDate>{cert.date}</CertificationDate>
          </CertificationCard>
        ))}
      </CertificationsGrid>
    </SectionContainer>
  );
}
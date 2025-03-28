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
    company: "Empresa Atual",
    period: "2022 - Presente",
    role: "Senior Data Engineer",
    achievements: [
      "Liderança em projetos de Data Lake",
      "Desenvolvimento de pipelines ETL",
      "Otimização de processos de BI"
    ]
  },
  // Adicione mais experiências aqui
];

const certifications = [
  {
    title: "Azure Data Engineer Associate",
    issuer: "Microsoft",
    date: "2023",
    credential: "DP-203"
  },
  {
    title: "Power BI Data Analyst",
    issuer: "Microsoft",
    date: "2022",
    credential: "PL-300"
  }
  // Adicione mais certificações aqui
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
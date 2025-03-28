import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SectionContainer,
  Title,
  Description,
  CaseGrid,
  CaseCard,
  CaseImage,
  CaseInfo,
  CaseTitle,
  CaseDescription,
  TechBadge,
  PowerBIEmbed,
  CloseButton
} from './styles';

const cases = [
  {
    id: 1,
    title: 'Dashboard Financeiro',
    description: 'Dashboard completo para análise financeira com KPIs, gráficos e filtros dinâmicos.',
    image: '/powerbi/financial.jpg',
    techs: ['DAX', 'M Language', 'Direct Query'],
    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=1&autoAuth=true&ctid=2',
  },
  {
    id: 2,
    title: 'Análise de Vendas',
    description: 'Relatório interativo com análise detalhada de vendas e previsões.',
    image: '/powerbi/sales.jpg',
    techs: ['Power Query', 'DAX', 'Python Integration'],
    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=2&autoAuth=true&ctid=2',
  },
  {
    id: 3,
    title: 'RH Analytics',
    description: 'Dashboard para análise de indicadores de RH e performance de equipes.',
    image: '/powerbi/hr.jpg',
    techs: ['DAX', 'Dataflows', 'Power Query'],
    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=3&autoAuth=true&ctid=2',
  }
];

export function PowerBISection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [selectedDashboard, setSelectedDashboard] = useState<string | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { 
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top center+=100',
          },
        }
      );
    }
  }, []);

  return (
    <SectionContainer id="powerbi" ref={sectionRef}>
      <Title>Power BI Solutions</Title>
      <Description>
        Explore alguns dos meus casos de sucesso em Business Intelligence e
        Analytics utilizando Power BI.
      </Description>

      <CaseGrid ref={cardsRef}>
        {cases.map((case_) => (
          <CaseCard key={case_.id} onClick={() => setSelectedDashboard(case_.embedUrl)}>
            <CaseImage src={case_.image} alt={case_.title} />
            <CaseInfo>
              <CaseTitle>{case_.title}</CaseTitle>
              <CaseDescription>{case_.description}</CaseDescription>
              <div>
                {case_.techs.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </div>
            </CaseInfo>
          </CaseCard>
        ))}
      </CaseGrid>

      {selectedDashboard && (
        <PowerBIEmbed>
          <CloseButton onClick={() => setSelectedDashboard(null)}>×</CloseButton>
          <iframe
            title="Power BI Dashboard"
            src={selectedDashboard}
            frameBorder="0"
            allowFullScreen
          />
        </PowerBIEmbed>
      )}
    </SectionContainer>
  );
}
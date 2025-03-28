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
    title: 'Dashboard BUH Fashion',
    description: 'Dashboard de análise de vendas integrado com API Totvs Moda',
    image: 'https://raw.githubusercontent.com/yurivfernandes/portifolio/refs/heads/main/client/public/powerbi/projeto1.png',
    techs: ['Power BI', 'API Integration', 'DAX'],
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNDI0OWJhNzYtMmEwOC00ZWU1LWExNzktOTc5ZTk5Y2QxZTgzIiwidCI6ImU0MWIzZGQzLWIzMWEtNDU1MC1hNzg0LWY3YjBmYTZhMGIwNiJ9',
  },
  {
    id: 2,
    title: 'Dashboard MCD',
    description: 'Dashboard de vendas e estoque baseado na API Linx',
    image: 'https://raw.githubusercontent.com/yurivfernandes/portifolio/refs/heads/main/client/public/powerbi/projeto2.png',
    techs: ['Power Query', 'XML Integration', 'DAX'],
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYWJjNjcyZWEtNDU1MS00ODk4LTg4MjAtYTAzMDg3ZTg0MThmIiwidCI6ImU0MWIzZGQzLWIzMWEtNDU1MC1hNzg0LWY3YjBmYTZhMGIwNiJ9',
  },
  {
    id: 3,
    title: 'Statera TI - Análise de Chamados',
    description: 'Dashboard automatizado via APIs para análise de chamados e SLA',
    image: 'https://raw.githubusercontent.com/yurivfernandes/portifolio/refs/heads/main/client/public/powerbi/projeto3.png',
    techs: ['API Integration', 'Real-time Data', 'Performance Analytics'],
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYmUwMDAwMTQtMThlNi00NzU2LTk2MmEtMTAxYTIwZTU1ZWM0IiwidCI6ImU0MWIzZGQzLWIzMWEtNDU1MC1hNzg0LWY3YjBmYTZhMGIwNiJ9',
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
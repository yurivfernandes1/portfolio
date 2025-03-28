import styled, { keyframes } from 'styled-components';

const neonPulse = keyframes`
  0% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.neon.yellow}; }
  50% { box-shadow: 0 0 20px ${({ theme }) => theme.colors.neon.yellow}; }
  100% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.neon.yellow}; }
`;

export const SectionContainer = styled.section`
  min-height: 100vh;
  padding: 100px 2rem;
  background: ${({ theme }) => theme.colors.background.dark};
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.yellow};
`;

export const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto 4rem;
  font-size: 1.2rem;
  line-height: 1.6;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.glass.background};
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  animation: ${neonPulse} 3s infinite;

  &:hover {
    transform: translateY(-10px) rotateY(10deg);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.neon.yellow};
  margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 1rem;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const ProjectTech = styled.span`
  padding: 0.25rem 0.75rem;
  background: rgba(255, 215, 0, 0.1);
  color: ${({ theme }) => theme.colors.neon.yellow};
  border-radius: 20px;
  font-size: 0.875rem;
  border: 1px solid ${({ theme }) => theme.colors.neon.yellow};
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProjectLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.neon.yellow};
  border: 1px solid ${({ theme }) => theme.colors.neon.yellow};
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.neon.yellow};
    color: ${({ theme }) => theme.colors.background.dark};
    text-shadow: none;
  }
`;
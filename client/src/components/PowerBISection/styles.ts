import styled, { keyframes } from 'styled-components';

const neonPulse = keyframes`
  0% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.neon.blue}; }
  50% { box-shadow: 0 0 20px ${({ theme }) => theme.colors.neon.blue}; }
  100% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.neon.blue}; }
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
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.blue};
`;

export const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto 4rem;
  font-size: 1.2rem;
  line-height: 1.6;
`;

export const CaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CaseCard = styled.div`
  background: ${({ theme }) => theme.glass.background};
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  animation: ${neonPulse} 3s infinite;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const CaseImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CaseInfo = styled.div`
  padding: 1.5rem;
`;

export const CaseTitle = styled.h3`
  color: ${({ theme }) => theme.colors.neon.blue};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const CaseDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 1rem;
`;

export const TechBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(0, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.neon.blue};
  border-radius: 20px;
  font-size: 0.875rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.neon.blue};
`;

export const PowerBIEmbed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  iframe {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    border-radius: 8px;
    box-shadow: 0 0 30px ${({ theme }) => theme.colors.neon.yellow};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.neon.yellow};
  background: transparent;
  color: ${({ theme }) => theme.colors.neon.yellow};
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.neon.yellow};
    color: ${({ theme }) => theme.colors.background.dark};
  }
`;
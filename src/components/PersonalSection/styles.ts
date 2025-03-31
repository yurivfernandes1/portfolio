import styled, { keyframes } from 'styled-components';

const iconFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const neonPulse = keyframes`
  0% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.neon.green}; }
  50% { box-shadow: 0 0 20px ${({ theme }) => theme.colors.neon.green}; }
  100% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.neon.green}; }
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
  margin-bottom: 3rem;
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.green};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const InfoCard = styled.div`
  background: ${({ theme }) => theme.glass.background};
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  animation: ${neonPulse} 3s infinite;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.neon.green};
  text-align: center;
  margin-bottom: 1.5rem;
  animation: ${iconFloat} 3s ease-in-out infinite;

  svg {
    filter: drop-shadow(0 0 8px ${({ theme }) => theme.colors.neon.green});
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 0 5px ${({ theme }) => theme.colors.neon.green};
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SkillItem = styled.div`
  .skill-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text.secondary};

    svg {
      color: ${({ theme }) => theme.colors.neon.green};
      font-size: 1.2rem;
    }
  }
`;

export const SkillBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

export const SkillProgress = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.neon.green};
  border-radius: 4px;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.green};
  width: var(--progress);
`;

export const ObjectivesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Objective = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border-left: 3px solid ${({ theme }) => theme.colors.neon.green};
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.neon.green};
  }
`;
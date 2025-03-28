import styled, { keyframes } from 'styled-components';

const neonPulse = keyframes`
  0% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.neon.yellow}; }
  50% { box-shadow: 0 0 20px ${({ theme }) => theme.colors.neon.yellow}; }
  100% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.neon.yellow}; }
`;

export const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 100px 2rem;
  background: ${({ theme }) => theme.colors.background.dark};
`;

export const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.yellow};
`;

export const Biography = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

interface SkillCardProps {
  level: number;
}

export const SkillCard = styled.div<SkillCardProps>`
  background: ${({ theme }) => theme.glass.background};
  padding: 1.5rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  animation: ${neonPulse} 3s infinite;

  h3 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: 1rem;
  }

  .skill-level {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
  }

  .skill-progress {
    height: 100%;
    background: ${({ theme }) => theme.colors.neon.yellow};
    border-radius: 3px;
    transition: width 1.5s ease-in-out;
  }
`;

export const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 4rem auto 0;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.colors.neon.yellow};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.yellow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &::before {
      left: 0;
    }
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  margin-bottom: 2rem;
  width: 50%;
  position: relative;

  &:nth-child(even) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    padding-left: 45px;
    padding-right: 0;
    justify-content: flex-start;

    &:nth-child(even) {
      align-self: flex-start;
    }
  }
`;

export const TimelineDot = styled.div`
  width: 16px;
  height: 16px;
  background: ${({ theme }) => theme.colors.neon.yellow};
  border-radius: 50%;
  position: absolute;
  left: -8px;
  top: 0;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.yellow};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: -8px;
  }
`;

export const TimelineContent = styled.div`
  background: ${({ theme }) => theme.glass.background};
  padding: 1.5rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  max-width: 400px;

  h3 {
    color: ${({ theme }) => theme.colors.neon.yellow};
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  h4 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;
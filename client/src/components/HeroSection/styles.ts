import styled, { keyframes } from 'styled-components';

const neonPulse = keyframes`
  0% { text-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.yellow}; }
  50% { text-shadow: 0 0 20px ${({ theme }) => theme.colors.neon.yellow}, 0 0 30px ${({ theme }) => theme.colors.neon.yellow}; }
  100% { text-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.yellow}; }
`;

export const HeroContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 2rem 0;
  overflow: hidden;
  position: relative;
`;

export const ParallaxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  animation: ${neonPulse} 3s ease-in-out infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

export const SkillsText = styled.span`
  display: inline-block;
  min-height: 2.5rem;
`;

export const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.neon.yellow};
  color: ${({ theme }) => theme.colors.neon.yellow};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.neon.yellow};
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    &:before {
      width: 100%;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.neon.yellow};
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.neon.yellow};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 300px;
    height: 300px;
  }
`;
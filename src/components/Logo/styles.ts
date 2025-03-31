import styled, { keyframes } from 'styled-components';

const neonPulse = keyframes`
  0% {
    filter: drop-shadow(0 0 2px #FFD700);
  }
  50% {
    filter: drop-shadow(0 0 5px #FFD700);
  }
  100% {
    filter: drop-shadow(0 0 2px #FFD700);
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LogoImage = styled.img`
  width: 60px;
  height: 30px;
  animation: ${neonPulse} 3s ease-in-out infinite;
`;

export const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  text-shadow: 0 0 5px ${({ theme }) => theme.colors.neon.yellow};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;
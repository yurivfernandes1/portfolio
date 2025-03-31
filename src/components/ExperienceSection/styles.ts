import styled, { keyframes } from 'styled-components';

const neonGlow = keyframes`
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
  margin-bottom: 3rem;
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.blue};
`;

export const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background: ${({ theme }) => theme.colors.neon.blue};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.blue};
  }
`;

export const TimelineItem = styled.div`
  margin-left: 2rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.glass.background};
  border-radius: 8px;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
  position: relative;
  animation: ${neonGlow} 3s infinite;

  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 50%;
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.colors.neon.blue};
    border-radius: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.neon.blue};
  }
`;

export const CompanyInfo = styled.div`
  margin-bottom: 1rem;
`;

export const Period = styled.span`
  color: ${({ theme }) => theme.colors.neon.blue};
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.5rem;
`;

export const Role = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Achievement = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.neon.blue};
  }
`;

export const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const CertificationCard = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.glass.background};
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  animation: ${neonGlow} 3s infinite;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const CertificationTitle = styled.h4`
  color: ${({ theme }) => theme.colors.neon.blue};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const CertificationIssuer = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const CertificationDate = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9rem;
`;
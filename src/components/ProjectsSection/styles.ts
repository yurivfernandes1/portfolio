import styled from 'styled-components';

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
  margin: 0 auto 2rem;
  font-size: 1.2rem;
  line-height: 1.6;
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 500px;
  border-radius: 12px;
  margin-bottom: 2rem;
  object-fit: contain;
`;

export const ProjectLink = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.neon.yellow};
  border: 1px solid ${({ theme }) => theme.colors.neon.yellow};
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: ${({ theme }) => theme.colors.neon.yellow};
    color: ${({ theme }) => theme.colors.background.dark};
    text-shadow: none;
  }
`;
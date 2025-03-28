import styled from 'styled-components';

export const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-right: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.neon.yellow};
    text-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.yellow};
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.neon.yellow};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
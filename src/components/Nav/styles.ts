import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface NavContainerProps {
  isOpen: boolean;
}

export const NavContainer = styled.nav<NavContainerProps>`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    background: ${({ theme }) => theme.colors.background.dark};
    padding-top: 80px;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    padding: 2rem;
  }
`;

export const NavItem = styled.li`
  position: relative;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.neon.yellow};
    text-shadow: 0 0 5px ${({ theme }) => theme.colors.neon.yellow};
  }

  &.active {
    color: ${({ theme }) => theme.colors.neon.yellow};
  }
`;
import { NavContainer, NavList, NavItem, NavLink } from './styles';

interface NavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Nav({ isOpen, onClose }: NavProps) {
  return (
    <NavContainer isOpen={isOpen}>
      <NavList>
        <NavItem>
          <NavLink to="/" onClick={onClose}>Início</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/sobre" onClick={onClose}>Sobre</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projetos" onClick={onClose}>Projetos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/experiencia" onClick={onClose}>Experiência</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contato" onClick={onClose}>Contato</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
}
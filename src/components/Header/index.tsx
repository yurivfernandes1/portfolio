import { useState } from 'react';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { SocialLinks } from '../SocialLinks';
import { HeaderContainer, MobileMenuButton } from './styles';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo />
      <SocialLinks />
      <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span />
        <span />
        <span />
      </MobileMenuButton>
      <Nav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </HeaderContainer>
  );
}
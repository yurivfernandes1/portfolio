import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SocialLinksContainer, SocialLink } from './styles';

export function SocialLinks() {
  return (
    <SocialLinksContainer>
      <SocialLink 
        href="https://github.com/yurivfernandes" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </SocialLink>
      <SocialLink 
        href="https://www.instagram.com/yurivfernandes" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </SocialLink>
      <SocialLink 
        href="https://www.linkedin.com/in/yurianalistabi" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </SocialLink>
    </SocialLinksContainer>
  );
}
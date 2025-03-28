import { SocialLinksContainer, SocialLink } from './styles';

export function SocialLinks() {
  return (
    <SocialLinksContainer>
      <SocialLink 
        href="https://github.com/yurivfernandes" 
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </SocialLink>
      <SocialLink 
        href="https://www.instagram.com/yurivfernandes" 
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </SocialLink>
      <SocialLink 
        href="https://www.linkedin.com/in/yurianalistabi" 
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </SocialLink>
    </SocialLinksContainer>
  );
}
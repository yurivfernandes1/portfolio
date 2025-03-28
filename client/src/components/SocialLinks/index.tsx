import { SocialLinksContainer, SocialLink } from './styles';

export function SocialLinks() {
  return (
    <SocialLinksContainer>
      <SocialLink 
        href="https://github.com/yurivf" 
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </SocialLink>
      <SocialLink 
        href="https://instagram.com/yurivf" 
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </SocialLink>
    </SocialLinksContainer>
  );
}
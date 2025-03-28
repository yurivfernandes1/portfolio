import { LogoContainer, LogoImage, LogoText } from './styles';

interface LogoProps {
  showText?: boolean;
}

export function Logo({ showText = true }: LogoProps) {
  return (
    <LogoContainer>
      <LogoImage src="/src/assets/icons/logo.svg" alt="YF Logo" />
      {showText && <LogoText>Yuri Fernandes</LogoText>}
    </LogoContainer>
  );
}
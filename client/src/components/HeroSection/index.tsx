import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  HeroContainer,
  HeroContent,
  Title,
  Subtitle,
  SkillsText,
  CTAButton,
  ProfileImage,
  ParallaxContainer
} from './styles';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const skillsRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillsRef.current) {
      const skillsAnimation = gsap.to(skillsRef.current, {
        text: { value: ['Analista de Dados Senior', 'Engenheiro de Dados', 'Desenvolvedor Fullstack'], delimiter: " | " },
        duration: 3,
        repeat: -1,
        repeatDelay: 1,
        ease: "none",
      });

      return () => skillsAnimation.kill();
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current.querySelector('.parallax'), {
        y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed!,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }
  }, []);

  return (
    <HeroContainer ref={containerRef}>
      <ParallaxContainer className="parallax" data-speed="0.2">
        <HeroContent>
          <Title>Olá, eu sou o Yuri</Title>
          <Subtitle>
            <SkillsText ref={skillsRef}>Engenheiro/Analista de Dados e Desenvolvedor FullStack</SkillsText>
          </Subtitle>
          <CTAButton href="#projetos">Ver Projetos</CTAButton>
        </HeroContent>
        <ProfileImage
          src="https://raw.githubusercontent.com/yurivfernandes/portifolio/refs/heads/main/client/public/fotos/hero.jpeg"
          alt="Yuri Fernandes"
          className="parallax"
          data-speed="0.1"
        />
      </ParallaxContainer>
    </HeroContainer>
  );
}
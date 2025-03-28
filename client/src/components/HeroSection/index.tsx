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

const skills = [
  'Desenvolvedor Frontend',
  'Analista de Dados Senior',
  'Engenheiro de Dados',
  'Power BI Specialist'
];

export function HeroSection() {
  const skillsRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillsRef.current) {
      const skillsAnimation = gsap.to(skillsRef.current, {
        text: { value: skills, delimiter: " | " },
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
            <SkillsText ref={skillsRef}>{skills[0]}</SkillsText>
          </Subtitle>
          <CTAButton href="#projetos">Ver Projetos</CTAButton>
        </HeroContent>
        <ProfileImage
          src="/profile.jpg"
          alt="Yuri Fernandes"
          className="parallax"
          data-speed="0.1"
        />
      </ParallaxContainer>
    </HeroContainer>
  );
}
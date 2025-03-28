import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {
  SectionContainer,
  Title,
  FormContainer,
  Form,
  InputGroup,
  Input,
  TextArea,
  SubmitButton,
  SocialLinks,
  SocialLink,
  SuccessMessage,
  ErrorMessage
} from './styles';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      formRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top center+=100"
        }
      }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Ocorreu um erro ao enviar sua mensagem. Tente novamente.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <SectionContainer id="contato" ref={sectionRef}>
      <Title>Entre em Contato</Title>

      <FormContainer>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <InputGroup>
            <Input
              type="text"
              name="name"
              placeholder="Seu Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Input
              type="email"
              name="email"
              placeholder="Seu E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <TextArea
              name="message"
              placeholder="Sua Mensagem"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <SubmitButton type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
          </SubmitButton>

          {status === 'success' && (
            <SuccessMessage>Mensagem enviada com sucesso!</SuccessMessage>
          )}

          {status === 'error' && (
            <ErrorMessage>{errorMessage}</ErrorMessage>
          )}
        </Form>

        <SocialLinks>
          <SocialLink href="mailto:yuri.viana.fernandes@gmail.com" target="_blank">
            <FaEnvelope />
          </SocialLink>
          <SocialLink href="https://github.com/yurivfernandes" target="_blank">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/yurianalistabi" target="_blank">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://instagram.com/yurivfernandes" target="_blank">
            <FaInstagram />
          </SocialLink>
          <SocialLink href="https://wa.me/5531987798823" target="_blank">
            <FaWhatsapp />
          </SocialLink>
        </SocialLinks>
      </FormContainer>
    </SectionContainer>
  );
}
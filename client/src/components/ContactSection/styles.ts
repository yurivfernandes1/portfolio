import styled, { keyframes } from 'styled-components';

const neonPulse = keyframes`
  0% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.neon.purple}; }
  50% { box-shadow: 0 0 20px ${({ theme }) => theme.colors.neon.purple}; }
  100% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.neon.purple}; }
`;

const socialFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

export const SectionContainer = styled.section`
  min-height: 100vh;
  padding: 100px 2rem;
  background: ${({ theme }) => theme.colors.background.dark};
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.purple};
`;

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: ${({ theme }) => theme.glass.background};
  border-radius: 12px;
  backdrop-filter: blur(10px);
  animation: ${neonPulse} 3s infinite;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid transparent;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.neon.purple};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.purple};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid transparent;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.neon.purple};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.purple};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.neon.purple};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.neon.purple};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.neon.purple};
    color: ${({ theme }) => theme.colors.background.dark};
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.neon.purple};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const SocialLink = styled.a`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.neon.purple};
  transition: all 0.3s ease;
  animation: ${socialFloat} 3s ease-in-out infinite;

  &:hover {
    transform: scale(1.2);
    filter: drop-shadow(0 0 10px ${({ theme }) => theme.colors.neon.purple});
  }
`;

export const SuccessMessage = styled.div`
  color: ${({ theme }) => theme.colors.neon.green};
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.neon.green};
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.neon.red};
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.neon.red};
`;
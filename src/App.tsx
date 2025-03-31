import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PowerBISection } from './components/PowerBISection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PersonalSection } from './components/PersonalSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <PowerBISection />
          <ProjectsSection />
          <ExperienceSection />
          <PersonalSection />
          <ContactSection />
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
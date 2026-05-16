import { HelmetProvider, Helmet } from 'react-helmet-async'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { AchievementsSection } from './components/sections/AchievementsSection'
import { CredentialsSection } from './components/sections/CredentialsSection'
import { ContactSection } from './components/sections/ContactSection'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Shin Thant Aung | Junior Full Stack Software Developer</title>
        <meta
          name="description"
          content="Portfolio of Shin Thant Aung, a Junior Full Stack Software Developer experienced in React, TypeScript, .NET, Supabase, OpenAI API integration, mobile deployments, and full-stack web applications."
        />
        <meta
          name="keywords"
          content="Shin Thant Aung, React Developer, TypeScript Developer, Full Stack Developer, .NET Developer, Supabase, OpenAI API, Singapore Software Developer"
        />
        <meta property="og:title" content="Shin Thant Aung | Junior Full Stack Software Developer" />
        <meta
          property="og:description"
          content="Portfolio of Shin Thant Aung — building clean, responsive, and practical software."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-bg-base min-h-screen font-body">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <AchievementsSection />
          <CredentialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default App

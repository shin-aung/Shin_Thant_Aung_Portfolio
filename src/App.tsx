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
        <title>Shin Thant Aung | Full-Stack Software Developer</title>
        <meta
          name="description"
          content="Portfolio of Shin Thant Aung, a full-stack software developer in Singapore building business software with React, TypeScript, PostgreSQL/Supabase and C#/.NET."
        />
        <meta
          name="keywords"
          content="Shin Thant Aung, React Developer, TypeScript Developer, Full Stack Developer, .NET Developer, Supabase, OpenAI API, Singapore Software Developer, PostgreSQL, Supabase Developer"
        />
        <meta property="og:title" content="Shin Thant Aung | Full-Stack Software Developer" />
        <meta
          property="og:description"
          content="Full-stack software developer in Singapore building business platforms, integrations and web apps with React, TypeScript and Supabase."
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

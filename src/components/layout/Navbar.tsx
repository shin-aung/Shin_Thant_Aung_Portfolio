import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Mail } from 'lucide-react';
import { useActiveSection } from '../../hooks/useActiveSection';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements', 'education', 'contact'];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-16 flex items-center transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('#hero')}
            className="font-display text-xl font-semibold text-gray-900 tracking-wide hover:text-accent transition-colors"
          >
            STA
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = active === id;
              return (
                <button
                  key={label}
                  onClick={() => handleNav(href)}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? 'text-accent' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="/resume/Shin_Thant_Aung_Resume.pdf" download className="btn-ghost text-sm">
              <Download size={15} />
              Resume
            </a>
            <button onClick={() => handleNav('#contact')} className="btn-primary text-sm">
              <Mail size={15} />
              Contact
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-white pt-16"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col p-6 gap-2">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => handleNav(href)}
                  className="text-left px-4 py-3 text-lg font-medium text-gray-700 hover:text-accent hover:bg-accent-light rounded-xl transition-colors"
                >
                  {label}
                </button>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="/resume/Shin_Thant_Aung_Resume.pdf"
                  download
                  className="btn-outline justify-center"
                >
                  <Download size={16} /> Download Resume
                </a>
                <button
                  onClick={() => handleNav('#contact')}
                  className="btn-primary justify-center"
                >
                  <Mail size={16} /> Contact Me
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

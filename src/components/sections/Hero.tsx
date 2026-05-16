import { motion } from 'framer-motion';
import { GitFork, Link, Download, ChevronDown, Briefcase } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const TECH_BADGES = ['React', 'TypeScript', 'C# / .NET', 'Supabase', 'Next.js', 'OpenAI API'];

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 px-6 overflow-hidden">
      {/* Background deco */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#1C1C1C 1px,transparent 1px),linear-gradient(90deg,#1C1C1C 1px,transparent 1px)', backgroundSize: '44px 44px' }} />

      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <motion.span
            className="section-label mb-6 block"
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0 }}
          >
            Full Stack Software Developer
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            <h1 className="font-display leading-[1] mb-3">
              <span className="text-[clamp(52px,9vw,96px)] font-light text-gray-900 block">Shin Thant</span>
              <span className="text-[clamp(52px,9vw,96px)] font-light italic text-accent block">Aung</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-base md:text-lg text-gray-500 leading-relaxed max-w-xl mt-6 mb-10"
            initial={{ opacity: 0, y: reduced ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16 }}
          >
            I build practical full-stack web and mobile solutions using React, TypeScript, .NET, Supabase, and modern cloud tools — including production mobile releases, AI-powered document processing, and scalable backend APIs.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 mb-12"
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
              <Briefcase size={16} /> View Projects
            </button>
            <a href="/resume/Shin_Thant_Aung_Resume.pdf" download className="btn-outline">
              <Download size={16} /> Download Resume
            </a>
            <a href="https://github.com/shin-aung" target="_blank" rel="noopener noreferrer" className="btn-ghost" aria-label="GitHub">
              <GitFork size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/shin-thant-aung-stanley/" target="_blank" rel="noopener noreferrer" className="btn-ghost" aria-label="LinkedIn">
              <Link size={16} /> LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-xs text-gray-400 font-medium tracking-widest uppercase mb-3">Core Technologies</p>
            <div className="flex flex-wrap gap-2">
              {TECH_BADGES.map((t, i) => (
                <motion.span
                  key={t}
                  className="tag text-xs"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: reduced ? 0 : 0.35 + i * 0.06, duration: 0.4 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-14 pt-8 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-xl"
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
          >
            {[{ val: '1+', lbl: 'Years Experience' }, { val: '7+', lbl: 'Projects Built' }, { val: '15+', lbl: 'Technologies' }, { val: '4', lbl: 'Awards' }].map(({ val, lbl }) => (
              <div key={lbl}>
                <p className="font-display text-4xl font-light text-gray-900">{val}</p>
                <p className="text-xs text-gray-400 mt-1">{lbl}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400"
        animate={reduced ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] font-medium tracking-[3px] uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}

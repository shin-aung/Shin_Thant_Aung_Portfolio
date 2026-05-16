import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Download, ArrowRight, Sparkles } from 'lucide-react'
import { profile } from '../../data/profile'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/30 flex items-center"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-amber-100/30 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-0 w-px h-2/3 bg-gradient-to-b from-transparent via-teal-200/50 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            {/* Availability badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 text-teal-700 rounded-full text-xs font-medium border border-teal-200 mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              Open to opportunities in Singapore
            </motion.div>

            {/* Name */}
            <motion.h1
              className="font-display text-5xl sm:text-6xl font-bold text-primary leading-tight mb-3"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              Shin Thant
              <span className="block text-accent-tech">Aung.</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              className="font-display text-xl sm:text-2xl font-medium text-slate-500 mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              {profile.role}
            </motion.p>

            {/* Headline */}
            <motion.p
              className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4 max-w-xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              {profile.headline}
            </motion.p>

            {/* Supporting line */}
            <motion.p
              className="text-text-muted text-sm leading-relaxed mb-8 max-w-xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.35}
            >
              {profile.supportingLine}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
            >
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-tech text-white font-medium rounded-xl hover:bg-teal-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-tech"
              >
                View Projects
                <ArrowRight size={16} />
              </button>

              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-medium rounded-xl border border-slate-200 hover:border-accent-tech hover:text-accent-tech transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-tech"
              >
                <Download size={16} />
                Resume
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-text-muted font-medium rounded-xl border border-slate-200 hover:border-slate-300 hover:text-primary bg-white transition-all hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-tech"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-text-muted font-medium rounded-xl border border-slate-200 hover:border-slate-300 hover:text-primary bg-white transition-all hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-tech"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
            </motion.div>

            {/* Tech badges */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
            >
              {profile.techBadges.map((badge, i) => (
                <motion.span
                  key={badge}
                  className="tech-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.06, duration: 0.3 }}
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-300/30 to-teal-200/20 rounded-3xl blur-2xl scale-110 animate-glow-pulse" />

              {/* Image card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-2xl w-72 sm:w-80 lg:w-[340px] aspect-[3/4]">
                <img
                  src={profile.profileImage}
                  alt="Shin Thant Aung standing professionally with folded arms"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                {/* Overlay gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>

              {/* Floating credential chip */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <div className="w-9 h-9 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles size={16} className="text-accent-tech" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary">Bachelor of IT</p>
                  <p className="text-xs text-text-muted">JCU Singapore · Distinction</p>
                </div>
              </motion.div>

              {/* Floating GPA chip */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary text-white rounded-2xl shadow-lg px-4 py-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                <p className="text-xs text-slate-400">GPA</p>
                <p className="text-lg font-display font-bold text-accent-tech">6.04/7</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Credibility strip */}
        <motion.div
          className="mt-16 pt-10 border-t border-slate-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-xs text-text-muted mb-5 uppercase tracking-widest font-medium">
            Key Strengths
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-6">
            {profile.credibilityStrips.map((strip) => (
              <div key={strip} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-tech rounded-full" />
                <span className="text-sm font-medium text-slate-600">{strip}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

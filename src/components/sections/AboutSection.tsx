import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Briefcase, Heart } from 'lucide-react'
import { profile } from '../../data/profile'

const iconMap: Record<string, React.ReactNode> = {
  shield: '🛡️',
  target: '🎯',
  refresh: '🔄',
  message: '💬',
  'trending-up': '📈',
  cpu: '💻',
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

const quickFacts = [
  { icon: <MapPin size={16} />, label: 'Location', value: 'Singapore (from Mandalay, Myanmar)' },
  { icon: <GraduationCap size={16} />, label: 'Education', value: 'Bachelor of IT · James Cook University Singapore' },
  { icon: <Briefcase size={16} />, label: 'Role', value: 'Junior Full Stack Software Developer' },
  { icon: <Heart size={16} />, label: 'Passion', value: 'Coding, learning, teamwork & growth' },
]

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        {/* Heading */}
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeIn}
        >
          <p className="text-xs uppercase tracking-widest text-accent-tech font-medium mb-3">Who I Am</p>
          <h2 className="section-heading">About Me</h2>
          <p className="text-text-muted max-w-xl">
            A motivated developer with a genuine passion for building practical software and growing continuously.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio + quick facts */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeIn}
              custom={0.1}
            >
              {/* Motto */}
              <div className="mb-6 pl-4 border-l-2 border-accent-tech">
                <p className="text-lg font-display font-semibold text-primary italic">
                  "{profile.motto}"
                </p>
                <p className="text-sm text-text-muted mt-1">{profile.mottoExtended}</p>
              </div>

              {/* Bio paragraphs */}
              <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
                {profile.aboutBio.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Quick facts */}
            <motion.div
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeIn}
              custom={0.2}
            >
              {quickFacts.map((fact) => (
                <div key={fact.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-accent-tech flex-shrink-0 mt-0.5">
                    {fact.icon}
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-medium uppercase tracking-wide">{fact.label}</p>
                    <p className="text-sm text-primary font-medium">{fact.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Values & strengths */}
          <div className="space-y-8">
            {/* Values */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeIn}
              custom={0.15}
            >
              <h3 className="font-display font-semibold text-primary text-lg mb-4">Professional Values</h3>
              <div className="flex flex-wrap gap-2">
                {profile.values.map((val) => (
                  <span
                    key={val}
                    className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-xl text-sm font-medium border border-slate-200 hover:border-accent-tech hover:text-accent-tech transition-colors cursor-default"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Strengths */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeIn}
              custom={0.25}
            >
              <h3 className="font-display font-semibold text-primary text-lg mb-4">Strengths</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profile.strengths.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/50 transition-all group"
                  >
                    <span className="text-lg">{iconMap[s.icon] ?? '✦'}</span>
                    <span className="text-sm text-slate-600 font-medium group-hover:text-teal-700 transition-colors">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Beyond coding card */}
            <motion.div
              className="p-5 bg-amber-50/60 rounded-2xl border border-amber-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeIn}
              custom={0.35}
            >
              <h4 className="font-display font-semibold text-amber-800 text-sm mb-3 flex items-center gap-2">
                <Heart size={14} />
                Beyond Coding
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Coding & Web Dev', 'Learning New Things', 'Coffee & Focus Time', 'Teamwork & Leadership', 'Travel & Exploring'].map((item) => (
                  <span key={item} className="warm-badge">{item}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

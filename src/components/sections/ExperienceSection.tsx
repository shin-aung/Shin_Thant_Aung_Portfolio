import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Calendar, ChevronDown, CheckCircle } from 'lucide-react'
import { experiences } from '../../data/experience'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export const ExperienceSection: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const toggle = (key: string) => {
    setExpandedProject((prev) => (prev === key ? null : key))
  }

  return (
    <section id="experience" className="section-padding bg-slate-50/70">
      <div className="container-max">
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeIn}
        >
          <p className="text-xs uppercase tracking-widest text-accent-tech font-medium mb-3">
            Work History
          </p>
          <h2 className="section-heading">Experience</h2>
          <p className="text-text-muted max-w-xl">
            Real-world software development experience across mobile apps, web platforms, backend APIs, and AI integration.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-tech via-teal-200 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, expIdx) => (
              <motion.div
                key={exp.company}
                className="relative sm:pl-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeIn}
                custom={expIdx * 0.1}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 bg-accent-tech rounded-full border-2 border-white shadow-md hidden sm:block" />

                {/* Company card */}
                <div className="portfolio-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Building2 size={16} className="text-accent-tech" />
                        <h3 className="font-display font-bold text-primary text-lg">
                          {exp.company}
                        </h3>
                      </div>
                      <p className="text-slate-600 font-medium text-sm">{exp.role}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1.5 text-xs text-text-muted">
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          exp.type === 'full-time'
                            ? 'bg-teal-50 text-teal-700 border border-teal-200'
                            : exp.type === 'teaching'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {exp.type === 'full-time'
                          ? 'Full-time'
                          : exp.type === 'teaching'
                          ? 'Part-time · Teaching'
                          : 'Part-time'}
                      </span>
                    </div>
                  </div>

                  <p className="text-text-muted text-sm mb-5 leading-relaxed">{exp.description}</p>

                  {/* Sub-projects */}
                  <div className="space-y-3">
                    {exp.projects.map((proj) => {
                      const key = `${exp.company}-${proj.name}`
                      const isOpen = expandedProject === key
                      return (
                        <div
                          key={proj.name}
                          className="rounded-xl border border-slate-100 bg-slate-50/60 overflow-hidden"
                        >
                          <button
                            className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-slate-100/70 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-tech"
                            onClick={() => toggle(key)}
                            aria-expanded={isOpen}
                          >
                            <span className="font-medium text-sm text-primary">{proj.name}</span>
                            <div className="flex items-center gap-2">
                              <div className="flex flex-wrap gap-1 max-w-xs hidden sm:flex">
                                {proj.technologies.slice(0, 3).map((t) => (
                                  <span key={t} className="tech-badge text-xs">{t}</span>
                                ))}
                                {proj.technologies.length > 3 && (
                                  <span className="tech-badge text-xs">+{proj.technologies.length - 3}</span>
                                )}
                              </div>
                              <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronDown size={16} className="text-text-muted" />
                              </motion.div>
                            </div>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                              >
                                <div className="px-4 pb-4 pt-1">
                                  <p className="text-sm text-text-muted mb-3 leading-relaxed">
                                    {proj.description}
                                  </p>
                                  <ul className="space-y-2 mb-4">
                                    {proj.bullets.map((bullet) => (
                                      <li key={bullet} className="flex items-start gap-2.5">
                                        <CheckCircle size={14} className="text-accent-tech mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-slate-600">{bullet}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  <div className="flex flex-wrap gap-1.5">
                                    {proj.technologies.map((t) => (
                                      <span key={t} className="tech-badge">{t}</span>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

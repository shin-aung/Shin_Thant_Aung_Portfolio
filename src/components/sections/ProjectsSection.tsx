import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Briefcase, BookOpen, User, X, CheckCircle } from 'lucide-react'
import { projects, Project } from '../../data/projects'

type Category = 'All' | 'Work Case Study' | 'Personal' | 'Academic'
const categories: Category[] = ['All', 'Work Case Study', 'Personal', 'Academic']

const categoryIcon = (cat: string) => {
  if (cat === 'Work Case Study') return <Briefcase size={13} />
  if (cat === 'Personal') return <User size={13} />
  return <BookOpen size={13} />
}

const categoryColor = (cat: string) => {
  if (cat === 'Work Case Study') return 'bg-teal-50 text-teal-700 border-teal-200'
  if (cat === 'Personal') return 'bg-blue-50 text-blue-700 border-blue-200'
  return 'bg-slate-100 text-slate-600 border-slate-200'
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeIn}
        >
          <p className="text-xs uppercase tracking-widest text-accent-tech font-medium mb-3">Work & Code</p>
          <h2 className="section-heading">Projects</h2>
          <p className="text-text-muted max-w-xl">
            A selection of work case studies, personal projects, and academic work demonstrating full-stack capabilities.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0.1}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-tech ${
                filter === cat
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-text-muted border-slate-200 hover:border-slate-300 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div
                  className="portfolio-card p-5 h-full flex flex-col cursor-pointer hover:-translate-y-1 hover:border-teal-200 transition-all group"
                  onClick={() => project.caseStudy && setSelected(project)}
                >
                  {/* Project image placeholder */}
                  <div className="w-full h-36 bg-gradient-to-br from-slate-100 to-teal-50/50 rounded-xl mb-4 overflow-hidden flex items-center justify-center relative">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          if (target.parentElement) {
                            target.parentElement.innerHTML = `<span class="text-3xl">💻</span>`
                          }
                        }}
                      />
                    ) : (
                      <span className="text-3xl">💻</span>
                    )}
                    {/* Category badge overlay */}
                    <span
                      className={`absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${categoryColor(project.category)}`}
                    >
                      {categoryIcon(project.category)}
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-primary text-base mb-2 group-hover:text-accent-tech transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-badge">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 mt-auto" onClick={(e) => e.stopPropagation()}>
                    {project.caseStudy && (
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelected(project) }}
                        className="flex-1 py-2 text-center text-xs font-medium text-accent-tech bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
                      >
                        Case Study →
                      </button>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-text-muted hover:text-primary rounded-lg hover:bg-slate-100 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-text-muted hover:text-primary rounded-lg hover:bg-slate-100 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" onClick={() => setSelected(null)} />
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-auto"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <div>
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${categoryColor(selected.category)} mb-2`}
                  >
                    {selected.category}
                  </span>
                  <h2 className="font-display text-xl font-bold text-primary">{selected.title}</h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 rounded-lg text-text-muted hover:bg-slate-100 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-6 space-y-5">
                <p className="text-text-muted leading-relaxed">{selected.description}</p>
                {selected.caseStudy && (
                  <>
                    <div>
                      <h3 className="font-display font-semibold text-primary text-sm uppercase tracking-wide mb-2">Problem</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{selected.caseStudy.problem}</p>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-primary text-sm uppercase tracking-wide mb-2">My Role</h3>
                      <p className="text-slate-600 text-sm">{selected.caseStudy.role}</p>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-primary text-sm uppercase tracking-wide mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {selected.caseStudy.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <CheckCircle size={14} className="text-accent-tech mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {selected.caseStudy.outcome && (
                      <div className="p-4 bg-teal-50 rounded-xl border border-teal-100">
                        <h3 className="font-display font-semibold text-teal-800 text-sm mb-1">Outcome</h3>
                        <p className="text-teal-700 text-sm">{selected.caseStudy.outcome}</p>
                      </div>
                    )}
                  </>
                )}
                <div>
                  <h3 className="font-display font-semibold text-primary text-sm uppercase tracking-wide mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selected.technologies.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  {selected.githubUrl && (
                    <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors">
                      <Github size={14} /> GitHub
                    </a>
                  )}
                  {selected.liveUrl && (
                    <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-accent-tech text-white text-sm font-medium rounded-xl hover:bg-teal-600 transition-colors">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

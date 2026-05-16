import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import { projects } from '../../data/projects';
import { GitFork, ExternalLink, ChevronRight } from 'lucide-react';
import type { ProjectCategory } from '../../data/types';

const FILTERS: ProjectCategory[] = [
  'All', 'Full Stack', 'Frontend', 'Backend', 'Mobile', 'AI', 'Academic', 'Utility',
];

const BADGE_COLORS: Record<string, string> = {
  Professional: 'bg-emerald-50 text-emerald-700',
  Academic: 'bg-blue-50 text-blue-700',
  Personal: 'bg-purple-50 text-purple-700',
};

export function Projects() {
  const [active, setActive] = useState<ProjectCategory>('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="section-label">Projects</span>
          <h2 className="section-title">Selected Projects</h2>
          <div className="section-divider" />
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.05}>
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                  active === f
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-accent hover:text-accent'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group flex flex-col bg-surface border border-gray-200 rounded-2xl overflow-hidden hover:border-accent hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Screenshot placeholder */}
                <div className="h-44 bg-gradient-to-br from-accent-light to-blue-100 flex items-center justify-center relative overflow-hidden">
                  <span className="font-display text-5xl font-light text-accent/20 select-none">
                    {project.title.charAt(0)}
                  </span>
                  {project.badge && (
                    <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide ${BADGE_COLORS[project.badge] ?? ''}`}>
                      {project.badge}
                    </span>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300" />
                </div>

                <div className="flex flex-col flex-1 p-5 gap-3">
                  <h3 className="font-display text-xl font-medium text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{project.summary}</p>

                  {/* Key features */}
                  {project.features.slice(0, 3).map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs text-gray-500">
                      <ChevronRight size={13} className="text-accent flex-shrink-0 mt-0.5" />
                      {f}
                    </div>
                  ))}

                  {/* Tech stack */}
                  <div className="flex flex-wrap mt-1">
                    {project.techStack.map((t) => (
                      <span key={t} className="tag text-[11px]">{t}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 mt-2 pt-3 border-t border-gray-100">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-xs !py-1.5 !px-3"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GitFork size={13} /> GitHub
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs !py-1.5 !px-3"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">No projects in this category yet.</p>
          </div>
        )}

        <Reveal>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/shin-aung"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <GitFork size={16} /> View All on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

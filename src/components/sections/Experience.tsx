import { Reveal } from '../ui/Reveal';
import { experiences } from '../../data/experiences';
import { Briefcase, BookOpen, ChevronRight } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="section-label">Experience</span>
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider" />
        </Reveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.id} delay={i * 0.1}>
                <div className="md:pl-20 relative">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-2xl bg-white border-2 border-accent items-center justify-center shadow-sm">
                    {exp.id === 'onify' ? (
                      <Briefcase size={20} className="text-accent" />
                    ) : (
                      <BookOpen size={20} className="text-accent" />
                    )}
                  </div>

                  <div className="card !p-0 overflow-hidden">
                    {/* Header */}
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <h3 className="font-display text-2xl font-medium text-gray-900">
                            {exp.role}
                          </h3>
                          <p className="text-accent font-medium text-sm mt-1">{exp.company}</p>
                        </div>
                        <span className="tag whitespace-nowrap">{exp.period}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mt-3">{exp.summary}</p>
                    </div>

                    {/* Sub-roles */}
                    {exp.subRoles && (
                      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        {exp.subRoles.map((sub) => (
                          <div key={sub.title} className="p-6">
                            <p className="text-xs font-semibold text-gray-700 mb-4 uppercase tracking-wider">
                              {sub.title}
                            </p>
                            <ul className="flex flex-col gap-2.5 mb-5">
                              {sub.responsibilities.map((r) => (
                                <li key={r} className="flex gap-2.5 text-sm text-gray-500 leading-relaxed">
                                  <ChevronRight
                                    size={15}
                                    className="text-accent flex-shrink-0 mt-0.5"
                                  />
                                  {r}
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap">
                              {sub.techStack.map((t) => (
                                <span key={t} className="tag text-xs">{t}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Simple responsibilities */}
                    {!exp.subRoles && exp.responsibilities.length > 0 && (
                      <div className="p-6">
                        <ul className="flex flex-col gap-2.5">
                          {exp.responsibilities.map((r) => (
                            <li key={r} className="flex gap-2.5 text-sm text-gray-500 leading-relaxed">
                              <ChevronRight size={15} className="text-accent flex-shrink-0 mt-0.5" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech stack footer */}
                    {exp.techStack && exp.techStack.length > 0 && (
                      <div className="px-6 pb-6 flex flex-wrap border-t border-gray-50 pt-4">
                        {exp.techStack.map((t) => (
                          <span key={t} className="tag text-xs">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

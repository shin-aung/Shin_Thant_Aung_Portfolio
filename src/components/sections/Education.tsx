import { Reveal } from '../ui/Reveal';
import { education } from '../../data/index';
import { Download, GraduationCap, Award, FileText, Users } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="section-label">Education</span>
          <h2 className="section-title">Education & Credentials</h2>
          <div className="section-divider" />
        </Reveal>

        <div className="flex flex-col gap-6">
          {/* Degree */}
          {education.map((edu, i) => (
            <Reveal key={edu.id} delay={i * 0.08}>
              <div className="card flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={26} className="text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl font-medium">{edu.degree}</h3>
                      <p className="text-accent font-medium text-sm mt-1">{edu.institution}</p>
                    </div>
                    <span className="tag">{edu.period}</span>
                  </div>
                  {edu.gpa && (
                    <div className="mt-3 mb-4">
                      <span className="tag">GPA: {edu.gpa}</span>
                    </div>
                  )}
                  <ul className="flex flex-col gap-2">
                    {edu.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-gray-500">
                        <Award size={13} className="text-accent flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Credentials row */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Reveal delay={0.1}>
              <div className="card flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0">
                  <FileText size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium">IELTS Certificate</h3>
                  <p className="text-accent text-sm font-medium mt-1">
                    International English Language Testing System
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Certificate available upon request.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="card flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0">
                  <Users size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium">Leadership Roles</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mt-2">
                    Head of Program Management & Logistics —{' '}
                    <span className="text-gray-700 font-medium">JCU 30th Convergence Conference</span>
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed mt-1">
                    Table Tennis Club Planner —{' '}
                    <span className="text-gray-700 font-medium">James Cook University Singapore</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Resume download */}
          <Reveal delay={0.2}>
            <div className="card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 bg-accent text-white border-accent hover:shadow-lg hover:shadow-blue-200 !hover:border-accent-mid">
              <div>
                <h3 className="font-display text-2xl font-light">Download My Resume</h3>
                <p className="text-blue-100 text-sm mt-1">
                  Public version — available for recruiters and employers.
                </p>
              </div>
              <a
                href="/resume/Shin_Thant_Aung_Resume.pdf"
                download
                className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-white text-accent rounded-xl font-medium text-sm hover:bg-blue-50 transition-colors"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

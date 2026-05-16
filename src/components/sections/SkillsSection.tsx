import React from 'react'
import { motion } from 'framer-motion'
import { Code, Layers, Database, Wrench, Cpu, Settings } from 'lucide-react'
import { skillGroups, softSkills } from '../../data/skills'

const iconMap: Record<string, React.ReactNode> = {
  code: <Code size={16} />,
  layers: <Layers size={16} />,
  database: <Database size={16} />,
  wrench: <Wrench size={16} />,
  cpu: <Cpu size={16} />,
  settings: <Settings size={16} />,
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-slate-50/70">
      <div className="container-max">
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeIn}
        >
          <p className="text-xs uppercase tracking-widest text-accent-tech font-medium mb-3">
            Technical Toolkit
          </p>
          <h2 className="section-heading">Skills</h2>
          <p className="text-text-muted max-w-xl">
            Technologies, frameworks, tools, and practices I've worked with in professional and academic projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              className="portfolio-card p-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeIn}
              custom={i * 0.07}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-accent-tech">
                  {iconMap[group.icon]}
                </div>
                <h3 className="font-display font-semibold text-primary text-sm">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-slate-50 text-slate-600 rounded-lg text-xs font-medium border border-slate-200 hover:border-teal-200 hover:text-teal-700 hover:bg-teal-50/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          className="portfolio-card p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeIn}
          custom={0.4}
        >
          <h3 className="font-display font-semibold text-primary mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-xl text-sm font-medium border border-amber-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

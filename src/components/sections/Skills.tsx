import { motion } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import { skills } from '../../data/index';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function Skills() {
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider" />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.08}>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-5">
                  {group.category}
                </p>
                <div className="flex flex-wrap">
                  {group.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      className="tag"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: reduced ? 0 : gi * 0.06 + ii * 0.04,
                        duration: 0.3,
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

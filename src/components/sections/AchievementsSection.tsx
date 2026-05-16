import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, X, ZoomIn } from 'lucide-react'
import { achievements } from '../../data/achievements'

const categoryLabels: Record<string, string> = {
  olympiad: '🏆 Maths Olympiad',
  university: '🎓 University Award',
  language: '🌐 Language',
  other: '✦ Other',
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export const AchievementsSection: React.FC = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null)
  const [lightboxTitle, setLightboxTitle] = useState<string>('')

  const openLightbox = (img: string, title: string) => {
    setLightboxImg(img)
    setLightboxTitle(title)
  }

  return (
    <section id="achievements" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeIn}
        >
          <p className="text-xs uppercase tracking-widest text-accent-tech font-medium mb-3">
            Recognition & Awards
          </p>
          <h2 className="section-heading">Achievements</h2>
          <p className="text-text-muted max-w-xl">
            Nationally and regionally recognised achievements in mathematics, alongside academic and language credentials.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              className="portfolio-card p-5 flex flex-col hover:-translate-y-1 transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeIn}
              custom={i * 0.07}
            >
              {/* Image */}
              {ach.image && (
                <div
                  className="relative w-full h-40 bg-slate-50 rounded-xl mb-4 overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(ach.image!, ach.title)}
                >
                  <img
                    src={ach.image}
                    alt={`Certificate or award for ${ach.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `<div class="flex items-center justify-center h-full text-4xl">🏆</div>`
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </div>
              )}

              {!ach.image && (
                <div className="w-full h-40 bg-gradient-to-br from-amber-50 to-teal-50 rounded-xl mb-4 flex items-center justify-center text-5xl">
                  🏆
                </div>
              )}

              {/* Category label */}
              <span className="text-xs text-text-muted mb-2">
                {categoryLabels[ach.category]}
              </span>

              <h3 className="font-display font-semibold text-primary text-sm mb-1.5 leading-snug">
                {ach.title}
              </h3>

              <p className="text-xs text-text-muted mb-3 flex-1 leading-relaxed">
                {ach.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-slate-400">{ach.year}</span>
                {ach.highlight && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold border border-amber-100">
                    <Trophy size={10} />
                    {ach.highlight}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/10 rounded-xl transition-colors"
              onClick={() => setLightboxImg(null)}
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>
            <motion.div
              className="relative max-w-2xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImg}
                alt={lightboxTitle}
                className="w-full rounded-2xl shadow-2xl"
              />
              {lightboxTitle && (
                <p className="text-white text-sm text-center mt-4 opacity-80">{lightboxTitle}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

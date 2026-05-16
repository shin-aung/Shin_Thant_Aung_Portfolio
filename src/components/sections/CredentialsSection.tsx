import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, FileText, Lock } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export const CredentialsSection: React.FC = () => {
  return (
    <section id="credentials" className="section-padding bg-slate-50/70">
      <div className="container-max">
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeIn}
        >
          <p className="text-xs uppercase tracking-widest text-accent-tech font-medium mb-3">
            Academic & Professional
          </p>
          <h2 className="section-heading">Education & Credentials</h2>
          <p className="text-text-muted max-w-xl">
            Formal academic qualifications and verified credentials.
          </p>
        </motion.div>

        {/* Main degree card */}
        <motion.div
          className="portfolio-card p-7 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeIn}
          custom={0.1}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
              <GraduationCap size={28} className="text-accent-tech" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-display font-bold text-primary text-xl">
                  Bachelor of Information Technology
                </h3>
                <span className="px-2.5 py-0.5 bg-teal-50 text-teal-700 rounded-full text-xs font-semibold border border-teal-200">
                  With Distinction
                </span>
              </div>
              <p className="text-slate-600 font-medium mb-1">James Cook University Singapore</p>
              <p className="text-text-muted text-sm">Conferred: 13 June 2024 · GPA: 6.04 / 7.00</p>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl text-center border border-slate-100">
              <p className="text-2xl font-display font-bold text-primary">6.04</p>
              <p className="text-xs text-text-muted mt-1">GPA / 7.00</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl text-center border border-slate-100">
              <p className="text-2xl font-display font-bold text-primary">72</p>
              <p className="text-xs text-text-muted mt-1">Credit Points</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl text-center border border-slate-100">
              <p className="text-2xl font-display font-bold text-primary">3</p>
              <p className="text-xs text-text-muted mt-1">Years Full-time</p>
            </div>
          </div>

          <div className="mt-5 p-4 bg-amber-50/70 rounded-xl border border-amber-100 flex items-start gap-3">
            <Lock size={15} className="text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-amber-800">
              Degree certificate and full academic transcript available on request. Verified by James Cook University via MyEquals.
            </p>
          </div>
        </motion.div>

        {/* IELTS + GPA highlight */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: <Award size={18} />,
              title: 'IELTS Academic',
              subtitle: 'British Council / IDP / Cambridge English',
              date: 'March 2025',
              value: 'Band 7.0',
              detail: 'L: 7.5 · R: 7.0 · W: 6.0 · S: 6.5',
              color: 'teal',
            },
            {
              icon: <Award size={18} />,
              title: 'Book Prize — Preparatory Mathematics',
              subtitle: 'James Cook University Singapore',
              date: 'March 2024',
              value: 'Top Scorer',
              detail: 'MA1020 SP51 2023 · HD Grade',
              color: 'amber',
            },
            {
              icon: <FileText size={18} />,
              title: 'Academic Transcript',
              subtitle: 'James Cook University Singapore',
              date: 'Issued June 2024',
              value: 'Available',
              detail: 'Available on request · Verified via MyEquals',
              color: 'slate',
            },
          ].map((cred, i) => (
            <motion.div
              key={cred.title}
              className="portfolio-card p-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeIn}
              custom={i * 0.08}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${
                  cred.color === 'teal'
                    ? 'bg-teal-50 text-accent-tech'
                    : cred.color === 'amber'
                    ? 'bg-amber-50 text-amber-600'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                {cred.icon}
              </div>
              <h3 className="font-display font-semibold text-primary text-sm mb-1 leading-snug">
                {cred.title}
              </h3>
              <p className="text-xs text-text-muted mb-3">{cred.subtitle}</p>
              <div className="flex items-center justify-between">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    cred.color === 'teal'
                      ? 'bg-teal-50 text-teal-700 border border-teal-200'
                      : cred.color === 'amber'
                      ? 'bg-amber-50 text-amber-700 border border-amber-200'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {cred.value}
                </span>
                <span className="text-xs text-slate-400">{cred.date}</span>
              </div>
              <p className="text-xs text-text-muted mt-3 leading-relaxed">{cred.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

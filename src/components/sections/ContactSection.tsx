import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Copy, CheckCheck, Download, Send, MessageCircle } from 'lucide-react'
import { profile } from '../../data/profile'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section-padding bg-primary text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent-warm/10 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeIn}
        >
          <p className="text-xs uppercase tracking-widest text-accent-tech font-medium mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            I'm open to full-time opportunities, contract work, and interesting collaborations in Singapore and remotely. Feel free to reach out.
          </p>

          {/* Email card */}
          <motion.div
            className="bg-white/5 rounded-2xl border border-white/10 p-6 mb-8"
            variants={fadeIn}
            custom={0.15}
          >
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-3">Email</p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a
                href={`mailto:${profile.email}`}
                className="font-mono text-white text-lg hover:text-accent-tech transition-colors"
              >
                {profile.email}
              </a>
              <button
                onClick={copyEmail}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-tech ${
                  copied
                    ? 'bg-teal-500 text-white'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                }`}
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <CheckCheck size={13} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    Copy
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
            variants={fadeIn}
            custom={0.25}
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-accent-tech text-white font-medium rounded-xl hover:bg-teal-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-tech"
            >
              <Send size={16} />
              Send Email
            </a>

            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-tech"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center justify-center gap-4"
            variants={fadeIn}
            custom={0.35}
          >
            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-tech rounded"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
              <span>{profile.whatsappDisplay}</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-tech rounded"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-tech rounded"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-tech rounded"
              aria-label="Email"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

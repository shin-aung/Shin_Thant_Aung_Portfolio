import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../../data/profile'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-xl mb-1">
              <span className="text-accent-tech">S</span>hin Thant Aung
              <span className="text-accent-tech">.</span>
            </p>
            <p className="text-slate-400 text-sm">{profile.role}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-tech"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-tech"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-tech"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Shin Thant Aung. All rights reserved.</p>
          <p>Built with React + TypeScript + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

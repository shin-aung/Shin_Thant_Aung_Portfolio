import { GitFork, Link, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl font-light">Shin Thant Aung</p>
          <p className="text-gray-400 text-sm mt-1">Junior Full Stack Software Developer · Singapore 🇸🇬</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shin-aung"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <GitFork size={20} />
          </a>
          <a
            href="https://linkedin.com/in/shin-thant-aung-stanley"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <Link size={20} />
          </a>
          <a
            href="mailto:shin_thant_aung@outlook.com"
            aria-label="Email"
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="ml-4 p-2 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-400 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
        <p className="text-gray-600 text-xs">© 2025 Shin Thant Aung · Built with React & TypeScript</p>
      </div>
    </footer>
  );
}

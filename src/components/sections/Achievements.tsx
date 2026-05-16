import { useState } from 'react';
import { Reveal } from '../ui/Reveal';
import { Modal } from '../ui/Modal';
import { achievements } from '../../data/index';
import type { Achievement } from '../../data/types';
import { ImageIcon } from 'lucide-react';

export function Achievements() {
  const [selected, setSelected] = useState<Achievement | null>(null);

  return (
    <section id="achievements" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="section-label">Achievements</span>
          <h2 className="section-title">Awards & Recognition</h2>
          <div className="section-divider" />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((ach, i) => (
            <Reveal key={ach.id} delay={i * 0.08}>
              <button
                onClick={() => setSelected(ach)}
                className="w-full text-left card flex gap-5 items-start group cursor-pointer"
                aria-label={`View details for ${ach.title}`}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-yellow-50 border border-yellow-100 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-105 transition-transform">
                  {ach.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <h3 className="font-display text-xl font-medium text-gray-900 leading-tight">
                      {ach.title}
                    </h3>
                    {ach.year && (
                      <span className="tag-gold text-xs whitespace-nowrap">{ach.year}</span>
                    )}
                  </div>
                  <p className="text-accent text-xs font-medium mt-1 mb-2">{ach.issuer}</p>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {ach.description}
                  </p>
                  {ach.imageUrl ? (
                    <span className="inline-flex items-center gap-1 text-xs text-accent mt-3 font-medium">
                      <ImageIcon size={12} /> View Certificate
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs text-gray-400 mt-3">
                      Certificate available upon request
                    </span>
                  )}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        {selected && (
          <div>
            {selected.imageUrl ? (
              <img
                src={selected.imageUrl}
                alt={`Certificate for ${selected.title}`}
                className="w-full rounded-xl mb-6 object-contain max-h-80 bg-gray-50"
              />
            ) : (
              <div className="w-full h-48 bg-yellow-50 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-5xl mb-3">{selected.icon}</div>
                  <p className="text-sm text-gray-400">
                    Add certificate image to{' '}
                    <code className="bg-gray-100 px-1 rounded text-xs">
                      /public/certificates/
                    </code>
                  </p>
                </div>
              </div>
            )}
            <p className="text-accent font-medium text-sm mb-2">{selected.issuer}</p>
            {selected.year && (
              <p className="text-xs text-gray-400 mb-3">Year: {selected.year}</p>
            )}
            <p className="text-gray-600 leading-relaxed">{selected.description}</p>
            {selected.verificationUrl && (
              <a
                href={selected.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-5 inline-flex"
              >
                Verify Certificate
              </a>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}

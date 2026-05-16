import { Reveal } from '../ui/Reveal';
import { Mail, Phone, GitFork, Link, MapPin } from 'lucide-react';

const CONTACT_ITEMS = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'shin_thant_aung@outlook.com',
    href: 'mailto:shin_thant_aung@outlook.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '(+65) 8577 7325',
    href: 'tel:+6585777325',
  },
  {
    icon: <GitFork size={20} />,
    label: 'GitHub',
    value: 'github.com/shin-aung',
    href: 'https://github.com/shin-aung',
    external: true,
  },
  {
    icon: <Link size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shin-thant-aung-stanley',
    href: 'https://linkedin.com/in/shin-thant-aung-stanley',
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-400 block mb-2">
            Contact
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight text-white mb-4">
            Let's Work Together
          </h2>
          <div className="w-11 h-0.5 bg-blue-500 mt-5 mb-8" />
          <p className="text-gray-400 text-base leading-relaxed max-w-lg mb-14">
            I'm currently open to new opportunities. Whether you have a project in mind or just
            want to connect, feel free to reach out.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {CONTACT_ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 px-5 py-4 border border-white/10 rounded-xl hover:border-blue-400/50 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/25 transition-colors flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-200 font-medium mt-0.5">{item.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Location */}
        <Reveal delay={0.3}>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin size={14} className="text-blue-400" />
            Based in Singapore 🇸🇬
          </div>
        </Reveal>
      </div>
    </section>
  );
}

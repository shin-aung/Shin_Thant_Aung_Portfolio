import { Reveal } from '../ui/Reveal';
import { GraduationCap, Code2, Zap, Users } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: <Code2 size={20} className="text-accent" />,
    title: 'Full-Stack Development',
    desc: 'React, TypeScript, Next.js on the frontend; C#, .NET, Node.js on the backend.',
  },
  {
    icon: <Zap size={20} className="text-accent" />,
    title: 'AI API Integration',
    desc: 'OpenAI API integration for processing PDFs, CSVs, and images into structured outputs.',
  },
  {
    icon: <GraduationCap size={20} className="text-accent" />,
    title: 'Strong Academic Foundation',
    desc: 'Bachelor of IT from James Cook University Singapore, GPA 6.04/7.00.',
  },
  {
    icon: <Users size={20} className="text-accent" />,
    title: 'Leadership & Communication',
    desc: 'Conference logistics head and club organiser at JCU Singapore.',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <Reveal>
              <span className="section-label">About Me</span>
              <h2 className="section-title">Building Practical<br />Software Solutions</h2>
              <div className="section-divider" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-gray-600 leading-relaxed mb-5">
                I am a motivated junior full stack software developer with experience building
                cross-platform mobile and web applications. I enjoy turning real-world problems
                into clean, efficient, and user-friendly digital solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                My background includes backend API development with C# and .NET, frontend
                development with React and Next.js, database work with Supabase and PostgreSQL,
                and AI API integration for document and image processing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I hold a Bachelor of Information Technology from James Cook University Singapore
                (GPA 6.04/7.00), where I was awarded the Book Prize for top performance in
                Preparatory Mathematics and led logistics for the JCU 30th Convergence Conference.
              </p>
            </Reveal>
          </div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map(({ icon, title, desc }, i) => (
              <Reveal key={title} delay={0.1 + i * 0.08}>
                <div className="p-5 border border-gray-100 rounded-2xl bg-surface hover:border-accent hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-accent-light rounded-xl flex items-center justify-center mb-4">
                    {icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Achievement, Skill, EducationItem } from './types';

export const achievements: Achievement[] = [
  {
    id: 'timo',
    title: 'Gold Medallist — TIMO',
    issuer: 'Thailand International Mathematics Olympiad',
    year: '2019',
    description:
      'Awarded Gold Medal in the Thailand International Mathematics Olympiad, competing against top students across the region.',
    imageUrl: '/certificates/TIMO/TIMO_Mathematic_Olympaid_2019-2020_Results.jpg', // Add your certificate image path here e.g. /certificates/timo-gold.jpg
    icon: '🥇',
  },
  {
    id: 'seamo',
    title: 'Gold Medallist — SEAMO',
    issuer: 'South East Asian Mathematics Olympiad',
    year: '2019',
    description:
      'Awarded Gold Medal in the South East Asian Mathematics Olympiad, demonstrating top-level problem-solving and analytical skills.',
    imageUrl: '', // Add your certificate image path here
    icon: '🥇',
  },
  {
    id: 'national-olympiad',
    title: 'Top 15 Nationally',
    issuer: 'National Mathematics Olympiad, Myanmar',
    description:
      'Ranked among the top 15 participants nationwide in the Myanmar National Mathematics Olympiad.',
    imageUrl: '', // Add your certificate image path here
    icon: '🏆',
  },
  {
    id: 'book-prize',
    title: 'Book Prize — Preparatory Mathematics',
    issuer: 'James Cook University Singapore',
    description:
      'Awarded the Book Prize for achieving the top score in Preparatory Mathematics at James Cook University Singapore.',
    imageUrl: '', // Add your certificate image path here
    icon: '📚',
  },
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['C#', 'Python', 'JavaScript', 'TypeScript', 'PHP', 'C++', 'SQL', 'Java'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['.NET', 'React', 'Next.js', 'Node.js', 'Mantine', 'FlutterFlow'],
  },
  {
    category: 'Databases & Backend',
    items: ['PostgreSQL', 'MySQL', 'Supabase'],
  },
  {
    category: 'Tools & Platforms',
    items: ['GitHub', 'Docker', 'Visual Studio Code', 'Azure Data Studio', 'Android Studio', 'Swagger', 'Tableau', 'Weka', 'Figma'],
  },
  {
    category: 'Professional Skills',
    items: ['Agile Collaboration', 'Problem Solving', 'Code Review', 'Technical Documentation', 'API Testing', 'CI/CD', 'RESTful APIs'],
  },
];

export const education: EducationItem[] = [
  {
    id: 'jcu',
    degree: 'Bachelor of Information Technology',
    institution: 'James Cook University Singapore',
    period: 'April 2022 – June 2024',
    gpa: '6.04 / 7.00',
    highlights: [
      'Book Prize — Top Scorer in Preparatory Mathematics',
      'Head of Program Management & Logistics, JCU 30th Convergence Conference',
      'Table Tennis Club Planner',
    ],
  },
];

export type SkillGroup = {
  category: string
  icon: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    icon: 'code',
    skills: ['TypeScript', 'JavaScript', 'C#', 'Python', 'C++', 'Java', 'PHP', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: 'layers',
    skills: ['React', 'Next.js', 'Node.js', '.NET', 'Mantine', 'Tailwind CSS', 'FlutterFlow'],
  },
  {
    category: 'Databases',
    icon: 'database',
    skills: ['PostgreSQL', 'MySQL', 'Supabase'],
  },
  {
    category: 'Tools & Platforms',
    icon: 'wrench',
    skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Android Studio', 'Azure Data Studio', 'Swagger', 'Weka', 'Tableau', 'Figma'],
  },
  {
    category: 'AI & APIs',
    icon: 'cpu',
    skills: ['OpenAI API', 'REST API', 'Google Sheets API'],
  },
  {
    category: 'Practices',
    icon: 'settings',
    skills: ['Agile / Scrum', 'CI/CD', 'API Testing', 'OOP', 'Version Control', 'UI/UX Design'],
  },
]

export const softSkills = [
  'Problem-solving',
  'Team collaboration',
  'Clear communication',
  'Fast learner',
  'Self-motivated',
  'Attention to detail',
]

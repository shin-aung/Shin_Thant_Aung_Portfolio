export type ExperienceItem = {
  company: string
  role: string
  period: string
  type: 'full-time' | 'part-time' | 'teaching'
  location: string
  description: string
  projects: {
    name: string
    description: string
    bullets: string[]
    technologies: string[]
  }[]
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Onify Tech Company',
    role: 'Junior Full Stack Software Developer / Engineer',
    period: 'Jan 2025 – Sep 2025',
    type: 'full-time',
    location: 'Singapore',
    description:
      'Contributed as a core developer across two products — a customer-facing mobile/web platform and an internal company platform — delivering full-stack solutions in an Agile environment.',
    projects: [
      {
        name: 'Asset Wins',
        description:
          'Customer-facing cross-platform mobile and web application built with FlutterFlow, supporting real-world asset management workflows.',
        bullets: [
          'Led Android and iOS production deployments, managing build configurations, release pipelines, and cross-platform compatibility.',
          'Designed and developed backend services using C# and .NET, exposing secure and scalable RESTful APIs.',
          'Integrated OpenAI APIs to process and transform unstructured data formats (PDF, CSV, PNG) into structured, machine-readable outputs for downstream systems.',
        ],
        technologies: ['FlutterFlow', 'C#', '.NET', 'REST API', 'OpenAI API', 'Android', 'iOS'],
      },
      {
        name: 'Beny',
        description:
          'Internal company software platform — full-stack web applications for internal tools and workflows.',
        bullets: [
          'Developed and maintained full-stack web applications using Next.js, React, and Mantine, delivering responsive and user-friendly internal tools.',
          'Implemented authentication, authorization, and real-time data features using Supabase as a backend-as-a-service platform.',
          'Conducted API testing and documentation using Swagger, ensuring consistency and reliability across services.',
          'Collaborated in an Agile development environment, using Git for version control and contributing to CI/CD pipelines.',
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'Mantine', 'Supabase', 'Swagger', 'Git', 'CI/CD'],
      },
    ],
  },
  {
    company: 'UAT Maths Enrichment Classes',
    role: 'Part-Time Mathematics Lecturer',
    period: '2019 – 2021',
    type: 'teaching',
    location: 'Mandalay, Myanmar',
    description:
      'Taught mathematics to students preparing for national and international competitions, including TIMO, SEAMO, Math Kangaroo, and the National Mathematics Olympiad Myanmar.',
    projects: [
      {
        name: 'Competition Mathematics Teaching',
        description:
          'Delivered structured problem-solving sessions to high-achieving students preparing for regional and international maths competitions.',
        bullets: [
          'Prepared students for TIMO, SEAMO, Math Kangaroo, and National Mathematics Olympiad competitions.',
          'Developed curriculum materials for advanced problem-solving techniques.',
          'Mentored students on analytical thinking, discipline, and competition strategy.',
        ],
        technologies: ['Communication', 'Problem-solving', 'Curriculum Design', 'Mentoring'],
      },
    ],
  },
]

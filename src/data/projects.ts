export type Project = {
  title: string
  category: 'Work Case Study' | 'Personal' | 'Academic'
  description: string
  technologies: string[]
  image?: string
  githubUrl?: string
  websiteUrl?: string
  liveUrl?: string
  caseStudy?: {
    problem: string
    role: string
    features: string[]
    outcome?: string
  }
}

export const projects: Project[] = [
  {
    title: 'Asset Wins',
    category: 'Work Case Study',
    description:
      'A cross-platform mobile and web application for real-world asset management, featuring AI-powered document processing and production mobile deployments.',
    technologies: ['FlutterFlow', 'C#', '.NET', 'REST API', 'OpenAI API', 'Android', 'iOS'],
    image: '/images/projects/asset-wins.png',
    caseStudy: {
      problem: 'Clients needed a reliable cross-platform solution to manage assets with AI-powered document ingestion and structured data outputs.',
      role: 'Core developer responsible for Android/iOS deployments, backend API design, and OpenAI integration.',
      features: [
        'Cross-platform mobile/web app built with FlutterFlow',
        'Android and iOS production deployments with release pipelines',
        'Secure RESTful backend APIs built with C# and .NET',
        'OpenAI API integration for PDF, CSV, and image processing',
      ],
      outcome: 'Successfully deployed to both Google Play Store and Apple App Store with stable production releases.',
    },
  },
  {
    title: 'Beny Internal Platform',
    category: 'Work Case Study',
    description:
      'An internal company platform for managing workflows, featuring real-time data features, authentication, Swagger-documented APIs, and CI/CD pipelines.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Mantine', 'Supabase', 'Swagger', 'Git'],
    image: '/images/projects/beny.png',
    caseStudy: {
      problem: 'The company needed robust internal tools with secure authentication, real-time features, and well-documented APIs.',
      role: 'Full-stack developer responsible for frontend components, Supabase integration, and API documentation.',
      features: [
        'Responsive internal web app built with Next.js, React, and Mantine UI',
        'Supabase authentication, authorization, and real-time data features',
        'Swagger API documentation and testing for all service endpoints',
        'CI/CD pipeline integration with Git-based workflows',
      ],
    },
  },
  {
    title: 'Tripzone',
    category: 'Personal',
    description:
      'A full-stack travel planning web application with database-driven itinerary management, built using React and Supabase.',
    technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    image: '/images/projects/tripzone.png',
    githubUrl: 'https://github.com/shin-aung/React-Supabase',
  },
  {
    title: 'Next.js + Google Sheets Dashboard',
    category: 'Personal',
    description:
      'A web application integrating Next.js with Google Sheets API for data submission, retrieval, and dynamic dashboard display.',
    technologies: ['Next.js', 'Google Sheets API', 'TypeScript', 'REST API'],
    image: '/images/projects/nextjs-sheets.png',
    githubUrl: 'https://github.com/shin-aung/GO_GO_TRIP_Travelling_Agency',
    websiteUrl: 'https://tripzone-travelling-agency.vercel.app/en',
  },
  {
    title: 'Java Games & Utility Apps',
    category: 'Academic',
    description:
      'Collection of fully functional Java applications including Sudoku, Minesweeper, and a Calculator, applying OOP principles and recursive algorithms.',
    technologies: ['Java', 'OOP', 'Recursion', 'Algorithms', 'Android Studio'],
    image: '/images/projects/java-games.png',
    githubUrl: 'https://github.com/shin-aung/Mobile_Computing_Games_App_A1_Part_2',
    caseStudy: {
      problem: 'Mobile computing coursework requiring full-stack Java game and utility applications.',
      role: 'Sole developer.',
      features: [
        'Fully functioning Sudoku game with recursive backtracking solver',
        'Minesweeper with dynamic grid generation and flood-fill reveal',
        'Calculator with expression parsing',
        'OOP principles applied for modular, maintainable code',
      ],
    },
  },
  {
    title: 'CMS & Web Development Project',
    category: 'Academic',
    description:
      'Dynamic websites built with HTML, CSS, and PHP, featuring responsive design, server-side logic, and UI/UX wireframes designed in Figma.',
    technologies: ['HTML', 'CSS', 'PHP', 'Figma', 'UI/UX Design'],
    image: '/images/projects/cms.png',
    githubUrl: 'https://github.com/shin-aung/Content-Management-System',
  },
]

import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'asset-wins',
    title: 'Asset Wins',
    category: ['Full Stack', 'Mobile', 'AI', 'Backend'],
    summary:
      'Cross-platform mobile and web asset management platform with AI-powered document processing.',
    problem:
      'Manual data entry from PDFs and spreadsheets was time-consuming and error-prone.',
    features: [
      'Android & iOS production deployments',
      'OpenAI-powered PDF/CSV/PNG data extraction',
      'Scalable RESTful API backend',
      'Cross-platform mobile app with FlutterFlow',
    ],
    techStack: ['FlutterFlow', 'C#', '.NET', 'REST API', 'OpenAI API'],
    githubUrl: 'https://github.com/YOUR_USERNAME',
    screenshots: [],
    role: 'Core Developer',
    highlights: [
      'Led Android & iOS production deployments',
      'Designed and built RESTful APIs with C# and .NET',
      'Integrated OpenAI API to process unstructured document formats',
    ],
    featured: true,
    badge: 'Professional',
  },
  {
    id: 'beny',
    title: 'Beny Internal Platform',
    category: ['Full Stack', 'Frontend', 'Backend'],
    summary:
      'Internal company software platform with real-time data, authentication, and API documentation.',
    problem:
      'Staff needed a reliable, real-time internal tool with secure access control.',
    features: [
      'Authentication and authorization system',
      'Real-time data updates with Supabase',
      'Responsive UI with Next.js and Mantine',
      'Swagger API documentation',
      'CI/CD pipeline integration',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Mantine', 'Swagger', 'Git'],
    githubUrl: 'https://github.com/YOUR_USERNAME',
    screenshots: [],
    role: 'Full Stack Developer',
    highlights: [
      'Built full-stack web apps with Next.js, React, and Mantine',
      'Implemented auth and real-time data using Supabase',
      'Contributed to CI/CD pipelines with Git',
    ],
    featured: true,
    badge: 'Professional',
  },
  {
    id: 'tripzone',
    title: 'Tripzone',
    category: ['Full Stack', 'Frontend'],
    summary:
      'Full-stack travel planning web application for managing trip details in one place.',
    problem:
      'Users need a simple, unified dashboard to plan and organise trip information.',
    features: [
      'Trip creation and management dashboard',
      'Supabase backend for data persistence',
      'Responsive design for all devices',
      'Data creation, editing, and retrieval',
    ],
    techStack: ['React', 'TypeScript', 'Supabase'],
    githubUrl: 'https://github.com/YOUR_USERNAME/tripzone',
    screenshots: [],
    role: 'Full Stack Developer',
    highlights: [
      'Built frontend with React and TypeScript',
      'Integrated Supabase as backend database',
    ],
    featured: true,
    badge: 'Academic',
  },
  {
    id: 'google-sheets-app',
    title: 'Google Sheets Dashboard',
    category: ['Full Stack', 'Frontend'],
    summary:
      'Next.js web application using Google Sheets API as a live backend data source.',
    features: [
      'Google Sheets as live data backend',
      'Dynamic data display and sync',
      'Cloud workflow integration',
    ],
    techStack: ['Next.js', 'React', 'Google Sheets API', 'TypeScript'],
    githubUrl: 'https://github.com/YOUR_USERNAME',
    screenshots: [],
    role: 'Full Stack Developer',
    highlights: ['Built Google Sheets integration for dynamic data retrieval'],
    badge: 'Academic',
  },
  {
    id: 'java-games',
    title: 'Java Game Suite',
    category: ['Academic', 'Utility'],
    summary:
      'Sudoku, Minesweeper, and Calculator built with Java and OOP principles.',
    features: [
      'Fully working Sudoku and Minesweeper games',
      'Calculator utility app',
      'OOP-based modular architecture',
      'Recursive algorithms for game logic',
    ],
    techStack: ['Java', 'OOP', 'Algorithms'],
    githubUrl: 'https://github.com/YOUR_USERNAME',
    screenshots: [],
    role: 'Developer',
    highlights: ['Applied recursive algorithms for game logic', 'Modular OOP design'],
    badge: 'Academic',
  },
  {
    id: 'php-cms',
    title: 'PHP Content Management System',
    category: ['Full Stack', 'Frontend'],
    summary:
      'Dynamic CMS built with PHP, HTML, and CSS with a focus on responsive design and UI/UX.',
    features: [
      'Server-side logic with PHP',
      'Responsive design with HTML & CSS',
      'Figma wireframe-driven UI/UX design',
      'Full front-to-back integration',
    ],
    techStack: ['PHP', 'HTML', 'CSS', 'Figma'],
    githubUrl: 'https://github.com/YOUR_USERNAME',
    screenshots: [],
    role: 'Full Stack Developer',
    highlights: ['UI/UX-first approach using Figma wireframes'],
    badge: 'Academic',
  },
  {
    id: 'cpp-python-projects',
    title: 'C++ & Python Projects',
    category: ['Academic', 'Backend'],
    summary:
      'Academic data structures, algorithms, and software development projects in C++ and Python.',
    features: [
      'Data structure implementations (arrays, linked lists, stacks, queues)',
      'Algorithm design and optimization',
      'Problem-solving and debugging exercises',
    ],
    techStack: ['C++', 'Python'],
    githubUrl: 'https://github.com/YOUR_USERNAME',
    screenshots: [],
    role: 'Developer',
    highlights: ['Strong foundation in algorithms and data structures'],
    badge: 'Academic',
  },
];

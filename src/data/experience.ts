export type ExperienceItem = {
  company: string
  role: string
  period: string
  type: 'full-time' | 'part-time' | 'teaching' | 'internship'
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
    company: 'Rev 22 Global Energia',
    role: 'Software Developer Intern',
    period: 'Jul 2026 – Present',
    type: 'internship',
    location: 'Singapore',
    description:
      'In-house developer for a Singapore health and wellness company with retail stores, therapy services, events and online sales. I design, build and run its operations platform and the websites and automations around it.',
    projects: [
      {
        name: 'Operations platform (inventory, POS and invoicing)',
        description:
          'The web app owners and store staff use every day to run the business.',
        bullets: [
          'Built the inventory, point-of-sale and invoicing app: invoices and payments, credit and voucher packages, therapy sessions, refunds and exchanges, stock transfers between stores, warehouse and van, rentals with late fees, promotions and reports.',
          'Wrote the business logic as PostgreSQL functions and triggers with row-level security and Owner/Manager/Staff roles, shipped through 400+ versioned migrations and covered by automated database and browser tests.',
          'Built staff and affiliate commission tracking, an affiliate portal with referral links, and an audit log of changes.',
          'Audited the app for security and data integrity and shipped the fixes in staged, verified releases.',
        ],
        technologies: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Row-Level Security'],
      },
      {
        name: 'Integrations, websites and automation',
        description:
          'Connecting the platform to the rest of the business.',
        bullets: [
          'Integrated TikTok Shop orders and payouts (with a Xero export), cal.com bookings, HitPay payments and Google Sheets through Supabase Edge Functions and webhooks.',
          "Built the company's event websites on Vercel; ticket orders and registrations flow into the platform's Events module with guest lists, early-bird pricing and door sales.",
          "Automated follow-up for TikTok ad leads (Google Sheets, Pabbly Connect, WhatsApp reminders) and produce and schedule the company's TikTok, Instagram, Facebook and YouTube content.",
        ],
        technologies: ['Supabase Edge Functions', 'Webhooks', 'Vercel', 'Google Sheets', 'Pabbly Connect'],
      },
    ],
  },
  {
    company: 'Onify Tech',
    role: 'Junior Software Engineer (promoted from Software Developer Intern)',
    period: 'Jan 2025 – Sep 2025',
    type: 'full-time',
    location: 'Bangkok, Thailand',
    description:
      "Promoted from intern to junior software engineer in May 2025. Worked as a core developer across two products, a customer-facing mobile and web platform and the company's internal platform, in an Agile team.",
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
    company: 'Part-Time Mathematics Lecturer',
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

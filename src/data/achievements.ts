export type Achievement = {
  title: string
  issuer: string
  year: string
  description: string
  image?: string
  category: 'olympiad' | 'university' | 'language' | 'other'
  highlight?: string
  publicVisibility: 'public' | 'redacted' | 'available-on-request'
}

export const achievements: Achievement[] = [
  {
    title: 'Gold Medal — SEAMO Mathematical Olympiad',
    issuer: 'Southeast Asian Mathematical Olympiad (SEAMO)',
    year: '2019',
    description:
      'Achieved 1st place nationally in Myanmar for SEAMO Paper E (2019), ranking #1 among all Myanmar participants.',
    image: '/images/achievements/seamo-2019-results.jpg',
    category: 'olympiad',
    highlight: '🥇 National #1',
    publicVisibility: 'public',
  },
  {
    title: 'Gold Award — TIMO Mathematical Olympiad Heat Round',
    issuer: 'Thailand International Mathematical Olympiad (TIMO)',
    year: '2019–2020',
    description:
      'Awarded Gold in the TIMO Heat Round 2019–2020, demonstrating strong performance in international-level mathematics.',
    image: '/images/achievements/timo-heat-round.jpg',
    category: 'olympiad',
    highlight: '🥇 Gold Award',
    publicVisibility: 'public',
  },
  {
    title: 'SEAMO Maths Champion Trophy',
    issuer: 'UAT Maths Enrichment Classes / SEAMO',
    year: '2019–2020',
    description:
      'Awarded the Maths Champion trophy by UAT Maths Enrichment Classes for outstanding performance in the Southeast Asian Mathematical Olympiad.',
    image: '/images/achievements/seamo-maths-champion.jpg',
    category: 'olympiad',
    highlight: '🏆 Maths Champion',
    publicVisibility: 'public',
  },
  {
    title: 'TIMO Maths Champion Trophy',
    issuer: 'UAT Maths Enrichment Classes / TIMO',
    year: '2019–2020',
    description:
      'Awarded the TIMO Maths Champion trophy by UAT Maths Enrichment Classes for top performance in the Thailand International Mathematical Olympiad.',
    image: '/images/achievements/timo-maths-champion.jpg',
    category: 'olympiad',
    highlight: '🏆 TIMO Champion',
    publicVisibility: 'public',
  },
  {
    title: 'Top 7 — Mandalay Mathematical Olympiad',
    issuer: 'Mandalay Mathematical Olympiad',
    year: '2019',
    description:
      'Achieved Top 7 ranking in the Mandalay Mathematical Olympiad, demonstrating outstanding problem-solving ability in regional competition.',
    image: '/images/achievements/mandalay-olympiad.jpg',
    category: 'olympiad',
    highlight: 'Top 7 Regional',
    publicVisibility: 'public',
  },
  {
    title: 'Top 15 — Myanmar National Mathematical Olympiad',
    issuer: 'Mathematical Society of Myanmar (MSM)',
    year: '2019',
    description:
      'Ranked in the Top 15 nationally in the Myanmar Mathematical Olympiad (Grade 10 category), awarded by the Mathematical Society of Myanmar.',
    image: '/images/achievements/national-olympiad.jpg',
    category: 'olympiad',
    highlight: 'Top 15 National',
    publicVisibility: 'public',
  },
  {
    title: 'Book Prize — Preparatory Mathematics',
    issuer: 'James Cook University Singapore',
    year: '2024',
    description:
      'Awarded the Book Prize by James Cook University Singapore for outstanding academic performance in MA1020: Preparatory Mathematics during Study Period SP51 2023.',
    image: '/images/achievements/jcu-book-prize.jpg',
    category: 'university',
    highlight: '📚 Top Scorer',
    publicVisibility: 'public',
  },
  {
    title: 'IELTS Academic — Band 7.0',
    issuer: 'British Council / IDP / Cambridge English',
    year: '2025',
    description:
      'Achieved IELTS Academic Overall Band Score 7.0 (C1 level). Listening: 7.5, Reading: 7.0, Writing: 6.0, Speaking: 6.5.',
    image: '/images/achievements/ielts.png',
    category: 'language',
    highlight: 'Band 7.0 (C1)',
    publicVisibility: 'public',
  },
]

export type Credential = {
  title: string
  institution: string
  date: string
  summary: string
  fileUrl?: string
  visibilityNote?: string
}

export const credentials: Credential[] = [
  {
    title: 'Bachelor of Information Technology with Distinction',
    institution: 'James Cook University Singapore',
    date: '13 June 2024',
    summary: 'GPA: 6.04/7.00. Graduated with Distinction. 72 credit points across 3 years of full-time study.',
    visibilityNote: 'Degree certificate available on request. Transcript available on request.',
  },
]

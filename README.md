# Shin Thant Aung — Portfolio Website

A professional portfolio website built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + TypeScript | Framework with full type safety |
| Vite | Fast build tooling |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Smooth animations |
| Lucide React | Clean icon set |
| React Helmet Async | SEO metadata |

## Project Structure

```
shin-portfolio/
├── public/
│   ├── images/
│   │   ├── profile/         ← shin-professional.jpg
│   │   ├── about/           ← shin-about-me-board.jpg
│   │   ├── projects/        ← project screenshots
│   │   └── achievements/    ← certificate images
│   └── documents/
│       └── Shin_Thant_Aung_Resume_Public.pdf
├── src/
│   ├── components/
│   │   ├── layout/          ← Navbar, Footer
│   │   ├── sections/        ← All page sections
│   │   └── ui/              ← Button, Modal
│   ├── data/                ← All content as typed TS files
│   ├── hooks/               ← useScrollSpy, useReducedMotion
│   └── styles/              ← globals.css
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## Sections

1. **Hero** — Name, role, headline, profile image, CTA buttons, tech badges
2. **About** — Bio, values, strengths, personal side
3. **Experience** — Onify Tech (Asset Wins, Beny), Teaching
4. **Projects** — Filterable grid with case study modals
5. **Skills** — Grouped by category: Languages, Frameworks, Databases, Tools, AI/APIs
6. **Achievements** — Certificate gallery with lightbox
7. **Credentials** — Degree card, IELTS, Book Prize
8. **Contact** — Email copy button, social links, resume download

## Content Updates

All content is managed in `src/data/`:

- `profile.ts` — Name, bio, contact info, values, motto
- `experience.ts` — Work history with expandable sub-projects
- `projects.ts` — Projects with optional case studies
- `skills.ts` — Skill groups and soft skills
- `achievements.ts` — Awards, certifications, credentials

### Adding GitHub Links

In `src/data/projects.ts`, add your actual GitHub URLs:

```typescript
githubUrl: 'https://github.com/your-username/project-name',
```

### Adding LinkedIn URL

In `src/data/profile.ts`:

```typescript
linkedin: 'https://linkedin.com/in/your-linkedin-username',
```

### Resume

⚠️ **IMPORTANT**: Before deploying, replace `public/documents/Shin_Thant_Aung_Resume_Public.pdf` with your public-safe resume. Remove any sensitive personal information (FIN number, full address, religion).

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## Performance Notes

- All achievement images are lazy-loaded
- Profile image uses `loading="eager"` for LCP
- Framer Motion respects `prefers-reduced-motion`
- Images in `public/` should be compressed to WebP/AVIF where possible

## License

Personal portfolio — all rights reserved by Shin Thant Aung.

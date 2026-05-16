# Shin Thant Aung — Portfolio Website

A professional portfolio built with **React + TypeScript + Vite**, styled with **Tailwind CSS v3**, and animated with **Framer Motion**.

## Quick Start
```bash
npm install
npm run dev       # Development server at http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build
```

## Customisation Checklist
1. **GitHub/LinkedIn links** — search `YOUR_USERNAME` and `YOUR_LINKEDIN` in `src/` and replace
2. **Resume PDF** → place at `public/resume/Shin_Thant_Aung_Resume.pdf`
3. **Certificate images** → place in `public/certificates/`, update `imageUrl` in `src/data/index.ts`
4. **Project screenshots** → place in `public/screenshots/`
5. **Project GitHub URLs** → update `githubUrl` values in `src/data/projects.ts`
6. **Profile photo** → add `public/profile.jpg` and add an `<img>` tag in `Hero.tsx`

## Folder Structure
```
src/
  components/
    layout/   Navbar.tsx, Footer.tsx
    sections/ Hero, About, Experience, Projects, Skills, Achievements, Education, Contact
    ui/       Reveal.tsx (scroll animation), Modal.tsx (lightbox)
  data/       projects.ts, experiences.ts, index.ts (skills/achievements/education)
  hooks/      useReducedMotion.ts, useActiveSection.ts
public/
  resume/         ← Add your public resume PDF here
  certificates/   ← Add certificate images here
  screenshots/    ← Add project screenshots here
```

## Deploy
- **Vercel**: `npx vercel` (recommended)
- **Netlify**: drag & drop `dist/` at netlify.com/drop
- **GitHub Pages**: add `base: '/repo-name/'` to `vite.config.ts` then push `dist/`

## Privacy
Do NOT publish your full address, FIN number, religion, or full transcript.

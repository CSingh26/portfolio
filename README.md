# Chaitanya Singh Portfolio

Premium storytelling portfolio for Chaitanya Singh, built with Next.js App Router, TypeScript,
Tailwind CSS, Framer Motion, and reusable content data.

## What changed

- Rebuilt the site as a chapter-led portfolio: Home, About, Projects, Experience, Skills, Thinking,
  and Contact.
- Preserved the existing profile image, resume file, public links, email, phone, and rotating navbar
  name animation.
- Added a dual-tone visual system using matte navy, ivory, graphite, electric blue, and muted gold.
- Added motion primitives inspired by React Bits patterns: text reveal, page transition, magnetic
  buttons, spotlight cards, and scroll reveals.
- Added a public GitHub repository importer that writes editable project data.
- Kept the project filter and generated project data sourced from public repository evidence only.

## Design artifacts

- Google Stitch project: `projects/14263814654891317619`
- Figma design file: https://www.figma.com/design/x5zZNxrpK81LDIwnDbp41M
- Figma home page capture: https://www.figma.com/design/x5zZNxrpK81LDIwnDbp41M?node-id=3-2

The Figma file contains the palette, desktop home direction, and mobile rhythm used as the design
reference for this implementation, plus a capture of the running homepage for layout comparison.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

```bash
npm run lint
npm run build
```

## Import public GitHub projects

The importer reads the GitHub username from `src/data/profile.ts` or from `GITHUB_USERNAME`.
Authenticated requests are recommended because unauthenticated GitHub API calls have a low rate limit.

```bash
GITHUB_USERNAME=CSingh26 node scripts/import-public-github-projects.mjs
```

Optional:

```bash
GITHUB_TOKEN=your_token node scripts/import-public-github-projects.mjs
```

The script writes:

```text
src/data/generated-projects.ts
```

It filters public repositories, skips forks unless there is meaningful custom work, skips weak or
sparse entries, excludes blocked project names, reads README files first, falls back to repository
metadata and manifests, and assigns each project a confidence level.

## Editing content

- Profile, links, resume, and image: `src/data/profile.ts`
- Curated project case studies and field assignments: `src/data/manual-projects.ts` and `src/data/projects.ts`
- Imported public repositories: `src/data/generated-projects.ts` or rerun the importer
- Skill clusters: `src/data/skills.ts`
- Timeline: `src/data/experience.ts`
- Thinking posts: `src/data/writing.ts`
- Global theme tokens: `src/app/globals.css`

## Notes

- The resume is reused from `public/Chaitanya_Singh_Resume.pdf`.
- The profile image is reused from `public/profile.png`.
- The contact form UI posts to the existing `/api/contact` route.
- Linting ignores generated Next.js output via `eslint.config.mjs`.

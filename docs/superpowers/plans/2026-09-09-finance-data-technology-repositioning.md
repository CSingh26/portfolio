# Finance, Data, and Technology Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the portfolio as a precise, research-oriented presentation of work across finance, data, and technology.

**Architecture:** Preserve the existing Next.js route structure while replacing playful interactive presentation components with data-driven static sections. Centralize mutable Now and Journey copy in new data modules, add a required project tier contract, and enforce the repositioning with dependency-free source-contract tests plus the existing lint and build checks.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 3, Framer Motion 11, Node's built-in test runner

**Spec:** `docs/superpowers/specs/2026-09-09-finance-data-technology-repositioning-design.md`

## Global Constraints

- Add no dependencies.
- Work directly on the current branch and make small logical commits.
- Preserve accessibility, keyboard navigation, dark mode, and reduced-motion behavior.
- Use only paper, ink/navy, muted neutrals, and blue `#4567f2`; remove lime, coral, and green status treatments.
- Use Instrument Serif regular for display headings, Instrument Sans for body/UI, and IBM Plex Mono with tabular numerals for the data voice.
- Keep `npm run lint` and `npm run build` passing.
- Leave the user's untracked `.claude/launch.json` untouched.

---

### Task 1: Add Repositioning Contract Tests

**Files:**
- Create: `tests/portfolio-contracts.test.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: repository source files as UTF-8 text
- Produces: `npm test`, a dependency-free contract suite that guards copy, project tier assignments, theme tokens, navigation, and preloader behavior

- [ ] **Step 1: Write the failing contract suite**

Create tests with `node:test`, `node:assert/strict`, and `readFileSync` that assert:

```js
test("the homepage exposes the new positioning and supporting sections", () => {
  const source = read("src/components/portfolio-home.tsx")
  assert.match(source, /Turning financial complexity into usable intelligence\./)
  assert.match(source, /What I work on/)
  assert.match(source, /Research notes/)
})

test("every project has exactly one approved tier", () => {
  const source = read("src/data/projects.ts")
  assert.equal((source.match(/\n    tier: /g) ?? []).length, 21)
  for (const tier of ["Financial systems", "Intelligent systems", "Applied products", "Archive"]) {
    assert.match(source, new RegExp(`tier: "${tier}"`))
  }
})

test("the visual system has one named accent and no retired color tokens", () => {
  const source = read("src/app/globals.css")
  assert.match(source, /--color-accent: #4567f2/)
  assert.doesNotMatch(source, /--color-(lime|coral)/)
  assert.doesNotMatch(source, /#c7ed62|#ff5b4d/i)
})
```

Add equivalent assertions for `src/data/now.ts`, `src/data/journey.ts`, static navigation labels, absent phone/template contact copy, footer positioning, and `sessionStorage` plus `HOLD_MS = 700` in the preloader. Add `"test": "node --test tests/*.test.mjs"` to `package.json`.

- [ ] **Step 2: Run the suite and verify RED**

Run: `npm test`

Expected: failures for missing `now.ts`/`journey.ts`, missing tiers and new copy, retired color tokens, old navigation/contact/footer content, and preloader behavior.

- [ ] **Step 3: Commit the failing tests**

```bash
git add package.json tests/portfolio-contracts.test.mjs
git commit -m "test: define portfolio repositioning contracts"
```

### Task 2: Establish Data, Metadata, and Shared Visual Foundations

**Files:**
- Create: `src/data/now.ts`
- Create: `src/data/journey.ts`
- Modify: `src/data/projects.ts`
- Modify: `src/data/skills.ts`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`
- Modify: `tailwind.config.ts`
- Modify: page metadata files beneath `src/app`

**Interfaces:**
- Produces: `ProjectTier`, required `Project.tier`, `projectTiers`, Now data, Journey narrative/education data, and four capability categories
- Consumes: the exact copy and tier assignments from the approved design specification

- [ ] **Step 1: Add the data contracts and required content**

Define:

```ts
export type ProjectTier = "Financial systems" | "Intelligent systems" | "Applied products" | "Archive"
export const projectTiers: ProjectTier[] = [
  "Financial systems",
  "Intelligent systems",
  "Applied products",
  "Archive",
]
```

Add one tier to every project according to the specification. Export `now` with `date: "September 2026"` and three focus lines. Export `journeyNarrative` and `education` from `journey.ts`. Replace skills with Finance, Quantitative, Engineering, and Product categories containing the supplied plain-language items.

- [ ] **Step 2: Consolidate typography, color, and metadata**

Remove Bricolage Grotesque from `layout.tsx`, map display typography to Instrument Serif regular, enable tabular numbers for mono utility classes, remove fixed blur blobs, and make blue the only accent in both themes. Update root and per-page metadata to the approved positioning.

- [ ] **Step 3: Run targeted tests and verify GREEN for foundations**

Run: `npm test`

Expected: data, metadata, and theme assertions pass; remaining component assertions still fail.

- [ ] **Step 4: Commit the foundations**

```bash
git add src/data src/app/layout.tsx src/app/globals.css src/app/*/page.tsx tailwind.config.ts
git commit -m "refactor: establish finance research foundations"
```

### Task 3: Rebuild Homepage, Navigation, Footer, and Preloader

**Files:**
- Modify: `src/components/portfolio-home.tsx`
- Modify: `src/components/marquee.tsx`
- Modify: `src/components/navbar.tsx`
- Modify: `src/components/footer.tsx`
- Modify: `src/components/preloader.tsx`
- Modify: `src/components/cursor-field.tsx` only if implementation needs semantic adjustments beyond CSS
- Delete: `src/app/api/analytics/visit/route.ts`
- Delete: `src/components/magnetic.tsx`

**Interfaces:**
- Consumes: `now` from `@/data/now`, `writing`, and `projects`
- Produces: the approved homepage section sequence, static brand navigation, session-only preloader, and simplified footer

- [ ] **Step 1: Implement the static homepage composition**

Replace the interactive lens and portrait hero with the supplied copy and an accessible decorative inline SVG. Render static work areas, Now lines, the six specified project records, three newest writing records sorted by parsed date, always-visible principles, and the paper/ink closing block. Keep entrance animations to opacity plus directional translation.

- [ ] **Step 2: Simplify shared chrome and session behavior**

Render the static `CS` square and full name, order nav links Work/Writing/Journey/Contact, remove footer analytics and Instagram, and implement the 700ms `sessionStorage` preloader guard with an immediate reduced-motion dismissal and `loading` readout.

- [ ] **Step 3: Remove unused homepage infrastructure**

Remove Magnetic imports/usages, delete its component, remove the analytics API route, and ensure the CSS no longer references removed hero/lens/orbit/future-card treatments.

- [ ] **Step 4: Run targeted tests and verify GREEN for shared pages**

Run: `npm test`

Expected: homepage, navigation, footer, contact-copy-independent, visual-token, and preloader assertions pass.

- [ ] **Step 5: Commit the homepage and chrome**

```bash
git add src/components src/app/api/analytics/visit/route.ts src/app/globals.css
git commit -m "feat: rebuild homepage around financial intelligence"
```

### Task 4: Rebuild Projects, Journey, Capabilities, Writing, and Contact

**Files:**
- Modify: `src/components/project-grid.tsx`
- Modify: `src/components/project-card.tsx`
- Modify: `src/components/experience-section.tsx`
- Modify: `src/components/skills-section.tsx`
- Modify: `src/components/writing-section.tsx`
- Modify: `src/components/contact-form.tsx`
- Modify: `src/components/section-shell.tsx`
- Delete: `src/components/about-section.tsx`
- Delete: `src/components/hero.tsx`
- Delete: `src/components/home-projects.tsx`
- Delete: `src/components/skill-deck.tsx`
- Delete: `src/components/skill-radar.tsx`
- Delete: `src/components/timeline.tsx` if unused
- Delete: `src/data/skill-radar.ts`

**Interfaces:**
- Consumes: `projectTiers`, `journeyNarrative`, `education`, `experience`, `skills`, and `writing`
- Produces: tiered project catalog with accessible archive disclosure, Journey biography, capability matrix, newest-first writing list, and revised contact page

- [ ] **Step 1: Implement tiered project presentation**

Render the first three tiers in order and Archive inside a client-side disclosure collapsed by default. Give every visible card a globally consistent two-digit index, one-line description, mono status, at most four tags, and available detail/repository/live links.

- [ ] **Step 2: Implement Journey and Capabilities**

Move `/profile.png` into a static bordered Journey frame, render the narrative and education rows, reduce each experience to one bullet with no tool chips, and link to `/skills`. Render capabilities as four score-free columns.

- [ ] **Step 3: Implement Writing and Contact**

Sort writing records newest first and render list rows. Apply the supplied Contact heading and intro, remove phone data and template copy, retain email/location/form behavior, and remove scale/rotate hover effects.

- [ ] **Step 4: Delete unreferenced legacy files**

Use `rg` to prove each target has no imports before deletion. Remove the obsolete homepage/about/skill visualization files and `timeline.tsx` if Journey no longer consumes it.

- [ ] **Step 5: Run the full tests and verify GREEN**

Run: `npm test`

Expected: all contract tests pass with zero failures.

- [ ] **Step 6: Commit the inner pages**

```bash
git add src/app src/components src/data
git commit -m "feat: restructure work journey and writing"
```

### Task 5: Automated and Browser Verification

**Files:**
- Modify: only files required to correct failures discovered during verification

**Interfaces:**
- Consumes: completed implementation
- Produces: evidence that contracts, lint, build, routes, themes, responsive behavior, and session preloader meet the approved design

- [ ] **Step 1: Run automated verification**

Run:

```bash
npm test
npm run lint
npm run build
```

Expected: every command exits 0 with zero test failures, lint errors, or build errors.

- [ ] **Step 2: Start the development server**

Run: `npm run dev -- --hostname 127.0.0.1 --port 3001`

Expected: Next.js reports a ready local server at `http://127.0.0.1:3001`.

- [ ] **Step 3: Inspect all required routes in light and dark modes**

Open `/`, `/projects`, `/writing`, `/experience`, `/skills`, and `/contact`. On each route verify readable layout, keyboard-visible actions, paper/ink or navy treatment, and blue as the sole accent. Check mobile and desktop widths.

- [ ] **Step 4: Verify requested behavioral details**

In a fresh browser session, confirm the preloader appears once, dismisses after approximately 700ms, does not reappear on same-session reload, and dismisses immediately with reduced motion. Confirm static name, absent sparkle/orbit/portrait hero, homepage Now and Research notes, ordered six-project wall, four project tiers, and Archive collapsed by default.

- [ ] **Step 5: Fix any discovered regression and rerun all evidence commands**

For each defect, add or strengthen a failing contract where practical, verify the failure, fix the source, and rerun `npm test`, `npm run lint`, and `npm run build`.

- [ ] **Step 6: Commit verification fixes if any**

```bash
git add <only-the-files-changed-by-verification>
git commit -m "fix: resolve portfolio verification findings"
```

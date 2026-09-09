# Finance, Data, and Technology Portfolio Repositioning

## Objective

Reposition Chaitanya Singh's portfolio around intelligent systems at the intersection of finance, data, and technology. The resulting site should feel like a financial research firm crossed with a modern technology company and a quantitative lab: precise, ambitious, curious, and technical without losing its human voice.

The design must avoid the visual and editorial conventions of generic engineering portfolios, trading dashboards, crypto brands, traditional banks, generic AI startups, motivational founder accounts, luxury brands, and cyberpunk interfaces.

## Constraints

- Continue using Next.js 15, React 19, Tailwind CSS, and Framer Motion.
- Add no dependencies.
- Work on the current branch and commit changes in small logical steps.
- Preserve accessibility, keyboard behavior, focus treatment, dark mode, and reduced-motion handling.
- Preserve all existing project and writing detail routes.
- Keep `npm run lint` and `npm run build` passing.
- Leave the existing untracked `.claude/launch.json` untouched.

## Information Architecture

The primary navigation contains four links in this order: Work, Writing, Journey, and Contact. The logo links home. Capabilities remains a dedicated `/skills` route but is linked contextually from Journey instead of the primary navigation. Certifications remains available at its current route even though it is not part of the primary navigation.

The homepage sequence is:

1. Hero and restrained marquee
2. What I work on
3. Now
4. Selected work
5. Research notes
6. How I build
7. Closing block

The Journey page becomes the biographical and educational home. Projects becomes a proof-oriented tiered catalog. Writing becomes a chronological research-note index. Capabilities becomes a plain-language matrix rather than a proficiency visualization.

## Homepage

### Hero

The hero uses the kicker `Finance × Data × Technology`, the headline `Turning financial complexity into usable intelligence.`, and the supplied education-focused subline. The two actions are `Selected work` and `Résumé`.

The portrait, status indicator, geographic label, scribble, sparkle, and orbit tags are removed. A static inline SVG replaces them. It consists of a sparse hairline grid, one thin regime-like line series, and two or three small monospace annotations such as `regime: high vol`, `σ 30d`, and `p(≥2σ)`. It reads as a quiet analytical instrument, not a dashboard or trading chart.

Entrance motion is limited to opacity and directional translation. There are no homepage scale, tilt, or rotation transforms.

The marquee contains Markets, Risk, Data, Systems, and Research. It uses the single blue accent sparingly, moves more slowly than the current strip, and has lower contrast and visual weight.

### What I Work On

The existing interactive lens control is removed. The replacement is a static three-column section with Financial analysis, Quantitative systems, and Product engineering. Each column has a monospace index, a concise explanatory sentence, and four to six plain-language items derived from the supplied scope. There are no tabs, orbits, scores, or decorative metrics.

### Now

The Now section appears after What I work on. Its content lives in `src/data/now.ts` and contains a `September 2026` label plus three first-person focus statements covering finance and accounting coursework, quantitative and machine-learning systems for market analysis, and understandable financial analysis for people without a finance background.

### Selected Work

The homepage shows exactly six projects in this order: Synaxis, CreditLens, FraudPulse, Hybrid Token-Efficient Routing Agent, Apex Arena, and CineJaal. Cards share one restrained treatment and use an index, project title, concise description, status, and links. The section title is `Selected work.` and its kicker is `Systems · 2024 to 2026`.

### Research Notes

The homepage derives the three newest articles by parsing and sorting the dates in `src/data/writing.ts`, rather than depending on the array's existing order. Each row shows a monospace date, title, one-line description, and link. An `All writing` action links to `/writing`.

### Principles and Closing

The four existing principles remain: Curiosity, Clarity, Trust, and Execution. Their one-line descriptions are visible at every breakpoint. The introduction is `Technology should handle the complexity. The user should receive clarity.`

The closing block uses the paper/ink theme with a hairline border and the headline `Finance is the domain. Software is the instrument.` Its actions are `My journey` and `Get in touch`. The lime panel and concentric orb are removed.

## Shared Visual System

### Color

Light mode retains paper `#f4f1e8` with ink `#151827` or `#171a2b`. Dark mode retains the current dark navy foundation. Blue `#4567f2` is the only accent; dark mode may expose it at slightly higher luminance while keeping the hue consistent.

All lime, coral, green status indicators, multi-color project tiles, and color-specific tokens are removed. Text selection, focus accents, marquee markers, preloader accents, cursor lock state, link hovers, and project treatments all use blue. Project cards and homepage project tiles share a uniform surface treatment.

The three fixed background blur blobs are removed from the root layout.

### Typography

Instrument Serif regular becomes the display face for hero and section headings. Instrument Sans remains the body and UI face. IBM Plex Mono remains the data voice for dates, figures, labels, indices, kickers, and statuses, with tabular numerals enabled.

Bricolage Grotesque and its CSS variables are removed. Kicker styling is standardized as small uppercase mono text with `0.14em` tracking and muted color.

### Motion

The crosshair cursor remains, with hairline opacity reduced to approximately 0.25 and blue used for lock state. The native cursor remains visible. It stays disabled for coarse pointers and reduced-motion users.

Buttons no longer use the Magnetic wrapper. If no imports remain, `src/components/magnetic.tsx` is deleted.

The preloader checks a browser-session key before running. On the first eligible render it runs for 700ms, writes the key to `sessionStorage`, and dismisses immediately when reduced motion is requested. Its readout says `loading`. Subsequent client navigation and full reloads in the same browser session do not show it.

## Projects

`Project` gains a required `tier` field while retaining `field` for detail-page facts. The tiers are rendered in this order:

1. Financial systems: `synaxis`, `portfolio-pilot`, `credit-lens`, `fraud-pulse`, `hedgefund-ai-agent`, `stock-market-predictions`
2. Intelligent systems: `hybrid-token-efficient-routing-agent`, `careerpath-ai`, `reli-score`
3. Applied products: `apex-arena`, `cinejaal`, `quiz-app`, `grid-design-website`, `studyos`, `habit-app`, `regulus`, `algorithm-visualizer`
4. Archive: `used-car-price-prediction`, `breast-cancer-prediction`, `sentiment-analysis`, `movie-genre-nlp`

Archive is collapsed by default behind an accessible `Show archive` toggle whose expanded state is exposed with `aria-expanded`. Each project appears exactly once.

The page heading is `Selected work.` and the introduction is `Systems for markets and risk, intelligent tooling, and applied products built end to end.` Cards use a uniform list-like layout with a mono index, title, one-line description, mono status, no more than four visible tags, and available detail, repository, or live links. Pastel backgrounds, novelty figures, scale, and rotation are removed.

## Journey and Capabilities

The Journey page starts with a three-paragraph first-person narrative stored in `src/data/journey.ts`. It covers undergraduate computer science and data science exposure at Fulton, the deliberate move into graduate finance at W. P. Carey without abandoning technology, and the aim to build systems that calculate, analyze, and communicate the right things.

The portrait moves here in a static, bordered frame with a monospace caption. Education is represented as two rows with dates: MS Finance and BS Computer Science. Earlier experience shows the three 2024 internships as compact rows with role, organization, period, and at most one substantive bullet. Tool-list chips are removed. A contextual link leads to `/skills`.

The Capabilities page renders four plain-word columns sourced from `src/data/skills.ts`: Finance, Quantitative, Engineering, and Product. It contains exactly the supplied capabilities and no bars, radar charts, or scores.

After imports are cleared, the obsolete `about-section.tsx`, `hero.tsx`, `home-projects.tsx`, `skill-deck.tsx`, `skill-radar.tsx`, `magnetic.tsx`, and `src/data/skill-radar.ts` files are deleted. Timeline may also be removed if the compact Journey implementation no longer imports it.

## Writing, Contact, Navigation, and Footer

Writing uses the heading `Writing.` and the supplied research-oriented introduction. Posts are sorted newest first and rendered as rows showing mono date, title, one-line description, and tags.

Contact removes the phone number and all template phrasing. It uses the supplied `Get in touch.` heading and introduction while retaining email, location, and the working form.

Navigation shows a square, one-pixel-bordered `CS` mono mark and the static name `Chaitanya Singh`. The rotating multilingual animation and Home/Index nav item are removed.

Footer removes its visitor state, request, online pulse, and Instagram link. It retains GitHub, LinkedIn, X, and Email, and adds `Building intelligent systems at the intersection of finance, data, and technology.` The now-unused analytics visit route is removed.

## Metadata

Global metadata uses:

- Title: `Chaitanya Singh | Finance × Data × Technology`
- Description: `Chaitanya Singh builds intelligent systems at the intersection of finance, data, and technology: quantitative models, market research tools, and software that turns financial complexity into usable intelligence.`
- Site name: `Chaitanya Singh`

Open Graph and Twitter metadata match this positioning. Page metadata uses contextual titles such as Selected Work, Writing, Journey, Capabilities, Contact, and Certifications, and removes security, cybersecurity, and cloud framing from descriptions. Project and writing detail metadata continues to derive descriptions from the corresponding records.

## Validation Strategy

Because the repository currently has no test framework or test script, implementation adds dependency-free Node test files that inspect exported data and rendered source contracts. Tests are written and run before production edits so they initially fail for the missing tier data, new content modules, required copy, removed color tokens, navigation contract, and session-only preloader behavior.

After each implementation slice, the relevant tests are rerun. Final automated verification consists of the complete contract-test command, `npm run lint`, and `npm run build` with zero failures.

The production dev server is then used to inspect `/`, `/projects`, `/writing`, `/experience`, `/skills`, and `/contact` in light and dark modes. Manual checks confirm the single blue accent, removal of lime and coral, static branding, absence of hero decorations, Now and Research notes sections, four project tiers, collapsed archive, and one-run-per-session preloader. Console output and responsive layouts are inspected for visible regressions.

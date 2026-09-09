# Project media

The homepage uses the existing `/profile.png` portrait with a small chart overlay.
Space Grotesk headings, Manrope body text, and IBM Plex Mono labels share a blue,
teal, and amber palette in both themes.

`src/data/project-visuals.ts` defines the six finance homepage selections and the
visual label, accent, motif, and four workflow stages for all 21 projects. The
stages summarize the existing project descriptions. Illustrations are labeled as
conceptual system studies; plotted shapes are not measured project results.
Original product screenshots remain in the relevant detail pages, displayed at
their natural aspect ratios.

`ProjectVisual` renders a vector cover on every card. The Flow control loads a
GIF on demand; Still returns to the cover. Detail pages include the cover, a
workflow still, and Play/Pause controls. Native `picture` sources select PNG
stills when the visitor prefers reduced motion. Every diagram also has alt text;
detail pages include the stages as readable text below the image.

Regenerate committed assets from the repository root (Python with Pillow):

```sh
node --no-warnings --experimental-strip-types --input-type=module -e 'import {projectVisuals} from "./src/data/project-visuals.ts"; process.stdout.write(JSON.stringify(projectVisuals))' | python3 scripts/generate-project-media.py
```

The generator uses Helvetica on macOS and DejaVu Sans elsewhere. Generated SVG,
GIF, and PNG files live under `public/projects/visuals`. `npm test` checks finance
selection membership and the presence and formats of each project's assets.

To run a review without sharing the normal development server's build cache:

```sh
PORTFOLIO_BUILD_DIR=.next/review npm run dev -- --port 3002
```

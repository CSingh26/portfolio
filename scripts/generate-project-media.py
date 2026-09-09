"""Generate original vector covers and flowchart GIFs from project-visuals.ts.

Run from the repository root:
node --no-warnings --experimental-strip-types --input-type=module -e \
  'import {projectVisuals} from "./src/data/project-visuals.ts"; process.stdout.write(JSON.stringify(projectVisuals))' \
  | python3 scripts/generate-project-media.py

Requires Pillow. These are conceptual illustrations, not measured results.
"""

import json
import math
from pathlib import Path
import sys
from xml.sax.saxutils import escape

from PIL import Image, ImageDraw, ImageFont

DEST = Path(__file__).resolve().parents[1] / "public/projects/visuals"
DEST.mkdir(parents=True, exist_ok=True)
COLORS = {"blue": "#5273b4", "teal": "#348479", "amber": "#b1813b"}
FONT = "/System/Library/Fonts/Helvetica.ttc"
if not Path(FONT).exists():
    FONT = "DejaVuSans.ttf"


def cover(slug, spec):
    c = COLORS[spec["accent"]]
    parts = [f'<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720"><defs><linearGradient id="paper" x2="1" y2="1"><stop stop-color="#f0f1ed"/><stop offset="1" stop-color="#e3e9e5"/></linearGradient><linearGradient id="wash" x1="0" y1="0" x2="0" y2="1"><stop stop-color="{c}" stop-opacity=".18"/><stop offset="1" stop-color="{c}" stop-opacity="0"/></linearGradient></defs><rect width="1200" height="720" fill="url(#paper)"/>']

    def line(x1, y1, x2, y2, color="#cad3cf", width=1, extra=""):
        parts.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{width}" {extra}/>')

    def text(x, y, value, size=18, color="#687875", extra=""):
        parts.append(f'<text x="{x}" y="{y}" fill="{color}" font-family="Helvetica,Arial,sans-serif" font-size="{size}" {extra}>{escape(value)}</text>')

    def rect(x, y, w, h, fill="#f7f8f3", stroke="#c9d3ce", radius=12):
        parts.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{radius}" fill="{fill}" stroke="{stroke}"/>')

    def circle(x, y, r, fill=c, extra=""):
        parts.append(f'<circle cx="{x}" cy="{y}" r="{r}" fill="{fill}" {extra}/>')

    text(62, 65, "CS / SYSTEM STUDIES", 16, "#516864", 'letter-spacing="3"')
    text(1138, 65, spec["label"].upper(), 16, "#516864", 'text-anchor="end" letter-spacing="1.5"')
    line(62, 94, 1138, 94)
    for x in range(90, 1140, 48):
        for y in range(130, 650, 48):
            circle(x, y, 1, "#ccd5d0")

    motif = spec["motif"]
    if motif in ("frontier", "series", "pulse"):
        for y in range(200, 560, 90):
            line(112, y, 1088, y)
        line(112, 150, 112, 560, "#9dafaa")
        line(112, 560, 1088, 560, "#9dafaa")
        if motif == "frontier":
            for i in range(90):
                x = 195 + (i * 73 % 790)
                y = min(550, 520 - math.sqrt(x - 155) * 11 + (i * 37 % 172))
                circle(x, y, 3.6, c, 'opacity=".22"')
            path = "M195 525 C230 342 530 207 1060 174"
            text(140, 165, "EXPECTED RETURN", 15)
            text(940, 603, "PORTFOLIO RISK", 15)
            text(652, 160, "Efficient frontier", 26, c)
            circle(633, 232, 10, "#f5f7f2", f'stroke="{c}" stroke-width="3"')
            line(633, 252, 633, 560, c, 1, 'stroke-dasharray="5 8" opacity=".5"')
        elif motif == "series":
            points = [(112 + i * 12.2, 420 - i * 2.15 + math.sin(i * .42) * 43 + math.cos(i * .91) * 18) for i in range(81)]
            path = "M" + " L".join(f"{x:.1f} {y:.1f}" for x, y in points)
            text(140, 165, "OBSERVE / MODEL / EVALUATE", 15)
            text(870, 603, "TIME-SERIES STUDY", 15)
            for i in range(48):
                rect(135 + i * 19, 535 - (i * 17 % 55), 8, (i * 17 % 55) + 10, "#c1cdc5", "none", 2)
        else:
            points = [(112 + i * 12.2, 355 + math.sin(i * .4) * 12 + (-132 if i in (23, 57) else 54 if i in (24, 58) else 0)) for i in range(81)]
            path = "M" + " L".join(f"{x:.1f} {y:.1f}" for x, y in points)
            text(140, 165, "EVENT STREAM", 15)
            text(891, 603, "DETECT / REVIEW", 15)
            for i in (23, 57):
                x, y = points[i]
                circle(x, y, 22, c, 'opacity=".1"')
                circle(x, y, 6)
                text(x + 22, y - 19, "Review signal", 19, c)
            line(112, 292, 1088, 292, c, 1, 'stroke-dasharray="6 8" opacity=".4"')
        parts.append(f'<path d="{path} L1088 560 L112 560 Z" fill="url(#wash)"/>')
        parts.append(f'<path d="{path}" fill="none" stroke="{c}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>')
    elif motif == "risk":
        rect(100, 147, 490, 426)
        text(140, 193, "MODEL EXPLANATION", 16)
        labels = ["Input quality", "Model drivers", "Calibration", "Review context"]
        for i, label in enumerate(labels):
            y = 260 + i * 78
            text(140, y - 10, label, 20, "#364f48")
            rect(140, y + 8, 399, 10, "#dce3dc", "none", 5)
            rect(140, y + 8, [273, 334, 213, 304][i], 10, c, "none", 5)
        cx, cy = 840, 343
        for r in (100, 142, 184):
            circle(cx, cy, r, "none", 'stroke="#c4d0c8" stroke-width="1"')
        parts.append(f'<path d="M840 159 A184 184 0 1 1 681 435" fill="none" stroke="{c}" stroke-width="9" stroke-linecap="round"/>')
        text(cx, cy - 5, "Risk", 52, "#364f48", 'text-anchor="middle"')
        text(cx, cy + 32, "WITH CONTEXT", 16, c, 'text-anchor="middle" letter-spacing="2"')
    elif motif == "coverage":
        for i in range(3):
            x = 143 + i * 306
            rect(x, 164 + i * 22, 290, 348, ["#f5f7f1", "#e5ece6", "#d7e4dc"][i])
            text(x + 29, 216 + i * 22, ["Finances", "Policy", "Coverage"][i], 31, "#364f48")
            for j in range(4):
                rect(x + 29, 256 + i * 22 + j * 40, 185 - (j % 3) * 30, 7, "#b9c9c1", "none", 3)
            circle(x + 227, 450 + i * 22, 22, c)
            parts.append(f'<path d="M{x+217} {450+i*22} l7 7 l14 -15" fill="none" stroke="#f7f8f2" stroke-width="2"/>')
        text(600, 608, "A connected view of financial life", 24, "#516864", 'text-anchor="middle"')
    elif motif == "network":
        nodes = [(600, 330), (230, 228), (275, 489), (570, 550), (955, 455), (960, 212), (620, 157)]
        for i, (x, y) in enumerate(nodes[1:]):
            line(600, 330, x, y, "#aebfb7", 2)
            if i < 5:
                line(x, y, *nodes[i + 2], "#c5d1c9", 1, 'stroke-dasharray="4 7"')
        for i, (x, y) in enumerate(nodes):
            circle(x, y, 72 if i == 0 else 44, "#e6ede5", f'stroke="{c if i == 0 else "#aebfb7"}" stroke-width="1.5"')
            circle(x, y, 7 if i == 0 else 5, c)
        for (x, y), label in zip([nodes[1], nodes[2], nodes[4], nodes[5]], ["Sources", "Structure", "Evidence", "Insights"]):
            text(x, y + 76, label, 20, "#516864", 'text-anchor="middle"')
        text(600, 435, "CONNECTED INTELLIGENCE", 16, c, 'text-anchor="middle" letter-spacing="2"')
    else:
        for row in range(4):
            for col in range(8):
                x, y = 124 + col * 123, 175 + row * 99
                active = (row * 5 + col * 3 + len(slug)) % 7 > 2
                rect(x, y, 101, 77, c if active else "#e5ebe3", "none", 10)
                if active:
                    parts.append(f'<path d="M{x+38} {y+39} l8 8 l17 -19" fill="none" stroke="#eef3eb" stroke-width="2"/>')
        text(600, 608, "Small steps. A connected system.", 24, "#516864", 'text-anchor="middle"')
    line(62, 654, 1138, 654)
    text(62, 686, "CONCEPTUAL SYSTEM ILLUSTRATION", 13, "#7b8b84", 'letter-spacing="2"')
    text(1138, 686, "CHAITANYA SINGH", 13, "#7b8b84", 'text-anchor="end" letter-spacing="2"')
    parts.append("</svg>")
    (DEST / f"{slug}.svg").write_text("".join(parts))


def flow(slug, spec):
    c = COLORS[spec["accent"]]
    title_font = ImageFont.truetype(FONT, 20)
    label_font = ImageFont.truetype(FONT, 29)
    small_font = ImageFont.truetype(FONT, 18)
    nodes = [(65, 107), (655, 107), (655, 302), (65, 302)]
    paths = [[(545, 157), (655, 157)], [(895, 207), (895, 302)], [(655, 352), (545, 352)]]
    frames = []
    for frame in range(36):
        im = Image.new("RGB", (1200, 480), "#edf0e9")
        draw = ImageDraw.Draw(im)
        draw.text((65, 42), "WORKFLOW / " + spec["label"].upper(), fill="#536b62", font=title_font)
        for j, points in enumerate(paths):
            draw.line(points, fill="#b9c7bd", width=2)
            end = points[-1]
            if j == 0:
                arrow = [(end[0] - 9, end[1] - 5), end, (end[0] - 9, end[1] + 5)]
            elif j == 1:
                arrow = [(end[0] - 5, end[1] - 9), end, (end[0] + 5, end[1] - 9)]
            else:
                arrow = [(end[0] + 9, end[1] - 5), end, (end[0] + 9, end[1] + 5)]
            draw.line(arrow, fill="#91a79a", width=2)
        active = min(3, frame // 9)
        for i, ((x, y), label) in enumerate(zip(nodes, spec["steps"])):
            draw.rounded_rectangle((x, y, x + 480, y + 100), radius=15, fill="#f6f8f1", outline=c if i == active else "#c5d0c5", width=3 if i == active else 1)
            draw.text((x + 25, y + 39), f"0{i+1}", fill=c, font=small_font)
            draw.text((x + 78, y + 34), label, fill="#304a40", font=label_font)
        if active < 3:
            start, end = paths[active]
            t = (frame % 9) / 8
            x, y = start[0] + (end[0] - start[0]) * t, start[1] + (end[1] - start[1]) * t
            draw.ellipse((x - 5, y - 5, x + 5, y + 5), fill=c)
        draw.text((65, 439), "CONCEPTUAL WORKFLOW", fill="#73877b", font=small_font)
        frames.append(im)
    frames[0].save(DEST / f"{slug}-flow.png", optimize=True)
    frames[0].save(DEST / f"{slug}-flow.gif", save_all=True, append_images=frames[1:], duration=120, loop=0, optimize=True)


specs = json.load(sys.stdin)
for slug, spec in specs.items():
    cover(slug, spec)
    flow(slug, spec)
print(f"Generated {len(specs)} covers, GIFs, and reduced-motion stills in {DEST}")

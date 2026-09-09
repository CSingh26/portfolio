"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

/**
 * The initials are stored as bitmaps rather than drawn as glyphs: every cell
 * is an independent module that flies in from somewhere else and locks onto
 * the grid. The letters are assembled out of parts, which is the point.
 */
const GLYPHS: Record<string, string[]> = {
  C: [
    ".#####.",
    "##...##",
    "##.....",
    "##.....",
    "##.....",
    "##.....",
    "##.....",
    "##...##",
    ".#####.",
  ],
  S: [
    ".#####.",
    "##...##",
    "##.....",
    ".####..",
    "..####.",
    ".....##",
    ".....##",
    "##...##",
    ".#####.",
  ],
}

const COLS = 7
const ROWS = 9
const CELL = 13
const GAP = 3
const LETTER_GAP = 26
const PITCH = CELL + GAP

type Cell = {
  key: string
  x: number
  y: number
  /** Order of assembly — drives the stagger. */
  rank: number
  fromX: number
  fromY: number
  rotate: number
  accent: boolean
}

const LETTER_WIDTH = COLS * PITCH - GAP
const BOARD_WIDTH = LETTER_WIDTH * 2 + LETTER_GAP
const BOARD_HEIGHT = ROWS * PITCH - GAP

/** Deterministic pseudo-random so server and client agree on scatter. */
function noise(seed: number) {
  const value = Math.sin(seed * 127.1) * 43758.5453
  return value - Math.floor(value)
}

function buildCells(): Cell[] {
  const cells: Cell[] = []
  let seed = 1

  Object.entries(GLYPHS).forEach(([letter, rows], letterIndex) => {
    const offsetX = letterIndex * (LETTER_WIDTH + LETTER_GAP)

    rows.forEach((row, rowIndex) => {
      row.split("").forEach((mark, colIndex) => {
        if (mark !== "#") return
        seed += 1
        const a = noise(seed)
        const b = noise(seed + 91)
        const c = noise(seed + 197)

        cells.push({
          key: `${letter}-${rowIndex}-${colIndex}`,
          x: offsetX + colIndex * PITCH,
          y: rowIndex * PITCH,
          // Assemble left-to-right with a little vertical jitter so the sweep
          // reads as a scan rather than a rigid wipe.
          rank: colIndex + letterIndex * COLS + b * 1.6,
          fromX: (a - 0.5) * 460,
          fromY: (b - 0.5) * 340,
          rotate: (c - 0.5) * 180,
          accent: c > 0.78,
        })
      })
    })
  })

  return cells.sort((first, second) => first.rank - second.rank)
}

const HOLD_MS = 2100

/**
 * Runs on every full page load. Server-rendered markup covers the first paint;
 * the persistent root layout keeps client-side navigation from replaying it.
 */
export function Preloader() {
  const reduceMotion = useReducedMotion()
  const [finished, setFinished] = useState(false)
  const [progress, setProgress] = useState(0)
  const cells = useMemo(() => buildCells(), [])
  const intervalRef = useRef(0)

  const running = !finished

  useEffect(() => {
    if (!running) return

    const hold = reduceMotion ? 1 : HOLD_MS

    document.body.style.overflow = "hidden"
    const start = Date.now()

    // One clock drives both the counter and the dismissal, and both read wall
    // time rather than counting ticks. A backgrounded tab throttles timers
    // heavily, so a separate setTimeout for the exit can be starved while the
    // overlay sits there; deriving the end from elapsed time means the very
    // next tick after the tab wakes up finishes the run.
    const tick = () => {
      const elapsed = Date.now() - start
      setProgress(Math.min(100, Math.round((elapsed / hold) * 100)))
      if (elapsed >= hold) setFinished(true)
    }

    intervalRef.current = window.setInterval(tick, 40)
    document.addEventListener("visibilitychange", tick)

    return () => {
      window.clearInterval(intervalRef.current)
      document.removeEventListener("visibilitychange", tick)
      document.body.style.overflow = ""
    }
  }, [running, reduceMotion])

  const lastRank = cells.length ? cells[cells.length - 1].rank : 1

  return (
    <AnimatePresence>
      {running ? (
        <motion.div
          key="preloader"
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden
        >
          <div className="preloader-grid" />

          <motion.svg
            className="preloader-mark"
            viewBox={`-6 -6 ${BOARD_WIDTH + 12} ${BOARD_HEIGHT + 12}`}
            width={BOARD_WIDTH}
            height={BOARD_HEIGHT}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {cells.map((cell) => (
              <motion.rect
                key={cell.key}
                width={CELL}
                height={CELL}
                rx={2.5}
                className={cell.accent ? "preloader-cell is-accent" : "preloader-cell"}
                initial={{
                  x: cell.x + cell.fromX,
                  y: cell.y + cell.fromY,
                  opacity: 0,
                  rotate: cell.rotate,
                  scale: 0.4,
                }}
                animate={{ x: cell.x, y: cell.y, opacity: 1, rotate: 0, scale: 1 }}
                transition={{
                  delay: 0.12 + (cell.rank / lastRank) * 0.85,
                  duration: 0.72,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ originX: "50%", originY: "50%" }}
              />
            ))}
          </motion.svg>

          <div className="preloader-readout">
            <span>assembling</span>
            <span className="preloader-rule">
              <motion.i
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: HOLD_MS / 1000, ease: "linear" }}
              />
            </span>
            <span>{String(progress).padStart(3, "0")}</span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

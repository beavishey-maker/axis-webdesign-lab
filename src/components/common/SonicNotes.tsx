'use client'
import { useEffect, useRef } from 'react'
import styles from './SonicNotes.module.css'

const CHARS = ['♪', '♫', '♩', '♬', '♭']
const COLORS = ['#FFD100', '#FF6B35', '#FF2D78', '#00E87A', '#00D4FF', '#FFFFFF', '#c084fc']

interface Note {
  x: number; y: number
  vx: number; vy: number
  char: string; color: string
  size: number; alpha: number
  trail: Array<{ x: number; y: number }>
}

interface Props {
  speed?: number   // base speed multiplier (1=gentle, 2=fast, 3=sonic)
  density?: number // note count multiplier
}

export default function SonicNotes({ speed = 2, density = 1 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let raf: number
    let W = 0, H = 0
    const notes: Note[] = []
    let frame = 0

    function resize() {
      W = canvas.width = canvas.clientWidth || canvas.offsetWidth
      H = canvas.height = canvas.clientHeight || canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    function spawn(randomX = false) {
      const s = (4 + Math.random() * 9) * speed
      notes.push({
        x: randomX ? Math.random() * W : W + 60,
        y: H * 0.05 + Math.random() * H * 0.9,
        vx: -s,
        vy: (Math.random() - 0.5) * speed * 0.5,
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 14 + Math.random() * 38,
        alpha: 0.45 + Math.random() * 0.55,
        trail: [],
      })
    }

    for (let i = 0; i < Math.floor(10 * density); i++) spawn(true)

    const spawnEvery = Math.max(3, Math.round(6 / density))

    function tick() {
      ctx.clearRect(0, 0, W, H)
      frame++
      if (frame % spawnEvery === 0) spawn()

      for (let i = notes.length - 1; i >= 0; i--) {
        const n = notes[i]
        n.trail.push({ x: n.x, y: n.y })
        if (n.trail.length > 8) n.trail.shift()
        n.x += n.vx
        n.y += n.vy
        if (n.x < -120) { notes.splice(i, 1); continue }

        ctx.font = `bold ${n.size}px serif`
        ctx.shadowColor = n.color

        // Trailing copies (motion blur effect)
        for (let t = 0; t < n.trail.length; t++) {
          ctx.globalAlpha = (t / n.trail.length) * n.alpha * 0.2
          ctx.shadowBlur = 3
          ctx.fillStyle = n.color
          ctx.fillText(n.char, n.trail[t].x, n.trail[t].y)
        }
        // Main note with glow
        ctx.globalAlpha = n.alpha
        ctx.shadowBlur = 20
        ctx.fillText(n.char, n.x, n.y)
        ctx.shadowBlur = 0
        ctx.globalAlpha = 1
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [speed, density])

  return <canvas ref={canvasRef} className={styles.SonicNotes} />
}

'use client'
import { useEffect, useRef } from 'react'
import styles from './HeroIntro.module.css'

/* ── Palette ── */
const COLORS = [
  '#2D4AFF', '#FF2D78', '#00D4FF', '#8B2DFF',
  '#FF6B35', '#00E87A', '#FFD100', '#FF2DE0',
  '#00FFCC', '#FF4500',
]

type Kind = 'circle' | 'triangle' | 'square' | 'diamond' | 'cross' | 'hexagon' | 'star' | 'ring'

const KINDS: Kind[] = ['circle', 'triangle', 'square', 'diamond', 'cross', 'hexagon', 'star', 'ring']

interface P {
  x: number; y: number
  vx: number; vy: number
  rot: number; rotV: number
  size: number
  color: string
  kind: Kind
  alpha: number
  scale: number; scaleV: number
  filled: boolean
}

function pick<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)] }

function make(x: number, y: number, speedMul = 1): P {
  const a = Math.random() * Math.PI * 2
  const s = (4 + Math.random() * 9) * speedMul
  return {
    x: x + (Math.random() - 0.5) * 80,
    y: y + (Math.random() - 0.5) * 80,
    vx: Math.cos(a) * s,
    vy: Math.sin(a) * s - 2,
    rot: Math.random() * Math.PI * 2,
    rotV: (Math.random() - 0.5) * 0.22,
    size: 14 + Math.random() * 46,
    color: pick(COLORS),
    kind: pick(KINDS),
    alpha: 0.7 + Math.random() * 0.3,
    scale: 0.5 + Math.random() * 0.7,
    scaleV: (Math.random() - 0.5) * 0.012,
    filled: Math.random() > 0.3,
  }
}

function draw(ctx: CanvasRenderingContext2D, p: P) {
  ctx.save()
  ctx.translate(p.x, p.y)
  ctx.rotate(p.rot)
  ctx.scale(p.scale, p.scale)
  ctx.globalAlpha = p.alpha
  ctx.shadowColor = p.color
  ctx.shadowBlur = p.filled ? 10 : 6

  const r = p.size / 2

  const paint = () => {
    if (p.filled) {
      ctx.fillStyle = p.color
      ctx.fill()
    } else {
      ctx.strokeStyle = p.color
      ctx.lineWidth = 3 / p.scale
      ctx.stroke()
    }
  }

  switch (p.kind) {
    case 'circle':
      ctx.beginPath()
      ctx.arc(0, 0, r, 0, Math.PI * 2)
      paint()
      break

    case 'ring':
      ctx.beginPath()
      ctx.arc(0, 0, r, 0, Math.PI * 2)
      ctx.arc(0, 0, r * 0.55, 0, Math.PI * 2, true)
      ctx.fillStyle = p.color
      ctx.fill('evenodd')
      break

    case 'triangle':
      ctx.beginPath()
      ctx.moveTo(0, -r)
      ctx.lineTo(r * 0.866, r * 0.5)
      ctx.lineTo(-r * 0.866, r * 0.5)
      ctx.closePath()
      paint()
      break

    case 'square':
      ctx.beginPath()
      ctx.rect(-r, -r, r * 2, r * 2)
      paint()
      break

    case 'diamond':
      ctx.beginPath()
      ctx.moveTo(0, -r); ctx.lineTo(r * 0.7, 0)
      ctx.lineTo(0,  r); ctx.lineTo(-r * 0.7, 0)
      ctx.closePath()
      paint()
      break

    case 'cross': {
      const w = r * 0.32
      ctx.beginPath()
      ctx.rect(-r, -w, r * 2, w * 2)
      ctx.fillStyle = p.color; ctx.fill()
      ctx.beginPath()
      ctx.rect(-w, -r, w * 2, r * 2)
      ctx.fillStyle = p.color; ctx.fill()
      break
    }

    case 'hexagon':
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const ang = (i / 6) * Math.PI * 2 - Math.PI / 6
        i === 0
          ? ctx.moveTo(Math.cos(ang) * r, Math.sin(ang) * r)
          : ctx.lineTo(Math.cos(ang) * r, Math.sin(ang) * r)
      }
      ctx.closePath()
      paint()
      break

    case 'star': {
      const spikes = 5
      ctx.beginPath()
      for (let i = 0; i < spikes * 2; i++) {
        const rad = i % 2 === 0 ? r : r * 0.42
        const ang = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2
        i === 0
          ? ctx.moveTo(Math.cos(ang) * rad, Math.sin(ang) * rad)
          : ctx.lineTo(Math.cos(ang) * rad, Math.sin(ang) * rad)
      }
      ctx.closePath()
      paint()
      break
    }
  }

  ctx.restore()
}

interface Props { onDone: () => void }

export default function HeroIntro({ onDone }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef   = useRef<HTMLDivElement>(null)
  const cbRef     = useRef(onDone)
  cbRef.current   = onDone

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap   = wrapRef.current
    if (!canvas || !wrap) return

    const ctx = canvas.getContext('2d')!
    let raf: number
    let t0: number | null = null
    const ACTIVE  = 3500
    const FADEOUT = 700

    const ps: P[] = []
    let W = 0, H = 0

    function resize() {
      W = canvas!.width  = wrap!.clientWidth
      H = canvas!.height = wrap!.clientHeight
    }
    resize()
    window.addEventListener('resize', resize)

    /* Initial burst from center */
    for (let i = 0; i < 80; i++) ps.push(make(W / 2, H / 2))

    function tick(now: number) {
      if (!t0) t0 = now
      const elapsed = now - t0

      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, W, H)

      /* Spawn extras during active phase */
      if (elapsed < ACTIVE * 0.8 && Math.random() < 0.4) {
        ps.push(make(
          W * 0.05 + Math.random() * W * 0.9,
          H * 0.05 + Math.random() * H * 0.55,
          0.6,
        ))
        if (ps.length > 140) ps.splice(0, 6)
      }

      /* Update + draw */
      for (const p of ps) {
        p.x  += p.vx;  p.y  += p.vy
        p.vx *= 0.991; p.vy *= 0.991
        p.vy += 0.07
        p.rot += p.rotV
        p.scale += p.scaleV
        if (p.scale > 1.3 || p.scale < 0.2) p.scaleV *= -1

        if (p.y > H + p.size)       p.vy = -Math.abs(p.vy) * 0.72
        if (p.x < -p.size * 2)      p.x  = W + p.size
        if (p.x > W + p.size * 2)   p.x  = -p.size

        draw(ctx, p)
      }

      /* White fade-out */
      if (elapsed >= ACTIVE) {
        const prog = Math.min((elapsed - ACTIVE) / FADEOUT, 1)
        ctx.globalAlpha = prog
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, W, H)
        ctx.globalAlpha = 1
        if (prog >= 1) {
          cancelAnimationFrame(raf)
          cbRef.current()
          return
        }
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div ref={wrapRef} className={styles.HeroIntro}>
      <canvas ref={canvasRef} className={styles.HeroIntro_canvas} />
    </div>
  )
}

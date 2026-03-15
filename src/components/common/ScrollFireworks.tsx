'use client'
import { useEffect, useRef } from 'react'
import styles from './ScrollFireworks.module.css'

const COLORS = [
  '#FF2D78', '#2D4AFF', '#FFD100', '#00E87A', '#FF6B35',
  '#8B2DFF', '#00D4FF', '#FF4500', '#00FFCC', '#FF2DE0',
  '#FFFFFF', '#FFE55C', '#FF6B6B', '#4ECDC4', '#F7DC6F',
]

interface Trail { x: number; y: number }
interface Rocket {
  x: number; y: number
  vx: number; vy: number
  color: string
  trail: Trail[]
  exploded: boolean
}
interface Particle {
  x: number; y: number
  vx: number; vy: number
  alpha: number
  color: string
  r: number
  trail: Trail[]
}

function rndColor() { return COLORS[Math.floor(Math.random() * COLORS.length)] }

export default function ScrollFireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stateRef = useRef<{
    rockets: Rocket[]
    particles: Particle[]
    lastScrollY: number
    scrollAccum: number
  }>({
    rockets: [],
    particles: [],
    lastScrollY: 0,
    scrollAccum: 0,
  })

  useEffect(() => {
    stateRef.current.lastScrollY = window.scrollY
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let raf: number

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function launch() {
      const rx = window.innerWidth * 0.05 + Math.random() * window.innerWidth * 0.9
      stateRef.current.rockets.push({
        x: rx,
        y: window.innerHeight + 10,
        vx: (Math.random() - 0.5) * 2,
        vy: -(14 + Math.random() * 10),
        color: rndColor(),
        trail: [],
        exploded: false,
      })
    }

    function explode(rocket: Rocket) {
      const s = stateRef.current
      // Main burst
      const count = 55 + Math.floor(Math.random() * 35)
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2
        const speed = 1.5 + Math.random() * 7
        s.particles.push({
          x: rocket.x, y: rocket.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          alpha: 0.95, color: Math.random() > 0.35 ? rocket.color : rndColor(),
          r: 2 + Math.random() * 4, trail: [],
        })
      }
      // White ring
      const ring = 24
      for (let i = 0; i < ring; i++) {
        const angle = (i / ring) * Math.PI * 2
        const speed = 8 + Math.random() * 4
        s.particles.push({
          x: rocket.x, y: rocket.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 0.85, color: '#FFFFFF',
          r: 1.5, trail: [],
        })
      }
      // Sparkle shower
      const sparks = 20
      for (let i = 0; i < sparks; i++) {
        s.particles.push({
          x: rocket.x + (Math.random() - 0.5) * 20,
          y: rocket.y + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 3,
          vy: Math.random() * -4,
          alpha: 1, color: '#FFD100',
          r: 1, trail: [],
        })
      }
    }

    function tick() {
      const { rockets, particles } = stateRef.current
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const rkt = rockets[i]
        rkt.trail.push({ x: rkt.x, y: rkt.y })
        if (rkt.trail.length > 18) rkt.trail.shift()
        rkt.x += rkt.vx
        rkt.y += rkt.vy
        rkt.vy += 0.3

        if (!rkt.exploded && rkt.vy >= -0.5) {
          rkt.exploded = true
          explode(rkt)
          rockets.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.shadowColor = rkt.color
        ctx.shadowBlur = 14
        for (let t = 0; t < rkt.trail.length; t++) {
          const a = (t / rkt.trail.length) * 0.9
          const r = 3.5 * (t / rkt.trail.length)
          ctx.globalAlpha = a
          ctx.fillStyle = rkt.color
          ctx.beginPath()
          ctx.arc(rkt.trail[t].x, rkt.trail[t].y, r, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.restore()
      }

      // Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.trail.push({ x: p.x, y: p.y })
        if (p.trail.length > 8) p.trail.shift()
        p.x += p.vx; p.y += p.vy
        p.vx *= 0.97; p.vy *= 0.97
        p.vy += 0.12
        p.alpha -= 0.018
        if (p.alpha <= 0) { particles.splice(i, 1); continue }

        ctx.save()
        ctx.shadowColor = p.color
        ctx.shadowBlur = 8
        for (let t = 0; t < p.trail.length; t++) {
          const a = (t / p.trail.length) * p.alpha * 0.4
          ctx.globalAlpha = a
          ctx.fillStyle = p.color
          ctx.beginPath()
          ctx.arc(p.trail[t].x, p.trail[t].y, p.r * 0.5, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    function onScroll() {
      const s = stateRef.current
      const dy = Math.abs(window.scrollY - s.lastScrollY)
      s.scrollAccum += dy
      s.lastScrollY = window.scrollY

      if (s.scrollAccum >= 60) {
        s.scrollAccum = 0
        const bursts = 1 + Math.floor(Math.random() * 3)
        for (let i = 0; i < bursts; i++) {
          setTimeout(launch, i * 120)
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.ScrollFireworks} aria-hidden="true" />
}

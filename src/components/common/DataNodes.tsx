'use client'
import { useEffect, useRef } from 'react'
import styles from './DataNodes.module.css'

const LABELS = ['年齢', '性別', '健康状態', '症状', '生活習慣', '体質', 'BMI', '睡眠', 'ストレス', '食生活', '爪状態', 'スキン', 'アレルギー', '頻度', 'スコア']
const COLORS = ['#c084fc', '#00D4FF', '#FF6B35', '#00E87A', '#FFD900']
const LINK_DIST = 180

interface Node {
  x: number; y: number
  vx: number; vy: number
  label: string; color: string
  size: number; alpha: number
  phase: number
}

interface Packet {
  a: number; b: number
  t: number
  speed: number; color: string
}

interface Props {
  density?: number
}

export default function DataNodes({ density = 1 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let raf: number
    let W = 0, H = 0
    let nodes: Node[] = []
    const packets: Packet[] = []
    let frame = 0

    function buildNodes() {
      nodes = []
      const count = Math.floor(14 * density)
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          label: LABELS[i % LABELS.length],
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          size: 4 + Math.random() * 4,
          alpha: 0.55 + Math.random() * 0.45,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    function resize() {
      W = canvas.width = canvas.clientWidth || canvas.offsetWidth
      H = canvas.height = canvas.clientHeight || canvas.offsetHeight
      buildNodes()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    function tick() {
      ctx.clearRect(0, 0, W, H)
      frame++

      for (const n of nodes) {
        n.phase += 0.007
        n.x += n.vx + Math.sin(n.phase) * 0.12
        n.y += n.vy + Math.cos(n.phase * 0.8) * 0.12
        if (n.x < -30) n.x = W + 30
        if (n.x > W + 30) n.x = -30
        if (n.y < -30) n.y = H + 30
        if (n.y > H + 30) n.y = -30
      }

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DIST) {
            const a = (1 - dist / LINK_DIST) * 0.22
            ctx.globalAlpha = a
            ctx.strokeStyle = nodes[i].color
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Spawn packets
      if (frame % 28 === 0 && nodes.length > 1) {
        const a = Math.floor(Math.random() * nodes.length)
        let b = Math.floor(Math.random() * nodes.length)
        while (b === a) b = Math.floor(Math.random() * nodes.length)
        packets.push({ a, b, t: 0, speed: 0.009 + Math.random() * 0.013, color: nodes[a].color })
      }

      // Draw & update packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i]
        p.t += p.speed
        if (p.t >= 1) { packets.splice(i, 1); continue }
        const na = nodes[p.a], nb = nodes[p.b]
        const px = na.x + (nb.x - na.x) * p.t
        const py = na.y + (nb.y - na.y) * p.t
        ctx.globalAlpha = 0.9
        ctx.shadowColor = p.color
        ctx.shadowBlur = 10
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(px, py, 2.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      // Draw nodes
      ctx.font = 'bold 9px sans-serif'
      for (const n of nodes) {
        // Glow halo
        ctx.globalAlpha = 0.12
        ctx.shadowColor = n.color
        ctx.shadowBlur = 24
        ctx.fillStyle = n.color
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.size * 3, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        // Core
        ctx.globalAlpha = n.alpha
        ctx.shadowColor = n.color
        ctx.shadowBlur = 14
        ctx.fillStyle = n.color
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        // Label
        ctx.globalAlpha = n.alpha * 0.75
        ctx.fillStyle = n.color
        ctx.fillText(n.label, n.x + n.size + 5, n.y + 3)
      }

      ctx.globalAlpha = 1
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [density])

  return <canvas ref={canvasRef} className={styles.DataNodes} />
}

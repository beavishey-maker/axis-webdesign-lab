'use client'
import { useEffect } from 'react'

/** Keeps --scroll-y on :root updated for CSS parallax transforms */
export default function ScrollInit() {
  useEffect(() => {
    let rafId: number
    const update = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
    }
    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])
  return null
}

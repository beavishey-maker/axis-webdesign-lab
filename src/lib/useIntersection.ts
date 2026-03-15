'use client'
import { useEffect, useRef, useState, type RefObject } from 'react'

export function useIntersection(
  ref: RefObject<Element | null>,
  options?: IntersectionObserverInit
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!ref.current) return

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
        observerRef.current?.disconnect()
      }
    }, {
      threshold: 0.1,
      ...options,
    })

    observerRef.current.observe(ref.current)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [ref, options])

  return isIntersecting
}

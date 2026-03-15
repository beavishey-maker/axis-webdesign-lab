'use client'
import dynamic from 'next/dynamic'

const ScrollFireworks = dynamic(() => import('./ScrollFireworks'), { ssr: false })

export default function ScrollFireworksLoader() {
  return <ScrollFireworks />
}

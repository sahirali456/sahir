
"use client"

import { ReactNode, useEffect, useRef } from "react"
import * as THREE from "three"
interface NetworkBackgroundProps {
  children?: ReactNode;
}

export default function NetworkBackground({ children }: NetworkBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement | null>(null)
  

  useEffect(() => {
    let effect: any

    if (typeof window !== "undefined") {
      import("vanta/dist/vanta.net.min").then((VANTA) => {
        effect = VANTA.default({
          el: vantaRef.current,
          THREE: THREE,
         mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xff0000,             // bright red lines
  backgroundColor: 0x000000,   // black background
  backgroundAlpha: 1.0,
  points: 5,                   // fewer points = fewer lines
  spacing: 25.0,               // increase spacing
  maxDistance: 20.0 
        })
      })
    }

    return () => {
      if (effect) effect.destroy()
    }
  }, [])

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 w-full h-full -z-10"
    />
  )
}

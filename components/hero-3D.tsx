"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text3D, Center, Float } from "@react-three/drei"
import type { Mesh } from "three"

export default function Hero3D() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    }
  })

  return (
    <group position={[0, 0, -5]}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
        <Center>
          <Text3D
            ref={meshRef}
            font="/fonts/Geist_Bold.json"
            size={1.5}
            height={0.3}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            3D Web
            <meshStandardMaterial color="#3b82f6" />
          </Text3D>
        </Center>
      </Float>
    </group>
  )
}

"use client";

import { ReactNode, useEffect, useRef } from "react";
import * as THREE from "three";

interface NetworkBackgroundProps {
  children?: ReactNode;
}

export default function NetworkBackground({ }: NetworkBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<{ destroy: () => void } | null>(null); // typed ref for Vanta effect instance

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("vanta/dist/vanta.net.min").then((VANTA) => {
        if (!effectRef.current && vantaRef.current) {
          effectRef.current = VANTA.default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xff0000,
            backgroundColor: 0x000000,
            backgroundAlpha: 1.0,
            points: 5,
            spacing: 25.0,
            maxDistance: 20.0,
          });
        }
      });
    }

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return <div ref={vantaRef} className="fixed inset-0 w-full h-full -z-10" />;
}

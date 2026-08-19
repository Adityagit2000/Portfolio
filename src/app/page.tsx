"use client";

import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import Scene from '@/components/Scene';
import HTMLOverlay from '@/components/HTMLOverlay';
import MobileFallback from '@/components/MobileFallback';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) return <div className="w-full h-screen bg-black" />;

  if (isMobile) {
    return <MobileFallback />;
  }

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 60 }}>
          <color attach="background" args={['#000000']} />
          <fog attach="fog" args={['#000000', 5, 30]} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          
          <Scene />
          
          <Environment preset="night" />
          <Preload all />
        </Canvas>
      </div>

      <HTMLOverlay />
    </main>
  );
}

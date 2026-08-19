"use client";

import React, { useRef } from 'react';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Hero({ position }: { position: [number, number, number] }) {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group position={position} ref={group}>
      <Text
        position={[0, 1, 0]}
        fontSize={2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
      >
        Aditya Jha
        <meshStandardMaterial color="#ffffff" emissive="#4C6FFF" emissiveIntensity={0.5} />
      </Text>
      
      <Text
        position={[0, -0.5, 0]}
        fontSize={0.5}
        color="#aaaaaa"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
      >
        Cinematic 3D Portfolio
      </Text>
    </group>
  );
}

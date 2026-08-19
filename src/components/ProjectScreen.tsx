"use client";

import React, { useState } from 'react';
import { Html } from '@react-three/drei';

export default function ProjectScreen({ position, rotation, videoSrc, url }: any) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <group position={position} rotation={rotation}>
      <mesh 
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
        onClick={() => window.open(url, '_blank')}
      >
        <planeGeometry args={[6, 3.75]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        
        <Html
          transform
          scale={0.5}
          position={[0, 0, 0]}
          style={{
            width: '1200px',
            height: '750px',
            pointerEvents: 'none',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: hovered ? '0 0 40px #8b5cf6' : '0 0 10px rgba(0,0,0,0.8)',
            transition: 'all 0.3s ease',
            backgroundColor: '#111',
            border: '2px solid rgba(255,255,255,0.1)'
          }}
        >
          <img 
            src={videoSrc} 
            alt="Project" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </Html>
      </mesh>
    </group>
  );
}

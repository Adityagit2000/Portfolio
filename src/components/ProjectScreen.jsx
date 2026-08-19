import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

export default function ProjectScreen({ title, url, videoSrc, position, rotation }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();

  useFrame((state, delta) => {
    const targetScale = hovered ? 1.05 : 1;
    meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 10 * delta;
    meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 10 * delta;
    meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 10 * delta;
  });

  return (
    <group position={position} rotation={rotation}>
      <mesh 
        ref={meshRef}
        onPointerOver={() => {
          document.body.style.cursor = 'pointer';
          setHovered(true);
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto';
          setHovered(false);
        }}
        onClick={() => window.open(url, '_blank')}
      >
        <planeGeometry args={[4, 2.5]} />
        {/* Invisible mesh just for catching mouse events */}
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        
        <Html
          transform
          scale={0.005} // 800px * 0.005 = 4 units in 3D space
          position={[0, 0, 0]}
          style={{
            width: '800px',
            height: '500px',
            pointerEvents: 'none',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.2)' : '0 10px 30px rgba(0,0,0,0.5)',
            transition: 'all 0.4s ease',
            backgroundColor: '#111'
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img 
              src={videoSrc} 
              alt={title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            {hovered && (
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '48px',
                fontWeight: 'bold',
                backdropFilter: 'blur(4px)'
              }}>
                Enter Website
              </div>
            )}
          </div>
        </Html>
      </mesh>
      
      <Html transform position={[0, -1.6, 0]} scale={0.05} center>
        <div style={{
          color: 'white',
          fontSize: '24px',
          fontWeight: '300',
          letterSpacing: '2px',
          opacity: hovered ? 1 : 0.6,
          transition: 'opacity 0.3s',
          whiteSpace: 'nowrap',
          textShadow: '0 2px 10px rgba(0,0,0,0.8)'
        }}>
          {title}
        </div>
      </Html>
    </group>
  );
}

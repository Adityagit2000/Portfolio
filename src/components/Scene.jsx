import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import ProjectScreen from './ProjectScreen';

const projects = [
  {
    id: 1,
    title: 'Confera V2',
    url: 'https://conferav2.vercel.app/',
    videoSrc: '/conferav2_demo_1787130841097.webp',
    position: [-4.5, 0, -2],
    rotation: [0, Math.PI / 8, 0]
  },
  {
    id: 2,
    title: 'Ember & Ash',
    url: 'https://emberandash.vercel.app/',
    videoSrc: '/emberandash_demo_1787130936600.webp',
    position: [0, 0, 0],
    rotation: [0, 0, 0]
  },
  {
    id: 3,
    title: 'Lumiere Studio',
    url: 'https://lumiere-studio-delta.vercel.app/',
    videoSrc: '/lumiere_demo_1787131074919.webp',
    position: [4.5, 0, -2],
    rotation: [0, -Math.PI / 8, 0]
  }
];

export default function Scene() {
  const group = useRef();

  useFrame((state) => {
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <group ref={group}>
      {projects.map((project) => (
        <ProjectScreen key={project.id} {...project} />
      ))}
    </group>
  );
}

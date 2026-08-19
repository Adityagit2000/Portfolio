"use client";

import React, { useRef, useLayoutEffect } from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectScreen from './ProjectScreen';
import Hero from './Hero';
import Particles from './Particles';

const waypoints = [
  { z: 5, x: 0, y: 0, rotY: 0 },
  { z: -10, x: -3, y: 0, rotY: 0.2 },
  { z: -25, x: 3, y: 0, rotY: -0.2 },
  { z: -40, x: -3, y: 0, rotY: 0.2 },
  { z: -55, x: 0, y: 0, rotY: 0 }
];

export default function Scene() {
  const { camera } = useThree();

  useLayoutEffect(() => {
    camera.position.set(waypoints[0].x, waypoints[0].y, waypoints[0].z);
    camera.rotation.set(0, waypoints[0].rotY, 0);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#html-overlay-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      tl.to(camera.position, { z: waypoints[1].z, x: waypoints[1].x, ease: "none" }, 0)
        .to(camera.rotation, { y: waypoints[1].rotY, ease: "none" }, 0)
        
        .to(camera.position, { z: waypoints[2].z, x: waypoints[2].x, ease: "none" }, 1)
        .to(camera.rotation, { y: waypoints[2].rotY, ease: "none" }, 1)
        
        .to(camera.position, { z: waypoints[3].z, x: waypoints[3].x, ease: "none" }, 2)
        .to(camera.rotation, { y: waypoints[3].rotY, ease: "none" }, 2)
        
        .to(camera.position, { z: waypoints[4].z, x: waypoints[4].x, ease: "none" }, 3)
        .to(camera.rotation, { y: waypoints[4].rotY, ease: "none" }, 3);

      const contents = gsap.utils.toArray('.proj-content') as HTMLElement[];
      contents.forEach((el, index) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: `#project-${index + 1}`,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
          },
          opacity: 1,
          y: -20,
          duration: 0.5
        });
      });

      gsap.to('.contact-content', {
        scrollTrigger: {
          trigger: "#contact",
          start: "top center",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: -20,
        duration: 0.8
      });
    });

    return () => ctx.revert();
  }, [camera]);

  return (
    <group>
      <Hero position={[0, 0, -2]} />
      <ProjectScreen position={[-5, 0, -12]} rotation={[0, 0.4, 0]} videoSrc="/conferav2_demo_1787130841097.webp" url="https://conferav2.vercel.app/" />
      <ProjectScreen position={[5, 0, -27]} rotation={[0, -0.4, 0]} videoSrc="/emberandash_demo_1787130936600.webp" url="https://emberandash.vercel.app/" />
      <ProjectScreen position={[-5, 0, -42]} rotation={[0, 0.4, 0]} videoSrc="/lumiere_demo_1787131074919.webp" url="https://lumiere-studio-delta.vercel.app/" />
      <Particles count={800} />
    </group>
  );
}

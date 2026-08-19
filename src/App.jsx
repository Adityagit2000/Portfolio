import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import Scene from './components/Scene';
import Overlay from './components/Overlay';

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 5, 20]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <Suspense fallback={null}>
          <Scene />
          <Environment preset="city" />
          <Preload all />
        </Suspense>
      </Canvas>
      <Overlay />
    </>
  );
}

export default App;

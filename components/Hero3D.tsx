"use client";

import { Canvas } from '@react-three/fiber';
import { Environment, Float, Preload } from '@react-three/drei';
import { Wrench, Faucet } from './FloatingPlumbingObjects';
import { Suspense, useEffect, useState } from 'react';

export default function Hero3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full z-0 pointer-events-auto opacity-80 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
        <pointLight position={[10, -10, 10]} intensity={1.5} color="#2563eb" />
        
        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <Wrench position={[-3, 0, -2]} scale={0.9} />
          </Float>
          <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
            <Faucet position={[3, -1, -1]} scale={0.7} />
          </Float>
          <Environment preset="city" />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}

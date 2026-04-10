"use client";

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export function Wrench(props: any) {
  const group = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  
  useFrame((state, delta) => {
    if (!group.current) return;
    
    // Base continuous rotation
    group.current.rotation.z += delta * 0.2;

    // Subtle reaction to cursor using lerp for smooth interpolation
    targetRotation.current.x = (state.pointer.y * Math.PI) / 6;
    targetRotation.current.y = (state.pointer.x * Math.PI) / 6;
    
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotation.current.x, 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotation.current.y, 0.05);
  });

  return (
    <group ref={group} {...props}>
      {/* Handle */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.5, 4, 0.2]} />
        <meshStandardMaterial color="#60a5fa" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Wrench head top */}
      <mesh position={[0, 2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.7, 0.7, 0.2, 32]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.5} roughness={0.2} />
      </mesh>
      {/* Wrench head bottom */}
      <mesh position={[0, -2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.5} roughness={0.2} />
      </mesh>
      {/* Cutout to shape the jaw */}
      <mesh position={[0, 2.3, 0]} castShadow receiveShadow>
         <boxGeometry args={[0.8, 0.8, 0.3]} />
         <meshStandardMaterial color="#020617" />
      </mesh>
    </group>
  );
}

export function Faucet(props: any) {
  const group = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!group.current) return;
    
    group.current.rotation.z -= delta * 0.15;

    targetRotation.current.x = (state.pointer.y * Math.PI) / 8;
    targetRotation.current.y = (state.pointer.x * Math.PI) / 8;
    
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotation.current.x, 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotation.current.y, 0.05);
  });

  return (
    <group ref={group} {...props}>
      {/* Main pipe */}
      <mesh castShadow receiveShadow position={[0, -1, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 2, 32]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.15} />
      </mesh>
      {/* Spout */}
      <mesh castShadow receiveShadow position={[0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 2, 32]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.15} />
      </mesh>
      {/* Spout drop down */}
      <mesh castShadow receiveShadow position={[1.8, -0.4, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 1, 32]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.15} />
      </mesh>
      {/* Faucet knob cap */}
      <mesh castShadow receiveShadow position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
        <meshStandardMaterial color="#2563eb" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Knob handles */}
      <mesh castShadow receiveShadow position={[0, 0.4, 0]}>
        <boxGeometry args={[1.5, 0.2, 0.4]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  );
}

'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

function Node({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.5, 0]} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
}

function Network() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate random nodes
  const nodes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 15; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ] as [number, number, number],
        color: Math.random() > 0.5 ? '#00F0FF' : '#FF00E5',
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Gentle rotation
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    
    // Pointer interaction
    const pointerX = state.pointer.x * 2;
    const pointerY = state.pointer.y * 2;
    
    groupRef.current.rotation.y += (pointerX - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x += (-pointerY - groupRef.current.rotation.x) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <Node key={i} position={node.position} color={node.color} />
      ))}
      
      {/* Central "T" Monogram */}
      <group>
        {/* Top Horizontal Bar */}
        <mesh position={[0, 1.1, 0]}>
          <boxGeometry args={[3.0, 0.45, 0.45]} />
          <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.4} />
        </mesh>
        {/* Vertical Stem */}
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[0.5, 2.3, 0.45]} />
          <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.4} />
        </mesh>
        {/* Secondary Glowing Outer Frame of "T" */}
        <mesh position={[0, 1.1, 0]} scale={1.1}>
          <boxGeometry args={[3.0, 0.45, 0.45]} />
          <meshBasicMaterial color="#FF00E5" wireframe transparent opacity={0.15} />
        </mesh>
        <mesh position={[0, -0.3, 0]} scale={1.1}>
          <boxGeometry args={[0.5, 2.3, 0.45]} />
          <meshBasicMaterial color="#FF00E5" wireframe transparent opacity={0.15} />
        </mesh>
      </group>

      {/* Orbit Ring 1 - Cyan (Vertical-ish) */}
      <mesh>
        <torusGeometry args={[2.2, 0.08, 16, 100]} />
        <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.25} />
      </mesh>

      {/* Orbit Ring 2 - Magenta (Horizontal) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.6, 0.05, 16, 100]} />
        <meshBasicMaterial color="#FF00E5" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <fog attach="fog" args={['#050505', 10, 25]} />
        <Network />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
    </div>
  );
}

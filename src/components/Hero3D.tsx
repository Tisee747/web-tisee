'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/components/ThemeProvider';

const themeColorMap = {
  cyberpunk: { cyan: '#00F0FF', magenta: '#FF00E5' },
  matrix: { cyan: '#10B981', magenta: '#059669' },
  retro: { cyan: '#F59E0B', magenta: '#D97706' },
  nebula: { cyan: '#A855F7', magenta: '#EC4899' },
};

interface TechBitProps {
  basePos: [number, number, number];
  color: string;
  type: 'cube' | 'cone' | 'tetra';
}

function TechBit({ basePos, color, type }: TechBitProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Track initial base position, current animated position, and physics velocity vector
  const initial = useMemo(() => new THREE.Vector3(...basePos), [basePos]);
  const current = useMemo(() => new THREE.Vector3(...basePos), [basePos]);
  const velocity = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Gentle spin
    meshRef.current.rotation.x += 0.008;
    meshRef.current.rotation.y += 0.012;

    // Approximate 3D pointer position projected on the z = current.z plane
    const mouse = new THREE.Vector3(
      state.pointer.x * 7.5,
      state.pointer.y * 7.5,
      current.z
    );

    // Calculate displacement vector and distance to mouse pointer
    const dir = new THREE.Vector3().subVectors(current, mouse);
    const dist = dir.length();
    
    // Repel force: push away if kursor is close
    if (dist < 3.2) {
      const force = (3.2 - dist) * 0.12;
      dir.normalize().multiplyScalar(force);
      velocity.add(dir);
    }

    // Spring force pulling back to initial position coordinates
    const springDir = new THREE.Vector3().subVectors(initial, current);
    velocity.add(springDir.multiplyScalar(0.04));

    // Friction damping
    velocity.multiplyScalar(0.88);

    // Apply movement
    current.add(velocity);
    meshRef.current.position.copy(current);
  });

  return (
    <mesh ref={meshRef} position={basePos}>
      {type === 'cube' && <boxGeometry args={[0.3, 0.3, 0.3]} />}
      {type === 'cone' && <coneGeometry args={[0.2, 0.45, 4]} />}
      {type === 'tetra' && <tetrahedronGeometry args={[0.25, 0]} />}
      <meshBasicMaterial color={color} wireframe transparent opacity={0.6} />
    </mesh>
  );
}

function Network() {
  const groupRef = useRef<THREE.Group>(null);
  const { accentTheme } = useTheme();
  
  const colors = themeColorMap[accentTheme] || themeColorMap.cyberpunk;

  // Generate 18 floating bits with randomized locations and types
  const bits = useMemo(() => {
    const temp = [];
    const types: ('cube' | 'cone' | 'tetra')[] = ['cube', 'cone', 'tetra'];
    
    for (let i = 0; i < 18; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6,
        ] as [number, number, number],
        type: types[i % 3],
        isCyan: Math.random() > 0.5,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Gentle rotation & tilting based on pointer moves
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.04;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.08;
    
    const pointerX = state.pointer.x * 1.5;
    const pointerY = state.pointer.y * 1.5;
    
    groupRef.current.rotation.y += (pointerX - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x += (-pointerY - groupRef.current.rotation.x) * 0.04;
  });

  return (
    <group ref={groupRef}>
      {bits.map((bit, i) => (
        <TechBit 
          key={i} 
          basePos={bit.position} 
          color={bit.isCyan ? colors.cyan : colors.magenta} 
          type={bit.type} 
        />
      ))}
      
      {/* Central "T" Monogram */}
      <group>
        {/* Top Horizontal Bar */}
        <mesh position={[0, 1.1, 0]}>
          <boxGeometry args={[3.0, 0.45, 0.45]} />
          <meshBasicMaterial color={colors.cyan} wireframe transparent opacity={0.45} />
        </mesh>
        {/* Vertical Stem */}
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[0.5, 2.3, 0.45]} />
          <meshBasicMaterial color={colors.cyan} wireframe transparent opacity={0.45} />
        </mesh>
        {/* Secondary Glowing Outer Frame of "T" */}
        <mesh position={[0, 1.1, 0]} scale={1.1}>
          <boxGeometry args={[3.0, 0.45, 0.45]} />
          <meshBasicMaterial color={colors.magenta} wireframe transparent opacity={0.2} />
        </mesh>
        <mesh position={[0, -0.3, 0]} scale={1.1}>
          <boxGeometry args={[0.5, 2.3, 0.45]} />
          <meshBasicMaterial color={colors.magenta} wireframe transparent opacity={0.2} />
        </mesh>
      </group>

      {/* Orbit Ring 1 - Cyan (Vertical-ish) */}
      <mesh>
        <torusGeometry args={[2.2, 0.08, 16, 100]} />
        <meshBasicMaterial color={colors.cyan} wireframe transparent opacity={0.3} />
      </mesh>

      {/* Orbit Ring 2 - Magenta (Horizontal) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.6, 0.05, 16, 100]} />
        <meshBasicMaterial color={colors.magenta} wireframe transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
      <Canvas camera={{ position: [0, 0, 14], fov: 45 }}>
        <fog attach="fog" args={['#030303', 10, 24]} />
        <Network />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
    </div>
  );
}

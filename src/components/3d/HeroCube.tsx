import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export const HeroCube = () => {
  const mainCube = useRef<THREE.Mesh>(null);
  const cube1 = useRef<THREE.Mesh>(null);
  const cube2 = useRef<THREE.Mesh>(null);
  const cube3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (mainCube.current) {
      mainCube.current.rotation.x = Math.sin(time * 0.5) * 0.2;
      mainCube.current.rotation.y = time * 0.3;
      mainCube.current.position.y = Math.sin(time * 0.8) * 0.5;
    }
    
    if (cube1.current) {
      cube1.current.rotation.x = time * 0.4;
      cube1.current.rotation.z = time * 0.2;
      cube1.current.position.x = Math.sin(time * 0.6) * 2;
    }
    
    if (cube2.current) {
      cube2.current.rotation.y = time * -0.3;
      cube2.current.rotation.z = time * 0.5;
      cube2.current.position.z = Math.cos(time * 0.7) * 1;
    }
    
    if (cube3.current) {
      cube3.current.rotation.x = time * 0.6;
      cube3.current.rotation.y = time * -0.4;
      cube3.current.position.y = Math.cos(time * 0.5) * 1.5;
    }
  });

  return (
    <group position={[3, 0, 0]}>
      {/* Main central cube */}
      <RoundedBox
        ref={mainCube}
        args={[2, 2, 2]}
        radius={0.1}
        smoothness={4}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#1EAEDB"
          transparent
          opacity={0.8}
          metalness={0.5}
          roughness={0.2}
          emissive="#1EAEDB"
          emissiveIntensity={0.1}
        />
      </RoundedBox>
      
      {/* Orbiting smaller cubes */}
      <Box
        ref={cube1}
        args={[0.8, 0.8, 0.8]}
        position={[3, 1, 0]}
      >
        <meshStandardMaterial
          color="#9D50FF"
          transparent
          opacity={0.7}
          metalness={0.7}
          roughness={0.3}
          emissive="#9D50FF"
          emissiveIntensity={0.05}
        />
      </Box>
      
      <Box
        ref={cube2}
        args={[0.6, 0.6, 0.6]}
        position={[-2, 0, 2]}
      >
        <meshStandardMaterial
          color="#33C3F0"
          transparent
          opacity={0.6}
          metalness={0.4}
          roughness={0.4}
          emissive="#33C3F0"
          emissiveIntensity={0.08}
        />
      </Box>
      
      <Box
        ref={cube3}
        args={[1, 1, 1]}
        position={[1, -2, -1]}
      >
        <meshStandardMaterial
          color="#1EAEDB"
          transparent
          opacity={0.5}
          metalness={0.6}
          roughness={0.1}
          emissive="#1EAEDB"
          emissiveIntensity={0.12}
        />
      </Box>
    </group>
  );
};
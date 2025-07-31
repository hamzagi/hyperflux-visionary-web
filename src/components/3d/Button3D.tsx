import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

interface Button3DProps {
  text: string;
  position: [number, number, number];
  color?: string;
  onClick?: () => void;
  size?: [number, number, number];
}

export const Button3D = ({ 
  text, 
  position, 
  color = "#1EAEDB", 
  onClick,
  size = [2, 0.6, 0.2]
}: Button3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(time * 2) * 0.02;
      
      // Scale and position based on interaction
      const targetScale = pressed ? 0.95 : hovered ? 1.05 : 1;
      const targetZ = pressed ? position[2] - 0.05 : position[2];
      
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.2);
      meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetZ, 0.2);
    }
  });

  return (
    <group position={position}>
      <RoundedBox
        ref={meshRef}
        args={size}
        radius={0.05}
        smoothness={4}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = 'default';
        }}
        onPointerDown={(e) => {
          e.stopPropagation();
          setPressed(true);
        }}
        onPointerUp={(e) => {
          e.stopPropagation();
          setPressed(false);
          onClick?.();
        }}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={hovered ? 0.95 : 0.85}
          metalness={0.3}
          roughness={0.1}
          emissive={color}
          emissiveIntensity={hovered ? 0.15 : 0.05}
        />
      </RoundedBox>
      
      <Center position={[0, 0, size[2] / 2 + 0.01]}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={0.12}
          height={0.01}
          curveSegments={8}
        >
          {text}
          <meshStandardMaterial 
            color="white" 
            emissive="white"
            emissiveIntensity={0.1}
          />
        </Text3D>
      </Center>
    </group>
  );
};
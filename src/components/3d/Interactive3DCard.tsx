import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { RoundedBox, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

interface Interactive3DCardProps {
  title: string;
  description: string;
  position: [number, number, number];
  color: string;
  onHover?: () => void;
  onClick?: () => void;
}

export const Interactive3DCard = ({ 
  title, 
  description, 
  position, 
  color, 
  onHover, 
  onClick 
}: Interactive3DCardProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { viewport } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      meshRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.1;
      
      // Scale based on hover state
      const targetScale = hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group position={position}>
      <RoundedBox
        ref={meshRef}
        args={[3, 2, 0.2]}
        radius={0.1}
        smoothness={4}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          onHover?.();
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
        }}
        onPointerDown={(e) => {
          e.stopPropagation();
          setClicked(true);
          onClick?.();
        }}
        onPointerUp={(e) => {
          e.stopPropagation();
          setClicked(false);
        }}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={hovered ? 0.9 : 0.7}
          metalness={0.5}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={hovered ? 0.2 : 0.1}
        />
      </RoundedBox>
      
      <Center position={[0, 0.3, 0.11]}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={0.15}
          height={0.02}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.005}
          bevelSize={0.005}
          bevelOffset={0}
          bevelSegments={3}
        >
          {title}
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
      
      <Center position={[0, -0.2, 0.11]}>
        <Text3D
          font="/fonts/Inter_Regular.json"
          size={0.08}
          height={0.01}
          curveSegments={8}
        >
          {description}
          <meshStandardMaterial color="white" opacity={0.8} transparent />
        </Text3D>
      </Center>
    </group>
  );
};
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Background3D = () => {
  const sphere1 = useRef<THREE.Mesh>(null);
  const sphere2 = useRef<THREE.Mesh>(null);
  const sphere3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (sphere1.current) {
      sphere1.current.position.x = Math.sin(time * 0.2) * 8;
      sphere1.current.position.y = Math.cos(time * 0.3) * 5;
      sphere1.current.position.z = Math.sin(time * 0.1) * -10;
      sphere1.current.rotation.z = time * 0.1;
    }
    
    if (sphere2.current) {
      sphere2.current.position.x = Math.cos(time * 0.15) * -12;
      sphere2.current.position.y = Math.sin(time * 0.25) * 8;
      sphere2.current.position.z = Math.cos(time * 0.1) * -15;
      sphere2.current.rotation.x = time * 0.15;
    }
    
    if (sphere3.current) {
      sphere3.current.position.x = Math.sin(time * 0.1) * 6;
      sphere3.current.position.y = Math.cos(time * 0.2) * -4;
      sphere3.current.position.z = Math.sin(time * 0.05) * -20;
      sphere3.current.rotation.y = time * 0.05;
    }
  });

  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.3} />
      
      {/* Directional lights */}
      <directionalLight position={[10, 10, 5]} intensity={0.5} color="#1EAEDB" />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#9D50FF" />
      
      {/* Point lights */}
      <pointLight position={[20, 20, 20]} intensity={0.8} color="#1EAEDB" />
      <pointLight position={[-20, -20, -20]} intensity={0.6} color="#9D50FF" />
      
      {/* Background spheres */}
      <mesh ref={sphere1} position={[8, 5, -10]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial
          color="#1EAEDB"
          transparent
          opacity={0.1}
          roughness={0.8}
        />
      </mesh>
      
      <mesh ref={sphere2} position={[-12, 8, -15]}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshStandardMaterial
          color="#9D50FF"
          transparent
          opacity={0.08}
          roughness={0.9}
        />
      </mesh>
      
      <mesh ref={sphere3} position={[6, -4, -20]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial
          color="#33C3F0"
          transparent
          opacity={0.06}
          roughness={0.7}
        />
      </mesh>
    </>
  );
};
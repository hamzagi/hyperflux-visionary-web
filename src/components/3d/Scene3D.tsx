import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { FloatingParticles } from './FloatingParticles';
import { Background3D } from './Background3D';
import { HeroCube } from './HeroCube';

interface Scene3DProps {
  children?: React.ReactNode;
  showHeroCube?: boolean;
  cameraPosition?: [number, number, number];
}

export const Scene3D = ({ children, showHeroCube = false, cameraPosition = [0, 0, 10] }: Scene3DProps) => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ 
          position: cameraPosition, 
          fov: 75,
          near: 0.1,
          far: 1000 
        }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          <Background3D />
          <FloatingParticles count={50} />
          {showHeroCube && <HeroCube />}
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
};
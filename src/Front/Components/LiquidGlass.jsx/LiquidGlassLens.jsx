import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';

export default function LiquidGlassLens({ position }) {
  const meshRef = useRef();

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.7, 64, 64]} />
      <MeshTransmissionMaterial
        transmission={1}
        thickness={0.5}
        roughness={0}
        ior={1.5}
        chromaticAberration={0.03}
        distortion={0.3}
        distortionScale={0.3}
        temporalDistortion={0.2}
        samples={8}
        backside
      />
    </mesh>
  );
}

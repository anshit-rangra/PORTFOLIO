"use client"; // This directive is mandatory for Next.js App Router!

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// 1. Create a simple spinning cube
function SpinningCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  // useFrame runs on every single animation frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    // position maps to the [x, y, z] coordinates in 3D space
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}



// 2. Set up the Canvas to hold the scene
export default function Scene() {
  return (
    <Canvas>
      {/* Lighting is necessary to see the colors of standard materials */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <SpinningCube />
      
      {/* OrbitControls allow the user to drag and rotate the camera */}
      <OrbitControls />
    </Canvas>
  );
}
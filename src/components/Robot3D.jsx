import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function Bot() {
  const botRef = useRef();
  const eyeRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Smoothly rotate the bot to look at the mouse
    if (botRef.current) {
      // Calculate target rotation based on mouse coordinates (-1 to +1)
      const targetX = (state.pointer.x * Math.PI) / 3;
      const targetY = (state.pointer.y * Math.PI) / 3;
      
      botRef.current.rotation.y = THREE.MathUtils.lerp(botRef.current.rotation.y, targetX, 0.1);
      botRef.current.rotation.x = THREE.MathUtils.lerp(botRef.current.rotation.x, -targetY, 0.1);
    }
    
    // Animate the eye scale to simulate blinking or processing
    if (eyeRef.current) {
      eyeRef.current.scale.y = 1 + Math.sin(t * 8) * 0.2;
      eyeRef.current.scale.x = 1 + Math.cos(t * 3) * 0.1;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={botRef}>
        {/* Main Body */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2, 2.2, 2]} />
          <meshStandardMaterial color="#1a1f26" roughness={0.2} metalness={0.8} />
        </mesh>
        
        {/* Screen/Face */}
        <mesh position={[0, 0.1, 1.01]}>
          <planeGeometry args={[1.6, 1.2]} />
          <meshBasicMaterial color="#050a0f" />
        </mesh>

        {/* Glowing Eye */}
        <mesh ref={eyeRef} position={[0, 0.1, 1.02]}>
          <boxGeometry args={[1.0, 0.2, 0.1]} />
          <meshBasicMaterial color="#00e676" />
        </mesh>
        <mesh position={[0, 0.1, 1.03]}>
          <boxGeometry args={[0.4, 0.2, 0.1]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        {/* Antenna / Details */}
        <mesh position={[0, 1.25, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5]} />
          <meshStandardMaterial color="#333" metalness={0.9} />
        </mesh>
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.15]} />
          <meshBasicMaterial color="#00e676" />
        </mesh>
        
        {/* Floating Side Panels */}
        <mesh position={[-1.2, 0, 0]} rotation={[0, 0, 0.1]}>
          <boxGeometry args={[0.3, 1.5, 1.5]} />
          <meshStandardMaterial color="#00e676" roughness={0.3} metalness={0.9} />
        </mesh>
        <mesh position={[1.2, 0, 0]} rotation={[0, 0, -0.1]}>
          <boxGeometry args={[0.3, 1.5, 1.5]} />
          <meshStandardMaterial color="#00e676" roughness={0.3} metalness={0.9} />
        </mesh>
      </group>
    </Float>
  );
}

export default function Robot3D() {
  return (
    <div className="w-full h-[300px] md:h-full min-h-[300px] cursor-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#00e676" />
        
        <Bot />
        
        <Environment preset="city" />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2} far={4} />
      </Canvas>
    </div>
  );
}

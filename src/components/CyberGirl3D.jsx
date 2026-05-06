import React, { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { useTexture, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import cyberGirlImg from '../assets/cyber_girl.png';

const ImageShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector2(0.5, 0.5),
    uTexture: null,
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform sampler2D uTexture;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;

      // Distance from mouse to current pixel (adjusted for typical coordinate systems)
      float dist = distance(uv, uMouse);
      
      // Calculate a distortion effect based on mouse proximity
      float distortion = exp(-dist * 15.0) * 0.08;
      
      // Add subtle continuous breathing wave
      float wave = sin(uv.y * 10.0 + uTime * 1.5) * 0.01;
      
      // Apply distortion to UVs for an RGB split liquid effect
      vec2 uvR = uv + vec2(distortion + wave, distortion);
      vec2 uvG = uv;
      vec2 uvB = uv - vec2(distortion - wave, distortion);
      
      // Sample texture
      float r = texture2D(uTexture, uvR).r;
      float g = texture2D(uTexture, uvG).g;
      float b = texture2D(uTexture, uvB).b;
      vec4 original = texture2D(uTexture, uv);

      // Enhance the green channel slightly where mouse is hovering to make it "glow"
      if(dist < 0.3) {
         g += (0.3 - dist) * 0.5;
      }

      gl_FragColor = vec4(r, g, b, original.a);
    }
  `
);

extend({ ImageShaderMaterial });

function InteractiveGirl() {
  const materialRef = useRef();
  const texture = useTexture(cyberGirlImg);
  const targetMouse = useRef(new THREE.Vector2(0.5, 0.5));

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.elapsedTime;
      
      // Map mouse coordinates (-1 to 1) to UV coordinates (0 to 1)
      const targetX = (state.pointer.x + 1) / 2;
      const targetY = (state.pointer.y + 1) / 2;
      
      // Smooth lerp mouse tracking
      targetMouse.current.x = THREE.MathUtils.lerp(targetMouse.current.x, targetX, 0.1);
      targetMouse.current.y = THREE.MathUtils.lerp(targetMouse.current.y, targetY, 0.1);
      
      materialRef.current.uMouse = targetMouse.current;
    }
  });

  return (
    <mesh>
      {/* 1:1 plane matching image aspect ratio */}
      <planeGeometry args={[4.5, 4.5]} />
      <imageShaderMaterial ref={materialRef} uTexture={texture} transparent={true} />
    </mesh>
  );
}

export default function CyberGirl3D() {
  return (
    <div className="w-full h-full min-h-[300px] cursor-none rounded-xl overflow-hidden shadow-2xl">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1} />
        <React.Suspense fallback={null}>
          <InteractiveGirl />
        </React.Suspense>
      </Canvas>
    </div>
  );
}

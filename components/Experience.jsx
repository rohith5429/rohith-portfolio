"use client";

import React, { useRef } from "react";
import {
  Html,
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
  Text,
  Plane,
  RoundedBox,
  Cylinder,
} from "@react-three/drei";
import { TextureLoader } from "three";
import * as THREE from "three";
import { Background } from "./Background";
import { useLoader } from "@react-three/fiber";

// Procedural Workstation matching original placement & geometry
function LaptopModel() {
  return (
    <group position={[-1, -1.2, 0]}>
      {/* Base chassis */}
      <RoundedBox
        args={[3.2, 0.1, 2.2]}
        radius={0.04}
        smoothness={4}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial color="#2d3748" roughness={0.3} metalness={0.8} />
      </RoundedBox>

      {/* Keyboard deck */}
      <RoundedBox
        args={[2.8, 0.02, 1.2]}
        radius={0.02}
        smoothness={2}
        position={[0, 0.055, -0.25]}
      >
        <meshStandardMaterial color="#1a202c" roughness={0.5} />
      </RoundedBox>

      {/* Trackpad */}
      <RoundedBox
        args={[1.1, 0.01, 0.65]}
        radius={0.02}
        smoothness={2}
        position={[0, 0.055, 0.65]}
      >
        <meshStandardMaterial color="#4a5568" roughness={0.2} metalness={0.5} />
      </RoundedBox>

      {/* Hinge */}
      <Cylinder
        args={[0.04, 0.04, 2.9, 16]}
        rotation={[0, 0, Math.PI / 2]}
        position={[0, 0.05, -1.08]}
      >
        <meshStandardMaterial color="#2d3748" metalness={0.9} />
      </Cylinder>

      {/* Screen Lid (tilted at ~105 degrees) */}
      <group position={[0, 0.05, -1.08]} rotation={[-0.256, 0, 0]}>
        <RoundedBox
          args={[3.2, 2.15, 0.06]}
          radius={0.04}
          smoothness={4}
          position={[0, 1.05, 0]}
        >
          <meshStandardMaterial color="#2d3748" roughness={0.3} metalness={0.8} />
        </RoundedBox>

        {/* Screen Bezel */}
        <RoundedBox
          args={[3.12, 2.07, 0.02]}
          radius={0.02}
          smoothness={2}
          position={[0, 1.05, 0.035]}
        >
          <meshStandardMaterial color="#111111" roughness={0.6} />
        </RoundedBox>

        {/* Screen Display Glass */}
        <mesh position={[0, 1.05, 0.048]}>
          <planeGeometry args={[2.95, 1.9]} />
          <meshBasicMaterial color="#111111" />
        </mesh>

        {/* Terminal Screen UI in Laptop */}
        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={1.17}
          position={[0, 1.05, 0.055]}
          scale={[1.1, 1.1, 1.1]}
        >
          <section className="bg-[#1c1c1c] text-xs p-3 text-green-400 w-[28rem] h-[18rem] rounded-md font-mono select-none shadow-2xl flex flex-col justify-between border border-gray-700">
            <div>
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-gray-700">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
                <span className="text-gray-400 text-[10px] ml-2">root@marshmello:~</span>
              </div>
              <div className="leading-relaxed">
                <span className="text-emerald-400">root@marshmello:~$ </span>
                <span className="text-white">firefox https://www.rohith5429.github.io &nbsp;</span>
                <span className="inline-block w-2 h-3.5 bg-gray-200 animate-pulse align-middle" />
              </div>
              <div className="mt-3 text-gray-400 text-[11px] space-y-1">
                <div>&gt; Loading WebGL 3D Portfolio... [OK]</div>
                <div>&gt; Theme: Original Reddish Pink</div>
                <div>&gt; Engineer: Rohith (Mid-Level Frontend & 3D Web)</div>
                <div>&gt; Status: 60 FPS • Interactive</div>
              </div>
            </div>
            <div className="text-[10px] text-gray-500 pt-2 border-t border-gray-800 flex justify-between">
              <span>UNIX • BASH</span>
              <span className="text-rose-400 font-semibold">ROHITH.PORTFOLIO</span>
            </div>
          </section>
        </Html>
      </group>
    </group>
  );
}

const Experience = () => {
  const texture = useLoader(TextureLoader, "./rohith.png");

  return (
    <>
      <Environment preset="city" />
      <Background start={0} end={-0.5} />

      <ambientLight intensity={1.8} />
      <directionalLight position={[4, 6, 5]} intensity={1.8} />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          {/* Original Warm Rect Area Light */}
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color="#ff6900"
            rotation={[-0.1, Math.PI, 0]}
            position={[-2, 0.55, -1.15]}
          />

          {/* 3D Laptop Centerpiece */}
          <LaptopModel />

          {/* Original 3D Typography */}
          <Text
            font="./Adumu.ttf"
            fontSize={0.75}
            position={[1, 0.25, 0.75]}
            rotation-y={-1.25}
            textAlign="center"
            maxWidth={2}
            fillOpacity={0.65}
            color="#ffffff"
          >
            Hi i&apos;m ROHITH
          </Text>
        </Float>

        {/* Profile Image Plane: rohith.png prominently visible in the 3D scene */}
        <mesh
          position={[2.6, 0.2, -0.6]}
          scale={[2.6, 2.6, 2.6]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Plane>
            <meshBasicMaterial map={texture} opacity={0.92} transparent={true} side={THREE.DoubleSide} />
          </Plane>
        </mesh>
      </PresentationControls>

      {/* Original Contact Shadows */}
      <ContactShadows position-y={-1.4} opacity={0.45} scale={5.5} blur={2.4} />
    </>
  );
};

export default Experience;

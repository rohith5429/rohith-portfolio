"use client";

import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, RoundedBox, OrbitControls, useTexture } from "@react-three/drei";
import { personalInfo, stats, skillCategories } from "@/constants";

function TechCube({ position, texturePath, name, onClick, isSelected }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const texture = useTexture(texturePath);

  useFrame((state, delta) => {
    if (meshRef.current) {
      if (hovered || isSelected) {
        meshRef.current.rotation.y += delta * 2.5;
        meshRef.current.rotation.x += delta * 1.5;
      } else {
        meshRef.current.rotation.y += delta * 0.4;
      }
    }
  });

  return (
    <group position={position}>
      <Float
        speed={hovered ? 3 : 1.5}
        rotationIntensity={hovered ? 0.8 : 0.4}
        floatIntensity={hovered ? 0.8 : 0.3}
      >
        <RoundedBox
          ref={meshRef}
          args={[1.2, 1.2, 1.2]}
          radius={0.08}
          smoothness={3}
          onClick={onClick}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = "auto";
          }}
          scale={hovered || isSelected ? 1.15 : 1}
        >
          <meshStandardMaterial
            map={texture}
            roughness={0.25}
            metalness={0.6}
            emissive={hovered || isSelected ? "#ffffff" : "#000000"}
            emissiveIntensity={hovered || isSelected ? 0.25 : 0}
          />
        </RoundedBox>

        <Text
          position={[0, -0.95, 0]}
          fontSize={0.24}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </Float>
    </group>
  );
}

function TechCanvas({ selectedTech, onSelectTech }) {
  const cubeData = [
    { name: "React", path: "/react.png", pos: [-2.6, 1.0, 0] },
    { name: "Three.js", path: "/threeJs.png", pos: [-0.9, 1.0, 0.4] },
    { name: "Next.js", path: "/next.jpeg", pos: [0.9, 1.0, 0.4] },
    { name: "TypeScript", path: "/ts.png", pos: [2.6, 1.0, 0] },
    { name: "JavaScript", path: "/js.png", pos: [-2.6, -1.1, 0] },
    { name: "Konva.js", path: "/konva.jpeg", pos: [-0.9, -1.1, 0.4] },
    { name: "Node.js", path: "/nodeJs.png", pos: [0.9, -1.1, 0.4] },
    { name: "MongoDB", path: "/mongodb.png", pos: [2.6, -1.1, 0] },
  ];

  return (
    <div className="w-full h-[380px] lg:h-[440px] rounded-2xl bg-black/20 backdrop-blur-md relative overflow-hidden border border-white/20 shadow-2xl">
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
        <span className="text-xs font-mono text-white font-semibold tracking-wider uppercase">
          Interactive 3D Tech Stack • Click or Drag to inspect
        </span>
      </div>

      <Canvas camera={{ position: [0, 0, 6.2], fov: 42 }} className="w-full h-full">
        <ambientLight intensity={2} />
        <directionalLight position={[5, 8, 5]} intensity={2.5} color="#ffffff" />
        <pointLight position={[-4, 3, 2]} intensity={2} color="#ffffff" />
        <pointLight position={[4, -3, 2]} intensity={2} color="#ffffff" />

        <Suspense fallback={null}>
          <group position={[0, 0, 0]}>
            {cubeData.map((item) => (
              <TechCube
                key={item.name}
                position={item.pos}
                texturePath={item.path}
                name={item.name}
                isSelected={selectedTech?.name === item.name}
                onClick={() => onSelectTech(item)}
              />
            ))}
          </group>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
          maxAzimuthAngle={Math.PI / 4}
          minAzimuthAngle={-Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}

const Overview = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <section id="overview" className="w-full py-20 px-6 md:px-12 space-y-16">
      <div className="max-w-6xl mx-auto space-y-8 text-center">
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] text-[40px] drop-shadow">
          Overview
        </h2>
        <p className="text-white text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed tracking-wide font-normal">
          I&apos;m a web developer with a passion for blending creativity and technology, driven to continuously improve by mastering the latest tools and delivering modern 3D and frontend solutions.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#953949]/70 backdrop-blur-md border border-white/20 text-center shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-black text-white font-mono">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-rose-100 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3D Tech Stack Canvas */}
      <div id="skills" className="max-w-6xl mx-auto space-y-4">
        <div className="flex justify-between items-center text-white">
          <h3 className="text-2xl font-bold">Tech Stack Matrix</h3>
          {selectedTech && (
            <span className="text-xs font-mono bg-[#953949] px-3 py-1 rounded-full border border-white/30">
              Selected: {selectedTech.name}
            </span>
          )}
        </div>
        <TechCanvas selectedTech={selectedTech} onSelectTech={setSelectedTech} />
      </div>

      {/* Categorized Skills */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 md:p-8 rounded-2xl bg-[#953949]/65 backdrop-blur-md border border-white/20 text-white shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl font-bold">
                {idx === 0 ? "❖" : idx === 1 ? "◫" : "⚡"}
              </div>
              <h4 className="text-xl font-bold">{cat.title}</h4>
              <ul className="space-y-2">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-sm text-rose-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 mt-6 border-t border-white/20 text-xs font-mono text-rose-200 flex justify-between">
              <span>MASTERY</span>
              <span>EXPERT</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;

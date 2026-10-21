"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Loader from "@/components/Loader";
import RotatingText from "@/components/RotatingText";
import Overview from "@/components/Overview";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Allow the 3D canvas and assets to initialize while showing the full-screen SVG loader
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full min-h-screen relative overflow-x-hidden">
      {/* Main initial full-page SVG loader */}
      <Loader isVisible={!isReady} />

      {/* Floating Navigation */}
      <Navbar />

      {/* Hero Section with 3D Canvas */}
      <section className="w-full h-screen relative bg-[#c5999d]">
        <Canvas
          camera={{
            position: [-0.6, 0.1, 5.2],
            fov: 38,
          }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={2} />
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </Canvas>

        {/* Original Circular Rotating Text Scroll Indicator */}
        <RotatingText />
      </section>

      {/* Original Reddish-Pink Gradient Section Wrapper */}
      <div className="bg-gradient-to-r from-rose-100 via-[#c67c82] to-[#b8082d] text-white">
        <Overview />
        <Journey />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;

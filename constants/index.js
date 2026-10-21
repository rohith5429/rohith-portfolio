export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills & 3D Lab",
  },
  {
    id: "journey",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const personalInfo = {
  name: "Rohith V. S",
  role: "Mid-Level Frontend & 3D Web Engineer",
  headline: "Building the Future, One Pixel at a Time",
  subheadline:
    "Architecting high-performance, cinematic 3D web applications, reactive interfaces, and immersive interactive graphics using Three.js, React Three Fiber, WebGL, and Next.js.",
  bio: "Front-end Developer with 3+ years of experience building and maintaining dynamic web applications using Next.js, React, TypeScript, and AngularJS. Skilled in creating scalable, high-performance front-end solutions including GPU-accelerated video platforms, 3D annotation tools, and real-time collaboration systems.",
  availability: "Available for high-impact roles & creative engineering",
  location: "Puducherry, India (Open to Global Remote)",
  email: "rohith.s54321@gmail.com",
  phone: "+91 9361107637",
  github: "https://github.com/rohith5429",
  linkedin: "https://linkedin.com/in/rohith-v-s-596489204",
  instagram: "https://instagram.com/marshmallo_rohith",
  website: "https://rohith.serveo.net",
};

export const stats = [
  { value: "3+ yrs", label: "Professional Experience" },
  { value: "4+", label: "Production Apps Shipped" },
  { value: "WASM", label: "GPU-Accelerated Platforms" },
  { value: "B.Tech", label: "Computer Science (2026)" },
];

export const techStack = [
  { name: "React 18", category: "frontend", icon: "/react.png", level: "Expert" },
  { name: "Next.js 14", category: "frontend", icon: "/next.jpeg", level: "Expert" },
  { name: "Three.js", category: "3d", icon: "/threeJs.png", level: "Expert" },
  { name: "TypeScript", category: "core", icon: "/ts.png", level: "Expert" },
  { name: "JavaScript ES6+", category: "core", icon: "/js.png", level: "Expert" },
  { name: "Konva.js / Canvas", category: "graphics", icon: "/konva.jpeg", level: "Advanced" },
  { name: "Node.js", category: "backend", icon: "/nodeJs.png", level: "Advanced" },
  { name: "MongoDB", category: "backend", icon: "/mongodb.png", level: "Advanced" },
];

export const skillCategories = [
  {
    title: "3D & Interactive Graphics",
    icon: "CubeTransparentIcon",
    skills: [
      "Three.js & React Three Fiber (R3F)",
      "@react-three/drei & GLSL Shaders",
      "WebGL Pipeline & Geometry Instancing",
      "Physics Engines (Rapier / Cannon)",
      "3D Model Optimization & Draco Compression",
      "PBR Lighting, Shadows & Post-processing",
    ],
  },
  {
    title: "Frontend Architecture",
    icon: "ComputerDesktopIcon",
    skills: [
      "Next.js 14 App Router & SSR/SSG",
      "React 18 Concurrent Rendering",
      "TypeScript & Modern JavaScript",
      "Tailwind CSS & Modern Design Systems",
      "Framer Motion & Fluid Micro-interactions",
      "Responsive Layouts & Mobile First Design",
    ],
  },
  {
    title: "Performance & Systems",
    icon: "BoltIcon",
    skills: [
      "Core Web Vitals & Lighthouse 95+",
      "Draw Call Reduction & Shader Profiling",
      "Bundle Size Optimization & Code Splitting",
      "Memory Leak Elimination & Garbage Collection",
      "Node.js Backend & REST/GraphQL APIs",
      "Git, CI/CD & Cloud Deployment Pipelines",
    ],
  },
];

export const experiences = [
  {
    title: "Front-end Web Developer",
    company_name: "Vision-Schematics (Spellbound VFX & Animation Pvt. Ltd)",
    icon: "/logo-scematics.png",
    iconBg: "#ffffff",
    date: "May 2023 – Sep 2026",
    points: [
      "Built Reviewroom — a production-ready GPU-accelerated video collaboration platform using WebAssembly (WASM) and Rust-based real-time sockets. Developed solely through prompt engineering.",
      "Designed and developed the Schematics Segmentation Tool — a canvas-based annotation platform with Next.js, TypeScript, and Konva.js, integrating Three.js for 3D annotation and SAM2 AI Prompt Tools.",
      "Maintained and extended 2DVIEW — a VFX pipeline tool in AngularJS, optimized performance and UI, and built 2DVIEW-connector (Tkinter/Python) linking VFX software to the pipeline.",
      "Built SynthVision — an annotation review platform in React.js with custom Konva.js components for annotation visualization and review.",
    ],
  },
];

export const projects = [
  {
    title: "Reviewroom",
    subtitle: "GPU-Accelerated Video Collaboration Platform",
    description:
      "Production-ready video collaboration platform built with WebAssembly (WASM) for GPU acceleration and Rust-based real-time sockets for low-latency communication. Developed entirely through prompt engineering.",
    tags: ["WebAssembly", "Rust Sockets", "Next.js", "Real-time", "GPU Acceleration"],
    metrics: "GPU Accelerated • Real-time Comms",
    logo: "/logo-reviewroom.png",
    logoBg: "#111111",
    demoUrl: "https://www.reviewroom.studio/",
    githubUrl: "https://github.com/rohith5429",
  },
  {
    title: "Schematics Segmentation Tool",
    subtitle: "Canvas-Based AI Annotation Platform",
    description:
      "Full-featured canvas annotation tool built with Next.js, TypeScript, and Konva.js. Integrates Three.js for 3D annotation and implements SAM2 AI model Prompt Tools for intelligent segmentation.",
    tags: ["Next.js", "TypeScript", "Konva.js", "Three.js", "SAM2 AI"],
    metrics: "AI-Powered • 3D + 2D Annotation",
    logo: "/logo-scematics.png",
    logoBg: "#ffffff",
    demoUrl: "https://scematics.io/",
    githubUrl: "https://github.com/rohith5429",
  },
  {
    title: "2DVIEW",
    subtitle: "VFX Pipeline Management Tool",
    description:
      "Maintained and extended a VFX pipeline tool in AngularJS with performance and UI improvements. Built the 2DVIEW-connector (Tkinter/Python) to seamlessly link VFX software (DCC tools) to the pipeline.",
    tags: ["AngularJS", "Python", "Tkinter", "VFX Pipeline", "Performance"],
    metrics: "Production VFX Studio Tool",
    logo: "/logo-2dview.png",
    logoBg: "#1a1a2e",
    demoUrl: "https://2dview.com/",
    githubUrl: "https://github.com/rohith5429",
  },
  {
    title: "SynthVision",
    subtitle: "Annotation Review & Visualization Platform",
    description:
      "React.js-based annotation review platform with custom Konva.js components for rich annotation visualization and review workflows in production AI/ML data pipelines.",
    tags: ["React.js", "Konva.js", "Canvas API", "Annotation", "AI/ML"],
    metrics: "Production AI Data Pipeline",
    logo: "/logo-synthvision.png",
    logoBg: "#0d0d1a",
    demoUrl: "https://scematics.io/",
    githubUrl: "https://github.com/rohith5429",
  },
];

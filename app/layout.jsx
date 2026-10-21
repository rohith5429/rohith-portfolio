import "./globals.css";

export const metadata = {
  title: "Rohith | Mid-Level Frontend & 3D Web Engineer",
  description: "Portfolio of Rohith - Mid-Level Frontend Engineer, 3D Web Developer, and Interactive Web Architect.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased overflow-x-hidden selection:bg-rose-400 selection:text-white">
        {children}
      </body>
    </html>
  );
}

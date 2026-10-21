"use client";

import React, { useEffect, useState } from "react";

export default function Loader({ isVisible = true, onFinished }) {
  const [shouldRender, setShouldRender] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setFading(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        if (onFinished) onFinished();
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setShouldRender(true);
      setFading(false);
    }
  }, [isVisible, onFinished]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-r from-rose-400 to-red-500 z-[99999] transition-opacity duration-700 select-none ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
    >
      <div className="flex flex-col items-center">
        <svg
          className="loader_svg"
          width="100"
          height="180"
          viewBox="0 0 564 1029"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M331 0L425 46L278 195L136 51L228 2L281 48L331 0ZM564 738L525 805L475 808L545 953L528 987L369 1029L257 822L212 825L209 1009L0 1026V225L524 249L563 288L564 738ZM217 647L353 636L354 412L222 400L217 647Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

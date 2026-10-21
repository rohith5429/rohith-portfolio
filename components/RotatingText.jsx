"use client";

import React from "react";

const RotatingText = () => {
  const handleScroll = () => {
    const el = document.getElementById("overview");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      onClick={handleScroll}
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 select-none"
    >
      <svg id="rotatingText" viewBox="0 0 200 200" width="180" height="180">
        <defs>
          <path
            id="circle"
            d="M 100, 100 m -75, 0 a 75, 75 0 1, 0 150, 0 a 75, 75 0 1, 0 -150, 0"
          />
        </defs>
        <text width="450" fill="#222222">
          <textPath
            alignmentBaseline="top"
            xlinkHref="#circle"
            className="font-bold fill-[#222222] tracking-wide uppercase text-xs"
          >
            Discover - more - below - as - you - scroll •
          </textPath>
        </text>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-8 h-8 top-14 left-14 text-[#222222] animate-bounce absolute"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        />
      </svg>
    </div>
  );
};

export default RotatingText;

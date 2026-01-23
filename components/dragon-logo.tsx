"use client";

import { useEffect, useState } from "react";

export function DragonLogo({ className = "" }: { className?: string }) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div
      className={`relative ${className} ${
        isAnimated ? "animate-scale-in" : "opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 100 100"
        className={`w-full h-full ${isAnimated ? "animate-glow" : ""}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dragon emblem */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="oklch(0.75 0.15 85)"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="oklch(0.55 0.22 25)"
          strokeWidth="1"
          fill="none"
        />

        {/* Stylized Dragon */}
        <path
          d="M30 65 Q35 45 50 35 Q55 33 60 35 Q65 38 68 45 Q72 55 70 60 Q68 65 63 68 L58 70 Q55 72 52 70 L48 68 Q42 65 40 58 Q38 52 40 48"
          stroke="oklch(0.55 0.22 25)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Dragon head detail */}
        <path
          d="M60 35 Q63 32 67 33 Q72 35 73 40 Q72 42 70 43"
          stroke="oklch(0.75 0.15 85)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Dragon eye */}
        <circle cx="65" cy="38" r="2" fill="oklch(0.75 0.15 85)" />

        {/* Flame breath */}
        <path
          d="M73 40 Q78 38 82 42 Q80 45 76 44"
          stroke="oklch(0.55 0.22 25)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Wings */}
        <path
          d="M45 40 Q35 30 30 35 Q28 40 32 45"
          stroke="oklch(0.55 0.22 25)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M48 38 Q40 25 35 28 Q32 32 36 38"
          stroke="oklch(0.55 0.22 25)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Decorative elements */}
        <path
          d="M20 50 L25 50"
          stroke="oklch(0.75 0.15 85)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M75 50 L80 50"
          stroke="oklch(0.75 0.15 85)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M50 20 L50 25"
          stroke="oklch(0.75 0.15 85)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M50 75 L50 80"
          stroke="oklch(0.75 0.15 85)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

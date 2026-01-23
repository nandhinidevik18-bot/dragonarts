"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";
import { Swords, Music, Sparkles, Brain, Languages } from "lucide-react";

export interface Course {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  benefits: string[];
}

const iconMap: Record<string, LucideIcon> = {
  Swords,
  Music,
  Sparkles,
  Brain,
  Languages,
};

export function CourseCard({ course }: { course: Course }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[course.icon] || Sparkles;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Card effect */}
      <div
        className={`relative bg-card border border-border rounded-lg p-6 transition-all duration-500 ${
          isHovered
            ? "transform -translate-y-2 shadow-2xl shadow-primary/20 border-primary/50"
            : "shadow-lg"
        }`}
        style={{
          transform: isHovered
            ? "perspective(1000px) rotateX(2deg) translateY(-8px)"
            : "perspective(1000px) rotateX(0deg)",
        }}
      >
        {/* Category badge */}
        <span className="inline-block px-3 py-1 text-xs tracking-wider bg-secondary text-secondary-foreground rounded-full mb-4">
          {course.category}
        </span>

        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 ${
            isHovered ? "bg-primary/20 scale-110" : ""
          }`}
        >
          <Icon
            className={`w-7 h-7 transition-colors duration-300 ${
              isHovered ? "text-accent" : "text-primary"
            }`}
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-2 tracking-wide">
          {course.name}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 font-serif leading-relaxed">
          {course.description}
        </p>

        {/* Benefits preview */}
        <ul className="space-y-1 mb-6">
          {course.benefits.slice(0, 2).map((benefit) => (
            <li
              key={benefit}
              className="text-xs text-muted-foreground flex items-center gap-2"
            >
              <span className="w-1 h-1 bg-accent rounded-full" />
              {benefit}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          asChild
          variant="outline"
          className={`w-full transition-all duration-300 ${
            isHovered
              ? "bg-primary text-primary-foreground border-primary"
              : "border-border text-foreground"
          }`}
        >
          <Link href={`#trial`}>Learn More</Link>
        </Button>

        {/* Glow effect on hover */}
        <div
          className={`absolute inset-0 rounded-lg transition-opacity duration-500 pointer-events-none ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.55 0.22 25 / 0.1) 0%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}

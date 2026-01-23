"use client";

import { useRef, useEffect, useState } from "react";
import { Swords, Music, Sparkles, Brain, Languages } from "lucide-react";

const categories = [
  {
    icon: Swords,
    title: "Martial Arts",
    courses: ["Karate", "Silambam"],
    description: "Build strength, discipline, and self-defense skills",
    color: "from-red-900/20 to-red-800/10",
  },
  {
    icon: Sparkles,
    title: "Dance",
    courses: ["Bharathanatyam", "Western Dance"],
    description: "Express yourself through classical and contemporary dance",
    color: "from-amber-900/20 to-amber-800/10",
  },
  {
    icon: Music,
    title: "Music",
    courses: ["Vocal", "Keyboard", "Drums", "Flute", "Guitar"],
    description: "Master instruments and discover your musical voice",
    color: "from-emerald-900/20 to-emerald-800/10",
  },
  {
    icon: Brain,
    title: "Intellectual",
    courses: ["Chess", "Abacus"],
    description: "Sharpen your mind with strategic thinking skills",
    color: "from-blue-900/20 to-blue-800/10",
  },
  {
    icon: Languages,
    title: "Language",
    courses: ["Hindi"],
    description: "Expand communication skills and cultural understanding",
    color: "from-purple-900/20 to-purple-800/10",
  },
];

export function CategoriesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-accent tracking-[0.4em] text-sm mb-4">
            WHAT WE TEACH
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore Our Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-serif text-lg">
            A comprehensive range of disciplines designed to develop every
            aspect of your potential.
          </p>
        </div>

        {/* Categories Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ${
                index === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              } ${index === 2 ? "lg:row-span-2" : ""} ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative h-full min-h-[280px] p-8 bg-gradient-to-br ${category.color} border border-border rounded-2xl transition-all duration-500 ${
                  hoveredIndex === index
                    ? "border-primary/50 shadow-2xl shadow-primary/20 -translate-y-2"
                    : ""
                }`}
                style={{
                  transform:
                    hoveredIndex === index
                      ? "perspective(1000px) rotateX(2deg)"
                      : "perspective(1000px) rotateX(0deg)",
                }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-card/50 backdrop-blur flex items-center justify-center mb-6 transition-all duration-500 ${
                    hoveredIndex === index ? "scale-110 bg-primary/20" : ""
                  }`}
                >
                  <category.icon
                    className={`w-8 h-8 transition-colors duration-500 ${
                      hoveredIndex === index ? "text-accent" : "text-primary"
                    }`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground font-serif mb-6">
                  {category.description}
                </p>

                {/* Course Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.courses.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 text-xs bg-card/50 backdrop-blur text-foreground/80 rounded-full border border-border"
                    >
                      {course}
                    </span>
                  ))}
                </div>

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background:
                      "radial-gradient(circle at center, oklch(0.55 0.22 25 / 0.1) 0%, transparent 70%)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

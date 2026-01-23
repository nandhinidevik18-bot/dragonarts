"use client";

import { useState, useRef, useEffect } from "react";
import { CourseCard, type Course } from "./course-card";
import { Button } from "@/components/ui/button";

const courses: Course[] = [
  {
    id: "karate",
    name: "Karate",
    category: "Martial Arts",
    description:
      "Master the ancient art of self-defense with traditional Japanese Karate training.",
    icon: "Swords",
    benefits: [
      "Self-defense skills",
      "Physical fitness",
      "Mental discipline",
      "Belt progression system",
    ],
  },
  {
    id: "silambam",
    name: "Silambam",
    category: "Martial Arts",
    description:
      "Learn the ancient Indian martial art of stick fighting with expert guidance.",
    icon: "Swords",
    benefits: [
      "Traditional combat techniques",
      "Coordination improvement",
      "Cultural heritage",
      "Weapon mastery",
    ],
  },
  {
    id: "bharathanatyam",
    name: "Bharathanatyam",
    category: "Dance",
    description:
      "Experience the classical South Indian dance form with its rich expressions and movements.",
    icon: "Sparkles",
    benefits: [
      "Classical dance training",
      "Cultural appreciation",
      "Stage performance skills",
      "Grace and poise",
    ],
  },
  {
    id: "western-dance",
    name: "Western Dance",
    category: "Dance",
    description:
      "Express yourself through contemporary, hip-hop, and modern dance styles.",
    icon: "Sparkles",
    benefits: [
      "Modern dance techniques",
      "Freestyle expression",
      "Performance skills",
      "Fitness benefits",
    ],
  },
  {
    id: "vocal-music",
    name: "Vocal Music",
    category: "Music",
    description:
      "Develop your singing voice with professional vocal training and technique.",
    icon: "Music",
    benefits: [
      "Voice training",
      "Breathing techniques",
      "Performance confidence",
      "Music theory basics",
    ],
  },
  {
    id: "keyboard",
    name: "Keyboard",
    category: "Music",
    description:
      "Learn to play the keyboard from basics to advanced compositions.",
    icon: "Music",
    benefits: [
      "Instrument proficiency",
      "Music reading skills",
      "Hand coordination",
      "Creative expression",
    ],
  },
  {
    id: "drums",
    name: "Drums",
    category: "Music",
    description:
      "Master rhythm and beats with professional drum instruction.",
    icon: "Music",
    benefits: [
      "Rhythm mastery",
      "Coordination skills",
      "Band performance",
      "Stress relief",
    ],
  },
  {
    id: "flute",
    name: "Flute",
    category: "Music",
    description:
      "Discover the melodious world of flute playing with expert training.",
    icon: "Music",
    benefits: [
      "Wind instrument skills",
      "Breathing control",
      "Melodic understanding",
      "Solo performance",
    ],
  },
  {
    id: "guitar",
    name: "Guitar",
    category: "Music",
    description:
      "Learn acoustic or electric guitar from beginner to advanced levels.",
    icon: "Music",
    benefits: [
      "String mastery",
      "Chord progressions",
      "Songwriting basics",
      "Performance skills",
    ],
  },
  {
    id: "chess",
    name: "Chess",
    category: "Intellectual",
    description:
      "Sharpen your strategic thinking with professional chess training.",
    icon: "Brain",
    benefits: [
      "Strategic thinking",
      "Problem-solving",
      "Concentration",
      "Tournament preparation",
    ],
  },
  {
    id: "abacus",
    name: "Abacus",
    category: "Intellectual",
    description:
      "Develop mental math abilities with traditional abacus techniques.",
    icon: "Brain",
    benefits: [
      "Mental arithmetic",
      "Concentration",
      "Memory enhancement",
      "Quick calculations",
    ],
  },
  {
    id: "hindi",
    name: "Hindi Language",
    category: "Language",
    description:
      "Learn to speak, read, and write Hindi with comprehensive language training.",
    icon: "Languages",
    benefits: [
      "Language proficiency",
      "Reading & writing skills",
      "Cultural understanding",
      "Communication skills",
    ],
  },
];

const categories = [
  "All",
  "Martial Arts",
  "Dance",
  "Music",
  "Intellectual",
  "Language",
];

export function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
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

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />

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
            OUR PROGRAMS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Courses We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-serif text-lg">
            Discover a wide range of disciplines designed to nurture talent,
            build character, and unlock your full potential.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`tracking-wider ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

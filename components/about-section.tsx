"use client";

import { useRef, useEffect, useState } from "react";
import { Target, Users, Trophy, Heart } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Holistic Education",
    description:
      "Combining martial arts, dance, music, academics, and intellectual skill development.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description:
      "Learn from certified professionals with years of experience and passion for teaching.",
  },
  {
    icon: Trophy,
    title: "Proven Excellence",
    description:
      "Our students consistently achieve recognition in competitions and examinations.",
  },
  {
    icon: Heart,
    title: "Character Building",
    description:
      "We focus on discipline, confidence, and values that last a lifetime.",
  },
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-accent tracking-[0.4em] text-sm mb-4">
              ABOUT US
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Building Disciplined,
              <br />
              <span className="text-primary">Confident Individuals</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-serif text-lg leading-relaxed">
              <p>
                DRAGON SCHOOL OF ARTS provides holistic education combining
                martial arts, dance, music, academics, and intellectual skill
                development to build disciplined, confident individuals.
              </p>
              <p>
                Our unique approach nurtures both physical prowess and mental
                acuity, preparing students not just for competitions, but for
                life&apos;s challenges.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {[
                { number: "15+", label: "Courses" },
                { number: "1000+", label: "Students" },
                { number: "10+", label: "Years" },
                { number: "50+", label: "Awards" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center p-4 rounded-lg bg-card/50 border border-border transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <p className="text-2xl md:text-3xl font-bold text-accent">
                    {stat.number}
                  </p>
                  <p className="text-xs text-muted-foreground tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground font-serif leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

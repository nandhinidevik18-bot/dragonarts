"use client";

import { useRef, useEffect, useState } from "react";
import { Quote } from "lucide-react";

export function FounderSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
      id="founder"
      ref={sectionRef}
      className="py-24 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

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
            LEADERSHIP
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Founder
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Founder Image Card */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* 3D floating card effect */}
              <div
                className={`relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden transition-all duration-500 ${
                  isHovered ? "shadow-2xl shadow-primary/30" : "shadow-xl"
                }`}
                style={{
                  transform: isHovered
                    ? "perspective(1000px) rotateY(-5deg) rotateX(5deg) translateY(-10px)"
                    : "perspective(1000px) rotateY(0deg) rotateX(0deg)",
                }}
              >
                {/* Placeholder for founder image */}
                <div className="absolute inset-0 bg-gradient-to-b from-card to-secondary flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary">D</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Founder Photo
                    </p>
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                {/* Decorative border */}
                <div
                  className={`absolute inset-0 border-2 rounded-2xl transition-colors duration-500 ${
                    isHovered ? "border-primary/50" : "border-border"
                  }`}
                />
              </div>

              {/* Floating shadow */}
              <div
                className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/20 rounded-full blur-xl transition-all duration-500 ${
                  isHovered ? "opacity-70 scale-110" : "opacity-40"
                }`}
              />
            </div>
          </div>

          {/* Founder Info */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Founder & Chief Instructor
            </h3>
            <p className="text-accent tracking-wider mb-6">
              DRAGON SCHOOL OF ARTS
            </p>

            <div className="relative mb-8">
              <Quote className="w-10 h-10 text-primary/30 absolute -top-2 -left-2" />
              <p className="text-lg text-muted-foreground font-serif leading-relaxed pl-8">
                Our mission is to nurture the complete individual through the
                harmony of body, mind, and spirit. At Dragon School of Arts, we
                believe that true mastery comes from discipline, dedication, and
                the courage to pursue excellence in all endeavors.
              </p>
            </div>

            <div className="space-y-4 text-foreground/80 font-serif">
              <p>
                With over a decade of experience in martial arts and performing
                arts education, our founder established Dragon School of Arts
                with a vision to create a holistic learning environment.
              </p>
              <p>
                The academy combines traditional wisdom with modern teaching
                methodologies to develop confident, disciplined, and
                well-rounded individuals ready to face life&apos;s challenges.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "1000+", label: "Students Trained" },
                { number: "50+", label: "Awards Won" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-accent">{stat.number}</p>
                  <p className="text-xs text-muted-foreground tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

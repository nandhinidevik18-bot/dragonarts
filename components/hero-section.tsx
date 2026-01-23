"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const arts = [
  {
    name: "Karate",
    image: "/images/arts/karate.jpg",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Silambam",
    image: "/images/arts/silambam.jpg",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Bharatanatyam",
    image: "/images/arts/bharatanatyam.jpg",
    color: "from-rose-500 to-red-600",
  },
  {
    name: "Dance",
    image: "/images/arts/dance.jpg",
    color: "from-purple-500 to-violet-600",
  },
  {
    name: "Music",
    image: "/images/arts/music.jpg",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Chess & Abacus",
    image: "/images/arts/chess.jpg",
    color: "from-slate-600 to-slate-800",
  },
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-gradient-to-b from-rose-50 via-white to-pink-50"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Logo and Title Section */}
        <div className="text-center mb-12">
          {/* Animated Logo */}
          <div
            className={`inline-block mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-white p-2 shadow-2xl border-4 border-rose-200 overflow-hidden">
              <Image
                src="/images/dragon-logo.png"
                alt="Dragon School of Arts"
                width={160}
                height={160}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Bold Animated Title */}
          <div className="overflow-hidden">
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <span className="block text-foreground">THE</span>
              <span className="block bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">
                DRAGON
              </span>
              <span className="block text-foreground">SCHOOL OF ARTS</span>
            </h1>
          </div>

          {/* Tagline */}
          <p
            className={`mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-serif transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Unleash Discipline, Creativity & Power
          </p>

          {/* CTA Button */}
          <div
            className={`mt-8 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white px-10 py-6 text-lg font-bold tracking-wider shadow-lg shadow-rose-500/30 transition-all hover:shadow-xl hover:shadow-rose-500/40"
            >
              <Link href="#trial">Book Free Trial</Link>
            </Button>
          </div>
        </div>

        {/* Arts Grid - Rounded Rectangles */}
        <div
          className={`mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-10">
            Our Disciplines
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {arts.map((art, index) => (
              <div
                key={art.name}
                className="group relative overflow-hidden rounded-3xl aspect-[3/4] shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{
                  animationDelay: `${index * 100 + 800}ms`,
                }}
              >
                {/* Image */}
                <Image
                  src={art.image || "/placeholder.svg"}
                  alt={art.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${art.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 pb-6">
                  <h3 className="text-white font-bold text-sm md:text-base text-center drop-shadow-lg">
                    {art.name}
                  </h3>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/50 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { number: "15+", label: "Courses" },
            { number: "1000+", label: "Students" },
            { number: "10+", label: "Years" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/80 backdrop-blur rounded-2xl shadow-lg border border-rose-100"
            >
              <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
                {stat.number}
              </p>
              <p className="text-sm text-muted-foreground font-medium tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

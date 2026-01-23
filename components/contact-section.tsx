"use client";

import { useRef, useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Dragon Street", "Arts District, City - 600001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 87654 32109"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@dragonschoolofarts.com", "admissions@dragonschoolofarts.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 8:00 AM - 8:00 PM", "Sunday: 9:00 AM - 1:00 PM"],
  },
];

export function ContactSection() {
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
      id="contact"
      ref={sectionRef}
      className="py-24 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

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
            GET IN TOUCH
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-serif text-lg">
            Have questions? We&apos;re here to help. Reach out to us through any
            of the following channels.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2 text-center ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                <info.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {info.title}
              </h3>
              <div className="space-y-1">
                {info.details.map((detail) => (
                  <p
                    key={detail}
                    className="text-sm text-muted-foreground font-serif"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div
          className={`mt-16 rounded-2xl overflow-hidden border border-border transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative h-80 bg-card flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-4" />
              <p className="text-muted-foreground font-serif">
                Interactive map would be displayed here
              </p>
              <p className="text-xs text-muted-foreground/60 mt-2">
                123 Dragon Street, Arts District
              </p>
            </div>
            {/* Decorative grid overlay */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(oklch(0.75 0.15 85 / 0.5) 1px, transparent 1px), 
                                 linear-gradient(90deg, oklch(0.75 0.15 85 / 0.5) 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

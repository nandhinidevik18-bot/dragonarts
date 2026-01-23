"use client";

import React from "react"

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Sparkles } from "lucide-react";

const courses = [
  "Karate",
  "Silambam",
  "Bharathanatyam",
  "Western Dance",
  "Vocal Music",
  "Keyboard",
  "Drums",
  "Flute",
  "Guitar",
  "Chess",
  "Abacus",
  "Hindi Language",
];

export function TrialSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      id="trial"
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-accent tracking-[0.4em] text-sm mb-4">
              START YOUR JOURNEY
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Book Your Free Trial
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-serif text-lg">
              Experience the Dragon School difference. Book a complimentary
              trial class and discover your potential.
            </p>
          </div>

          {/* Form Card */}
          <div
            className={`bg-card border border-border rounded-2xl p-8 md:p-12 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0 shadow-2xl shadow-primary/10"
                : "opacity-0 translate-y-10"
            }`}
          >
            {isSubmitted ? (
              <div className="text-center py-12 animate-scale-in">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Thank You!
                </h3>
                <p className="text-muted-foreground font-serif">
                  We&apos;ve received your request. Our team will contact you
                  within 24 hours to schedule your free trial class.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Book Another Trial
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Student Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="studentName"
                      className={`transition-colors duration-300 ${
                        focusedField === "studentName"
                          ? "text-accent"
                          : "text-foreground"
                      }`}
                    >
                      Student Name
                    </Label>
                    <Input
                      id="studentName"
                      placeholder="Enter student name"
                      required
                      onFocus={() => setFocusedField("studentName")}
                      onBlur={() => setFocusedField(null)}
                      className="bg-background border-border focus:border-primary transition-all duration-300"
                    />
                  </div>

                  {/* Parent Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="parentName"
                      className={`transition-colors duration-300 ${
                        focusedField === "parentName"
                          ? "text-accent"
                          : "text-foreground"
                      }`}
                    >
                      Parent/Guardian Name
                    </Label>
                    <Input
                      id="parentName"
                      placeholder="Enter parent name"
                      required
                      onFocus={() => setFocusedField("parentName")}
                      onBlur={() => setFocusedField(null)}
                      className="bg-background border-border focus:border-primary transition-all duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className={`transition-colors duration-300 ${
                        focusedField === "phone"
                          ? "text-accent"
                          : "text-foreground"
                      }`}
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      required
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className="bg-background border-border focus:border-primary transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className={`transition-colors duration-300 ${
                        focusedField === "email"
                          ? "text-accent"
                          : "text-foreground"
                      }`}
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      required
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="bg-background border-border focus:border-primary transition-all duration-300"
                    />
                  </div>

                  {/* Age */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="age"
                      className={`transition-colors duration-300 ${
                        focusedField === "age"
                          ? "text-accent"
                          : "text-foreground"
                      }`}
                    >
                      Student Age
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Enter age"
                      min="3"
                      max="60"
                      required
                      onFocus={() => setFocusedField("age")}
                      onBlur={() => setFocusedField(null)}
                      className="bg-background border-border focus:border-primary transition-all duration-300"
                    />
                  </div>

                  {/* Course Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="course">Interested Course</Label>
                    <Select required>
                      <SelectTrigger className="bg-background border-border focus:border-primary">
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {courses.map((course) => (
                          <SelectItem key={course} value={course.toLowerCase()}>
                            {course}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg tracking-wider animate-pulse-glow"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Free Trial Class
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  By submitting, you agree to our terms and privacy policy.
                  We&apos;ll never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

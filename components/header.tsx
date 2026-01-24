"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SettingsPanel } from "@/components/settings-panel";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#founder", label: "Founder" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center group">
            <div className="w-14 h-14 rounded-full bg-white p-1 shadow-md border border-border transition-transform duration-300 group-hover:scale-105 overflow-hidden flex items-center justify-center">
              <Image
                src="/images/dragon-logo.png"
                alt="Dragon School of Arts"
                width={48}
                height={48}
                className="w-full h-full object-contain rounded-full"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wider text-foreground/80 hover:text-accent transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 tracking-wider"
            >
              <Link href="#trial">Book Free Trial</Link>
            </Button>
            <SettingsPanel />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wider text-foreground/80 hover:text-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2"
            >
              <Link href="#trial" onClick={() => setIsMobileMenuOpen(false)}>
                Book Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

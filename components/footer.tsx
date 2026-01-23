"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#courses", label: "Courses" },
  { href: "#founder", label: "Our Founder" },
  { href: "#trial", label: "Free Trial" },
  { href: "#contact", label: "Contact" },
];

const courseLinks = [
  { href: "#courses", label: "Karate" },
  { href: "#courses", label: "Silambam" },
  { href: "#courses", label: "Bharathanatyam" },
  { href: "#courses", label: "Western Dance" },
  { href: "#courses", label: "Music" },
  { href: "#courses", label: "Chess & Abacus" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="inline-block mb-6">
              <div className="w-18 h-18 rounded-full bg-white p-1.5 shadow-md border border-border overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/dragon-logo.png"
                  alt="Dragon School of Arts"
                  width={72}
                  height={72}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </Link>
            <p className="text-muted-foreground font-serif text-sm leading-relaxed mb-6">
              Building disciplined, confident individuals through holistic
              education in martial arts, dance, music, and academics.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold tracking-wider mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm font-serif"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-foreground font-bold tracking-wider mb-6">
              OUR COURSES
            </h4>
            <ul className="space-y-3">
              {courseLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm font-serif"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-bold tracking-wider mb-6">
              CONTACT INFO
            </h4>
            <ul className="space-y-4 text-sm font-serif text-muted-foreground">
              <li>
                <p className="text-foreground font-sans text-xs tracking-wider mb-1">
                  ADDRESS
                </p>
                123 Dragon Street, Arts District
                <br />
                City - 600001
              </li>
              <li>
                <p className="text-foreground font-sans text-xs tracking-wider mb-1">
                  PHONE
                </p>
                +91 98765 43210
              </li>
              <li>
                <p className="text-foreground font-sans text-xs tracking-wider mb-1">
                  EMAIL
                </p>
                info@dragonschoolofarts.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2024 Dragon School of Arts. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

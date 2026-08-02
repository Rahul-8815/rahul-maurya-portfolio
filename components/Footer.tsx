"use client";

import React from "react";
import { Mail, Code, Heart } from "lucide-react";
import { Github, Linkedin } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 border-t border-[var(--border)] bg-[var(--card)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
            style={{
              background: "linear-gradient(135deg, var(--gold), #b45309)",
            }}
          >
            RM
          </span>
          <span className="text-sm font-semibold text-[var(--foreground)]">
            Rahul Maurya
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-xs text-[var(--muted-foreground)]">
          <a href="#about" className="hover:text-[var(--gold)] transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-[var(--gold)] transition-colors">
            Skills
          </a>
          <a href="#experience" className="hover:text-[var(--gold)] transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-[var(--gold)] transition-colors">
            Projects
          </a>
          <a href="#achievements" className="hover:text-[var(--gold)] transition-colors">
            Achievements
          </a>
          <a href="#contact" className="hover:text-[var(--gold)] transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons & Links */}
        <div className="flex items-center gap-4 text-[var(--muted-foreground)]">
          <a
            href="mailto:mrahul20660319@gmail.com"
            aria-label="Email"
            className="hover:text-[var(--gold)] transition-colors"
            title="mrahul20660319@gmail.com"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-maurya-rahulmaurya/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[var(--gold)] transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Rahul-8815"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-[var(--gold)] transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://leetcode.com/u/Rahulmaurya9580/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="hover:text-[var(--gold)] transition-colors"
            title="LeetCode Profile (250+ Solved)"
          >
            <Code className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-[var(--border)] text-center text-xs text-[var(--muted-foreground)] flex items-center justify-center gap-1">
        <span>Crafted with</span>
        <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500 inline" />
        <span>for Rahul Maurya using Next.js & Tailwind CSS</span>
      </div>
    </footer>
  );
}


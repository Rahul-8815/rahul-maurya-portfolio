"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Download, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 ${
        scrolled
          ? "border-b border-[var(--border)] shadow-md"
          : ""
      }`}
      style={{
        background: "var(--navbar-bg)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Initials */}
        <a
          href="#"
          className="font-extrabold text-2xl tracking-tight flex items-center gap-1 group"
        >
          <span
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow-lg transition-transform group-hover:scale-105"
            style={{
              background: "linear-gradient(135deg, var(--gold), #b45309)",
            }}
          >
            RM
          </span>
          <span className="hidden sm:inline-block ml-2 text-base font-semibold tracking-wide text-[var(--foreground)]">
            Rahul <span style={{ color: "var(--gold)" }}>Maurya</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-[var(--muted-foreground)] hover:text-[var(--gold)] transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200 cursor-pointer"
            aria-label="Toggle Theme"
            title="Toggle Light/Dark Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Download Resume Button */}
          <a
            href="/RAHUL-RESUME.pdf"
            download="Rahul_Maurya_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-xs md:text-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-200 flex items-center gap-2 shadow-sm hover:opacity-90 hover:scale-[1.02] text-white"
            style={{
              background: "linear-gradient(135deg, var(--gold), #d97706)",
              boxShadow: "0 2px 10px var(--gold-glow)",
            }}
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[var(--border)] text-[var(--foreground)]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden mt-3 pt-4 pb-6 px-4 rounded-2xl border border-[var(--border)] space-y-3 animate-fade-in"
          style={{ background: "var(--card)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg text-sm font-medium text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

"use client";

import React from "react";
import { Mail, Code, ArrowRight, Sparkles, MapPin, CheckCircle2, Download } from "lucide-react";
import { Github, Linkedin } from "@/components/SocialIcons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 flex items-center min-h-[92vh] max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-12 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/4 right-10 w-80 h-80 rounded-full pointer-events-none animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, var(--gold-glow) 0%, transparent 70%)",
        }}
      />

      <div className="grid md:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column Text Content */}
        <div className="md:col-span-7 space-y-6 animate-fade-in">
          {/* Availability Pill */}
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full border border-[var(--border)] shadow-sm"
            style={{
              background: "var(--accent)",
              color: "var(--gold)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Available for Internships & Software Engineer Roles</span>
          </div>

          <p className="text-lg font-semibold text-[var(--gold)]">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.08] tracking-tight text-[var(--foreground)]">
            Rahul <span style={{ color: "var(--gold)" }}>Maurya</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-[var(--muted-foreground)]">
            Full Stack Developer <span className="text-[var(--gold)]">|</span> MERN Stack <span className="text-[var(--gold)]">|</span> AI Integration Enthusiast
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-[var(--muted-foreground)] max-w-2xl">
            Aspiring Software Engineer skilled in the <strong className="text-[var(--foreground)]">MERN stack (MongoDB, Express.js, React.js, Node.js)</strong> with hands-on experience designing and deploying AI-integrated web applications. Proficient in JavaScript, TypeScript, Next.js, and Tailwind CSS, with a strong foundation in DSA (<strong className="text-[var(--gold)]">250+ LeetCode problems solved</strong>).
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="font-bold text-sm px-7 py-3.5 rounded-full text-white transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 shadow-lg"
              style={{
                background: "linear-gradient(135deg, var(--gold), #b45309)",
                boxShadow: "0 4px 20px var(--gold-glow)",
              }}
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/RAHUL-RESUME.pdf"
              download="Rahul_Maurya_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-sm px-6 py-3.5 rounded-full text-[var(--foreground)] border border-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 shadow-sm group"
            >
              <Download className="w-4 h-4 text-[var(--gold)] group-hover:text-white transition-colors" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="font-semibold text-sm px-6 py-3.5 rounded-full text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--gold)] transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "transparent" }}
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4 text-[var(--muted-foreground)]">
            <a
              href="mailto:mrahul20660319@gmail.com"
              aria-label="Email"
              className="p-3 rounded-full border border-[var(--border)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200 hover:-translate-y-0.5"
              title="Email: mrahul20660319@gmail.com"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/rahul-maurya-rahulmaurya/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full border border-[var(--border)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200 hover:-translate-y-0.5"
              title="LinkedIn: rahul-maurya-rahulmaurya"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/Rahul-8815"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full border border-[var(--border)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200 hover:-translate-y-0.5"
              title="GitHub: Rahul-8815"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://leetcode.com/u/Rahulmaurya9580/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="p-3 rounded-full border border-[var(--border)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200 hover:-translate-y-0.5"
              title="LeetCode: Rahulmaurya9580 (250+ Solved)"
            >
              <Code className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column Interactive Visual Profile Card */}
        <div className="md:col-span-5 hidden md:block">
          <div
            className="p-6 rounded-3xl border border-[var(--border)] shadow-2xl animate-float space-y-5"
            style={{
              background: "var(--card)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Window header */}
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-[var(--muted-foreground)]">
                rahul_maurya.ts
              </span>
            </div>

            {/* Profile Avatar Card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-[var(--border)]" style={{ background: "var(--accent)" }}>
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[var(--gold)] shrink-0 shadow-md">
                <img
                  src="/WhatsApp Image 2026-07-29 at 10.32.29 PM.jpeg"
                  alt="Rahul Maurya"
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-900 shadow-sm" title="Available for Work" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[var(--foreground)] flex items-center gap-1.5">
                  <span>Rahul Maurya</span>
                  <CheckCircle2 className="w-4 h-4 text-[var(--gold)]" />
                </h3>
                <p className="text-xs text-[var(--muted-foreground)]">B.Tech IT (2023–2027)</p>
                <p className="text-xs font-semibold text-[var(--gold)] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" />
                  <span>Ghaziabad, UP</span>
                </p>
              </div>
            </div>

            {/* Code Snippet Config */}
            <div className="p-4 rounded-xl border border-[var(--border)] font-mono text-xs space-y-2 text-[var(--muted-foreground)]" style={{ background: "rgba(0, 0, 0, 0.2)" }}>
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-yellow-400">developer</span> = &#123;
              </p>
              <p className="pl-4">
                role: <span className="text-emerald-400">&apos;Full Stack MERN Developer&apos;</span>,
              </p>
              <p className="pl-4">
                college: <span className="text-emerald-400">&apos;IMS Engineering College&apos;</span>,
              </p>
              <p className="pl-4">
                leetcode: <span className="text-amber-400">250</span> <span className="text-slate-500">// problems solved</span>,
              </p>
              <p className="pl-4">
                coreStack: [<span className="text-emerald-400">&apos;MongoDB&apos;</span>, <span className="text-emerald-400">&apos;Express&apos;</span>, <span className="text-emerald-400">&apos;React&apos;</span>, <span className="text-emerald-400">&apos;Node&apos;</span>],
              </p>
              <p className="pl-4">
                aiTech: [<span className="text-emerald-400">&apos;OpenAI API&apos;</span>, <span className="text-emerald-400">&apos;Clipdrop AI&apos;</span>],
              </p>
              <p className="pl-4">
                openToWork: <span className="text-blue-400">true</span>
              </p>
              <p>&#125;;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


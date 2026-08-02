"use client";

import React from "react";
import { ExternalLink, Sparkles, HeartHandshake, Image as ImageIcon, Wand2 } from "lucide-react";
import { Github } from "@/components/SocialIcons";

export default function Projects() {
  const projects = [
    {
      featured: true,
      title: "ECHO — Open-Access Mental Health Platform",
      subtitle: "Mental Wellness & AI Companion Platform",
      icon: HeartHandshake,
      badge: "Featured Sanctuary",
      description:
        "ECHO is a mental wellness and emotional support web application providing users with a safe and interactive platform to monitor their mood, chat with an AI-inspired companion, explore motivational content, and access relaxation resources through a modern, responsive user interface.",
      highlights: [
        "Designed and developed using React.js, Vite, Tailwind CSS, and React Router",
        "Incorporated real-time mood tracking & AI-inspired conversational companion",
        "Reusable React component design with single-page application (SPA) architecture & Git version control",
      ],
      tags: ["React.js", "Vite", "Tailwind CSS", "React Router", "AI Companion", "SPA"],
      liveUrl: "https://github.com/Rahul-8815",
      githubUrl: "https://github.com/Rahul-8815",
    },
    {
      featured: false,
      title: "Imagify — AI Image Analyzer",
      subtitle: "Content Recognition & Clipdrop AI",
      icon: ImageIcon,
      badge: "AI & Authentication",
      description:
        "Built an AI-powered image analysis application using React.js and Clerk authentication, integrating the Clipdrop AI API via asynchronous calls for real-time content recognition.",
      highlights: [
        "Clipdrop AI API integration via asynchronous fetch calls",
        "Clerk Authentication for secure user sessions",
        "Implemented React Router and Context API for seamless single-page user experience",
      ],
      tags: ["React.js", "Clerk Auth", "Clipdrop AI API", "Context API", "React Router"],
      liveUrl: "https://github.com/Rahul-8815",
      githubUrl: "https://github.com/Rahul-8815",
    },
    {
      featured: false,
      title: "AI Image Generator",
      subtitle: "Full-Stack MERN + OpenAI API + Cloudinary",
      icon: Wand2,
      badge: "MERN Stack + OpenAI",
      description:
        "Engineered a full-stack MERN application integrated with the OpenAI API, enabling text-to-image generation with metadata persistence through a custom RESTful backend.",
      highlights: [
        "OpenAI API text-to-image generation with RESTful Express backend",
        "Cloudinary integration for optimized image storage & real-time asset rendering",
        "Responsive community showcase feed built with React.js and Tailwind CSS",
      ],
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "OpenAI API", "Cloudinary", "Tailwind CSS"],
      liveUrl: "https://github.com/Rahul-8815",
      githubUrl: "https://github.com/Rahul-8815",
    },
  ];

  return (
    <section
      id="projects"
      className="relative z-10 py-16 md:py-24 border-t border-[var(--border)]"
      style={{
        background: "linear-gradient(180deg, transparent, var(--bg-glow) 50%, transparent)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)] mb-2">
          What I&apos;ve Built
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mb-3">
          Featured <span style={{ color: "var(--gold)" }}>Projects</span>
        </h2>
        <p className="text-base text-[var(--muted-foreground)] max-w-2xl mb-4">
          A showcase of full-stack MERN applications, AI integrations, and responsive web platforms built by Rahul Maurya.
        </p>
        <div
          className="w-16 h-1 rounded-full mb-12"
          style={{ background: "var(--gold)" }}
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className={`project-card relative rounded-3xl p-7 border border-[var(--border)] flex flex-col justify-between overflow-hidden ${
                  project.featured ? "md:col-span-2" : ""
                }`}
                style={{
                  background: project.featured
                    ? "linear-gradient(135deg, var(--featured-bg-start), var(--featured-bg-end))"
                    : "var(--card)",
                  borderColor: project.featured ? "var(--featured-border)" : "var(--border)",
                }}
              >
                <div className="space-y-4">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div
                      className="p-3 rounded-2xl border border-[var(--border)]"
                      style={{ background: "var(--accent)" }}
                    >
                      <Icon className="w-6 h-6 text-[var(--gold)]" />
                    </div>

                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full border border-[var(--border)]"
                      style={{
                        background: "var(--accent)",
                        color: "var(--gold)",
                      }}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--foreground)]">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-[var(--gold)] mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-2">
                    {project.highlights.map((hl, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2 text-xs text-[var(--foreground)]"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[var(--gold)] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tags & Action Links */}
                <div className="pt-6 mt-6 border-t border-[var(--border)] space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium px-3 py-1 rounded-full border border-[var(--border)] text-[var(--foreground)]"
                        style={{ background: "var(--card-hover)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-5 pt-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Code</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


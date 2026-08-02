"use client";

import React from "react";
import { Code, Terminal, Database, ShieldCheck, Cpu, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", level: "Proficient", icon: "⚡" },
        { name: "TypeScript", level: "Proficient", icon: "🔷" },
        { name: "Python", level: "Intermediate", icon: "🐍" },
        { name: "Java", level: "Intermediate", icon: "☕" },
        { name: "C", level: "Core", icon: "🔧" },
      ],
    },
    {
      title: "Web Technologies",
      icon: Terminal,
      skills: [
        { name: "React.js", level: "Advanced", icon: "⚛️" },
        { name: "Next.js", level: "Proficient", icon: "▲" },
        { name: "Node.js", level: "Advanced", icon: "🟢" },
        { name: "Express.js", level: "Advanced", icon: "🚀" },
        { name: "Tailwind CSS", level: "Proficient", icon: "🎨" },
        { name: "HTML5 & CSS3", level: "Proficient", icon: "🌐" },
      ],
    },
    {
      title: "Databases & APIs",
      icon: Database,
      skills: [
        { name: "MongoDB", level: "Advanced", icon: "🍃" },
        { name: "MySQL", level: "Intermediate", icon: "🐬" },
        { name: "REST APIs", level: "Advanced", icon: "🔄" },
      ],
    },
    {
      title: "API & Security",
      icon: ShieldCheck,
      skills: [
        { name: "JWT Auth", level: "Implementation", icon: "🔐" },
        { name: "API Integration", level: "Hands-on", icon: "🔌" },
        { name: "Prompt Engineering", level: "AI Skills", icon: "💡" },
        { name: "OpenAI API", level: "Integration", icon: "🧠" },
        { name: "Clipdrop AI", level: "Integration", icon: "📸" },
      ],
    },
    {
      title: "Core CS Concepts",
      icon: Cpu,
      skills: [
        { name: "Data Structures & Algorithms", level: "250+ Solved", icon: "📊" },
        { name: "Operating Systems", level: "Core Concept", icon: "💻" },
        { name: "DBMS", level: "Core Concept", icon: "🗄️" },
        { name: "Object-Oriented Programming", level: "Core Concept", icon: "🧩" },
        { name: "Computer Networks", level: "Core Concept", icon: "📡" },
      ],
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", level: "Version Control", icon: "📦" },
        { name: "VS Code", level: "IDE", icon: "📝" },
        { name: "Vercel", level: "Deployment", icon: "▲" },
        { name: "Postman", level: "API Testing", icon: "🚀" },
        { name: "Cloudinary", level: "Media Cloud", icon: "☁️" },
        { name: "claude.ai", level: "AI Assistance", icon: "✨" },
        { name: "Antigravity", level: "AI Development", icon: "🤖" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative z-10 py-16 md:py-24 border-t border-[var(--border)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)] mb-2">
          What I Know
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mb-3">
          Technical <span style={{ color: "var(--gold)" }}>Skills</span>
        </h2>
        <div
          className="w-16 h-1 rounded-full mb-12"
          style={{ background: "var(--gold)" }}
        />

        {/* Skill Category Sections */}
        <div className="space-y-12">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-2.5 text-sm font-bold tracking-wider uppercase text-[var(--muted-foreground)]">
                  <Icon className="w-4 h-4 text-[var(--gold)]" />
                  <span>{category.title}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="skill-card p-4 rounded-xl border border-[var(--border)] flex items-center gap-3 cursor-default"
                      style={{ background: "var(--card)" }}
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <div>
                        <h3 className="text-sm font-semibold text-[var(--foreground)]">
                          {skill.name}
                        </h3>
                        <p className="text-[11px] text-[var(--muted-foreground)]">
                          {skill.level}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


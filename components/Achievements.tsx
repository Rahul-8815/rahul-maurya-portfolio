"use client";

import React from "react";
import { Trophy, Code2, Award, CheckCircle2, ExternalLink } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "LeetCode 250+ DSA Solved",
      subtitle: "Data Structures & Algorithms Mastery",
      description:
        "Solved 250+ Data Structures & Algorithms problems across arrays, trees, dynamic programming, graphs, and strings on LeetCode. Active participant in coding contests.",
      link: "https://leetcode.com/u/Rahulmaurya9580/",
      linkText: "View LeetCode Profile",
    },
    {
      icon: Code2,
      title: "4 Full-Stack MERN & AI Apps",
      subtitle: "Production-ready Web Platforms",
      description:
        "Designed and deployed 4 full-stack MERN applications incorporating AI services (OpenAI API, Clipdrop AI), Clerk Authentication, and Cloudinary media storage.",
      link: "https://github.com/Rahul-8815",
      linkText: "View GitHub Repositories",
    },
    {
      icon: Award,
      title: "System Design & Community",
      subtitle: "Continuous Engineering Excellence",
      description:
        "Continuously building real-world full-stack projects to strengthen system design, production engineering, and collaborative version control workflows.",
      link: "https://www.linkedin.com/in/rahul-maurya-rahulmaurya/",
      linkText: "Connect on LinkedIn",
    },
  ];

  return (
    <section
      id="achievements"
      className="relative z-10 py-16 md:py-24 border-t border-[var(--border)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)] mb-2">
          Recognition
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mb-3">
          Achievements & <span style={{ color: "var(--gold)" }}>Certifications</span>
        </h2>
        <div
          className="w-16 h-1 rounded-full mb-12"
          style={{ background: "var(--gold)" }}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-[var(--border)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)]"
                style={{ background: "var(--card)" }}
              >
                <div className="space-y-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border border-[var(--border)]"
                    style={{ background: "var(--accent)" }}
                  >
                    <Icon className="w-6 h-6 text-[var(--gold)]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[var(--gold)] mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 mt-4 border-t border-[var(--border)] text-xs text-[var(--gold)] font-semibold">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified</span>
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:underline text-xs"
                  >
                    <span>{item.linkText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


"use client";

import React from "react";
import { Award, Trophy, GraduationCap, Code2, ExternalLink } from "lucide-react";

export default function About() {
  const stats = [
    { label: "LeetCode Problems", value: "250+", icon: Trophy, link: "https://leetcode.com/u/Rahulmaurya9580/" },
    { label: "Full-Stack Apps", value: "4+", icon: Code2, link: "#projects" },
    { label: "Current Education", value: "B.Tech IT", icon: GraduationCap, link: null },
    { label: "Graduation Year", value: "2027", icon: Award, link: null },
  ];

  return (
    <section
      id="about"
      className="relative z-10 py-16 md:py-24 border-t border-[var(--border)]"
      style={{
        background: "linear-gradient(180deg, transparent, var(--bg-glow) 50%, transparent)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)] mb-2">
          Who I Am
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mb-3">
          About <span style={{ color: "var(--gold)" }}>Me</span>
        </h2>
        <div
          className="w-16 h-1 rounded-full mb-10"
          style={{ background: "var(--gold)" }}
        />

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Detailed Narrative */}
          <div className="md:col-span-7 space-y-5 text-[var(--muted-foreground)] leading-relaxed">
            <p className="text-base md:text-lg">
              I am an aspiring <strong className="text-[var(--foreground)]">Software Engineer</strong> pursuing a <strong className="text-[var(--foreground)]">Bachelor of Technology in Information Technology (2023 – 2027 Expected)</strong> at IMS Engineering College, Ghaziabad.
            </p>

            <p className="text-base">
              My expertise lies in full-stack web engineering using the <strong className="text-[var(--foreground)]">MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong> alongside modern frontend architecture with Next.js and Tailwind CSS. I have hands-on experience designing and deploying 4+ AI-integrated web platforms incorporating technologies like the <strong className="text-[var(--foreground)]">OpenAI API, Clipdrop AI, Cloudinary, and Clerk Authentication</strong>.
            </p>

            <p className="text-base">
              I am deeply passionate about core computer science concepts, problem-solving, and building performant systems. Having solved <strong className="text-[var(--foreground)]">250+ Data Structures & Algorithms problems on LeetCode</strong> and actively participating in coding contests, I am actively seeking Software Engineer internships and full-time positions.
            </p>

            {/* Academic & Technical Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div
                className="p-5 rounded-2xl border border-[var(--border)]"
                style={{ background: "var(--card)" }}
              >
                <div className="flex items-center gap-2.5 text-[var(--gold)] font-bold text-sm mb-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Education</span>
                </div>
                <h4 className="font-semibold text-[var(--foreground)] text-sm">
                  B.Tech in Information Technology
                </h4>
                <p className="text-xs text-[var(--muted-foreground)] mt-1">
                  IMS Engineering College, Ghaziabad (2023 – 2027 Expected)
                </p>
              </div>

              <div
                className="p-5 rounded-2xl border border-[var(--border)]"
                style={{ background: "var(--card)" }}
              >
                <div className="flex items-center gap-2.5 text-[var(--gold)] font-bold text-sm mb-2">
                  <Trophy className="w-5 h-5" />
                  <span>Problem Solving</span>
                </div>
                <h4 className="font-semibold text-[var(--foreground)] text-sm flex items-center justify-between">
                  <span>250+ DSA Solved</span>
                  <a
                    href="https://leetcode.com/u/Rahulmaurya9580/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--gold)] hover:underline flex items-center gap-1 text-xs"
                  >
                    <span>LeetCode</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </h4>
                <p className="text-xs text-[var(--muted-foreground)] mt-1">
                  Active participant in coding contests & developer forums
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stat Cards & Profile Photo */}
          <div className="md:col-span-5 space-y-4">
            {/* Profile Photo Card */}
            <div
              className="p-4 rounded-3xl border border-[var(--border)] flex items-center gap-4 shadow-sm hover:border-[var(--gold)] transition-all duration-300"
              style={{ background: "var(--card)" }}
            >
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-[var(--gold)] shrink-0 shadow-md">
                <img
                  src="/WhatsApp Image 2026-07-29 at 10.32.29 PM.jpeg"
                  alt="Rahul Maurya"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-[var(--foreground)]">
                  Rahul Maurya
                </h3>
                <p className="text-xs text-[var(--gold)] font-semibold">
                  MERN Stack & AI Application Developer
                </p>
                <p className="text-xs text-[var(--muted-foreground)]">
                  B.Tech IT (2023 – 2027) • IMS Engineering College
                </p>
              </div>
            </div>

            {/* Quick Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              const CardContent = (
                <div
                  className="stat-card p-6 rounded-2xl border border-[var(--border)] text-center flex flex-col items-center justify-center space-y-2 h-full hover:border-[var(--gold)]"
                  style={{ background: "var(--card)" }}
                >
                  <div
                    className="p-3 rounded-full mb-1"
                    style={{ background: "var(--accent)" }}
                  >
                    <Icon className="w-6 h-6 text-[var(--gold)]" />
                  </div>
                  <div
                    className="text-3xl md:text-4xl font-extrabold tracking-tight"
                    style={{ color: "var(--gold)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold tracking-wider uppercase text-[var(--muted-foreground)]">
                    {stat.label}
                  </div>
                </div>
              );

              return stat.link ? (
                <a key={idx} href={stat.link} target={stat.link.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" className="block">
                  {CardContent}
                </a>
              ) : (
                <div key={idx}>{CardContent}</div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


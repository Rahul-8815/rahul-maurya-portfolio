"use client";

import React from "react";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Full Stack Developer",
      organization: "MERN Stack & AI Application Engineering",
      location: "Ghaziabad, Uttar Pradesh",
      period: "2023 – Present",
      bullets: [
        "Designed and deployed 4 full-stack MERN applications using React.js, Node.js, Express.js, and MongoDB with responsive UI and secure authentication.",
        "Integrated OpenAI, Cloudinary, Clerk Authentication, and REST APIs to implement AI-powered image generation, authentication, and media management.",
        "Developed responsive user interfaces using React.js, Next.js, and Tailwind CSS, improving usability across desktop and mobile devices.",
        "Used Git and GitHub for version control, pull requests, and collaborative development workflows.",
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Next.js", "Tailwind CSS", "OpenAI API", "Clerk Auth", "Cloudinary"],
    },
    {
      type: "education",
      title: "Bachelor of Technology in Information Technology",
      organization: "IMS Engineering College, Ghaziabad",
      location: "Ghaziabad, Uttar Pradesh",
      period: "2023 – 2027 (Expected)",
      bullets: [
        "Pursuing degree coursework in Data Structures & Algorithms, Operating Systems, DBMS, Object-Oriented Programming, and Computer Networks.",
        "Solved 250+ Data Structures & Algorithms problems on LeetCode; active participant in coding contests and technical communities.",
        "Continuously building real-world full-stack projects to strengthen system design and production-engineering skills.",
      ],
      tags: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "OOP", "Computer Networks", "LeetCode 250+"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative z-10 py-16 md:py-24 border-t border-[var(--border)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)] mb-2">
          Background
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mb-3">
          Experience & <span style={{ color: "var(--gold)" }}>Education</span>
        </h2>
        <div
          className="w-16 h-1 rounded-full mb-12"
          style={{ background: "var(--gold)" }}
        />

        {/* Timeline Container */}
        <div className="timeline max-w-4xl space-y-12">
          {experiences.map((item, idx) => (
            <div key={idx} className="timeline-item relative">
              <div className="timeline-dot" />

              <div
                className="p-6 md:p-8 rounded-2xl border border-[var(--border)] shadow-sm space-y-4"
                style={{ background: "var(--card)" }}
              >
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--gold)]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)]">
                    <MapPin className="w-3.5 h-3.5 text-[var(--gold)]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] flex items-center gap-2">
                    {item.type === "work" ? (
                      <Briefcase className="w-5 h-5 text-[var(--gold)] inline-block" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-[var(--gold)] inline-block" />
                    )}
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-sm font-semibold text-[var(--gold)] mt-0.5">
                    {item.organization}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-sm text-[var(--muted-foreground)] list-disc list-inside">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium px-3 py-1 rounded-full border border-[var(--border)] text-[var(--foreground)]"
                      style={{ background: "var(--accent)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


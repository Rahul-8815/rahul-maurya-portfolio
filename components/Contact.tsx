"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, Code, Download } from "lucide-react";
import { Github, Linkedin } from "@/components/SocialIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative z-10 py-16 md:py-24 border-t border-[var(--border)]"
      style={{
        background: "linear-gradient(180deg, transparent, var(--bg-glow) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)] mb-2">
          Get In Touch
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mb-3">
          Contact <span style={{ color: "var(--gold)" }}>Me</span>
        </h2>
        <p className="text-base text-[var(--muted-foreground)] max-w-xl mb-4">
          Feel free to reach out for internship opportunities, full-time software engineering roles, or technical collaborations!
        </p>
        <div
          className="w-16 h-1 rounded-full mb-12"
          style={{ background: "var(--gold)" }}
        />

        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Left Side Info Cards */}
          <div className="md:col-span-5 space-y-6">
            <div
              className="p-6 rounded-3xl border border-[var(--border)] space-y-6"
              style={{ background: "var(--card)" }}
            >
              <h3 className="text-xl font-bold text-[var(--foreground)]">
                Contact Details
              </h3>

              {/* Email */}
              <a
                href="mailto:mrahul20660319@gmail.com"
                className="flex items-start gap-4 p-3.5 rounded-2xl border border-[var(--border)] hover:border-[var(--gold)] transition-all duration-200"
              >
                <div
                  className="p-2.5 rounded-xl text-[var(--gold)]"
                  style={{ background: "var(--accent)" }}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-[var(--foreground)] mt-0.5 break-all">
                    mrahul20660319@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919580015891"
                className="flex items-start gap-4 p-3.5 rounded-2xl border border-[var(--border)] hover:border-[var(--gold)] transition-all duration-200"
              >
                <div
                  className="p-2.5 rounded-xl text-[var(--gold)]"
                  style={{ background: "var(--accent)" }}
                >
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-sm font-semibold text-[var(--foreground)] mt-0.5">
                    +91-9580015891
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl border border-[var(--border)]">
                <div
                  className="p-2.5 rounded-xl text-[var(--gold)]"
                  style={{ background: "var(--accent)" }}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-[var(--foreground)] mt-0.5">
                    Ghaziabad, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* Resume Download */}
              <a
                href="/RAHUL-RESUME.pdf"
                download="Rahul_Maurya_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-3.5 rounded-2xl border border-[var(--gold)] hover:bg-[var(--accent)] transition-all duration-200 group"
              >
                <div
                  className="p-2.5 rounded-xl text-[var(--gold)]"
                  style={{ background: "var(--accent)" }}
                >
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--gold)] uppercase tracking-wider">
                    Resume
                  </p>
                  <p className="text-sm font-bold text-[var(--foreground)] mt-0.5 flex items-center gap-1.5">
                    <span>Download Official PDF</span>
                  </p>
                </div>
              </a>

              {/* Social Buttons */}
              <div className="pt-2 grid grid-cols-3 gap-2">
                <a
                  href="https://www.linkedin.com/in/rahul-maurya-rahulmaurya/"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-3 rounded-xl border border-[var(--border)] text-xs font-semibold flex flex-col items-center justify-center gap-1.5 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors text-center"
                >
                  <Linkedin className="w-4 h-4 text-[var(--gold)]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Rahul-8815"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-3 rounded-xl border border-[var(--border)] text-xs font-semibold flex flex-col items-center justify-center gap-1.5 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors text-center"
                >
                  <Github className="w-4 h-4 text-[var(--gold)]" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://leetcode.com/u/Rahulmaurya9580/"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-3 rounded-xl border border-[var(--border)] text-xs font-semibold flex flex-col items-center justify-center gap-1.5 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors text-center"
                >
                  <Code className="w-4 h-4 text-[var(--gold)]" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="md:col-span-7">
            <div
              className="p-8 rounded-3xl border border-[var(--border)]"
              style={{ background: "var(--card)" }}
            >
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-[var(--gold)]"
                    style={{ background: "var(--accent)" }}
                  >
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--foreground)]">
                    Message Received!
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] max-w-md mx-auto">
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold text-[var(--gold)] border border-[var(--gold)] hover:bg-[var(--accent)] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                    Send a Message
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1.5 uppercase">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-transparent text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1.5 uppercase">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-transparent text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1.5 uppercase">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Opportunity / Collaboration"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-transparent text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1.5 uppercase">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Hi Rahul, I'd like to talk about..."
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-transparent text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-200 hover:opacity-95 disabled:opacity-50"
                    style={{
                      background: "linear-gradient(135deg, var(--gold), #b45309)",
                    }}
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { useState } from "react";
import Image from "next/image";
import DecorativeElements from "@/components/decorative-elements";
import SectionReveal from "@/components/section-reveal";
import {
  Github,
  MapPin,
  Mail,
  Linkedin,
  Phone,
  Download,
  ArrowLeft,
  Printer,
} from "lucide-react";
import AnimatedLink from "@/components/animated-link";

export default function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    // Hide the action buttons during download
    const actionButtons = document.getElementById("action-buttons");
    if (actionButtons) {
      actionButtons.style.display = "none";
    }

    try {
      // Use browser's print functionality to save as PDF
      window.print();
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
      // Show the action buttons again
      if (actionButtons) {
        actionButtons.style.display = "flex";
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Action Buttons - Only visible on screen */}
      <div
        id="action-buttons"
        className="fixed top-6 right-6 z-50 flex gap-3 print:hidden"
      >
        <AnimatedLink
          href="/"
          className="flex items-center gap-2 bg-background border border-primary text-white px-4 py-2 rounded hover:bg-primary/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to Portfolio</span>
        </AnimatedLink>

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-background border border-foreground text-white px-4 py-2 rounded hover:bg-white/10 transition-colors"
        >
          <Printer className="w-4 h-4" />
          <span className="hidden sm:inline">Print</span>
        </button>

        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">
            {isDownloading ? "Preparing..." : "Download PDF"}
          </span>
        </button>
      </div>

      <div className="px-4 md:px-8 lg:px-12 py-8 relative overflow-hidden print:px-6 print:py-4">
        <DecorativeElements variant="resume" />

        <SectionReveal>
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="mb-8 print:mb-6">
              <div className="flex items-center gap-6 mb-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Image
                    src="/images/logoresume.png"
                    alt="Sinat Logo"
                    width={60}
                    height={60}
                    className="print:w-16 print:h-16 object-contain"
                    priority
                  />
                </div>

                {/* Name and Title */}
                <div className="flex-1">
                  <h1 className="text-white text-4xl md:text-5xl font-bold print:text-3xl">
                    Sinat Sina
                  </h1>
                  <p className="text-primary text-xl print:text-lg">
                    full-stack developer
                  </p>
                </div>

                {/* Decorative Square (keeping the original design element) */}
                <div className="w-12 h-12 border-2 border-white flex items-center justify-center print:w-8 print:h-8 flex-shrink-0">
                  <div className="w-6 h-6 bg-white print:w-4 print:h-4"></div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="flex flex-wrap gap-3 text-sm print:gap-2">
                <SectionReveal delay={0.1}>
                  <div
                    className="flex items-center gap-2 border px-3 py-1 print:px-2 print:py-1"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    <Github className="w-4 h-4 print:w-3 print:h-3" />
                    <span>SSINAT</span>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                  <div
                    className="flex items-center gap-2 border px-3 py-1 print:px-2 print:py-1"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    <MapPin className="w-4 h-4 print:w-3 print:h-3" />
                    <span>Phnom Penh, Cambodia</span>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.3}>
                  <div
                    className="flex items-center gap-2 border px-3 py-1 print:px-2 print:py-1"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    <Mail className="w-4 h-4 print:w-3 print:h-3" />
                    <span>sinathbg@gmail.com</span>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.4}>
                  <div
                    className="flex items-center gap-2 border px-3 py-1 print:px-2 print:py-1"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    <Linkedin className="w-4 h-4 print:w-3 print:h-3" />
                    <span>sinat-sina</span>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.5}>
                  <div
                    className="flex items-center gap-2 border px-3 py-1 print:px-2 print:py-1"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    <Phone className="w-4 h-4 print:w-3 print:h-3" />
                    <span>+855 96 41 41 428</span>
                  </div>
                </SectionReveal>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 print:gap-4">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-6 print:space-y-4">
                {/* Summary */}
                <SectionReveal delay={0.2}>
                  <section>
                    <div
                      className="border"
                      style={{ borderColor: "var(--border-color)" }}
                    >
                      <div
                        className="border-b px-3 py-1 print:px-2 print:py-1"
                        style={{ borderColor: "var(--border-color)" }}
                      >
                        <h2 className="text-white text-lg font-medium print:text-base">
                          Summary
                        </h2>
                      </div>
                      <div className=" p-3 space-y-1 text-foreground text-sm print:text-xs">
                        Self-motivated and highly reliable full-stack developer
                        based in Phnom Penh, Cambodia. With experience in
                        project development, modern web technologies, and great
                        communication skills. Passionate about creating
                        user-friendly web experiences and always eager to learn
                        new technologies.
                      </div>
                    </div>
                  </section>
                </SectionReveal>

                {/* Experience Timeline */}
                <SectionReveal delay={0.3}>
                  <section>
                    <div
                      className="border-b pb-2 mb-4 print:mb-3"
                      style={{ borderColor: "var(--border-color)" }}
                    >
                      <h2 className="text-white text-lg font-medium print:text-base">
                        Experience
                      </h2>
                    </div>
                    <div className="space-y-4 print:space-y-3">
                      {/* Experience Item 1 */}
                      <div className="flex gap-4 print:gap-3">
                        <div className="flex flex-col items-center">
                          <div
                            className="border px-2 py-1 text-xs text-center min-w-[70px] print:min-w-[60px]"
                            style={{ borderColor: "var(--border-color)" }}
                          >
                            <div>2024</div>
                            <div>Present</div>
                          </div>
                          <div
                            className="w-px h-8 mt-2 print:h-6"
                            style={{ backgroundColor: "var(--border-color)" }}
                          ></div>
                        </div>
                        <div className="flex-1">
                          <div
                            className="border p-3 print:p-2"
                            style={{ borderColor: "var(--border-color)" }}
                          >
                            <h3 className="text-white font-medium mb-2 print:text-sm print:mb-1">
                              Full-Stack Developer
                            </h3>
                            <ul className="text-foreground text-sm space-y-1 print:text-xs print:space-y-0">
                              <li>
                                ★ Developed responsive web applications using
                                React and Vue.js
                              </li>
                              <li>
                                ★ Built RESTful APIs with Node.js and Express.js
                              </li>
                              <li>
                                ★ Collaborated with team members on various
                                projects
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Experience Item 2 */}
                      <div className="flex gap-4 print:gap-3">
                        <div className="flex flex-col items-center">
                          <div
                            className="border px-2 py-1 text-xs text-center min-w-[70px] print:min-w-[60px]"
                            style={{ borderColor: "var(--border-color)" }}
                          >
                            <div>2024</div>
                            <div>2025</div>
                          </div>
                          <div
                            className="w-px h-8 mt-2 print:h-6"
                            style={{ backgroundColor: "var(--border-color)" }}
                          ></div>
                        </div>
                        <div className="flex-1">
                          <div
                            className="border p-3 print:p-2"
                            style={{ borderColor: "var(--border-color)" }}
                          >
                            <h3 className="text-white font-medium mb-2 print:text-sm print:mb-1">
                              Mutiple Moniroting System
                            </h3>
                            <ul className="text-foreground text-sm space-y-1 print:text-xs print:space-y-0">
                              <li>
                                ★ Developed a unified dashboard using Vue 3 and
                                NestJS with JWT authentication
                              </li>
                              <li>
                                ★ Deployed services using Docker Compose, Nginx
                                reverse proxy, and SSL across multiple hosts
                              </li>
                              <li>
                                ★ Led documentation, network planning, and
                                result presentation with synthetic load testing
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Experience Item 3 */}
                      <div className="flex gap-4 print:gap-3">
                        <div className="flex flex-col items-center">
                          <div
                            className="border px-2 py-1 text-xs text-center min-w-[70px] print:min-w-[60px]"
                            style={{ borderColor: "var(--border-color)" }}
                          >
                            <div>2024</div>
                            <div>2025</div>
                          </div>
                          <div
                            className="w-px h-8 mt-2 print:h-6"
                            style={{ backgroundColor: "var(--border-color)" }}
                          ></div>
                        </div>
                        <div className="flex-1">
                          <div
                            className="border p-3 print:p-2"
                            style={{ borderColor: "var(--border-color)" }}
                          >
                            <h3 className="text-white font-medium mb-2 print:text-sm print:mb-1">
                              System Administrator – Academic Deployment Project
                            </h3>
                            <ul className="text-foreground text-sm space-y-1 print:text-xs print:space-y-0">
                              <li>
                                ★ Deployed a Laravel-based CRUD application
                                using Docker, PostgreSQL, and Nginx on Ubuntu
                                Server
                              </li>
                              <li>
                                ★ Configured CI/CD pipeline using Jenkins with
                                GitHub integration
                              </li>
                              <li>
                                ★ Set up reverse proxy, SSL, and automated
                                backup scripts
                              </li>
                              <li>
                                Implemented basic server hardening and
                                deployment documentation
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Experience Item 2 */}
                      <div className="flex gap-4 print:gap-3">
                        <div className="flex flex-col items-center">
                          <div
                            className="border px-2 py-1 text-xs text-center min-w-[70px] print:min-w-[60px]"
                            style={{ borderColor: "var(--border-color)" }}
                          >
                            <div>2023</div>
                            <div>2024</div>
                          </div>
                          <div
                            className="w-px h-8 mt-2 print:h-6"
                            style={{ backgroundColor: "var(--border-color)" }}
                          ></div>
                        </div>
                        <div className="flex-1">
                          <div
                            className="border p-3 print:p-2"
                            style={{ borderColor: "var(--border-color)" }}
                          >
                            <h3 className="text-white font-medium mb-2 print:text-sm print:mb-1">
                              Web Development Student
                            </h3>
                            <ul className="text-foreground text-sm space-y-1 print:text-xs print:space-y-0">
                              <li>
                                ★ Studied advanced web development technologies
                              </li>
                              <li>
                                ★ Completed multiple projects using modern
                                frameworks
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Experience Item 3 */}
                      <div className="flex gap-4 print:gap-3">
                        <div className="flex flex-col items-center">
                          <div
                            className="border px-2 py-1 text-xs text-center min-w-[70px] print:min-w-[60px]"
                            style={{ borderColor: "var(--border-color)" }}
                          >
                            <div>2022</div>
                            <div>2023</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div
                            className="border p-3 print:p-2"
                            style={{ borderColor: "var(--border-color)" }}
                          >
                            <h3 className="text-white font-medium mb-2 print:text-sm print:mb-1">
                              Programming Fundamentals
                            </h3>
                            <ul className="text-foreground text-sm space-y-1 print:text-xs print:space-y-0">
                              <li>
                                ★ Learned programming fundamentals with Java and
                                JavaScript
                              </li>
                              <li>★ Worked in team environments</li>
                              <li>★ Used git flow to manage projects</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </SectionReveal>

                {/* Projects */}
                <SectionReveal delay={0.4}>
                  <section>
                    <div
                      className="border-b pb-2 mb-4 print:mb-3"
                      style={{ borderColor: "var(--border-color)" }}
                    >
                      <h2 className="text-white text-lg font-medium print:text-base">
                        Projects
                      </h2>
                    </div>

                    <div className="space-y-3 print:space-y-2">
                      {/* Project 1 */}
                      <div
                        className="border"
                        style={{ borderColor: "var(--border-color)" }}
                      >
                        <div
                          className="border-b px-3 py-1 print:px-2"
                          style={{ borderColor: "var(--border-color)" }}
                        >
                          <div className="text-xs text-foreground">
                            Vue.js Nest.js PostgreSQL Minio
                          </div>
                        </div>
                        <div className="p-3 print:p-2">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="text-white font-medium print:text-sm">
                              JobHunter
                            </h3>
                            <span className="text-xs text-foreground">
                              job-hunter-kh.vercel.app
                            </span>
                          </div>
                          <p className="text-foreground text-sm mb-2 print:text-xs print:mb-1">
                            Job search platform for job seekers and employers
                          </p>
                          <div className="flex items-center gap-2 text-xs text-foreground">
                            <Github className="w-3 h-3" />
                            <span>SSINAT/JobHunter-web</span>
                          </div>
                        </div>
                      </div>

                      {/* Project 2 */}
                      <div
                        className="border"
                        style={{ borderColor: "var(--border-color)" }}
                      >
                        <div
                          className="border-b px-3 py-1 print:px-2"
                          style={{ borderColor: "var(--border-color)" }}
                        >
                          <div className="text-xs text-foreground">
                            React Next.js TypeScript
                          </div>
                        </div>
                        <div className="p-3 print:p-2">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="text-white font-medium print:text-sm">
                              Portfolio Website
                            </h3>
                            <span className="text-xs text-foreground">
                              portfoliome.site
                            </span>
                          </div>
                          <p className="text-foreground text-sm mb-2 print:text-xs print:mb-1">
                            Personal portfolio website with modern design
                          </p>
                          <div className="flex items-center gap-2 text-xs text-foreground">
                            <Github className="w-3 h-3" />
                            <span>SSINAT/Portfolio</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </SectionReveal>
              </div>

              {/* Right Column - Skills & Info */}
              <div className="space-y-4 print:space-y-3">
                {/* Languages */}
                <SectionReveal delay={0.5} direction="right">
                  <section>
                    <div
                      className="border"
                      style={{ borderColor: "var(--border-color)" }}
                    >
                      <div
                        className="border-b px-3 py-2 print:px-2 print:py-1"
                        style={{ borderColor: "var(--border-color)" }}
                      >
                        <h3 className="text-white font-medium print:text-sm">
                          Languages
                        </h3>
                      </div>
                      <div className="p-3 space-y-1 text-sm print:p-2 print:text-xs">
                        <div className="flex justify-between">
                          <span className="text-foreground">Khmer</span>
                          <span className="text-white">Native</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-foreground">English</span>
                          <span className="text-white">Fluent</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-foreground">Chinese</span>
                          <span className="text-white">Basic</span>
                        </div>
                      </div>
                    </div>
                  </section>
                </SectionReveal>

                {/* Skills */}
                <SectionReveal delay={0.6} direction="right">
                  <section>
                    <div
                      className="border"
                      style={{ borderColor: "var(--border-color)" }}
                    >
                      <div
                        className="border-b px-3 py-2 print:px-2 print:py-1"
                        style={{ borderColor: "var(--border-color)" }}
                      >
                        <h3 className="text-white font-medium print:text-sm">
                          Skills
                        </h3>
                      </div>
                      <div className="p-3 print:p-2">
                        <p className="text-foreground text-sm print:text-xs">
                          HTML CSS React Vue.js Next.js Node.js TypeScript
                          JavaScript
                        </p>
                      </div>
                    </div>
                  </section>
                </SectionReveal>

                {/* Tools */}
                <SectionReveal delay={0.7} direction="right">
                  <section>
                    <div
                      className="border"
                      style={{ borderColor: "var(--border-color)" }}
                    >
                      <div
                        className="border-b px-3 py-2 print:px-2 print:py-1"
                        style={{ borderColor: "var(--border-color)" }}
                      >
                        <h3 className="text-white font-medium print:text-sm">
                          Tools
                        </h3>
                      </div>
                      <div className="p-3 print:p-2">
                        <p className="text-foreground text-sm print:text-xs">
                          Git VSCode Figma Docker PostgreSQL
                        </p>
                      </div>
                    </div>
                  </section>
                </SectionReveal>

                {/* Programming Languages */}
                <SectionReveal delay={0.8} direction="right">
                  <section>
                    <div
                      className="border"
                      style={{ borderColor: "var(--border-color)" }}
                    >
                      <div
                        className="border-b px-3 py-2 print:px-2 print:py-1"
                        style={{ borderColor: "var(--border-color)" }}
                      >
                        <h3 className="text-white font-medium print:text-sm">
                          Programming Languages
                        </h3>
                      </div>
                      <div className="p-3 print:p-2">
                        <p className="text-foreground text-sm print:text-xs">
                          JavaScript TypeScript Python Java PHP
                        </p>
                      </div>
                    </div>
                  </section>
                </SectionReveal>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </>
  );
}

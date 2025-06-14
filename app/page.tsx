import Image from "next/image";
import Link from "next/link";
import DotPattern from "@/components/dot-pattern";
import ProjectCard from "@/components/project-card";
import DecorativeElements from "@/components/decorative-elements";
import AnimatedText from "@/components/animated-text";

import * as React from "react";

export default function Home() {
  return (
    <div className="px-4 md:px-32 space-y-24 pb-16 relative overflow-hidden">
      <DecorativeElements variant="home" />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-24">
        <DotPattern className="top-20 right-10 w-32 h-32" />
        <DotPattern className="bottom-0 left-20 w-32 h-32" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <AnimatedText
              parts={[
                { text: "Sinat is a " },
                { text: "cyber Security", className: "text-primary" },
                { text: " and " },
                { text: "full-stack developer", className: "text-primary" },
              ]}
              className="text-white text-3xl md:text-5xl font-bold"
            />

            <p className="text-foreground">
              He crafts responsive websites where technologies meet creativity
            </p>
            <Link href="/contacts" className="btn">
              Contact me!!
            </Link>
          </div>
          <div className="relative">
            <div
              className="border mx-auto"
              style={{
                borderColor: "var(--border-color)",
                width: "fit-content",
              }}
            >
              <div className="relative">
                <Image
                  src="/images/portfolio.svg"
                  alt="Sinat portrait"
                  width={400}
                  height={400}
                  className="object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 border-t p-2 text-center bg-background"
                  style={{ borderColor: "#ABB2BF" }}
                >
                  <p className="text-sm">
                    <span className="text-white">Currently working on</span>{" "}
                    <Link
                      href="https://itc.edu.kh/"
                      className="text-primary hover:underline"
                    >
                      /full-stack developer
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div
          className="mt-24 border p-4 max-w-md"
          style={{ borderColor: "#ABB2BF" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="text-2xl text-white">"</div>
            <div
              className="h-px flex-1"
              style={{ backgroundColor: "#ABB2BF" }}
            ></div>
          </div>
          <p className="text-white mb-2">
            With great power comes great electricity bill
          </p>
          <div className="flex items-center gap-2">
            <div
              className="h-px flex-1"
              style={{ backgroundColor: "#ABB2BF" }}
            ></div>
            <div className="text-sm">- Dr. Who</div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative">
        <DotPattern className="top-10 right-0 w-32 h-32" />

        <div className="flex justify-between items-center mb-12">
          <h2 className="section-title">projects</h2>
          <Link
            href="/works"
            className="text-white hover:text-primary transition-colors"
          >
            View all ~~&gt;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <ProjectCard
            title="Wifi Hotspot ITC"
            description="Wifi hotspot ITC Security Of Cybernet Lab"
            tags={["cisco", "switch", "Router", "DHCP", "DNS"]}
            imageSrc="/images/wifi.png"
            imageAlt="iTC Wifi Hotspot project"
            liveLink="#"
          />
          <ProjectCard
            title="ProtectX"
            description="Discord anti-crash bot"
            tags={["React", "Express", "Discord.js", "Node.js"]}
            imageSrc="/images/protectx.png"
            imageAlt="ProtectX project"
            liveLink="#"
            githubLink="#"
          />
          <ProjectCard
            title="My Portfolio"
            description="Personal Portfolio website"
            tags={["React", "Express", "Node.js"]}
            imageSrc="/images/portfolio.png"
            imageAlt="My Portfolio project"
            githubLink="#"
            liveLink="#"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative">
        <DotPattern className="bottom-10 left-10 w-32 h-32" />
        <DotPattern className="top-20 right-20 w-32 h-32" />

        <h2 className="hash-title mb-12">skills</h2>
        

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-0" style={{ borderColor: "#ABB2BF" }}>
            <div className="border-b p-2" style={{ borderColor: "#ABB2BF" }}>
              <h3 className="text-white">Languages</h3>
            </div>
            <div className="p-4">
              <p>TypeScript Python JavaScript</p>
            </div>
          </div>

          <div className="border p-0" style={{ borderColor: "#ABB2BF" }}>
            <div className="border-b p-2" style={{ borderColor: "#ABB2BF" }}>
              <h3 className="text-white">Other</h3>
            </div>
            <div className="p-4">
              <p>HTML CSS EJS SCSS REST Jinja</p>
            </div>
          </div>

          <div className="border p-0" style={{ borderColor: "#ABB2BF" }}>
            <div className="border-b p-2" style={{ borderColor: "#ABB2BF" }}>
              <h3 className="text-white">Tools</h3>
            </div>
            <div className="p-4">
              <p>VSCode Neovim Linux Figma Git Font Awesome</p>
            </div>
          </div>

          <div className="border p-0" style={{ borderColor: "#ABB2BF" }}>
            <div className="border-b p-2" style={{ borderColor: "#ABB2BF" }}>
              <h3 className="text-white">Databases</h3>
            </div>
            <div className="p-4">
              <p>SQLite PostgreSQL MongoDB</p>
            </div>
          </div>

          <div className="border p-0" style={{ borderColor: "#ABB2BF" }}>
            <div className="border-b p-2" style={{ borderColor: "#ABB2BF" }}>
              <h3 className="text-white">Frameworks</h3>
            </div>
            <div className="p-4">
              <p>React Vue Express.js Discord.js Flask Django.js Node.js</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Preview */}
      <section className="relative">
        <DotPattern className="bottom-10 right-10 w-32 h-32" />

        <h2 className="hash-title mb-12">about-me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p>Hello, I'm Sinat!</p>
            <p>
              I'm a self-taught full-stack developer based in Phnomm Penh,
              Cambodia. I can develop responsive websites from scratch and raise
              them into modern user-friendly web experiences.
            </p>
            <p>
              Transforming my creativity and knowledge into websites has been my
              passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <Link href="/about-me" className="btn-outline inline-block mt-4">
              Read more ~~&gt;
            </Link>
          </div>
          <div className="relative flex justify-center">
            <Image
              src="/images/sinat-portrait.svg"
              alt="Sinat portrait"
              width={300}
              height={400}
              className="object-cover"
            />
            <DotPattern className="absolute -bottom-10 -left-10 w-32 h-32" />
          </div>
        </div>
      </section>

      {/* Contacts Preview */}
      <section className="relative">
        <h2 className="hash-title mb-12">contacts</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="mb-6">
              I'm interested in freelance opportunities. However, if you have
              other request or question, don't hesitate to contact me.
            </p>
          </div>
          <div className="border p-4" style={{ borderColor: "#ABB2BF" }}>
            <h3 className="text-white mb-4">Message me here</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:sinathbg@gmail.com"
                  className="text-white hover:text-primary"
                >
                  sinathbg@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 240 240"
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                >
                  <path d="M120 0C53.73 0 0 53.73 0 120s53.73 120 120 120 120-53.73 120-120S186.27 0 120 0zm58.15 82.4-20.04 94.6c-1.52 6.7-5.49 8.36-11.1 5.2l-30.7-22.65-14.83 14.3c-1.64 1.65-3 3-6.16 3l2.2-31.3 56.97-51.6c2.48-2.2-.54-3.44-3.84-1.25l-70.4 44.2-30.37-9.5c-6.6-2.05-6.75-6.6 1.38-9.75l118.62-45.76c5.5-2 10.3 1.33 8.37 9.57z" />
                </svg>
                <a
                  href="https://t.me/SINA_SINAT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary"
                >
                  @SINA_SINAT
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

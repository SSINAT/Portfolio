import Image from "next/image";
import DotPattern from "@/components/dot-pattern";
import ProjectCard from "@/components/project-card";
import DecorativeElements from "@/components/decorative-elements";
import AnimatedText from "@/components/animated-text";
import AnimatedLink from "@/components/animated-link";
import SectionReveal from "@/components/section-reveal";

export default function Home() {
  return (
    <div className="px-4 md:px-32 space-y-24 pb-16 relative overflow-hidden">
      <DecorativeElements variant="home" />

      {/* Hero Section */}
      <SectionReveal>
        <section className="relative pt-12 md:pt-24">
          <DotPattern className="top-20 right-10 w-32 h-32" />
          <DotPattern className="bottom-0 left-20 w-32 h-32" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal direction="left" delay={0.2}>
              <div className="space-y-6">
                <h1 className="text-white text-3xl md:text-5xl font-bold min-h-[120px] md:min-h-[160px]">
                  <AnimatedText
                    parts={[
                      { text: "Sinat is a " },
                      { text: "cyber Security", className: "text-primary" },
                      { text: " and " },
                      {
                        text: "full-stack developer",
                        className: "text-primary",
                      },
                    ]}
                    className="text-white text-3xl md:text-5xl font-bold"
                    typingSpeed={40}
                    repeatInterval={5000}
                  />
                </h1>
                <p className="text-foreground">
                  He crafts responsive websites where technologies meet
                  creativity
                </p>
                <AnimatedLink href="/contacts" className="btn">
                  Contact me!!
                </AnimatedLink>
              </div>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.4}>
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
                      priority
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 border-t p-2 text-center transition-colors duration-300"
                      style={{
                        borderColor: "var(--border-color)",
                        backgroundColor: "var(--background)",
                      }}
                    >
                      <p className="text-sm">
                        <span className="text-white">Currently working on</span>{" "}
                        <a
                          href="https://itc.edu.kh/"
                          className="text-primary hover:underline"
                        >
                          /full-stack developer
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.6}>
            <div
              className="mt-24 border p-4 max-w-md transition-colors duration-300"
              style={{ borderColor: "var(--border-color)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="text-2xl text-white">"</div>
                <div
                  className="h-px flex-1 transition-colors duration-300"
                  style={{ backgroundColor: "var(--border-color)" }}
                ></div>
              </div>
              <p className="text-white mb-2">
                With great power comes great electricity bill
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="h-px flex-1 transition-colors duration-300"
                  style={{ backgroundColor: "var(--border-color)" }}
                ></div>
                <div className="text-sm">- Dr. Who</div>
              </div>
            </div>
          </SectionReveal>
        </section>
      </SectionReveal>

      {/* Projects Section */}
      <SectionReveal delay={0.2}>
        <section className="relative">
          <DotPattern className="top-10 right-0 w-32 h-32" />

          <div className="flex justify-between items-center mb-12">
            <h2 className="section-title">projects</h2>
            <AnimatedLink
              href="/works"
              className="text-white hover:text-primary transition-colors"
            >
              View all ~~{">"}
            </AnimatedLink>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Wifi Hotspot ITC",
                description: "Wifi hotspot ITC Security Of Cybernet Lab",
                tags: ["cisco", "switch", "Router", "DHCP", "DNS"],
                imageSrc: "/images/wifi.png",
                imageAlt: "ITC Wifi Hotspot project",
                delay: 0.1,
              },
              {
                title: "ProtectX",
                description: "Discord anti-crash bot",
                tags: ["React", "Express", "Discord.js", "Node.js"],
                imageSrc: "/images/protectx.png",
                imageAlt: "ProtectX project",
                delay: 0.2,
              },
              {
                title: "My Portfolio",
                description: "Personal Portfolio website",
                tags: ["React", "Express", "Node.js"],
                imageSrc: "/images/portfolio.png",
                imageAlt: "My Portfolio project",
                delay: 0.3,
              },
            ].map((project, index) => (
              <SectionReveal
                key={project.title}
                delay={project.delay}
                direction="up"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                  liveLink="#"
                  githubLink="#"
                />
              </SectionReveal>
            ))}
          </div>
        </section>
      </SectionReveal>

      {/* Skills Section */}
      <SectionReveal delay={0.2}>
        <section className="relative">
          <DotPattern className="bottom-10 left-10 w-32 h-32" />
          <DotPattern className="top-20 right-20 w-32 h-32" />

          <h2 className="hash-title mb-12">skills</h2>

          <div className="grid lg:grid-cols-2 gap-8 relative z-10">
            <div className="flex items-center justify-center">
              <img
                src="/images/Group 36.svg"
                alt="Skills pattern"
                className=" absolute w-80 h-64 "
                // style={{ filter: "brightness(0.8)" }}
              />
            </div>
            <div className="skills-grid">
              {[
                {
                  title: "Languages",
                  content: "TypeScript Lua Python JavaScript",
                  delay: 0.1,
                },
                {
                  title: "Databases",
                  content: "SQLite PostgreSQL MongoDB",
                  delay: 0.2,
                },
                {
                  title: "Tools",
                  content:
                    "VSCode Neovim Linux Figma XFCE Arch Git Font Awesome",
                  delay: 0.3,
                },
                {
                  title: "Other",
                  content: "HTML CSS EJS SCSS REST Jinja",
                  delay: 0.4,
                },
                {
                  title: "Frameworks",
                  content: "React Vue Disnake Discord.js Flask Express.js",
                  delay: 0.5,
                },
              ].map((skill) => (
                <SectionReveal
                  key={skill.title}
                  delay={skill.delay}
                  direction="up"
                >
                  <div
                    className="skill-card"
                    style={{
                      borderColor: "var(--border-color)",
                      width: "fit-content",
                    }}
                  >
                    <div className="skill-card-header">{skill.title}</div>
                    <div className="skill-card-body">{skill.content}</div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* About Me Preview */}
      <SectionReveal delay={0.2}>
        <section className="relative">
          <DotPattern className="bottom-10 right-10 w-32 h-32" />

          <h2 className="hash-title mb-12">about-me</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <SectionReveal direction="left" delay={0.3}>
              <div className="space-y-6">
                <p>Hello, I'm Sinat!</p>
                <p>
                  I'm a self-taught full-stack developer based in Phnom Penh,
                  Cambodia. I can develop responsive websites from scratch and
                  raise them into modern user-friendly web experiences.
                </p>
                <p>
                  Transforming my creativity and knowledge into websites has
                  been my passion for over a year. I have been helping various
                  clients to establish their presence online. I always strive to
                  learn about the newest technologies and frameworks.
                </p>
                <AnimatedLink
                  href="/about-me"
                  className="btn-outline inline-block mt-4"
                >
                  Read more ~~{">"}
                </AnimatedLink>
              </div>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.5}>
              <div className="relative flex justify-center">
                <div className="portrait-3d-container">
                  <div className="portrait-3d relative">
                    <Image
                      src="/images/sinat-portrait.svg"
                      alt="Sinat portrait"
                      width={300}
                      height={400}
                      className="object-cover rounded-lg shadow-2xl"
                      priority
                    />
                  </div>
                </div>
                <DotPattern className="absolute -bottom-10 -left-10 w-32 h-32" />
              </div>
            </SectionReveal>
          </div>
        </section>
      </SectionReveal>

      {/* Contacts Preview */}
      <SectionReveal delay={0.2}>
        <section className="relative">
          <h2 className="hash-title mb-12">contacts</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <SectionReveal direction="left" delay={0.3}>
              <div>
                <p className="mb-6">
                  I'm interested in freelance opportunities. However, if you
                  have other request or question, don't hesitate to contact me.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.4}>
              <div
                className="border p-4 transition-colors duration-300"
                style={{ borderColor: "var(--border-color)" }}
              >
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
            </SectionReveal>
          </div>
        </section>
      </SectionReveal>
    </div>
  );
}

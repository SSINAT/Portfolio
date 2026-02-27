import Image from "next/image";
import DotPattern from "@/components/dot-pattern";
import ProjectCard from "@/components/project-card";
import CertificateCard from "@/components/certificate-card";
import DecorativeElements from "@/components/decorative-elements";
import AnimatedText from "@/components/animated-text";
import AnimatedLink from "@/components/animated-link";
import SectionReveal from "@/components/section-reveal";
// import Slideshow from "@/components/slideshow";
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
                      {
                        text: "cybersecurity ",
                        className: "text-primary",
                      },
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
                  He crafts secure responsive websites where cybersecurity meets
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
                      src="/images/me6.png"
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
                        <span className="text-white">Currently working as</span>{" "}
                        <a
                          href="https://www.sathapana.com.kh/"
                          className="text-primary hover:underline"
                        >
                          SOC
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
      {/* Internship Slideshow Section
      <SectionReveal delay={0.2}>
        <section className="relative -mx-4 md:-mx-32">
          <Slideshow />
        </section>
      </SectionReveal> */}

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
                title: "Monitoring System",
                description:
                  "Integrate multiple open-source tool to function as monitoring system",
                tags: [
                  "Docker",
                  "Nest.JS",
                  "Next.Js",
                  "Prometheus",
                  "ELK Stack",
                ],
                imageSrc: "/images/monitor.png",
                imageAlt: "Monitoring System project",
                delay: 0.1,
                liveLink: "https://motoring-system.vercel.app/",
                githubLink: "https://github.com/SSINAT/motoring-system.git",
              },
              // {
              //   title: "TIC Quiz App",
              //   description: "Quiz app for TIC students",
              //   tags: ["firebase", "Flutter", "dart"],
              //   imageSrc: "/images/TicQuizApp.png",
              //   imageAlt: "TIC Quiz App project",
              //   delay: 0.2,
              //   githubLink: "https://github.com/SSINAT/Moblie-Project.git",
              // },
              {
                title: "Wifi Hotspot ITC",
                description: "Wifi hotspot ITC Security Of Cybernet Lab",
                tags: ["Access point", "switch", "Router", "DHCP", "DNS"],
                imageSrc: "/images/wifi.png",
                imageAlt: "iTC Wifi Hotspot project",
                delay: 0.2,
                githubLink: "#",
                liveLink: "#",
              },
              {
                title: "Honeypot and Threat Intelligence",
                description:
                  "decoy system designed to attract and detect cyber attacks",
                tags: ["Cowire", "Ubuntu Server", "Python", "ELK Stack"],
                imageSrc: "/images/honeypot.png",
                imageAlt: "Honeypot project",
                delay: 0.3,
                githubLink: "#",
                liveLink: "#",
              },
              // {
              //   title: "My Portfolio",
              //   description: "Personal Portfolio website",
              //   tags: ["React", "Next.js", "Node.js"],
              //   imageSrc: "/images/portfolio.png",
              //   imageAlt: "My Portfolio about my projects",
              //   liveLink: "https://www.portfoliome.site/",
              //   githubLink: "https://github.com/SSINAT/Portfolio.git",
              //   delay: 0.3,
              // },
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
                  liveLink={project.liveLink}
                  githubLink={project.githubLink}
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
              />
            </div>
            <div className="skills-grid">
              {[
                {
                  title: "Cybersecurity",
                  content:
                    "Ethical Hacking Penetration Testing Vulnerability Assessment Bug Bounty Web Security",
                  delay: 0.1,
                },
                {
                  title: "Languages",
                  content: "TypeScript Java PHP C++ Python JavaScript",
                  delay: 0.2,
                },
                {
                  title: "Databases",
                  content: "SQLite PostgreSQL MongoDB Mysql",
                  delay: 0.3,
                },
                {
                  title: "Tools",
                  content:
                    "ELK-Stack Prometheus Grafana Wazuh Pfsense Suricata Wireshark Burp Suite Nikto OWASP ZAP",
                  delay: 0.4,
                },
                {
                  title: "Frameworks",
                  content:
                    "React Vue3 SpringBoot Nest.js Next.js Flask Express.js",
                  delay: 0.5,
                },
                {
                  title: "Other",
                  content: "HTML CSS EJS SCSS REST",
                  delay: 0.6,
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
                  I'm a certified Ethical Hacking and self-taught full-stack
                  developer based in Phnom Penh, Cambodia. I specialize in
                  ethical hacking, penetration testing, and developing secure
                  responsive websites from scratch.
                </p>
                <p>
                  With certifications in ethical hacking and web security, I
                  combine my cybersecurity expertise with modern web development
                  to create secure, user-friendly applications. I have been
                  helping various clients establish their secure online presence
                  while always staying updated with the latest security threats
                  and technologies.
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
                      src="/images/me7.png"
                      alt="Sinat portrait"
                      width={300}
                      height={400}
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

      {/* Certifications Section */}
      <SectionReveal delay={0.2}>
        <section className="relative">
          <DotPattern className="top-10 right-0 w-32 h-32" />

          <div className="flex justify-between items-center mb-12">
            <h2 className="section-title">certifications</h2>
            <AnimatedLink
              href="/resume"
              className="text-white hover:text-primary transition-colors"
            >
              View resume ~~{">"}
            </AnimatedLink>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "The Complete Certified in Ethical Hacker",
                provider: "Cisco",
                duration: "70 hours",
                date: "July 2025",
                imageSrc: "/images/certificates/EthicalHacker-Cisco.png",
                imageAlt: "Complete Certified in Ethical Hacker",
                delay: 0.1,
                certificateUrl:
                  "https://www.credly.com/badges/238f9a4c-5c8c-4f62-8e7d-34b33d1b18c5",
              },
              {
                title:
                  "The Complete Certified in Cybersecurity CC course ISC2 2025",
                provider: "Udemy",
                duration: "17.5 hours",
                date: "July 2025",
                imageSrc: "/images/certificates/cc.png",
                imageAlt:
                  "Complete Certified in Cybersecurity CC course ISC2 2025",
                delay: 0.2,
                certificateUrl:
                  "https://www.udemy.com/certificate/UC-66ee55f3-255d-4c7e-84e2-8226c125eeee/",
              },
              {
                title: "Introduction to Cloud Computing",
                provider: " CourseraIBM",
                duration: "5 courses",
                date: "August 2023",
                imageSrc: "/images/certificates/IBM-cloud.png",
                imageAlt: "Introduction to Cloud Computing",
                delay: 0.3,
                certificateUrl:
                  "https://www.credly.com/badges/93281a76-3730-4b00-a914-4b0a6fff4f17",
              },

              {
                title: "Become a Python Master",
                provider: "Programiz",
                duration: "5 courses",
                date: "August 2023",
                imageSrc: "/images/certificates/python-master-programiz.png",
                imageAlt: "Python Master Professional Certificate",
                delay: 0.4,
                certificateUrl:
                  "https://programiz.pro/certificates/detail/BC79042B2F70",
              },
              {
                title: "C++ for Programmers Course",
                provider: "Codecademy",
                duration: "10 hours",
                date: "August 2023",
                imageSrc: "/images/certificates/c++Codecademy.png",
                imageAlt: "C++ for Programmers Certificate",
                delay: 0.5,
                certificateUrl:
                  "https://www.codecademy.com/profiles/imme404/certificates/ddc94032dd07fd43ee02f994e8f72af9",
              },
            ].map((certificate, index) => (
              <SectionReveal
                key={certificate.title}
                delay={certificate.delay}
                direction="up"
              >
                <CertificateCard
                  title={certificate.title}
                  provider={certificate.provider}
                  duration={certificate.duration}
                  date={certificate.date}
                  imageSrc={certificate.imageSrc}
                  imageAlt={certificate.imageAlt}
                  certificateUrl={certificate.certificateUrl}
                />
              </SectionReveal>
            ))}
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
                  I'm interested in cybersecurity and full-stack development
                  opportunities. Whether you need penetration testing, security
                  consulting, or secure web development, don't hesitate to
                  contact me.
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

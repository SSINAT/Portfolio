import DotPattern from "@/components/dot-pattern";
import ProjectCard from "@/components/project-card";
import DecorativeElements from "@/components/decorative-elements";
import SectionReveal from "@/components/section-reveal";

export default function Works() {
  return (
    <div className="px-4 md:px-32 space-y-16 pb-16 relative overflow-hidden">
      <DecorativeElements variant="works" />

      <SectionReveal>
        <section className="relative pt-8">
          <DotPattern className="top-20 right-10 w-32 h-32" />
          <DotPattern className="bottom-0 left-20 w-32 h-32" />

          <h1 className="section-title mb-4">projects</h1>
          <p className="mb-12">List of my projects</p>

          <SectionReveal delay={0.2}>
            <h2 className="hash-title mb-6">complete-apps</h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {[
              {
                title: "JobHunter",
                description:
                  "Job search platform for job seekers and employers",
                tags: ["Vue", "Nest.js", "Minio", "postgreSQL"],
                imageSrc: "/images/JobHuntersvg.svg",
                imageAlt: "JobHunter project",
                delay: 0.1,
                liveLink: "#",
                githubLink: "#",
              },
              {
                title: "Kahoot Answers",
                description: "Get answers to your kahoot quiz",
                tags: ["JavaScript", "CSS", "HTML"],
                imageSrc: "/images/kahoot-answers.png",
                imageAlt: "Kahoot Answers project",
                delay: 0.2,
                liveLink: "#",
                githubLink: "#",
              },
              {
                title: "ProtectX",
                description: "Discord anti-crash bot",
                tags: ["React", "Express", "Discord.js", "Node.js"],
                imageSrc: "/images/protectx.png",
                imageAlt: "ProtectX project",
                delay: 0.3,
                liveLink: "#",
                githubLink: "#",
              },
            ].map((project) => (
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

          <SectionReveal delay={0.4}>
            <h2 className="hash-title mb-6">small-projects</h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "AngkorApparel",
                description: "E-commerce website for sale clothing",
                tags: ["Vue.Js", "JavaScript.js"],
                imageSrc: "/images/ecommerce.png",
                imageAlt: "E-commerce project",
                delay: 0.1,
                githubLink: "#",
              },
              {
                title: "My Portfolio",
                description: "Personal Portfolio website",
                tags: ["React", "Express", "Node.js"],
                imageSrc: "/images/portfolio.png",
                imageAlt: "My Portfolio project",
                delay: 0.2,
                githubLink: "#",
                liveLink: "#",
              },
              {
                title: "ChertNodes",
                description: "Minecraft servers hosting",
                tags: ["HTML", "CSS", "Python", "Flask"],
                imageSrc: "/images/chertnodes.jpeg",
                imageAlt: "ChertNodes project",
                delay: 0.3,
                liveLink: "#",
                githubLink: "#",
              },
              {
                title: "Crash protect website",
                description: "Simple website for crash protect discord bot",
                tags: ["HTML", "CSS", "JavaScript"],
                imageSrc: "/images/protectx.png",
                imageAlt: "Crash protect website",
                delay: 0.4,
                liveLink: "#",
                githubLink: "#",
              },
              {
                title: "TIC Quiz App",
                description: "Quiz app for TIC students",
                tags: ["firebae", "dart"],
                imageSrc: "/images/TicQuizApp.png",
                imageAlt: "TIC Quiz App project",
                delay: 0.5,
                liveLink: "#",
              },
              {
                title: "Game 2048",
                description: "Simple 2048 game",
                tags: ["Java"],
                imageSrc: "/images/2048.png",
                imageAlt: "Game 2048 project",
                delay: 0.6,
                githubLink: "#",
              },
              {
                title: "Everloop",
                description: "Everloop board",
                tags: ["JavaScript", "HTML", "CSS"],
                imageSrc: "/images/everloop.png",
                imageAlt: "Everloop project",
                delay: 0.7,
                githubLink: "https://github.com/SSINAT/EVERLOOP.git",
              },
              {
                title: "Wifi Hotspot ITC",
                description: "Wifi hotspot ITC Security Of Cybernet Lab",
                tags: ["cisco", "switch", "Router", "DHCP", "DNS"],
                imageSrc: "/images/wifi.png",
                imageAlt: "iTC Wifi Hotspot project",
                delay: 0.8,
                liveLink: "#",
              },
            ].map((project) => (
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
    </div>
  );
}

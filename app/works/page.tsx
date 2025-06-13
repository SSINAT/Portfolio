import DotPattern from "@/components/dot-pattern";
import ProjectCard from "@/components/project-card";
import DecorativeElements from "@/components/decorative-elements";

export default function Works() {
  return (
    <div className="px-4 md:px-32 space-y-16 pb-16 relative overflow-hidden">
      <DecorativeElements variant="works" />

      <section className="relative pt-8">
        <DotPattern className="top-20 right-10 w-32 h-32" />
        <DotPattern className="bottom-0 left-20 w-32 h-32" />

        <h1 className="section-title mb-4">projects</h1>
        <p className="mb-12">List of my projects</p>

        <h2 className="text-white text-xl mb-6">
          <span className="text-primary">#</span>complete-apps
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          <ProjectCard
            title="JobHunter"
            description="Job search platform for job seekers and employers"
            tags={["Vue", "Nest.js", "Minio", "postgreSQL"]}
            imageSrc="/images/JobHuntersvg.svg"
            imageAlt="JobHunter project"
            liveLink="#"
            githubLink="#"
          />
          <ProjectCard
            title="Kahoot Answers"
            description="Get answers to your kahoot quiz"
            tags={["JavaScript", "CSS", "HTML"]}
            imageSrc="/images/kahoot-answers.png"
            imageAlt="Kahoot Answers project"
            liveLink="#"
            githubLink="#"
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
        </div>

        <h2 className="text-white text-xl mb-6">
          <span className="text-primary">#</span>small-projects
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <ProjectCard
            title="AngkorApparel"
            description="E-commerce website for sale clothing"
            tags={["Vue.Js", "JavaScript.js"]}
            imageSrc="/images/ecommerce.png"
            imageAlt="E-commerce project"
            githubLink="#"
          />
          <ProjectCard
            title="My blog"
            description="Personal blog website"
            tags={["React", "Express", "Node.js"]}
            imageSrc="/images/TicQuizApp.png"
            imageAlt="Blog project"
            githubLink="#"
          />
          <ProjectCard
            title="ChertNodes"
            description="Minecraft servers hosting"
            tags={["HTML", "CSS", "Python", "Flask"]}
            imageSrc="/images/chertnodes.jpeg"
            imageAlt="ChertNodes project"
            liveLink="#"
            githubLink="#"
          />
          <ProjectCard
            title="Crash protect website"
            description="Simple website for crash protect discord bot"
            tags={["HTML", "CSS", "JavaScript"]}
            imageSrc="/images/protectx.png"
            imageAlt="Crash protect website"
            liveLink="#"
            githubLink="#"
          />
          <ProjectCard
            title="TIC Quiz App"
            description="Quiz app for TIC students"
            tags={["firebae", "dart"]}
            imageSrc="/images/TicQuizApp.png"
            imageAlt="TIC Quiz App project"
            liveLink="#"
          />
          <ProjectCard
            title="Web Dev setup config"
            description="My personal web development setup"
            tags={["Markdown"]}
            imageSrc="/images/ticquiz.png"
            imageAlt="Web Dev setup config"
            githubLink="#"
          />
          <ProjectCard
            title="Onku"
            description="Discord multipurpose bot"
            tags={["TypeScript", "Discord.js"]}
            imageSrc="/images/logo.png"
            imageAlt="Onku project"
            liveLink="#"
          />
          <ProjectCard
            title="School website"
            description="Simple school website"
            tags={["HTML", "CSS", "JavaScript"]}
            imageSrc="/images/TicQuizApp.png"
            imageAlt="School website"
            liveLink="#"
          />
        </div>
      </section>
    </div>
  );
}

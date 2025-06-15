import Image from "next/image";
import DotPattern from "@/components/dot-pattern";
import DecorativeElements from "@/components/decorative-elements";
import SectionReveal from "@/components/section-reveal";

export default function AboutMe() {
  return (
    <div className="px-4 md:px-32 space-y-16 pb-16 relative">
      <DecorativeElements variant="about" />

      <SectionReveal>
        <section className="relative pt-8">
          <DotPattern className="top-20 right-10 w-32 h-32" />
          <DotPattern className="bottom-0 left-20 w-32 h-32" />

          <h1 className="section-title mb-4">about-me</h1>
          <p className="mb-12">Who am I</p>

          <div className="grid md:grid-cols-2 gap-12">
            <SectionReveal direction="left" delay={0.2}>
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
                <p>
                  I'm currently looking for new opportunities to work with
                  companies or individuals who want to make their online
                  presence more effective. I'm open to freelance projects,
                  part-time or full-time positions.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.4}>
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
            </SectionReveal>
          </div>
        </section>
      </SectionReveal>

      {/* Skills Section */}
      <SectionReveal delay={0.3}>
        <section className="relative">
          <DotPattern className="bottom-10 left-10 w-32 h-32" />
          <DotPattern className="top-20 right-20 w-32 h-32" />

          <h2 className="hash-title mb-12">skills</h2>

          <div className="skills-grid">
            {[
              {
                title: "Languages",
                content: "TypeScript PHP JAVA Python JavaScript",
                delay: 0.1,
              },
              {
                title: "Databases",
                content: "SQLite PostgreSQL Firebase",
                delay: 0.2,
              },
              {
                title: "Tools",
                content: "VSCode Neovim Linux Figma Git Font Awesome",
                delay: 0.3,
              },
              { title: "Other", content: "HTML CSS EJS SCSS", delay: 0.4 },
              {
                title: "Frameworks",
                content: "React Vue Express.js Discord.js Vue.js Node.js",
                delay: 0.5,
              },
            ].map((skill) => (
              <SectionReveal
                key={skill.title}
                delay={skill.delay}
                direction="up"
              >
                <div className="skill-card">
                  <div className="skill-card-header">{skill.title}</div>
                  <div className="skill-card-body">{skill.content}</div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>
      </SectionReveal>

      {/* Fun Facts Section */}
      <SectionReveal delay={0.4}>
        <section className="relative">
          <div className="grid lg:grid-cols-2 gap-8 relative z-10">
            <div className="flex items-center justify-center">
              <Image
                src="/images/about-fun-face.svg"
                alt="Fun facts decoration"
                width={64}
                height={64}
                className="w-64 h-64"
              />
            </div>
            <div>
              <h2 className="hash-title mb-12">my-fun-facts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { fact: "I like winter more than summer", delay: 0.1 },
                  { fact: "I often bike with my friends", delay: 0.2 },
                  { fact: "I like pizza and pasta", delay: 0.3 },
                  { fact: "I was in Egypt, Poland and Turkey", delay: 0.4 },
                  { fact: "My favorite movie is The Green Mile", delay: 0.5 },
                  { fact: "I am still in school", delay: 0.6 },
                  { fact: "I don't have any siblings", delay: 0.7 },
                ].map(({ fact, delay }, index) => (
                  <SectionReveal key={fact} delay={delay} direction="up">
                    <div
                      className="border p-2 inline-block transition-colors duration-300"
                      style={{
                        borderColor: "var(--border-color)",
                        width: "fit-content",
                      }}
                    >
                      <p>{fact}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>
    </div>
  );
}

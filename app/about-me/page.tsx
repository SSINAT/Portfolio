import Image from "next/image";
import DotPattern from "@/components/dot-pattern";
import DecorativeElements from "@/components/decorative-elements";

export default function AboutMe() {
  return (
    <div className="px-4 md:px-32 space-y-16 pb-16 relative">
      <DecorativeElements variant="about" />

      <section className="relative pt-8">
        <DotPattern className="top-20 right-10 w-32 h-32" />
        <DotPattern className="bottom-0 left-20 w-32 h-32" />

        <h1 className="section-title mb-4">about-me</h1>
        <p className="mb-12">Who am I</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p>Hello, I'm Sinat!</p>
            <p>
              I'm a self-taught full-stack development based in Phnomm Penh, Cambodia.
              I can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>
            <p>
              Transforming my creativity and knowledge into websites has been my
              passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <p>
              I'm currently looking for new opportunities to work with companies
              or individuals who want to make their online presence more
              effective. I'm open to freelance projects, part-time or full-time
              positions.
            </p>
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
              <p>TypeScript PHP JAVA Python JavaScript</p>
            </div>
          </div>

          <div className="border p-0" style={{ borderColor: "#ABB2BF" }}>
            <div className="border-b p-2" style={{ borderColor: "#ABB2BF" }}>
              <h3 className="text-white">Other</h3>
            </div>
            <div className="p-4">
              <p>HTML CSS EJS SCSS </p>
            </div>
          </div>

          <div className="border p-0" style={{ borderColor: "#ABB2BF" }}>
            <div className="border-b p-2" style={{ borderColor: "#ABB2BF" }}>
              <h3 className="text-white">Tools</h3>
            </div>
            <div className="p-4">
              <p>VSCode Neovim Linux Figma Git Font Awesome </p>
            </div>
          </div>

          <div className="border p-0" style={{ borderColor: "#ABB2BF" }}>
            <div className="border-b p-2" style={{ borderColor: "#ABB2BF" }}>
              <h3 className="text-white">Databases</h3>
            </div>
            <div className="p-4">
              <p>SQLite PostgreSQL Firebase</p>
            </div>
          </div>

          <div className="border p-0" style={{ borderColor: "#ABB2BF" }}>
            <div className="border-b p-2" style={{ borderColor: "#ABB2BF" }}>
              <h3 className="text-white">Frameworks</h3>
            </div>
            <div className="p-4">
              <p>React Vue Express.js Discord.js Vue.js Node.js</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="relative">
        <DotPattern className="top-10 right-10 w-32 h-32" />

        <h2 className="hash-title mb-12">my-fun-facts</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div
            className="border p-4 transition-colors duration-300"
            style={{ borderColor: "var(--border-color)" }}
          >
            <p>I like winter more than summer</p>
          </div>
          <div
            className="border p-4 transition-colors duration-300"
            style={{ borderColor: "var(--border-color)" }}
          >
            <p>I often bike with my friends</p>
          </div>
          <div
            className="border p-4 transition-colors duration-300"
            style={{ borderColor: "var(--border-color)" }}
          >
            <p>My favorite movie is The Matrix</p>
          </div>
          <div
            className="border p-4 transition-colors duration-300"
            style={{ borderColor: "var(--border-color)" }}
          >
            <p>I'm still in school</p>
          </div>
          <div
            className="border p-4 transition-colors duration-300"
            style={{ borderColor: "var(--border-color)" }}
          >
            <p>I like pizza and pasta</p>
          </div>
          <div
            className="border p-4 transition-colors duration-300"
            style={{ borderColor: "var(--border-color)" }}
          >
            <p>I don't have any pets</p>
          </div>
          <div
            className="border p-4 transition-colors duration-300"
            style={{ borderColor: "var(--border-color)" }}
          >
            <p>My favorite book is The Hobbit</p>
          </div>
        </div>
      </section>
    </div>
  );
}

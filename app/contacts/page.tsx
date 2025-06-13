import DotPattern from "@/components/dot-pattern"
import DecorativeElements from "@/components/decorative-elements";
export default function Contacts() {
  return (
    <div className="px-4 md:px-32 space-y-16 pb-16 relative overflow-hidden">
          <DecorativeElements variant="works" />
      <section className="relative pt-8">
        <DotPattern className="top-20 right-10 w-32 h-32" />
        <DotPattern className="bottom-0 left-20 w-32 h-32" />

        <h1 className="section-title mb-4">contacts</h1>
        <p className="mb-12">Who am I</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="mb-6">
              I'm interested in freelance opportunities. However, if you have
              other request or question, don't hesitate to contact me.
            </p>
          </div>
          <div className="border border-[#ABB2BF] p-6">
            <h3 className="text-white mb-4">Message me here</h3>
            <div className="space-y-4">
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

      {/* Media Section */}
      <section className="relative">
        <h2 className="hash-title mb-12">all-media</h2>

        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/iamnot401"
            className="text-white hover:text-primary"
          >
            Facebook
          </a>
          <a
            href="https://github.com/SSINAT"
            className="text-white hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sinat-sina-36765b238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            className="text-white hover:text-primary"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { Github, Dribbble ,Figma} from "lucide-react";
export default function MediaSidebar() {
  return (
    <div className="fixed left-4 top-20 transform -translate-y-1/2 z-10 hidden lg:block">
      <div className="flex flex-col items-center space-y-4">
        {/* Vertical line */}
        <div
          className="w-px h-48 opacity-40 transition-colors duration-300"
          style={{ backgroundColor: "var(--foreground)" }}
        ></div>

        {/* Social media icons */}
        <div className="flex flex-col space-y-4">
          <Link
            href="https://github.com/SSINAT"
            className="transition-colors duration-300"
            style={{ color: "var(--foreground)" }}
          >
            <Github className="h-5 w-5 hover:text-primary" />
          </Link>
          <Link
            href="#"
            className="transition-colors duration-300"
            style={{ color: "var(--foreground)" }}
          >
            <Dribbble className="h-5 w-5 hover:text-primary" />
          </Link>
          <Link
            href="#"
            className="transition-colors duration-300"
            style={{ color: "var(--foreground)" }}
          >
            <Figma className="h-5 w-5 hover:text-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-32 border-t border-[#ABB2BF]/40">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-white font-bold text-lg flex items-center"
            >
              <Image src="/images/Logo.svg" alt="Logo" width={72} height={21} />
            </Link>
            <p className="text-sm">
              Web designer and full-stack developer
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-white mb-4">Media</h3>
          <div className="flex gap-2">
            <Link
              href="https://github.com/SSINAT"
              className="text-foreground hover:text-white"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-foreground hover:text-white">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sinat-sina-36765b238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="text-foreground hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-xs text-center md:text-right">
        © Copyright 14 Jun 2025. Made by SINA SINAT
      </div>
    </footer>
  );
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "home", path: "/" },
    { name: "works", path: "/works" },
    { name: "about-me", path: "/about-me" },
    { name: "contacts", path: "/contacts" },
  ]

  return (
    <header className="py-8 px-4 md:px-32">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="text-white font-bold text-lg flex items-center"
        >
          <Image
            src="/images/Logo.svg"
            alt="Logo"
            width={72}
            height={21}
            priority
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`${
                    pathname === item.path ? "text-white" : "text-foreground"
                  } hover:text-white transition-colors`}
                >
                  <span className="text-primary">#</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="mt-4 md:hidden">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`${
                    pathname === item.path ? "text-white" : "text-foreground"
                  } hover:text-white transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-primary">#</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

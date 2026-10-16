"use client";

import { useState } from "react";

import { Facebook, Github, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "home", href: "/" },
  { name: "about", href: "/#about" },
  { name: "project", href: "/#project" },
  { name: "contact", href: "/#contact" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com/monaim69.mukul", Icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/monaimmukul/", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/monaim3", Icon: Github },
];

function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socials.map(({ label, href, Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="bg-[#1e1e1e] rounded-full p-2 hover:bg-primary transition-colors duration-300"
        >
          <Icon className="h-5 w-5 text-white" />
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`w-full backdrop-blur-md z-50 py-6 relative bg-black ${isHome ? "lg:bg-transparent" : ""}`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2" aria-label="Home">
              <Image src="/logo.png" width={100} height={94} alt="Monaim Mukul logo" className="w-[72px] md:w-[100px] h-auto" priority />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex justify-between items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors text-lg uppercase hover:text-primary ${
                    pathname === item.href ? "text-primary font-semibold" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex gap-5">
            <SocialLinks />
            <Button asChild className="primary-color text-white uppercase">
              <Link href="/#contact">Hire Me</Link>
            </Button>
          </div>

          {/*Mobile menu button*/}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="mt-6 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 uppercase hover:text-primary hover:bg-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-3 pt-4">
                <SocialLinks />
              </div>
              <Button asChild className="primary-color text-white w-full mt-4">
                <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                  Hire Me
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

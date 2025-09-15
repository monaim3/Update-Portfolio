"use client";

import { useEffect, useState } from "react";

import { Facebook, Github, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const navigation = [
    { name: "home", href: "/" },
    { name: "about", href: "#about" },
    { name: "project", href: "#project" },
    { name: "blog", href: "/blog" },
  ];

  const [bgBlack, setBgBlack] = useState(false);
  useEffect(() => {
    if (pathname !== "/") {
      setBgBlack(true);
    } else {
      setBgBlack(false);
    }
  }, [pathname]);
  return (
    <header className={` w-full backdrop-blur-md z-50 py-6 relative ${bgBlack ? "bg-black" : "bg-transparent"}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0  ">
            <Link href="/" className="flex items-center space-x-2">
              <span>
                {" "}
                <Image src="/logo.png" width={100} height={100} alt="logo" />
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className=" flex grow-7 justify-between items-center space-x-8">

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors text-lg uppercase ${pathname === item.href
                      ? "text-[#FA024F] font-semibold"
                      : "text-[#ffffff] "
                    }`}
                >
                  {item.name}
                </Link>
              ))}


              <div>

              </div>
            </div>
          </div>


          <div className=" hidden md:block ">
            <div className="flex gap-5">
              <div className=" flex space-x-4  ">
                <Link
                  href="https://facebook.com/monaim69.mukul"
                  target="_blank"
                  className="bg-[#1e1e1e] rounded-full p-2 hover:bg-[#FF014F] transition delay-150 duration-300 "
                >
                  <Facebook className="h-5 w-5 text-[#ffffff]" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/monaimmukul/"
                  target="_blank"
                  className="bg-[#1e1e1e] rounded-full p-2 hover:bg-[#FF014F] transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-[#ffffff]" />
                </Link>
                <Link
                  href="github.com/monaim3"
                  target="_blank"
                  className="bg-[#1e1e1e] rounded-full p-2 hover:bg-[#FF014F] transition-colors"
                >
                  <Github className="h-5 w-5 text-[#ffffff]" />
                </Link>
              </div>
              <div className="hidden md:block">
                <Link  target="_blank"
                      rel="noopener noreferrer" href="https://www.linkedin.com/in/monaimmukul/">
                  <Button className=" primary-color  text-white uppercase cursor-pointer
">Hire Me</Button>
                </Link>
              </div>
            </div>
          </div>


          {/*Mobile menu button*/}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400  focus:outline-none "
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
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 uppercase hover:text-primary hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex space-x-4 ">
                <Link
                  href="https://facebook.com/monaim69.mukul"
                  target="_blank"
                  className="bg-[#1e1e1e] rounded-full p-2 hover:bg-[#FF014F] transition delay-150 duration-300 "
                >
                  <Facebook className="h-5 w-5 text-[#ffffff]" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/monaimmukul/"
                  target="_blank"
                  className="bg-[#1e1e1e] rounded-full p-2 hover:bg-[#FF014F] transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-[#ffffff]" />
                </Link>
                <Link
                  href="https://github.com/monaim3"
                  target="_blank"
                  className="bg-[#1e1e1e] rounded-full p-2 hover:bg-[#FF014F] transition-colors"
                >
                  <Github className="h-5 w-5 text-[#ffffff]" />
                </Link>
              </div>
              <Link  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/monaimmukul/">
                <Button className=" primary-color w-full mt-4">Hire Me</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

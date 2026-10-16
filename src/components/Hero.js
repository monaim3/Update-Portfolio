"use client";

import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="lg:-mt-28 lg:min-h-screen overflow-hidden bg-[url('/banner-background-one.jpeg')] bg-cover bg-center relative z-10">
      <div className="container mx-auto px-4 md:px-8 flex items-center pt-10 lg:pt-28 pb-0">
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10 w-full">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl text-gray-300">HELLO</h2>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                I'm Monaim Mukul, a
              </h1>
              <div className="text-4xl md:text-6xl font-bold min-h-[1.2em]">
                <TypeAnimation
                  sequence={["Frontend Developer.", 2000, "Web Designer.", 2000]}
                  wrapper="span"
                  speed={50}
                  className="text-primary"
                  repeat={Infinity}
                />
              </div>
            </div>
            <p className="text-gray-400 text-lg max-w-xl">
              I build fast, responsive and animated web apps with React,
              Next.js and Tailwind CSS — from invoice tools to smart-home
              dashboards and multilingual agency sites.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild className="primary-color hover:opacity-90 text-white px-8 py-6 text-lg rounded-full">
                <Link href="#project">View Projects</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg rounded-full"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center">
            <span
              aria-hidden="true"
              className="absolute top-[12%] left-1/2 -translate-x-1/2 z-0 select-none whitespace-nowrap font-bold leading-none text-[56px] sm:text-[80px] lg:text-[110px] text-transparent opacity-40"
              style={{ WebkitTextStroke: "2px #FA024F" }}
            >
              DEVELOPER
            </span>
            <Image
              src="/mukul2.png"
              alt="Portrait of Monaim Mukul"
              width={2160}
              height={2160}
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="relative z-10 w-full max-w-[560px] h-auto"
              style={{
                maskImage: "linear-gradient(to bottom, black 80%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

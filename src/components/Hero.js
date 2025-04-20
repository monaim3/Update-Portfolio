"use client";

import { TypeAnimation } from 'react-type-animation';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link';



export default function Hero() {
  return (
    <main className="lg:-mt-28 min-h-screen overflow-hidden bg-[url('/banner-background-one.jpeg')] bg-cover bg-center hero-pattern relative  z-10">
      <div className="container mx-auto px-4 md:px-8 flex items-center pt-27 md:pt-28 ">
        <div className=" grid md:grid-cols-2 gap-8 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl text-gray-300">HELLO</h2>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                i'm Monaim Mukul a
              </h1>
              <div className="text-4xl md:text-6xl font-bold">
                <TypeAnimation
                  sequence={[
                    'Frontend Developer.',
                    2000,
                    'Web Designer.',
                    2000,

                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-primary"
                  repeat={Infinity}
                />
              </div>
            </div>
            <p className="text-gray-400 text-lg max-w-xl">
              Creative and detail-oriented developer with expertise in React.js, Next.js, and modern UI tools, passionate about building responsive, user-focused web applications. Always eager to learn, grow, and contribute to impactful digital experiences.
            </p>
           <Link href="#project">
           <Button className="primary-color hover:primary-color text-white px-8 py-6 text-lg rounded-full mt-4 cursor-pointer
">
              View Projects
            </Button>
            </Link>
          </div>
          {/* Right Content */}
          <div className=" relative ">
            <img
              src="/mukul2.png"
              alt="Professional"
              className="  z-20 relative flex  "

              // className=" w-full z-20 relative"
            />
            <div className="absolute  top-1/2 -translate-y-1/2 left-[20%]">
              <h3 className="z-10 text-[44px] lg:text-[72px] font-bold text-white whitespace-nowrap relative animate-bounce">
                WEB DEVELOPER
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
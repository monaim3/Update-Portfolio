"use client";

import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFramer,
} from "react-icons/si";
import styles from "./hero.module.css";

const orbitIcons = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Framer Motion", Icon: SiFramer, color: "#ffffff" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" } }),
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18 });
  const sy = useSpring(my, { stiffness: 120, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [10, -10]);

  const handleMouseMove = (e) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="lg:-mt-28 lg:min-h-screen overflow-hidden bg-[url('/banner-background-one.jpeg')] bg-cover bg-center relative z-10"
    >
      {/* Perspective grid floor */}
      <div className={styles.floor} aria-hidden="true">
        <div className={styles.grid} />
      </div>

      <div className="container mx-auto px-4 md:px-8 flex items-center pt-10 lg:pt-28 pb-0">
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10 w-full">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.h2 variants={fadeUp} initial="hidden" animate="show" custom={0} className="text-2xl md:text-3xl text-gray-300">
              HELLO
            </motion.h2>
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1} className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                I'm Monaim Mukul, a
              </h1>
              <div className="text-4xl md:text-6xl font-bold min-h-[1.2em]">
                <TypeAnimation
                  sequence={["Frontend Engineer.", 2000, "Software Developer.", 2000]}
                  wrapper="span"
                  speed={50}
                  className="text-primary"
                  repeat={Infinity}
                />
              </div>
            </motion.div>
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2} className="text-gray-400 text-lg max-w-xl">
              I build fast, responsive and animated web apps with React,
              Next.js and Tailwind CSS — from QR code platforms and live
              safety maps to exam-prep and ERP products.
            </motion.p>
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="flex flex-wrap gap-4 pt-2">
              <Button asChild className="primary-color hover:opacity-90 text-white px-8 py-6 text-lg rounded-full shadow-[0_0_30px_rgba(250,2,79,0.45)]">
                <Link href="#project">View Projects</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg rounded-full"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Content: 3D stage */}
          <motion.div
            className={styles.stage}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div className={styles.tilt} style={{ rotateX, rotateY }}>
              <div className={styles.glow} aria-hidden="true" />

              <Image
                src="/mukul-cutout.png"
                alt="Portrait of Monaim Mukul"
                width={1219}
                height={1290}
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className={styles.photo}
                style={{
                  maskImage: "linear-gradient(to bottom, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent)",
                }}
              />

              {/* Orbiting tech icons */}
              <div className={styles.orbitTilt} aria-hidden="true">
                <div className={styles.orbit}>
                  {orbitIcons.map(({ name, Icon, color }, i) => (
                    <div
                      key={name}
                      className={styles.item}
                      style={{ "--a": `${(360 / orbitIcons.length) * i}deg` }}
                    >
                      <div className={styles.face} title={name}>
                        <Icon style={{ color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.badge}>
                <span className={styles.dot} />
                Available for work
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

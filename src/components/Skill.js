"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
  SiTypescript,
  SiGit,
  SiMongodb,
  SiRedux,
  SiDjango,
  SiPostgresql,
  SiFramer,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <SiHtml5 className="w-10 h-10" style={{ color: "#E34F26" }} />,
    color: "border-orange-500",
  },
  {
    name: "CSS3",
    icon: <SiCss className="w-10 h-10" style={{ color: "#1572B6" }} />,
    color: "border-blue-500",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-10 h-10" style={{ color: "#F7DF1E" }} />,
    color: "border-yellow-400",
  },
  {
    name: "React.js",
    icon: <SiReact className="w-10 h-10" style={{ color: "#61DAFB" }} />,
    color: "border-cyan-400",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-10 h-10 text-white" />,
    color: "border-gray-400",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="w-10 h-10" style={{ color: "#06B6D4" }} />,
    color: "border-teal-400",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-10 h-10" style={{ color: "#539E43" }} />,
    color: "border-green-500",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-10 h-10" style={{ color: "#FFCA28" }} />,
    color: "border-amber-400",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-10 h-10" style={{ color: "#3178C6" }} />,
    color: "border-blue-500",
  },
  {
    name: "Git",
    icon: <SiGit className="w-10 h-10" style={{ color: "#F05032" }} />,
    color: "border-red-500",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-10 h-10" style={{ color: "#47A248" }} />,
    color: "border-green-600",
  },
  {
    name: "Redux",
    icon: <SiRedux className="w-10 h-10" style={{ color: "#764ABC" }} />,
    color: "border-purple-500",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer className="w-10 h-10 text-white" />,
    color: "border-pink-500",
  },
  {
    name: "Django",
    icon: <SiDjango className="w-10 h-10" style={{ color: "#44B78B" }} />,
    color: "border-emerald-600",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-10 h-10" style={{ color: "#4169E1" }} />,
    color: "border-blue-600",
  },
];

const duplicatedSkills = [...skills, ...skills];

const SkillCard = ({ name, icon, color }) => {
  return (
    <div className="relative group shrink-0">
      <div
        className={`
          w-48 h-32 rounded-xl
          bg-black/30
          border ${color}
          transition-colors duration-300
          flex flex-col items-center justify-center gap-2
          group-hover:bg-white/5
        `}
        style={{
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        <span className="text-3xl">{icon}</span>
        <span className="text-white font-medium text-lg">{name}</span>
      </div>
    </div>
  );
};

export default function Skill() {
  return (
    <section className="py-16 relative overflow-hidden section-bg">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent"
          >
            Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            Tools and technologies I use to build for the web
          </motion.p>
        </div>

        <div
          className="relative mx-auto overflow-hidden mt-6"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex items-center min-h-[200px]">
            <motion.div
              className="flex gap-6 pr-6 w-max"
              style={{ willChange: "transform" }}
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedSkills.map((skill, index) => (
                <SkillCard key={`${skill.name}-${index}`} {...skill} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

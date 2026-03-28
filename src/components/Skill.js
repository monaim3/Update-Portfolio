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
];

const duplicatedSkills = [...skills, ...skills];

const SkillCard = ({ name, icon, color }) => {
  return (
    <div className="relative group shrink-0">
      <div
        className={`
          w-48 h-32 rounded-xl
          bg-black/20 backdrop-blur-sm
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
    <section
      className="py-10 relative overflow-hidden bg-gradient-to-b from-gray-900 to-#6C0E2A "
      style={{
        backgroundImage:
          "linear-gradient(120deg, #151414 0%, #151414 50%, #6C0E2A 100%)",
      }}
    >
      <div className="absolute inset-0 " />
      <div className="absolute inset-0 " />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            Mastering the tools that shape the digital frontier
          </motion.p>
        </div>

        <div className="relative  mx-auto overflow-hidden">
          {/* Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32  z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10" />

          <div className="flex justify-center items-center min-h-[200px] overflow-hidden">
            <motion.div
              className="flex gap-6"
              style={{ willChange: "transform" }}
              animate={{
                x: [0, -150 * skills.length],
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

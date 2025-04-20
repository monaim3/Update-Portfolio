

"use client";

import { motion } from "framer-motion";

const skills = [

  { name: "HTML5", icon:  (
    <svg
      className="w-8 h-8 text-white"
      viewBox="0 0 128 128"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.8 0L9.3 114.8 64 128l54.8-13.2L117.3 0H19.8zm82.1 37.1H42.3l1.3 14.6h56.6l-4.3 47.6L64 108.1l-31.9-8.8-2.1-24.5h14.6l1 11.7 18.3 5 18.3-5 2-23H30.8L27.5 24.6h73.6l.8 12.5z" />
    </svg>
  ), color: "from-orange-500" },
  { name: "CSS3", icon: (
    <svg
      className="w-8 h-8 text-white"
      viewBox="0 0 128 128"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.8 0L9.3 114.8 64 128l54.8-13.2L117.3 0H19.8zm75.4 37.1H42.8l1.3 14.6h48.7l-3.9 43.4-24.9 6.9-24.8-6.9-1.7-18.9h14.5l.9 10.2 11.1 3.1 11.1-3.1 1.1-12.1H41.3L37.9 24.6h71.7l-2.4 12.5z" />
    </svg>
  ),
   color: "from-blue-500" },
  { name: "JavaScript", icon: (
    <svg
    className="w-8 h-8 text-white"
    viewBox="0 0 128 128"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="128" height="128" fill="#F7DF1E" rx="16" />
    <g transform="translate(32, 32)" fill="none" stroke="#000" strokeWidth="4">
      <circle cx="32" cy="32" r="30" />
      <text x="32" y="40" fontSize="32" fontFamily="Arial, sans-serif" fontWeight="bold" textAnchor="middle" dy=".3em">JS</text>
      <line x1="32" y1="62" x2="32" y2="70" stroke="#000" strokeWidth="2" />
      <line x1="62" y1="32" x2="70" y2="32" stroke="#000" strokeWidth="2" />
      <line x1="32" y1="2" x2="32" y2="10" stroke="#000" strokeWidth="2" />
      <line x1="2" y1="32" x2="10" y2="32" stroke="#000" strokeWidth="2" />
    </g>
  </svg>
  ),
   color: "from-yellow-500" },
  { name: "React.js", icon: "⚛️", color: "from-cyan-500" },
  { name: "Next.js", icon: "▲", color: "from-gray-500" },
  {
    name: "Tailwind",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M23.98 13.5c-5.16 0-8.56 2.58-10.21 7.73 2.05-2.58 4.33-3.63 6.84-3.15 1.49.3 2.57 1.42 3.8 2.69 2.22 2.28 4.8 4.93 10.6 4.93 5.16 0 8.56-2.58 10.21-7.73-2.05 2.58-4.33 3.63-6.84 3.15-1.49-.3-2.57-1.42-3.8-2.69-2.22-2.28-4.8-4.93-10.6-4.93Zm-10.21 11.27c-5.16 0-8.56 2.58-10.21 7.73 2.05-2.58 4.33-3.63 6.84-3.15 1.49.3 2.57 1.42 3.8 2.69 2.22 2.28 4.8 4.93 10.6 4.93 5.16 0 8.56-2.58 10.21-7.73-2.05 2.58-4.33 3.63-6.84 3.15-1.49-.3-2.57-1.42-3.8-2.69-2.22-2.28-4.8-4.93-10.6-4.93Z" />
      </svg>
    ),
    color: "from-teal-500",
  },
  { name: "Node.js", icon: (
    <svg
      className="w-8 h-8 text-white"
      viewBox="0 0 256 272"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M128.001 0 256 72.007v127.986L128.001 272 0 199.993V72.007L128.001 0Z" fill="#539E43"/>
      <path d="m52.393 144.29 15.883-9.17c3.061 5.431 5.832 10.02 12.47 10.02 6.378 0 10.413-2.495 10.413-12.208V107.55h19.43v25.438c0 20.13-11.804 29.28-29.008 29.28-15.523 0-24.511-8.026-29.188-18.019Zm78.423-1.057 15.884-9.187c4.182 6.839 9.593 11.803 19.182 11.803 8.064 0 13.227-4.032 13.227-9.593 0-6.656-5.27-9.02-14.148-12.92l-4.85-2.078c-14.008-5.963-23.282-13.468-23.282-29.281 0-14.58 11.11-25.694 28.475-25.694 12.355 0 21.24 4.305 27.621 15.62l-15.138 9.716c-3.328-5.964-6.921-8.327-12.484-8.327-5.683 0-9.29 3.607-9.29 8.327 0 5.83 3.607 8.193 11.932 11.803l4.85 2.077c16.496 7.056 25.77 14.198 25.77 30.566 0 17.534-13.77 27.122-32.28 27.122-18.06 0-29.703-8.612-35.462-19.944Z"/>
    </svg>
  ),
   color: "from-green-500" },
  { name: "Firebase", icon: "🔥", color: "from-amber-500" },
  { name: "TypeScript", icon: (
    <svg
      className="w-8 h-8 text-white"
      viewBox="0 0 256 256"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0v256h256V0H0z" fill="#3178C6"/>
      <path d="M128.11 116.22h-19.51v69.59H87.77v-69.59H68.32V97.14h59.79v19.08zm64.02 41.3c-2.61-1.64-5.52-3.07-8.69-4.18-2.52-.89-4.43-1.66-5.71-2.33a7.68 7.68 0 0 1-2.58-2.34c-.55-.81-.83-1.76-.83-2.84 0-1.39.37-2.58 1.1-3.55a7.12 7.12 0 0 1 3.02-2.2c1.29-.51 2.73-.77 4.3-.77 2.93 0 5.7.67 8.32 2a21.67 21.67 0 0 1 6.8 5.35l11.44-13.58a28.97 28.97 0 0 0-10.06-7.86c-4.19-2.01-9.18-3.02-14.96-3.02-4.91 0-9.32.83-13.2 2.49a22.8 22.8 0 0 0-9.39 7.26 19.53 19.53 0 0 0-3.71 11.58c0 4.4.83 8.03 2.5 10.87 1.66 2.84 4.16 5.25 7.48 7.22 2.13 1.3 5.02 2.59 8.69 3.88 2.9.98 4.97 1.87 6.2 2.68 1.22.81 2.09 1.66 2.6 2.55.5.89.75 1.91.75 3.07 0 1.63-.42 2.98-1.26 4.04a6.84 6.84 0 0 1-3.32 2.35 15.03 15.03 0 0 1-5.13.78c-3.4 0-6.88-.59-10.43-1.77a26.18 26.18 0 0 1-9.65-5.51l-11.99 13.29c4.26 4.07 9.3 7.04 15.12 8.93 5.82 1.89 12.07 2.83 18.75 2.83 5.62 0 10.55-.8 14.79-2.4 4.24-1.6 7.6-3.86 10.08-6.8 2.49-2.94 4.24-6.25 5.26-9.94.66-2.45.99-4.96.99-7.52 0-5.7-1.3-10.29-3.91-13.77-2.61-3.47-6.02-6.36-10.24-8.66z" fill="#fff"/>
    </svg>
  ),
   color: "from-blue-600" },
  { name: "Git", icon: (
    <svg
      className="w-8 h-8 text-white"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.799 8.207 11.387.6.111.793-.261.793-.58 0-.287-.01-1.048-.014-2.064-3.338.727-4.043-1.61-4.043-1.61-.546-1.389-1.333-1.762-1.333-1.762-1.091-.746.082-.732.082-.732 1.205.085 1.838 1.24 1.838 1.24 1.07 1.832 2.808 1.302 3.492.997.108-.775.42-1.303.76-1.602-2.666-.304-5.467-1.333-5.467-5.928 0-1.31.469-2.384 1.239-3.22-.126-.303-.536-.907.12-1.893 0 0 1.008-.322 3.302 1.23 1.338-.372 2.76-.56 4.17-.566 1.42.007 2.83.194 4.17.566 2.296-1.552 3.302-1.23 3.302-1.23.656.986.247 1.59.12 1.893.77.836 1.239 1.91 1.239 3.22 0 4.599-2.806 5.621-5.477 5.924.431.374.813 1.112.813 2.238 0 1.615-.014 2.92-.014 3.32 0 .318.192.693.795.58C20.564 21.798 24 17.303 24 12c0-6.627-5.373-12-12-12z"
      />
    </svg>
  ),
   color: "from-red-500" },
  { name: "MongoDB", icon: "🍃", color: "from-green-600" },
  { name: "Redux", icon: (
    <svg className="w-8 h-8 text-white" viewBox="0 0 256 244" xmlns="http://www.w3.org/2000/svg">
    <g fill="#764ABC">
      <path d="M182.6 130.1c-12.7 0-23 10.3-23 23 0 7 3.1 13.3 8.3 17.5-16.3 30.5-41.5 45.8-75.3 45.8-33.6 0-59.3-15.5-75.7-46.3-9.1-16.7-12-34.5-8.7-53.1 3.3-18.4 12.1-34.5 26.1-48.4C51.4 53.1 71.3 44.4 93 42.6c5.6 11.3 16.9 18.5 29.6 18.5 11.6 0 22-6 28-15.7 4.6-7.4 6-15.8 3.8-24.2C146.2 7.3 137.4 0 127 0c-4.6 0-9 1.4-12.8 4-4.8 3.2-8.3 8-10.1 13.5-22.8 1.8-44.1 10.6-63.2 25.9C18.8 69.1 4.1 92.9 0 121.7c-4.1 28.6 2.3 54.8 19.1 78.4C38.2 226 63.5 240 96 243.8c6.2.8 12.3 1.1 18.3 1.1 46.2 0 80.4-21.7 102.1-64.5 3.1.6 6.3.9 9.5.9 12.7 0 23-10.3 23-23 .1-12.6-10.2-22.9-22.9-22.9zm-55.2 91.7c-11.5 0-20.9-9.3-20.9-20.9s9.3-20.9 20.9-20.9 20.9 9.3 20.9 20.9c-.1 11.6-9.4 20.9-20.9 20.9z"/>
    </g>
  </svg>
  
  ),
   color: "from-purple-500" },
];

const duplicatedSkills = [...skills, ...skills];

const SkillCard = ({ name, icon, color }) => {
  return (
    <div className="relative group shrink-0">
      <div
        className={`
          w-48 h-32 rounded-xl 
          bg-gradient-to-br ${color} to-black/50
          border border-white/10 backdrop-blur-sm
          hover:border-pink-500/50 transition-all duration-300
          flex flex-col items-center justify-center gap-2
          group-hover:scale-105 transform
        `}
      >
        <span className="text-3xl">{icon}</span>
        <span className="text-white font-medium text-lg">{name}</span>

       
      </div>
    </div>
  );
};


  
export default function Skill() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-#6C0E2A "  style={{
      backgroundImage: 'linear-gradient(120deg, #151414 0%, #151414 50%, #6C0E2A 100%)',
    }}
>
   
      <div className="absolute inset-0 " />
      <div className="absolute inset-0 " />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
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

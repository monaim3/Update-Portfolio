"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const jobs = [
  {
    company: "AmarSolution",
    role: "Frontend Developer",
    period: "Jun 2025 – Present",
    current: true,
    points: [
      "Build and maintain ERP and e-commerce platforms with React.js and Next.js.",
      "Integrate REST APIs and ship dynamic features with cross-functional teams, with a focus on performance.",
    ],
    tags: ["Next.js", "React", "REST APIs", "ERP"],
  },
  {
    company: "Imagine Digital Studio",
    role: "Frontend Developer",
    period: "Sep 2024 – May 2025",
    points: [
      "Developed responsive web apps with React.js and Next.js that perform well across devices and browsers.",
      "Worked with designers and backend developers in an Agile team to turn designs into user-friendly interfaces.",
    ],
    tags: ["React", "Next.js", "JavaScript", "Agile"],
  },
  {
    company: "Codemen Solutions Inc.",
    role: "Frontend Developer Intern",
    period: "Mar 2024 – Aug 2024",
    points: [
      "Built front-end features with Next.js, JavaScript and Tailwind CSS, improving UI quality and performance.",
    ],
    tags: ["Next.js", "Tailwind CSS"],
  },
];

const education = [
  { degree: "BSc in Computer Science & Engineering", school: "Dhaka International University", period: "2023 – Present" },
  { degree: "Diploma in Computer Technology", school: "BPI", period: "2018 – 2023" },
];

function TimelineItem({ icon: Icon, children, index, highlight }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-12 md:pl-16"
    >
      <span
        className={`absolute left-0 top-1 flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full border ${
          highlight ? "border-primary bg-primary/20 shadow-[0_0_20px_rgba(250,2,79,0.5)]" : "border-white/15 bg-[#151414]"
        }`}
      >
        <Icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
      </span>
      {children}
    </motion.li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-black scroll-mt-4">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="mt-4 text-gray-400">2.5+ years building production web apps</p>
        </div>

        <ol className="relative space-y-8 before:absolute before:left-[17px] md:before:left-[21px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary before:via-white/15 before:to-transparent">
          {jobs.map((job, i) => (
            <TimelineItem key={job.company} icon={Briefcase} index={i} highlight={job.current}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-primary/40 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{job.role}</h3>
                    <p className="text-primary font-semibold">{job.company}</p>
                  </div>
                  <span
                    className={`text-sm rounded-full px-3 py-1 border ${
                      job.current ? "border-green-500/40 text-green-400 bg-green-500/10" : "border-white/15 text-gray-400"
                    }`}
                  >
                    {job.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-gray-300">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TimelineItem>
          ))}

          {education.map((ed, i) => (
            <TimelineItem key={ed.degree} icon={GraduationCap} index={jobs.length + i}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white">{ed.degree}</h3>
                  <p className="text-gray-400">{ed.school}</p>
                </div>
                <span className="text-sm rounded-full px-3 py-1 border border-white/15 text-gray-400">{ed.period}</span>
              </div>
            </TimelineItem>
          ))}
        </ol>
      </div>
    </section>
  );
}

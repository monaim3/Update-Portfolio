"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const jobs = [
  {
    company: "Pioneer Alpha",
    logo: "/logos/pioneeralpha.v2.png",
    logoShape: "rounded-[22%]",
    role: "Frontend Engineer",
    period: "Feb 2026 – Present",
    start: [2026, 2],
    current: true,
    points: [
      "Built the admin dashboard for Smart Sohay, an exam-prep platform trusted by 700K+ students, covering a 6 lakh+ question bank, model tests, live exams, subscriptions and coupons, and sales analytics.",
      "Built role-based access control driven by database permissions, reusable table and modal components, Excel import/export with a multi-step column-mapping wizard, and AI-assisted question extraction and fixing.",
      "Built the public website smartsohay.com and the frontend of SohayAI, an AI chatbot that answers students from the question bank.",
    ],
    tags: ["Next.js 15", "React", "Redux Toolkit", "RTK Query", "Tailwind CSS", "RBAC"],
  },
  {
    company: "AmarSolution",
    logo: "/logos/amarsolution.v2.png",
    logoShape: "rounded-[27%]",
    role: "Software Developer",
    period: "Jun 2025 – Jan 2026",
    duration: "8 mos",
    points: [
      "Built and maintained ERP and e-commerce platforms with React.js and Next.js.",
      "Integrated REST APIs and shipped dynamic features with cross-functional teams, with a focus on performance.",
    ],
    tags: ["Next.js", "React", "REST APIs", "ERP"],
  },
  {
    company: "Imagine Digital Studio",
    logo: "/logos/imagine.v2.png",
    logoShape: "rounded-full",
    role: "Frontend Developer",
    period: "Jun 2024 – May 2025",
    duration: "1 yr",
    points: [
      "Developed responsive web apps with React.js and Next.js that perform well across devices and browsers.",
      "Worked with designers and backend developers in an Agile team to turn designs into user-friendly interfaces.",
    ],
    tags: ["React", "Next.js", "JavaScript", "Agile"],
  },
  {
    company: "Codemen Solutions Inc.",
    logo: "/logos/codemen.v2.svg",
    logoShape: "rounded-[18%]",
    role: "Frontend Developer",
    type: "Internship",
    period: "Jan 2024 – Jun 2024",
    duration: "6 mos",
    points: [
      "Built front-end features with Next.js, JavaScript and Tailwind CSS, improving UI quality and performance.",
    ],
    tags: ["Next.js", "Tailwind CSS"],
  },
];

// LinkedIn-style duration from a [year, month] start until now, e.g. "1 yr 5 mos"
function durationSince([year, month]) {
  const now = new Date();
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month) + 1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo${m > 1 ? "s" : ""}`].filter(Boolean).join(" ");
}

// Soft pink spotlight that follows the cursor over a card
function trackSpotlight(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

function JobCard({ job, index }) {
  const duration = job.current ? durationSince(job.start) : job.duration;

  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="relative pl-16 md:pl-24"
    >
      {/* Company logo on the timeline */}
      <span
        className={`absolute left-0 top-2 z-10 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center overflow-hidden ${job.logoShape} ${
          job.current
            ? "shadow-[0_0_0_2px_rgba(250,2,79,0.9),0_0_26px_rgba(250,2,79,0.55)]"
            : "shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_6px_18px_rgba(0,0,0,0.6)]"
        }`}
      >
        <Image
          src={job.logo}
          alt={`${job.company} logo`}
          width={112}
          height={112}
          unoptimized={job.logo.endsWith(".svg")}
          className="h-full w-full object-contain"
        />
      </span>

      <div
        onMouseMove={trackSpotlight}
        className={`group relative overflow-hidden rounded-2xl p-[1px] transition-transform duration-300 hover:-translate-y-1 ${
          job.current
            ? "bg-gradient-to-br from-primary/80 via-primary/20 to-white/10"
            : "bg-white/10 hover:bg-gradient-to-br hover:from-primary/50 hover:to-white/10"
        }`}
      >
        <div className="relative rounded-2xl bg-[#0b0a0b] p-6 md:p-7">
          {/* spotlight */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(250,2,79,0.12), transparent 70%)",
            }}
          />

          <div className="relative flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-white">{job.role}</h3>
                {job.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 border border-green-500/30 px-2.5 py-0.5 text-xs font-semibold text-green-400">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                    </span>
                    Current
                  </span>
                )}
                {job.type && (
                  <span className="rounded-full bg-white/5 border border-white/15 px-2.5 py-0.5 text-xs font-semibold text-gray-300">
                    {job.type}
                  </span>
                )}
              </div>
              <p className="mt-1 text-primary font-semibold">{job.company}</p>
            </div>
            <div className="w-full sm:w-auto sm:text-right">
              <p className="text-sm text-gray-300">{job.period}</p>
              <p className="text-xs text-gray-500 mt-0.5" suppressHydrationWarning>
                {duration}
              </p>
            </div>
          </div>

          <ul className="relative mt-5 space-y-2.5 text-gray-300">
            {job.points.map((p) => (
              <li key={p} className="flex gap-3">
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="relative mt-5 flex flex-wrap gap-2">
            {job.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-pink-100"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.li>
  );
}

export default function Experience() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  return (
    <section id="experience" className="relative bg-black scroll-mt-4 overflow-hidden">
      {/* faint glow behind the section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="relative container mx-auto px-4 py-16 md:py-20 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="mt-4 text-gray-400">2.5+ years building production web apps</p>
        </div>

        <ol ref={listRef} className="relative space-y-8">
          {/* timeline track + pink fill that grows while scrolling */}
          <span aria-hidden="true" className="absolute left-6 md:left-7 top-3 bottom-3 w-px bg-white/10" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: lineScale }}
            className="absolute left-6 md:left-7 top-3 bottom-3 w-px origin-top bg-gradient-to-b from-primary via-primary to-pink-300 shadow-[0_0_10px_rgba(250,2,79,0.8)]"
          />
          {jobs.map((job, i) => (
            <JobCard key={job.company} job={job} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

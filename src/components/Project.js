"use client";
import Card from "../components/Card";
import { useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { onLenisScroll } from "@/lib/lenis";

const projects = [
  {
    name: "QRCenter",
    description:
      "A QR code SaaS with 12 code types (URL, vCard, PDF, Wi-Fi, menu…). A 3-step builder lets users style colors, frames and logos with a live phone preview, then pay with Stripe. Redux keeps the multi-step state in sync.",
    image: "/qr-center.png",
    technologies: ["Next.js", "Redux Toolkit", "Stripe", "Tailwind CSS"],
    liveLink: "https://qr-code-red-seven.vercel.app/generator",
    githubLink: "https://github.com/monaim3/QR-Code",
  },
  {
    name: "SafePath",
    description:
      "Full-stack safety map for Dhaka. Anonymous snatching reports are grouped into H3 hexagons on a 3D map that changes by time of day. Includes a moderation queue, push alerts for watched areas and privacy-first analytics.",
    image: "/safepath.png",
    technologies: ["Next.js", "MapLibre GL", "Django REST", "PostgreSQL"],
    liveLink: "https://chintai-bd.vercel.app/",
    githubLink: "https://github.com/monaim3/SafePath",
  },
  {
    name: "Invoice Generator",
    description:
      "Billing app built for Milon Motors to replace hand-written bills. Manage customers and parts, reuse invoice templates, track paid, partial and due amounts, then print or download a branded PDF. One-click demo login.",
    image: "/milonmotors-v2.png",
    technologies: ["React", "Ag-Grid", "Pdfmake", "PWA"],
    liveLink: "https://invoice-generator24.netlify.app/",
    githubLink: "https://github.com/monaim3/Invoice-generator",
  },
  {
    name: "Smart Sohay",
    description:
      "Exam-prep platform for SSC, HSC, admission and job exams, trusted by 700K+ students. At Pioneer Alpha I built the public website and the admin dashboard behind its 6 lakh+ question bank, live exams and subscriptions.",
    image: "/smartsohay.png",
    technologies: ["Next.js 15", "Redux Toolkit", "RTK Query", "Tailwind"],
    liveLink: "https://smartsohay.com/",
    githubLink: "https://github.com/monaim3/smart-soha-v1",
  },
  {
    name: "SohayAI",
    description:
      "AI study assistant for Smart Sohay students. Ask any question and get an answer grounded in the 6 lakh+ question bank. I built the frontend: the chat interface and the account login and registration flow.",
    image: "/sohayai-chat.png",
    technologies: ["Next.js", "React", "AI Chat", "Tailwind"],
    liveLink: "https://sohayai.smartsohay.com/",
  },
];

const Project = () => {
  const container = useRef(null);
  // 0 → 1 while the card stack scrolls past (same as useScroll "start start" → "end end"),
  // updated from Lenis in the same frame it moves the page so the cards don't shake.
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const measure = () => {
      const el = container.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      scrollYProgress.set(distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0);
    };
    measure();
    const offLenis = onLenisScroll(measure);
    window.addEventListener("scroll", measure, { passive: true }); // fallback if Lenis is off
    window.addEventListener("resize", measure);
    return () => {
      offLenis();
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [scrollYProgress]);

  return (
    <section className="relative bg-black" id="project">
      <div className="pt-16 md:pt-20 bg-black">
        <h2 className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="mt-4 text-center text-gray-400 px-4">
          A few things I've designed and built recently
        </p>
      </div>
      <div ref={container} className="main relative md:mt-6 pb-16 md:pb-12">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.03;
          return (
            <Card
              key={project.name}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i / projects.length, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Project;

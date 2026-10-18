"use client";
import Card from "../components/Card";
import { useScroll } from "framer-motion";
import { useRef } from "react";

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
      "Built for Milon Motors to replace hand-written bills. Sellers log in, add items in an Ag-Grid table with auto totals and amount-in-words, then print or export a branded PDF. Works offline as an installable app.",
    image: "/milonmotors.png",
    technologies: ["React", "Ag-Grid", "Pdfmake", "PWA"],
    liveLink: "https://invoice-generator24.netlify.app/",
    githubLink: "https://github.com/monaim3/Invoice-generator",
  },
  {
    name: "Smart Sohay",
    description:
      "Bengali exam-prep platform for SSC, HSC, admission and job exams, with a question bank, live exams, doubt solving and flashcards. Trusted by 700K+ students. Built with Next.js, React Query and Google sign-in.",
    image: "/smart-home.png",
    technologies: ["Next.js", "React Query", "Three.js", "Tailwind"],
    liveLink: "https://smart-sohay.vercel.app/",
    githubLink: "https://github.com/monaim3/smart-soha-v1",
  },
];

const Project = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative bg-black" id="project">
      <div className="pt-16 pb-16 md:pb-12 bg-black">
        <h2 className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="mt-4 text-center text-gray-400 px-4">
          A few things I've designed and built recently
        </p>
      </div>
      <div ref={container} className="main relative">
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

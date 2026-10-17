"use client";
import Card from "../components/Card";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "QRCenter",
    description:
      "A full QR code platform: pick from 12 types (URL, vCard, PDF, Wi-Fi, menu and more), add content, then customize colors, frames and logos with a live phone preview. Includes Stripe payments.",
    image: "/qr-center.png",
    technologies: ["Next.js", "Redux Toolkit", "Stripe", "Tailwind CSS"],
    liveLink: "https://qr-code-red-seven.vercel.app/generator",
    githubLink: "https://github.com/monaim3/QR-Code",
  },
  {
    name: "SafePath",
    description:
      "A full-stack Bengali/English safety map for Dhaka showing where and when snatching incidents happen. A 3D hex map changes by time of day, people report incidents anonymously, and it suggests lower-risk routes.",
    image: "/safepath.png",
    technologies: ["Next.js", "MapLibre GL", "Django REST", "PostgreSQL"],
    liveLink: "https://chintai-bd.vercel.app/",
    githubLink: "https://github.com/monaim3/SafePath",
  },
  {
    name: "Invoice Generator",
    description:
      "A React.js-based invoice generator for stalls to create, manage, and print/download detailed customer invoices with payment status, notes, and signature.",
    image: "/milonmotors.png",
    technologies: ["React", "Ag-Grid-React", "Pdfmake"],
    liveLink: "https://invoice-generator24.netlify.app/",
    githubLink: "https://github.com/monaim3/Invoice-generator",
  },
  {
    name: "Smart Sohay Home",
    description:
      "A modern smart home automation web app built with Next.js, featuring smooth animations, responsive design, and an intuitive UI for controlling home devices.",
    image: "/smart-home.png",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    liveLink: "https://smart-sohay.vercel.app/",
    githubLink: "https://github.com/monaim3/Smart-Sohay-Home",
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

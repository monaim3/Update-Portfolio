"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { useTransform, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Card = ({
  i,
  name,
  description,
  image,
  liveLink,
  githubLink,
  progress,
  range,
  targetScale,
  technologies,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundImage: "linear-gradient(135deg, #1c1a1b 0%, #151414 55%, #4a0a1e 100%)",
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <div className="grid md:grid-cols-2 gap-0 items-center h-full">
          <div className="p-4 md:p-8">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-video overflow-hidden rounded-xl border border-white/10 group"
            >
              <Image
                src={image}
                alt={`${name} screenshot`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          </div>
          <div className="px-6 pb-8 md:p-10 flex flex-col justify-center">
            <span className="text-primary font-semibold tracking-widest text-sm mb-2">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              {name}
            </h3>
            <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8">{description}</p>
            <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 text-sm rounded-full text-white bg-primary/10 border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 text-white bg-primary rounded-lg hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <Github size={20} />
                Code
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;

'use client'
import Image from 'next/image';
import styles from './style.module.css';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Card = ({i, name, description,image, liveLink, githubLink, color, progress, range, targetScale,technologies}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
  const isGradient = color.startsWith("linear-gradient");

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div 
        style={{
            ...(isGradient ? { backgroundImage: color } : { backgroundColor: color }),
            scale,
            top: `calc(-5vh + ${i * 25}px)`
          }} 
        className={styles.card}
      >
        
     
          <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 flex items-center mt-12 hidden md:block">
                  <Image
                    src={`${image}`}
                    alt="image" 
                    fill
                    className=""
                  />                 
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {name}
                  </h3>
                  <p className="text-white text-lg mb-8">{description}</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {technologies.map((tech, j) => (
                      <span
                        key={j}
                        className="px-4 py-2 text-sm rounded-full text-white"
                        style={{
                            backgroundImage: "linear-gradient(120deg, rgb(21, 20, 20) 0%, rgb(21, 20, 20) 50%, rgb(108, 14, 42) 100%)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 lg:py-3 text-white transition-colors duration-300 border-2 rounded-lg"
                      style={{ backgroundColor: color }}
                    >
                      <ExternalLink size={20} />
                      View Project
                    </a>
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border-2 text-white rounded-lg transition-all duration-300"
                      style={{
                        borderColor:color,
                        color: color,
                      }}
                      >
                      <Github size={20} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
      </motion.div>
    </div>
  )
}

export default Card
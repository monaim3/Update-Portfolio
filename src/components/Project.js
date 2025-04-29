'use client';
import Card from '../components/Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'

const projects = [
  {
    name: "Invoice Generator",
    description: "A React.js-based invoice generator for stalls to create, manage, and print/download detailed customer invoices with payment status, notes, and signature.",
    image: "/milonmotors.png",
    technologies: ["React", "Ag-Grid-React", "Pdfmake", ],
    liveLink: "https://invoice-iota-ten.vercel.app/",
    githubLink: "https://github.com/monaim3/Invoice-generator",
    color: "linear-gradient(120deg,  #B80F9D  0%, #B80F9D  50%, #611879 100%)"
  },
  {
    name: "Ecommerce-Furns",
    description: "A responsive e-commerce website for daily products, featuring a product-rich homepage, secure cart access upon login, and an order tracking page.",
    image: "/furns.png",
    technologies: ["React", "Tailwind", "Firebase",],
    liveLink: "https://furns-da0ff.web.app/",
    githubLink: "https://github.com/monaim3/Furniture",
    color: "linear-gradient(120deg,  #0394B0  0%, #0394B0  50%, #0A5363  100%)"
  },
  {
    name: "Crazy Devs",
    description: "Built a fully responsive startup agency portfolio website using Next.js, featuring one-click English-Arabic translation, optimized routing, and a sleek, modern UI for all devices.",
    image: "/crazy-devs.jpeg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", ],
    liveLink: "https://crazy-dev-gilt.vercel.app/en",
    githubLink: "https://github.com/monaim3/Crazy-Devs",
    color: "linear-gradient(120deg, #42BE8B  0%, #42BE8B  50%, #85F8C1  100%)"
  },
 
 
];
 const Project = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (

    <section className="relative bg-black" id="project">
          <div className=" py-12 bg-black z-50">
          <h2 className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent">
          Featured Projects
          </h2>
       </div>
    <main ref={container} className="main">
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
    </section>
  )
}

export default Project;
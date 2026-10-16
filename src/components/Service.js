import { Code2 } from "lucide-react";
import { FaWordpress } from "react-icons/fa";
import { SiWebflow } from "react-icons/si";

const services = [
  {
    title: "Front-End Development",
    description:
      "Pixel-perfect, responsive interfaces built with React, Next.js and Tailwind CSS — fast, accessible and easy to maintain.",
    Icon: Code2,
  },
  {
    title: "WordPress",
    description:
      "Custom, easy-to-edit WordPress sites so you can manage your own content without touching code.",
    Icon: FaWordpress,
  },
  {
    title: "Webflow",
    description:
      "Visually polished Webflow sites with smooth interactions, CMS collections and clean, responsive layouts.",
    Icon: SiWebflow,
  },
];

export default function Service() {
  return (
    <section className="section-bg">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent">
            My Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="group p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/50"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
              <p className="text-gray-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

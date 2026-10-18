import { Code2, Layers, Sparkles } from "lucide-react";

const services = [
  {
    title: "Frontend Engineering",
    description:
      "Pixel-perfect, responsive interfaces in React, Next.js and TypeScript. Fast, accessible, SEO-friendly and easy to maintain.",
    Icon: Code2,
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "Dashboards, ERP and e-commerce features, SaaS products. I connect the UI to REST APIs, auth, payments and databases.",
    Icon: Layers,
  },
  {
    title: "Interactive UI & Motion",
    description:
      "Smooth animations, 3D touches and interactive maps with Framer Motion, Three.js and MapLibre, without slowing the page down.",
    Icon: Sparkles,
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

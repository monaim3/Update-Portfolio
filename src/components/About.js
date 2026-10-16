import { MapPin, Code2, Rocket } from "lucide-react";

const facts = [
  { Icon: MapPin, label: "Based in", value: "Dhaka, Bangladesh" },
  { Icon: Code2, label: "Focus", value: "React · Next.js · Tailwind" },
  { Icon: Rocket, label: "Shipped", value: "3 live projects" },
];

export default function About() {
  return (
    <section id="about" className="bg-black scroll-mt-4">
      <div className="container mx-auto px-4 md:px-8 py-20 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 space-y-6">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Frontend developer who cares about the details.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm Monaim Mukul, a frontend developer from Dhaka. I turn ideas and
            designs into responsive, accessible interfaces using React and
            Next.js, and I like adding motion that makes a product feel alive
            without slowing it down.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            I've built business tools like an invoice generator with PDF export,
            a smart-home control dashboard, and a bilingual English–Arabic
            agency site. I'm currently open to frontend roles and freelance
            projects.
          </p>
        </div>

        <ul className="lg:col-span-2 grid gap-4">
          {facts.map(({ Icon, label, value }) => (
            <li
              key={label}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </span>
              <span>
                <span className="block text-sm text-gray-400">{label}</span>
                <span className="block text-lg font-semibold text-white">{value}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

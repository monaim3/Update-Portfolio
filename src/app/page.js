import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Service from "@/components/Service";
import Skill from "@/components/Skill";
import Hire from "../components/Hire";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
     <Hero></Hero>
     <Skill></Skill>
     <Project></Project>
     <Service></Service>
     <Hire></Hire>
     <Contact></Contact>
    </div>
  );
}

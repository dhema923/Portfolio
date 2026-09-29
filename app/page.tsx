import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="section-rule mx-auto max-w-6xl" />
      <Work />
      <div className="section-rule mx-auto max-w-6xl" />
      <Experience />
      <div className="section-rule mx-auto max-w-6xl" />
      <About />
      <div className="section-rule mx-auto max-w-6xl" />
      <Skills />
      <div className="section-rule mx-auto max-w-6xl" />
      <Contact />
    </main>
  );
}

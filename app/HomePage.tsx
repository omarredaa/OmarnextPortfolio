import { Hero } from "../sections/Hero";
import { DownloadCV } from "../sections/DownloadCV";
import { About } from "../sections/About";
import { Skills } from "../sections/Skills";
import { Projects } from "../sections/Projects";
import { Experience } from "../sections/Experience";
import { Contact } from "../sections/Contact";

interface HomePageProps {
  specialization?: string;
}

export default function HomePage({ specialization }: HomePageProps) {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <DownloadCV specialization={specialization} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

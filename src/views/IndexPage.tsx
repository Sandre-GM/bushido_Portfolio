import ButtonsMode from "../components/ButtonsMode";
import HeroHome from "../components/HeroHome";
import Carrousel from "../components/Carrousel";
import FeatureProjects from "../components/FeatureProjects";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Extra from "../components/Extra";

export default function IndexPage() {
  return (
    <div className="mt-25">
      <HeroHome />
      <ButtonsMode />
      <FeatureProjects />
      <Carrousel />
      <Skills />
      <Services />
      <Experience />
      <Extra />
      <Contact />
    </div>
  );
}

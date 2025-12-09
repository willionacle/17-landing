import Cards from "./cards";
import TopText from "./toptext";

export default function Projects() {
  return (
    <section id="projects" className="py-18">
      <div className="max-w-11/12 lg:max-w-8xl mx-auto">
        <TopText />
        <Cards />
      </div>
    </section>
  );
}

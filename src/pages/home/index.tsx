import { Separator } from "@/components/ui/separator";
import About from "./about";
import Hero from "./hero";
import Projects from "./projects";
import Industries from "./industries";
import SilverI7 from "@/components/silver-i7";
import Testimonials from "./testimonials";
import Contact from "./contact";
import BackToTop from "@/components/back-to-top";
import { useEffect } from "react";
import BlurFade from "@/components/blur-fade";

export const divider = (
  <Separator className="max-w-11/12 mx-auto lg:max-w-8xl" />
);

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, []);
  return (
    <>
      <BlurFade delay={0.2}>
        <Hero />
      </BlurFade>
      {divider}
      <BlurFade delay={0.2}>
        <About />
      </BlurFade>
      {divider}
      <BlurFade delay={0.2}>
        <Projects />
      </BlurFade>
      {divider}
      <BlurFade delay={0.2}>
        <Industries />
      </BlurFade>
      <BlurFade delay={0.2}>
        <SilverI7 />
      </BlurFade>
      {divider}
      <BlurFade delay={0.2}>
        <Testimonials />
      </BlurFade>
      {divider}
      <BlurFade delay={0.2}>
        <Contact />
      </BlurFade>
      <BackToTop />
    </>
  );
}

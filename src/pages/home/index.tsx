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
      <Hero />
      {divider}
      <About />
      {divider}
      <Projects />
      {divider}
      <Industries />
      <SilverI7 />
      {divider}
      <Testimonials />
      {divider}
      <Contact />
      <BackToTop />
    </>
  );
}

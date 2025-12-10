import { Separator } from "@/components/ui/separator";
import Middle from "./middle";
import Top from "./top";
import Pillars from "./pillars";
import Bottom from "./bottom";
import Gallery from "./gallery";
import BlurFade from "@/components/blur-fade";

export default function About() {
  return (
    <section className="py-18 lg:pt-44">
      <div className="max-w-11/12 lg:max-w-8xl gap-5 mx-auto">
        <BlurFade>
          <Top />
        </BlurFade>
        <BlurFade>
          <Middle />
        </BlurFade>
        <Separator />
        <BlurFade>
          <Pillars />
        </BlurFade>
        <Separator />
        <BlurFade>
          <Bottom />
        </BlurFade>
        <Separator />
        <BlurFade>
          <Gallery />
        </BlurFade>
      </div>
    </section>
  );
}

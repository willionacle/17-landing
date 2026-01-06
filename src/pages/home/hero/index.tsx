import { Button } from "@/components/ui/button";
import CarouselText from "./carousel-text";
import Scene from "./logo-3d";
import Scroll from "@/assets/img/scroll.gif";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[url('/img/herobg-mobile.png')] lg:bg-[url('/img/herobg.png')] lg:mt-[-50px] h-dvh lg:h-[calc(100dvh+200px)] flex items-center justify-center w-full bg-cover bg-bottom"
    >
      <div className="max-w-11/12 lg:max-w-8xl flex flex-col gap-5 items-center lg:justify-between text-center">
        <Scene />
        <span className="lg:text-4xl italic mt-44">Empowering you with</span>
        <CarouselText />
        <div className="flex justify-center items-center w-full pb-14 pt-8 bg-[url('/bg-red-gradient.jpg')] bg-cover bg-center">
          <Button
            className="
          bg-neutral-800
          px-8 lg:px-11 py-5 lg:py-10
          rounded-md
          shadow-[0_0_20px_rgba(255,0,0,0.4)]
          text-md lg:text-2xl
          border border-white/80
          hover:bg-neutral-900
          max-w-fit
        "
          >
            <span className="text-yellow-300">your </span>
            <span className="font-bold italic text-white">Business </span>
            <span className="text-yellow-300">is our </span>
            <span className="font-bold text-red-500 italic">Business</span>
          </Button>
        </div>
        <span
          className="text-xs lg:text-lg block relative z-10"
          style={{
            textShadow: "0 2px 8px #000",
          }}
        >
          For inquiries, contact us at{" "}
          <a
            href="tel:+639173092317"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            +63917-309-2317
          </a>{" "}
          or email us at{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@intelliseven.com.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            sales@intelliseven.com.ph
          </a>
          .
        </span>
      </div>
      <a href="#about" className="absolute bottom-[70px]">
        <img src={Scroll} className="w-12 animate animate-pulse" />
      </a>
    </section>
  );
}

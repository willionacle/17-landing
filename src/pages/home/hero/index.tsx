import Logo from "@/assets/logo2.png";
import { Button } from "@/components/ui/button";
import CarouselText from "./carousel-text";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[url('/img/herobg-mobile.png')] lg:bg-[url('/img/herobg.png')] lg:mt-[-50px] h-dvh lg:h-[calc(100dvh+200px)] flex items-center justify-center w-full bg-cover bg-bottom"
    >
      <div className="max-w-11/12 lg:max-w-8xl flex flex-col gap-5 items-center lg:justify-between text-center">
        <img src={Logo} className="w-32 lg:w-56 lg:mb-8" />
        <span className="lg:text-4xl italic">Empowering you with</span>
        <CarouselText />
        <div className="flex justify-center items-center w-full py-10 bg-[url('/bg-red-gradient.jpg')] bg-cover bg-center lg:mb-10">
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
        <span className="text-xs lg:text-lg mt-20 lg:mt-0">
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
            href="https://mail.google.com/mail/?view=cm&fs=1&to=i7@intelliseven.com.ph."
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            i7@intelliseven.com.ph
          </a>
          .
        </span>
      </div>
      <a href="#about" className="absolute bottom-[70px]">
        <img src="/img/scroll.gif" className="w-12 animate animate-pulse" />
      </a>
    </section>
  );
}

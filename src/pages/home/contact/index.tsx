import { Button } from "@/components/ui/button";
import { IconMail } from "@tabler/icons-react";

import ContactBg from "@/assets/img/contactbg.png";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-18 text-center">
      <div
        className="border rounded-2xl py-12 lg:py-60 px-6 bg-cover bg-center max-w-11/12 lg:max-w-8xl mx-auto flex flex-col lg:gap-5 justify-center items-center"
        style={{ backgroundImage: `url(${ContactBg})` }}
      >
        <div className="border rounded-full text-yellow-300 py-2 px-5">
          Innovate with IntelliSeven
        </div>

        <p className="my-7 text-2xl lg:text-6xl font-bold font-[Playfair_Display]">
          We are ready to help your business achieve{" "}
          <span className="italic text-yellow-300">Excellence</span>
        </p>

        <span>
          Rise to the top and achieve powerful results through cutting-edge IT.
        </span>

        <Button
          asChild
          className="border border-zinc-800 mt-7 bg-linear-to-r text-white from-black/90 to-neutral-700 flex items-center gap-2"
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@intelliseven.com.ph"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconMail />
            Send us an email
          </a>
        </Button>
      </div>
    </section>
  );
}

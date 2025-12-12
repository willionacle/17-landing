import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function CarouselText() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const items = [
    "Better Technology ",
    "Custom Software",
    "Scalable Systems",
    "Modern Solutions",
    "Digital Power",
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-fit max-w-xs lg:max-w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <h1 className="text-inset-black text-yellow-300 mx-auto font-black italic w-fit text-3xl lg:text-8xl text-shadow-2xs pb-2">
              {item}
            </h1>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

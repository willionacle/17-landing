import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function CarouselText() {
  const autoplay = React.useMemo(
    () => Autoplay({ delay: 2000, stopOnInteraction: false }),
    []
  );

  const items = [
    "Better Technology",
    "Custom Software",
    "Scalable Systems",
    "Modern Solutions",
    "Digital Power",
  ];

  // const isDesktop =
  //   typeof window !== "undefined" &&
  //   window.matchMedia("(hover: hover)").matches;

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[autoplay]}
      className="w-fit max-w-xs lg:max-w-full"
      // onMouseEnter={isDesktop ? autoplay.stop : undefined}
      // onMouseLeave={isDesktop ? autoplay.reset : undefined}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <h1 className="text-inset-black text-yellow-300 mx-auto font-black italic w-fit text-3xl lg:text-8xl pb-2">
              {item}
            </h1>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

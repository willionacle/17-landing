import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Gallery() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [api, setApi] = useState<any>();
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap() + 1);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
  }, [api, onSelect]);

  return (
    <div className="pt-18 lg:text-center">
      <h1 className="font-[Playfair_Display] text-4xl text-center lg:text-6xl italic font-extrabold mb-3">
        IntelliSeven in Action
      </h1>

      <p className="text-justify mb-18 lg:text-center lg:max-w-6/12 lg:mx-auto">
        Scroll through our business gallery and discover how IntelliSeven
        connects businesses to the future with nonstop innovation. Check out
        solutions that perform.
      </p>

      <Carousel
        className="w-full max-w-sm md:max-w-full relative mx-auto"
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-1">
          {Array.from({ length: 27 }).map((_, index) => {
            const isActive = index === activeIndex;

            return (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3 transition-all duration-300"
              >
                <Card
                  className={clsx(
                    "p-0 overflow-hidden rounded-lg transition-all duration-300",
                    !isActive && "lg:blur-md lg:opacity-30 lg:scale-80",
                    isActive && "opacity-100 scale-100"
                  )}
                >
                  <CardContent className="flex aspect-video items-center justify-center p-0">
                    <img
                      src={`/img/gallery/${index + 1}.jpg`}
                      className={clsx(
                        "h-[220px] md:h-[350px] w-full object-cover rounded-lg"
                      )}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="-left-2 cursor-pointer text-black hover:text-black bg-white! md:left-56 lg:backdrop-blur-none" />
        <CarouselNext className="-right-2 cursor-pointer text-black hover:text-black bg-white! md:right-56 lg:backdrop-blur-none" />
      </Carousel>
    </div>
  );
}

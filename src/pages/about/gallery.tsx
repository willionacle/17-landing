import { useCallback, useEffect, useRef, useState } from "react";
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

import Gallery1 from "@/assets/img/gallery/1.jpg";
import Gallery2 from "@/assets/img/gallery/2.jpg";
import Gallery3 from "@/assets/img/gallery/3.jpg";
import Gallery4 from "@/assets/img/gallery/4.jpg";
import Gallery5 from "@/assets/img/gallery/5.jpg";
import Gallery6 from "@/assets/img/gallery/6.jpg";
import Gallery7 from "@/assets/img/gallery/7.jpg";
import Gallery8 from "@/assets/img/gallery/8.jpg";
import Gallery9 from "@/assets/img/gallery/9.jpg";

const galleryImages = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  Gallery9,
];

export default function Gallery() {
  const autoplayRef = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [api, setApi] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
  }, [api, onSelect]);

  return (
    <div className="pt-18 lg:text-center">
      <h1 className="font-[Playfair_Display] text-4xl text-center lg:text-6xl italic font-extrabold mb-3 lg:mb-7">
        <span className="text-yellow-300">Intelli</span>
        <span className="text-red-500">Seven</span> in Action
      </h1>

      <p className="text-justify mb-18 lg:text-center lg:max-w-6/12 lg:mx-auto">
        Scroll through our business gallery and discover how IntelliSeven
        connects businesses to the future with nonstop innovation. Check out
        solutions that perform.
      </p>

      <Carousel
        className="w-full max-w-sm md:max-w-full relative mx-auto"
        setApi={setApi}
        plugins={[autoplayRef.current]}
        opts={{
          loop: true,
        }}
        onMouseEnter={autoplayRef.current.stop}
        onMouseLeave={autoplayRef.current.reset}
      >
        <CarouselContent className="-ml-1">
          {galleryImages.map((img, index) => {
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
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="h-[220px] md:h-[350px] w-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="-left-2 cursor-pointer text-black bg-white! hover:text-black md:left-56" />
        <CarouselNext className="-right-2 cursor-pointer text-black bg-white! hover:text-black md:right-56" />
      </Carousel>
    </div>
  );
}

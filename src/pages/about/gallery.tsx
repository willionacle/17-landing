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
import Gallery10 from "@/assets/img/gallery/10.jpg";
import Gallery11 from "@/assets/img/gallery/11.jpg";
import Gallery12 from "@/assets/img/gallery/12.jpg";
import Gallery13 from "@/assets/img/gallery/13.jpg";
import Gallery14 from "@/assets/img/gallery/14.jpg";
import Gallery15 from "@/assets/img/gallery/15.jpg";
import Gallery16 from "@/assets/img/gallery/16.jpg";
import Gallery17 from "@/assets/img/gallery/17.jpg";
import Gallery18 from "@/assets/img/gallery/18.jpg";
import Gallery19 from "@/assets/img/gallery/19.jpg";
import Gallery20 from "@/assets/img/gallery/20.jpg";
import Gallery21 from "@/assets/img/gallery/21.jpg";
import Gallery22 from "@/assets/img/gallery/22.jpg";
import Gallery23 from "@/assets/img/gallery/23.jpg";
import Gallery24 from "@/assets/img/gallery/24.jpg";
import Gallery25 from "@/assets/img/gallery/25.jpg";
import Gallery26 from "@/assets/img/gallery/26.jpg";
import Gallery27 from "@/assets/img/gallery/27.jpg";

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
  Gallery10,
  Gallery11,
  Gallery12,
  Gallery13,
  Gallery14,
  Gallery15,
  Gallery16,
  Gallery17,
  Gallery18,
  Gallery19,
  Gallery20,
  Gallery21,
  Gallery22,
  Gallery23,
  Gallery24,
  Gallery25,
  Gallery26,
  Gallery27,
];

export default function Gallery() {
  const autoplayRef = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [api, setApi] = useState<any>(null);
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
      <h1 className="font-[Playfair_Display] text-4xl text-center lg:text-6xl italic font-extrabold mb-3 lg:mb-7">
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
        plugins={[autoplayRef.current]}
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

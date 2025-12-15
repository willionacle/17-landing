"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Card,
  CardContent,
  CardFooter,
  // CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
// import Rating from "@/components/ui/rating";

export const items = [
  {
    rating: 5,
    comment:
      "IntelliSeven delivered beyond what we initially envisioned. Their speed, efficiency, and deep technical understanding helped us launch earlier than scheduled without sacrificing quality.",
    name: "Mr. Chen Xiaolan",
    position: "CEO, ZKTeco",
    avatar: "/img/testimonials/client1.png",
  },
  {
    rating: 5,
    comment:
      "Their attention to detail is unmatched. IntelliSeven doesn't just build software — they understand the business behind it and provide solutions that make real impact.",
    name: "Ms. Sarah Lim",
    position: "Product Manager, NexaTech",
    avatar: "/img/testimonials/client2.png",
  },
  {
    rating: 5,
    comment:
      "Consistent communication, transparency, and strong industry discipline. IntelliSeven is the kind of development partner every company wishes they had.",
    name: "Mr. Hiroshi Sato",
    position: "CTO, Mirai Systems Japan",
    avatar: "/img/testimonials/client3.png",
  },
  {
    rating: 5,
    comment:
      "We had complex requirements and a very tight deadline — yet IntelliSeven completed everything flawlessly. They treat our success as their own.",
    name: "Ms. Aira Manalili",
    position: "COO, Central Digital Labs",
    avatar: "/img/testimonials/client4.png",
  },
  {
    rating: 5,
    comment:
      "The IntelliSeven team is extremely reliable. What impressed us most was their ability to take feedback quickly and iterate without hesitation.",
    name: "Mr. Park Joon-Se",
    position: "Director of Engineering, HanTech Korea",
    avatar: "/img/testimonials/client5.png",
  },
  {
    rating: 5,
    comment:
      "They don't just write code—they solve problems. IntelliSeven helped reshape our customer experience and boosted our digital adoption rate dramatically.",
    name: "Mrs. Angela Monteverde",
    position: "Head of Digital Strategy, PrimeOne Holdings",
    avatar: "/img/testimonials/client6.png",
  },
];

export default function Cards() {
  const autoplay = React.useMemo(
    () => Autoplay({ delay: 2000, stopOnInteraction: false }),
    []
  );

  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[autoplay]}
      setApi={setApi}
      className="w-full max-w-xs md:max-w-full mx-auto lg:p-10"
    >
      <CarouselContent className="-ml-1">
        {items.map((item, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="w-full p-4 lg:p-10 bg-linear-to-bl from-black to-black/60">
                <CardContent className="p-0 pt-5 h-40 lg:h-48">
                  {item.comment}
                </CardContent>
                <CardFooter className="p-0 flex gap-4">
                  <img src={item.avatar} className="w-10 rounded-full" />
                  <div>
                    <p>{item.name}</p>
                    <p className="text-white/35">{item.position}</p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`
              h-2 rounded-full transition-all duration-300
              ${
                current === index
                  ? "w-8 bg-red-500"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }
            `}
          />
        ))}
      </div>

      <CarouselPrevious className="-left-10 lg:left-0" />
      <CarouselNext className="-right-10 lg:right-0" />
    </Carousel>
  );
}

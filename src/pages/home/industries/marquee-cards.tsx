import { useMemo } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ImageMarqueeProps {
  items: { img: string; title: string; desc: string; color: string }[];
  speed?: number;
  direction?: "left" | "right";
  width?: number;
  height?: number;
}

export default function MarqueeCards({
  items,
  speed = 25,
  direction = "left",
}: ImageMarqueeProps) {
  const duration = useMemo(() => (items.length * 150) / speed, [items, speed]);

  return (
    <div className="overflow-hidden relative h-fit w-full py-2">
      <div
        className={`flex gap-3 ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
          ...items,
        ].map((item, index) => (
          <Card
            className="min-w-[190px] lg:min-w-[250px] h-[250px] lg:h-[350px] p-0 overflow-hidden relative shadow-md shadow-neutral-900"
            key={index}
          >
            <CardContent className="p-0">
              <img src={item.img} alt={item.title} className="w-full h-full" />
              <div className="h-full w-full bg-linear-to-b from-black/0 to-black absolute left-0 bottom-0"></div>
            </CardContent>
            <CardFooter className="p-0 absolute bottom-4 left-4 flex flex-col items-start">
              <h1 className={`font-bold leading-4 mb-3 ${item.color}`}>
                {item.title}
              </h1>
              <p className="text-sm">{item.desc}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

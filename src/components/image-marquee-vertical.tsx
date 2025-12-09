import { useMemo } from "react";

interface ImageMarqueeProps {
  images: { src: string; alt: string }[];
  speed?: number;
  direction?: "up" | "down";
  width?: number;
  height?: number;
}

export default function ImageMarqueeVertical({
  images,
  speed = 25,
  direction = "up",
  width = 120,
  height = 120,
}: ImageMarqueeProps) {
  const duration = useMemo(
    () => (images.length * 150) / speed,
    [images, speed]
  );

  return (
    <div className="overflow-hidden relative h-[400px] lg:h-[500px] w-full">
      <div
        className={`flex flex-col gap-6 ${
          direction === "up" ? "animate-marquee-up" : "animate-marquee-down"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
        ].map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            width={width}
            height={height}
            className="object-cover aspect-video object-top select-none rounded-sm w-full"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}

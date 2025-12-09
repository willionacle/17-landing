import ImageMarqueeVertical from "@/components/image-marquee-vertical";

export default function LeftSide() {
  return (
    <div className="flex order-1 lg:order-0 lg:w-[40%] gap-5 relative">
      <div className="absolute top-0 left-0 w-full h-[100px] z-10 bg-linear-to-b from-black to-black/0" />
      <div className="absolute bottom-0 left-0 w-full h-[100px] z-10 bg-linear-to-b from-black/0 to-black" />
      <ImageMarqueeVertical
        images={[
          { src: "/img/industries/architecture-farm.png", alt: "" },
          { src: "/img/industries/bookstore.png", alt: "" },
          { src: "/img/industries/clothing.png", alt: "" },
          { src: "/img/industries/construction.png", alt: "" },
          { src: "/img/industries/cosmetics.png", alt: "" },
          { src: "/img/industries/education.png", alt: "" },
          { src: "/img/industries/fitness.png", alt: "" },
          { src: "/img/industries/gas-station.png", alt: "" },
          { src: "/img/industries/grocery.png", alt: "" },
          { src: "/img/industries/salon.png", alt: "" },
          { src: "/img/industries/security.png", alt: "" },
          { src: "/img/industries/veterenary.png", alt: "" },
        ]}
        speed={2}
        direction="down"
        width={200}
        height={200}
      />
      <ImageMarqueeVertical
        images={[
          { src: "/img/industries/hardware.png", alt: "" },
          { src: "/img/industries/hospital.png", alt: "" },
          { src: "/img/industries/hotel.png", alt: "" },
          { src: "/img/industries/lawfirm.png", alt: "" },
          { src: "/img/industries/manufacturing.png", alt: "" },
          { src: "/img/industries/marketing.png", alt: "" },
          { src: "/img/industries/pharmacy.png", alt: "" },
          { src: "/img/industries/public.png", alt: "" },
          { src: "/img/industries/realestate.png", alt: "" },
          { src: "/img/industries/restaurant.png", alt: "" },
          { src: "/img/industries/retail.png", alt: "" },
          { src: "/img/industries/wine.png", alt: "" },
        ]}
        speed={2}
        direction="up"
        width={200}
        height={200}
      />
    </div>
  );
}

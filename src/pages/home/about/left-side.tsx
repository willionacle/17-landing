import ImageMarqueeVertical from "@/components/image-marquee-vertical";

import ArchitectureFarm from "@/assets/img/industries/architecture-farm.png";
import Bookstore from "@/assets/img/industries/bookstore.png";
import Clothing from "@/assets/img/industries/clothing.png";
import Construction from "@/assets/img/industries/construction.png";
import Cosmetics from "@/assets/img/industries/cosmetics.png";
import Education from "@/assets/img/industries/education.png";
import Fitness from "@/assets/img/industries/fitness.png";
import GasStation from "@/assets/img/industries/gas-station.png";
import Grocery from "@/assets/img/industries/grocery.png";
import Salon from "@/assets/img/industries/salon.png";
import Security from "@/assets/img/industries/security.png";
import Veterinary from "@/assets/img/industries/veterenary.png";

import Hardware from "@/assets/img/industries/hardware.png";
import Hospital from "@/assets/img/industries/hospital.png";
import Hotel from "@/assets/img/industries/hotel.png";
import LawFirm from "@/assets/img/industries/lawfirm.png";
import Manufacturing from "@/assets/img/industries/manufacturing.png";
import Marketing from "@/assets/img/industries/marketing.png";
import Pharmacy from "@/assets/img/industries/pharmacy.png";
import PublicSector from "@/assets/img/industries/public.png";
import RealEstate from "@/assets/img/industries/realestate.png";
import Restaurant from "@/assets/img/industries/restaurant.png";
import Retail from "@/assets/img/industries/retail.png";
import Wine from "@/assets/img/industries/wine.png";

export default function LeftSide() {
  return (
    <div className="flex order-1 lg:order-0 lg:w-[40%] gap-5 relative">
      <div className="absolute top-0 left-0 w-full h-[100px] z-10 bg-linear-to-b from-black to-black/0" />
      <div className="absolute bottom-0 left-0 w-full h-[100px] z-10 bg-linear-to-b from-black/0 to-black" />

      <ImageMarqueeVertical
        images={[
          { src: ArchitectureFarm, alt: "" },
          { src: Bookstore, alt: "" },
          { src: Clothing, alt: "" },
          { src: Construction, alt: "" },
          { src: Cosmetics, alt: "" },
          { src: Education, alt: "" },
          { src: Fitness, alt: "" },
          { src: GasStation, alt: "" },
          { src: Grocery, alt: "" },
          { src: Salon, alt: "" },
          { src: Security, alt: "" },
          { src: Veterinary, alt: "" },
        ]}
        speed={2}
        direction="down"
        width={200}
        height={200}
      />

      <ImageMarqueeVertical
        images={[
          { src: Hardware, alt: "" },
          { src: Hospital, alt: "" },
          { src: Hotel, alt: "" },
          { src: LawFirm, alt: "" },
          { src: Manufacturing, alt: "" },
          { src: Marketing, alt: "" },
          { src: Pharmacy, alt: "" },
          { src: PublicSector, alt: "" },
          { src: RealEstate, alt: "" },
          { src: Restaurant, alt: "" },
          { src: Retail, alt: "" },
          { src: Wine, alt: "" },
        ]}
        speed={2}
        direction="up"
        width={200}
        height={200}
      />
    </div>
  );
}

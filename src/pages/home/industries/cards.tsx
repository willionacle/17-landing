import MarqueeCards from "./marquee-cards";

import LawFirm from "@/assets/img/industries/lawfirm.png";
import Hospital from "@/assets/img/industries/hospital.png";
import Security from "@/assets/img/industries/security.png";
import Construction from "@/assets/img/industries/construction.png";
import Retail from "@/assets/img/industries/retail.png";
import Cosmetics from "@/assets/img/industries/cosmetics.png";
import Education from "@/assets/img/industries/education.png";
import Manufacturing from "@/assets/img/industries/manufacturing.png";
import PublicSector from "@/assets/img/industries/public.png";
import RealEstate from "@/assets/img/industries/realestate.png";
import Hotel from "@/assets/img/industries/hotel.png";
import Restaurant from "@/assets/img/industries/restaurant.png";
import GasStation from "@/assets/img/industries/gas-station.png";
import Pharmacy from "@/assets/img/industries/pharmacy.png";
import Marketing from "@/assets/img/industries/marketing.png";
import Veterinary from "@/assets/img/industries/veterenary.png";
import Salon from "@/assets/img/industries/salon.png";
import Fitness from "@/assets/img/industries/fitness.png";
import Architecture from "@/assets/img/industries/architecture-farm.png";
import Clothing from "@/assets/img/industries/clothing.png";
import Bookstore from "@/assets/img/industries/bookstore.png";
import Grocery from "@/assets/img/industries/grocery.png";
import Hardware from "@/assets/img/industries/hardware.png";
import Wine from "@/assets/img/industries/wine.png";

export default function Cards() {
  const imgs = [
    {
      img: LawFirm,
      title: "Law Firm",
      desc: "Drive firm efficiency, protect data, control deadlines and routine tasks.",
      color: "text-pink-400",
    },
    {
      img: Hospital,
      title: "Hospital",
      desc: "Enhance medical operations through digitized systems.",
      color: "text-sky-300",
    },
    {
      img: Security,
      title: "Security Agency",
      desc: "Reinforce safety, cut miscommunication, and reduce security gaps.",
      color: "text-cyan-400",
    },
    {
      img: Construction,
      title: "Construction",
      desc: "Modern digital tools for efficient construction workflows.",
      color: "text-yellow-500",
    },
    {
      img: Retail,
      title: "Retail",
      desc: "Secure more sales with automated ordering systems and real-time inventory tracking.",
      color: "text-blue-400",
    },
    {
      img: Cosmetics,
      title: "Cosmetic",
      desc: "Achieve the perfect look while reducing stress through simplified routines.",
      color: "text-red-400",
    },
    {
      img: Education,
      title: "School",
      desc: "Modernize systems through smarter management and seamless processes.",
      color: "text-red-500",
    },
    {
      img: Manufacturing,
      title: "Manufacturing",
      desc: "Accelerate production through technology that keeps operations convenient.",
      color: "text-yellow-400",
    },
    {
      img: PublicSector,
      title: "Public",
      desc: "Improve efficiency with real-time monitoring and scalable solutions.",
      color: "text-violet-400",
    },
    {
      img: RealEstate,
      title: "Real Estate",
      desc: "Simplify property management with clean and optimized workflows.",
      color: "text-sky-400",
    },
    {
      img: Hotel,
      title: "Hotel",
      desc: "Empower staff with organized and automated systems that simplify daily operations.",
      color: "text-orange-700",
    },
    {
      img: Restaurant,
      title: "Restaurant",
      desc: "Deliver excellent service while keeping tabs on track.",
      color: "text-red-300",
    },
    {
      img: GasStation,
      title: "Gas Station",
      desc: "Fuel operations with efficient digital systems.",
      color: "text-purple-400",
    },
    {
      img: Pharmacy,
      title: "Pharmacy",
      desc: "Make health services advanced with a reliable service.",
      color: "text-blue-400",
    },
    {
      img: Marketing,
      title: "Marketing Agency",
      desc: "Boost brands with smart marketing solutions.",
      color: "text-blue-400",
    },
    {
      img: Veterinary,
      title: "Veterinary Clinic",
      desc: "Streamlined veterinary services with modern IT.",
      color: "text-emerald-400",
    },
    {
      img: Salon,
      title: "Salon",
      desc: "Modern tools for flawless salon management.",
      color: "text-red-400",
    },
    {
      img: Fitness,
      title: "Fitness Center",
      desc: "Track progress through smart systems.",
      color: "text-pink-400",
    },
    {
      img: Architecture,
      title: "Architecture Firm",
      desc: "Innovate workspace through technology.",
      color: "text-blue-400",
    },
    {
      img: Clothing,
      title: "Clothing Store",
      desc: "Modernize retail with efficient store management.",
      color: "text-orange-400",
    },
    {
      img: Bookstore,
      title: "Bookstore",
      desc: "Simplify book sales and management.",
      color: "text-green-400",
    },
    {
      img: Grocery,
      title: "Grocery Store",
      desc: "Digital solutions for modern grocery stores.",
      color: "text-pink-400",
    },
    {
      img: Hardware,
      title: "Hardware Store",
      desc: "Efficient hardware management powered by technology.",
      color: "text-white",
    },
    {
      img: Wine,
      title: "Wine Shop",
      desc: "Technology-driven systems for wine businesses.",
      color: "text-blue-400",
    },
  ];

  return <MarqueeCards items={imgs} speed={5} />;
}

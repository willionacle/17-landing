import MarqueeCards from "./marquee-cards";

export default function Cards() {
  const imgs = [
    {
      img: "/img/industries/lawfirm.png",
      title: "Law Firm Operations",
      desc: "Drive firm efficiency, protect data, control deadlines and routine tasks. ",
      color: "text-pink-400",
    },
    {
      img: "/img/industries/hospital.png",
      title: "Hospital Operations",
      desc: "Enhance medical operations through digitized systems. ",
      color: "text-sky-300",
    },
    {
      img: "/img/industries/security.png",
      title: "Security Operations",
      desc: "Reinforce safety, cut miscommunication, and cut security gaps. ",
      color: "text-cyan-400",
    },
    {
      img: "/img/industries/hardware.png",
      title: "Construction Operations",
      desc: "Build smarter while reducing delays and minimizing rework.  ",
      color: "text-white",
    },
    {
      img: "/img/industries/grocery.png",
      title: "Retail Operations",
      desc: "Secure more sales with automated ordering systems, real-time inventory tracking, and more. ",
      color: "text-pink-400",
    },
    {
      img: "/img/industries/cosmetics.png",
      title: "Cosmetics Operations",
      desc: "Achieve the perfect look while reducing stress through minimized workloads and simplified routines.",
      color: "text-red-400",
    },
    {
      img: "/img/industries/education.png",
      title: "Education Operations",
      desc: "Modernize learning systems through smarter management and seamless processes. ",
      color: "text-red-500",
    },
    {
      img: "/img/industries/manufacturing.png",
      title: "Manufacturing Operations",
      desc: "Accelerate production through tech that keeps operations convenient.",
      color: "text-yellow-400",
    },
    {
      img: "/img/industries/public.png",
      title: "Public Operations",
      desc: "Improve efficiency with real-time monitoring and scalable solutions. ",
      color: "text-violet-400",
    },
    {
      img: "/img/industries/realestate.png",
      title: "Real Estate Operations",
      desc: "Simplify property management with clean and optimized workflows.",
      color: "text-sky-400",
    },
    {
      img: "/img/industries/hotel.png",
      title: "Hotel Operations",
      desc: "Empower staff with organized and automated systems that simplify daily operations.",
      color: "text-orange-700",
    },
    {
      img: "/img/industries/restaurant.png",
      title: "Restaurant Operations",
      desc: "Deliver excellent service while keeping tabs on track.",
      color: "text-red-300",
    },
    {
      img: "/img/industries/gas-station.png",
      title: "Gas Station Operations",
      desc: "Fuel operations with efficient digital systems.",
      color: "text-purple-400",
    },
    {
      img: "/img/industries/bookstore.png",
      title: "Bookstore Operations",
      desc: "Simplify book sales and management.",
      color: "text-green-400",
    },
    {
      img: "/img/industries/pharmacy.png",
      title: "Pharmacy Operations",
      desc: "Make health services advanced with a reliable service. ",
      color: "text-blue-400",
    },
    {
      img: "/img/industries/marketing.png",
      title: "Marketing Agency",
      desc: "Boost brands with smart marketing solutions.",
      color: "text-blue-400",
    },
    {
      img: "/img/industries/veterenary.png",
      title: "Veterinary Clinic",
      desc: "Streamlined veterinary services with modern IT.",
      color: "text-emerald-400",
    },
    {
      img: "/img/industries/salon.png",
      title: "Salon Operations",
      desc: "Modern tools for flawless salon management. ",
      color: "text-red-400",
    },
    {
      img: "/img/industries/fitness.png",
      title: "Fitness Center Operations",
      desc: "Track progress through smart systems.",
      color: "text-pink-400",
    },
    {
      img: "/img/industries/architecture-farm.png",
      title: "Architecture Firm Operations",
      desc: "Innovate workspace through technology.",
      color: "text-orange-400",
    },
    {
      img: "/img/industries/clothing.png",
      title: "Clothing Store Operations",
      desc: "Modernize retail with efficient store management.",
      color: "text-orange-400",
    },
    {
      img: "/img/industries/bookstore.png",
      title: "Bookstore Operations",
      desc: "Simplify book sales and management.",
      color: "text-blue-400",
    },
    {
      img: "/img/industries/wine.png",
      title: "Wine Shop Operations",
      desc: "Technology-driven systems for wine businesses. ",
      color: "text-blue-400",
    },
  ];
  return <MarqueeCards items={imgs} speed={5} />;
}

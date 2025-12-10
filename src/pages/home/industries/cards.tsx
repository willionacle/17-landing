import MarqueeCards from "./marquee-cards";

export default function Cards() {
  const imgs = [
    {
      img: "/img/industries/lawfirm.png",
      title: "Law Firm",
      desc: "Drive firm efficiency, protect data, control deadlines and routine tasks.",
      color: "text-pink-400",
    },
    {
      img: "/img/industries/hospital.png",
      title: "Hospital",
      desc: "Enhance medical operations through digitized systems.",
      color: "text-sky-300",
    },
    {
      img: "/img/industries/security.png",
      title: "Security Agency",
      desc: "Reinforce safety, cut miscommunication, and reduce security gaps.",
      color: "text-cyan-400",
    },

    // Placeholder Construction (not in your list originally)
    {
      img: "/img/industries/construction.png",
      title: "Construction",
      desc: "Modern digital tools for efficient construction workflows.",
      color: "text-yellow-500",
    },

    {
      img: "/img/industries/retail.png",
      title: "Retail",
      desc: "Secure more sales with automated ordering systems and real-time inventory tracking.",
      color: "text-blue-400",
    },
    {
      img: "/img/industries/cosmetics.png",
      title: "Cosmetic",
      desc: "Achieve the perfect look while reducing stress through simplified routines.",
      color: "text-red-400",
    },
    {
      img: "/img/industries/education.png",
      title: "School",
      desc: "Modernize systems through smarter management and seamless processes.",
      color: "text-red-500",
    },
    {
      img: "/img/industries/manufacturing.png",
      title: "Manufacturing",
      desc: "Accelerate production through technology that keeps operations convenient.",
      color: "text-yellow-400",
    },
    {
      img: "/img/industries/public.png",
      title: "Public",
      desc: "Improve efficiency with real-time monitoring and scalable solutions.",
      color: "text-violet-400",
    },
    {
      img: "/img/industries/realestate.png",
      title: "Real Estate",
      desc: "Simplify property management with clean and optimized workflows.",
      color: "text-sky-400",
    },
    {
      img: "/img/industries/hotel.png",
      title: "Hotel",
      desc: "Empower staff with organized and automated systems that simplify daily operations.",
      color: "text-orange-700",
    },
    {
      img: "/img/industries/restaurant.png",
      title: "Restaurant",
      desc: "Deliver excellent service while keeping tabs on track.",
      color: "text-red-300",
    },
    {
      img: "/img/industries/gas-station.png",
      title: "Gas Station",
      desc: "Fuel operations with efficient digital systems.",
      color: "text-purple-400",
    },
    {
      img: "/img/industries/pharmacy.png",
      title: "Pharmacy",
      desc: "Make health services advanced with a reliable service.",
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
      title: "Salon",
      desc: "Modern tools for flawless salon management.",
      color: "text-red-400",
    },
    {
      img: "/img/industries/fitness.png",
      title: "Fitness Center",
      desc: "Track progress through smart systems.",
      color: "text-pink-400",
    },
    {
      img: "/img/industries/architecture-farm.png",
      title: "Architecture Firm",
      desc: "Innovate workspace through technology.",
      color: "text-blue-400",
    },
    {
      img: "/img/industries/clothing.png",
      title: "Clothing Store",
      desc: "Modernize retail with efficient store management.",
      color: "text-orange-400",
    },
    {
      img: "/img/industries/bookstore.png",
      title: "Bookstore",
      desc: "Simplify book sales and management.",
      color: "text-green-400",
    },
    {
      img: "/img/industries/grocery.png",
      title: "Grocery Store",
      desc: "Digital solutions for modern grocery stores.",
      color: "text-pink-400",
    },
    {
      img: "/img/industries/hardware.png",
      title: "Hardware Store",
      desc: "Efficient hardware management powered by technology.",
      color: "text-white",
    },
    {
      img: "/img/industries/wine.png",
      title: "Wine Shop",
      desc: "Technology-driven systems for wine businesses.",
      color: "text-blue-400",
    },
  ];

  return <MarqueeCards items={imgs} speed={5} />;
}

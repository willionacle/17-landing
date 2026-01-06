import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IconExternalLink } from "@tabler/icons-react";

import LawSys from "@/assets/img/projects/lawsys.png";
import ITimeHR from "@/assets/img/projects/itimehr.png";
import Dates from "@/assets/img/projects/dates.png";
import DocumentMaker from "@/assets/img/projects/documentmaker.png";
import ConsolSys from "@/assets/img/projects/consolsys.png";
import Pos from "@/assets/img/projects/pos.png";
import Electsys from "@/assets/img/projects/electsys.png";

export default function Cards() {
  const items = [
    {
      title: "LawSys",
      img: LawSys,
      desc: "Lawsys is a technology-driven system that aids law firms in managing administrative tasks, such as Calendar and Scheduling, Case Management, Employee Management, Client Management, and User Access.",
      link: "https://lawsys.intelliseven.com.ph/",
    },
    {
      title: "iTimeHR",
      img: ITimeHR,
      desc: "The iTimeHR is a comprehensive HRIS software designed to help companies streamline effective employee management through real-time attendance monitoring, payroll processing, and organized scheduling.",
    },
    {
      title: "E-Commerce",
      img: Dates,
      desc: "Depending on a client’s vision, we develop fully integrated e-commerce systems that can optimize product management, from taking orders in real-time to securing online payments.",
      // link: "https://www.datesfruitph.com/",
    },
    {
      title: "Legal Document Maker",
      img: DocumentMaker,
      desc: "A web-based platform that produces personalized legal forms, professional contracts and agreements tailored to your business needs. It offers faster input by turning paperworks into ready-to-use documents.",
    },
    {
      title: "ConsolSys",
      img: ConsolSys,
      desc: "ConsolSys is a systematic queuing system designed for business operations that involve simultaneous customer engagement.",
    },
    {
      title: "Point of Sale",
      img: Pos,
      desc: "We develop POS systems that aid business owners in handling transactions, sales, and customer information real-time, enabling efficient and smoother store management.",
    },
    {
      title: "ElecSys",
      img: Electsys,
      desc: "A software system that helps leaders track their community regarding projects, activities, population, and others. ",
    },
  ];

  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
      {items.map((item, idx) => (
        <Card
          key={idx}
          className="p-0 overflow-hidden gap-0 group cursor-pointer"
          onClick={() => item.link && openLink(item.link)}
        >
          <CardContent className="p-0">
            <img
              src={item.img}
              alt={item.title}
              className="bg-top object-cover w-full h-[200px] lg:h-[400px] lg:grayscale group-hover:grayscale-0 transition-all duration-600 scale-100 group-hover:scale-125"
              loading="lazy"
            />
          </CardContent>

          <CardFooter className="p-7 flex flex-col items-start gap-2 relative z-10 bg-neutral-900">
            <div className="flex items-center gap-2 lg:mb-3">
              <h5 className="text-yellow-300 text-lg">{item.title}</h5>
              {item.link && <IconExternalLink className="text-red-500 w-5" />}
            </div>
            <p className="text-sm">{item.desc}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

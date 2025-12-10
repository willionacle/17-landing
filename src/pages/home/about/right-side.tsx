import { Button } from "@/components/ui/button";
import {
  IconChevronRight,
  IconHeartHandshake,
  IconUsers,
} from "@tabler/icons-react";
import NumberCard from "./number-card";
import { useNavigate } from "react-router";

export default function RightSide() {
  const navigate = useNavigate();
  const numCards = [
    {
      icon: <IconHeartHandshake className="w-9 h-9" />,
      title: "Committed Partners",
      total: 100,
      suffix: "+",
    },
    {
      icon: <IconUsers className="w-7 h-7" />,
      title: "Customer Satisfaction",
      total: 95,
      suffix: "%",
    },
  ];

  return (
    <div className="lg:text-left lg:w-[60%] lg:h-full">
      <h1 className="text-xl lg:text-4xl font-extrabold mb-7">
        At IntelliSeven, your goals guide every step we take.
      </h1>
      <p className="mb-5 text-justify font-extralight">
        Trusted by multiple business owners, we spark breakthroughs that inspire
        action and sustainable progress. We produce intelligent solutions
        tailored to every business need.
      </p>
      <p className="mb-5 text-justify font-extralight">
        Intelliseven Inc. is an innovative IT company dedicated to providing
        comprehensive and tailored solutions to meet the evolving needs of
        businesses. Our team consists of experienced professionals who strive to
        serve client needs beyond standard by utilizing the latest technologies,
        while ensuring exceptional customer service and support throughout the
        project lifestyle.
      </p>
      <Button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          navigate("/about");
        }}
        className="border-l-0 border border-white/20 cursor-pointer mt-5 mb-10 rounded-sm bg-linear-to-r text-yellow-300 from-black to-neutral-500"
      >
        Explore more <IconChevronRight />
      </Button>
      <div className="flex flex-col lg:flex-row gap-5 lg:mt-6">
        {numCards.map((item, idx) => (
          <NumberCard {...item} key={idx} />
        ))}
      </div>
    </div>
  );
}

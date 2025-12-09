import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Title from "./title";
import clsx from "clsx";

export default function Bottom() {
  const services = [
    {
      title: "Joint Creation",
      description:
        "Our team prioritizes client input in the development of our software solutions, allowing us to tailor services to meet client needs and desired outcomes.",
      image: "/img/about/service1.png",
    },
    {
      title: "Custom Development",
      description:
        "All software products are developed in-house by our skilled and reliable engineering team, which ensures the precision of our services.",
      image: "/img/about/service2.png",
    },
    {
      title: "Innovative Solutions",
      description:
        "Our software developers are committed to delivering top-notch service by integrating up-to-date technology solutions into every product.",
      image: "/img/about/service3.png",
    },
  ];

  return (
    <div className="py-18">
      <Title title="IntelliSeven wins the edge with" />
      <p className="text-justify lg:text-center mb-18 lg:max-w-6xl lg:mx-auto">
        Our team involves every client throughout the process, reflecting
        Intelliseven’s core value of being customer-centered. Through open
        communication, we ensure every solution aligns with each client’s goals
        and vision.
      </p>
      <div className="flex flex-wrap lg:justify-center gap-3 lg:gap-5">
        {services.map((item, idx) => (
          <Card
            key={idx}
            className={clsx(
              "p-7 bg-linear-to-r from-neutral-900 to-neutral-950",
              idx == 1 && "relative bottom-8"
            )}
          >
            <CardHeader className="p-0">
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-0 overflow-hidden h-[200px] rounded-md object-cover">
              <img
                src={item.image}
                className="h-full object-cover"
                alt={item.title}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

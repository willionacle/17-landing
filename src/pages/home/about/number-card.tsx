import AnimatedNumber from "@/components/animated-number";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  total: number;
  title: string;
  suffix: string;
}

export default function NumberCard({ total, title, suffix }: Props) {
  return (
    <Card className="py-4 px-8 lg:px-6 gap-3 shadow-neutral-700 bg-linear-to-r from-neutral-900 to-neutral-950 shadow-md lg:min-w-[280px]">
      <CardHeader className="flex items-center gap-4 p-0">
        {/* <div className="flex justify-center items-center bg-linear-to-b from-red-900 to-red-500/80 rounded-md w-[50px] h-[50px]">
          {icon}
        </div> */}
        <AnimatedNumber
          className="text-yellow-300 font-semibold text-2xl -mb-2 lg:text-4xl"
          value={total}
          suffix={suffix}
        />
      </CardHeader>
      <CardContent className="p-0 text-left text-neutral-400 text-lg">
        <span>{title}</span>
      </CardContent>
    </Card>
  );
}

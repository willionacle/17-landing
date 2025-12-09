import { Button } from "@/components/ui/button";
import { IconArrowUp } from "@tabler/icons-react";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center w-full">
      <Button
        onClick={scrollToTop}
        variant="ghost"
        className="
        whitespace-nowrap 
        text-yellow-300 
        border 
        px-10 py-1 
        mb-20 
        rounded-full
        hover:bg-white/10 
        hover:text-yellow-200
        cursor-pointer
      "
      >
        <IconArrowUp /> Back to Top
      </Button>
    </div>
  );
}

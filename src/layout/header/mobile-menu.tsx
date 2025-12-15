import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import type { MenuItemsProps } from ".";
import { IconMenu } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function MobileMenu({ items }: { items: MenuItemsProps[] }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (href: string) => {
    navigate(href);
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-sm">
            <IconMenu className="min-w-96 min-h-7 text-9xl" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[250px] bg-black/90 backdrop-blur-sm sm:w-[300px] px-5"
        >
          <nav className="mt-8 flex flex-col gap-7">
            {items.map((item) => (
              <button
                key={item.label}
                onClick={() => handleClick(item.href)}
                className="text-left hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

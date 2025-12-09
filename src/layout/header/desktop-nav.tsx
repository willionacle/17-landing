import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import type { MenuItemsProps } from ".";

export default function DesktopNav({ items }: { items: MenuItemsProps[] }) {
  const navigate = useNavigate();

  const handleClick = (href: string) => {
    const [path, hash] = href.split("#");
    navigate(path || "/");

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList className="flex gap-6">
        {items.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuLink
              asChild
              className="hover:bg-background/50 cursor-pointer"
            >
              <button
                onClick={() => handleClick(item.href)}
                className="px-4 py-2 text-sm text-white transition-colors"
              >
                {item.label}
              </button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

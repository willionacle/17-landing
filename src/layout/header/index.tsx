import Logo from "@/assets/logo.png";
import { useScrollTrigger } from "@/hooks/useScrollPosition";
import MobileMenu from "@/layout/header/mobile-menu";
import clsx from "clsx";
import DesktopNav from "./desktop-nav";
import { useNavigate } from "react-router";

export interface MenuItemsProps {
  label: string;
  href: string;
}

export default function Header() {
  const navigate = useNavigate();
  const scrolled = useScrollTrigger(20);
  const menuItems: MenuItemsProps[] = [
    { label: "Home", href: "/#home" },
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/#projects" },
    { label: "Contact Us", href: "/#contact" },
    // { label: "Careers", href: "#" },
  ];

  return (
    <header
      className={clsx(
        "px-0 p-4 fixed top-0 w-full z-20",
        scrolled && "bg-black/90 backdrop-blur-sm"
      )}
    >
      <div className="max-w-11/12 lg:max-w-8xl mx-auto flex items-center justify-between">
        <img
          src={Logo}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" }), navigate("/");
          }}
          className="w-40 lg:w-56 cursor-pointer"
        />
        <MobileMenu items={menuItems} />
        <DesktopNav items={menuItems} />
      </div>
    </header>
  );
}

import { Button } from "@/components/ui/button";
import {
  IconBrandFacebookFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";
import Logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-white/5 py-12 flex flex-col items-center px-4">
      {/* Logo */}
      <div className="flex flex-col items-center gap-2">
        <img
          src={Logo}
          alt="IntelliSeven Logo"
          className="h-10 object-contain mb-3"
        />
        <p className=" opacity-70 tracking-wide font-[Rajdhani]">
          © {new Date().getFullYear()} INTELLISEVEN TECHNOLOGY SOLUTIONS INC.
        </p>
      </div>

      {/* Top Nav */}
      <nav className="flex flex-wrap justify-center gap-5 mt-8 text-sm opacity-90">
        <a href="/#home">Home</a>
        <a href="/#projects">Our Projects</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact Us</a>
        {/* <a href="/careers">Careers</a> */}
      </nav>

      {/* Policies */}
      <nav className="flex flex-wrap justify-center gap-6 mt-4 text-xs opacity-70">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/cookie-policy">Cookie Policy</a>
      </nav>

      {/* Social */}
      <div className="flex gap-2 mt-8">
        <Button className="bg-[#1877F2] hover:bg-[#0f5fcc] text-white flex items-center gap-2 rounded-md">
          <IconBrandFacebookFilled size={18} />
          Facebook
        </Button>

        <Button className="bg-[#0077B5] hover:bg-[#005c8c] text-white flex items-center gap-2 rounded-md">
          <IconBrandLinkedinFilled size={18} />
          LinkedIn
        </Button>
      </div>
    </footer>
  );
}

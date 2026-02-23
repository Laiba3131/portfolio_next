"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "services", "contact"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position (navbar highlights current section)
      const scrollPosition = window.scrollY + 150; // offset so section highlights when near top

      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          if (scrollPosition >= offsetTop) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll(); // run once on mount to set initial state
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-50 px-6 md:px-8 lg:px-20 py-4 flex items-center justify-between shadow-md transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg border-b border-[#B18325]/20"
            : ""
        }`}
      >
        <a href="#home" className="relative flex items-center group">
          {/* animated ring */}
          <div
            className="absolute inset-0 rounded-xl animate-spin-slow 
                        bg-[conic-gradient(from_0deg,#000000,#B18325,#D7BF75,#B18325,#000000)] 
                        blur-[2px] opacity-80 group-hover:opacity-100 transition-opacity"
          ></div>

          {/* inner glow mask */}
          <div className="absolute inset-0.5 rounded-xl bg-black"></div>

          {/* logo */}
          <div
            className="relative w-12 h-12 bg-[#B18325] rounded-xl flex items-center justify-center
                        shadow-[0_0_15px_rgba(177,131,37,0.6)] group-hover:shadow-[0_0_25px_rgba(177,131,37,0.8)] transition-all"
          >
            <span className="text-black font-bold text-2xl">L</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-white font-semibold tracking-wide">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              className="relative hover:text-[#D7BF75] transition uppercase"
              onClick={() => setActiveSection(item.id)}
            >
              {item.name}
              {activeSection === item.id && (
                <span className="absolute left-1/2 -bottom-1 w-6 h-0.5 bg-[#B18325] -translate-x-1/2" />
              )}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button className="rounded-full bg-[#B18325] hover:bg-[#D7BF75] hover:text-black px-8 py-6 text-white font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(177,131,37,0.3)]">
              LET’S TALK
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button>
                <Menu className="text-white w-8 h-8" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-[#0a0a0a] border-l border-[#B18325]/30 mob-nav"
            >
              <div className="flex flex-col px-6 items-start space-y-6 mt-10 text-white text-lg font-semibold">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.id}`}
                    className="hover:text-[#D7BF75] transition uppercase"
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                ))}

                <a
                  href="#contact"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="mt-4 w-full rounded-full bg-[#B18325] hover:bg-[#D7BF75] hover:text-black px-8 py-6 text-white font-bold text-lg transition-all duration-300">
                    LET’S TALK
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
}

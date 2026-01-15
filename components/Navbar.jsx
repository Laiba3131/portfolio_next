"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
    const menuItems = ["Home", "About Me", "Projects", "Services", "Contact"];

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`w-full fixed top-0 left-0 z-50 px-6 md:px-8 lg:px-20 py-4 flex items-center justify-between shadow-md ${scrolled ? "bg-black/90 backdrop-blur-md shadow-lg border-b border-[#B18325]/20" : ""}`}
            >
                <div className="relative flex items-center">
                    {/* animated ring */}
                    <div className="absolute inset-0 rounded-xl animate-spin-slow 
                        bg-[conic-gradient(from_0deg,#000000,#B18325,#D7BF75,#B18325,#000000)] 
                        blur-[2px] opacity-80">
                    </div>

                    {/* inner glow mask */}
                    <div className="absolute inset-0.5 rounded-xl bg-black"></div>

                    {/* logo */}
                    <div className="relative w-12 h-12 bg-[#B18325] rounded-xl flex items-center justify-center
                        shadow-[0_0_15px_rgba(177,131,37,0.6)]">
                        <span className="text-black font-bold text-2xl">H</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10 text-white font-semibold tracking-wide">
                    {menuItems.map((item) => (
                        <button
                            key={item}
                            className="relative hover:text-[#D7BF75] transition uppercase"
                        >
                            {item}
                            {item === "Home" && (
                                <span className="absolute left-1/2 -bottom-1 w-6 h-0.5 bg-[#B18325] -translate-x-1/2" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Desktop CTA Button */}
                <div className="hidden md:block">
                    <Button className="rounded-full bg-[#B18325] hover:bg-[#D7BF75] hover:text-black px-8 py-6 text-white font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(177,131,37,0.3)]">
                        LET’S TALK
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button>
                                <Menu className="text-white w-8 h-8" />
                            </button>
                        </SheetTrigger>

                        <SheetContent side="right" className="bg-[#0a0a0a] border-l border-[#B18325]/30 mob-nav">
                            <div className="flex flex-col px-6 items-start space-y-6 mt-10 text-white text-lg font-semibold">
                                {menuItems.map((item) => (
                                    <button key={item} className="hover:text-[#D7BF75] transition">
                                        {item}
                                    </button>
                                ))}

                                <Button className="mt-4 rounded-full bg-[#B18325] hover:bg-[#D7BF75] hover:text-black px-8 py-6 text-white font-bold text-lg transition-all duration-300">
                                    LET’S TALK
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </>
    );
}

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
                className={`w-full fixed top-0 left-0 z-50 px-6 md:px-8 lg:px-20 py-4 flex items-center justify-between shadow-md ${scrolled ? "bg-[#031B2E]/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
            >

                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">H</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10 text-white font-semibold tracking-wide">
                    {menuItems.map((item) => (
                        <button
                            key={item}
                            className="relative hover:text-blue-400 transition uppercase"
                        >
                            {item}
                            {item === "Home" && (
                                <span className="absolute left-1/2 -bottom-1 w-6 h-[2px] bg-white -translate-x-1/2" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Desktop CTA Button */}
                <div className="hidden md:block">
                    <Button className="rounded-full bg-blue-500 hover:bg-blue-600 px-8 py-6 text-white font-bold text-lg">
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

                        <SheetContent side="right" className="bg-[#031B2E] border-none mob-nav">
                            <div className="flex flex-col px-6 items-start space-y-6 mt-10 text-white text-lg font-semibold">
                                {menuItems.map((item) => (
                                    <button key={item} className="hover:text-blue-400 transition">
                                        {item}
                                    </button>
                                ))}

                                <Button className="mt-4 rounded-full bg-blue-500 hover:bg-blue-600 px-8 py-6 text-white font-bold text-lg">
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

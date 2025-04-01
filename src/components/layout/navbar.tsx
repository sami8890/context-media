"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mobile Navigation Component
function MobileNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col justify-between animate-in fade-in duration-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">CM</span>
            </div>
            <span className="text-white font-semibold text-xl">
              Context Media
            </span>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="h-10 w-10 flex items-center justify-center text-white border border-zinc-800 rounded-full hover:border-zinc-700"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col space-y-2">
          {[
            "About",
            "Services",
            "Portfolio",
            "Testimonials",
            "Pricing",
            "FAQ",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="py-4 border-b border-zinc-800 flex items-center justify-between text-white font-medium text-lg hover:text-orange-400 transition-colors group"
            >
              {item}
              <ChevronRight className="h-5 w-5 text-zinc-500 group-hover:text-orange-400 transition-colors" />
            </Link>
          ))}
        </nav>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium py-6 h-auto text-center rounded-xl">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile navigation */}
      <MobileNav isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

      {/* Header with scroll effect */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-zinc-900/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">CM</span>
              </div>
              <div>
                <span className="text-white font-semibold text-xl block">
                  Context Media
                </span>
                <span className="text-zinc-400 text-xs tracking-wider hidden sm:block">
                  DIGITAL SOLUTIONS
                </span>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-1">
              {[
                "About",
                "Services",
                "Portfolio",
                "Testimonials",
                "Pricing",
                "FAQ",
                "Contact",
              ].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-zinc-400 hover:text-white transition-colors hover:bg-zinc-800/50 rounded-md text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 hidden sm:flex">
                Get Started
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="lg:hidden border-zinc-700 text-zinc-400 hover:bg-zinc-800"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Semi-transparent indicator line for desktop screens */}
      <div
        className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 z-50 opacity-80 ${
          isScrolled ? "block" : "hidden"
        } lg:block`}
      ></div>
    </>
  );
}

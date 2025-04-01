"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Play,
  Star,
  TrendingUp,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoverCard, setHoverCard] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  // Update the handlePlayVideo function
  const handlePlayVideo = () => {
    console.log("Video played");
    // Get the video element and play it
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.play();
    }
  };

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } =
          heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative py-12 md:py-24 overflow-hidden pt-28"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div
          className="absolute w-[70%] h-[70%] rounded-full blur-[120px] opacity-30 transition-all duration-1000"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.4) 0%, rgba(239,68,68,0.2) 70%)",
            left: `${mousePosition.x * 10}%`,
            top: `${mousePosition.y * 10}%`,
            transform: `translate(-50%, -50%)`,
          }}
        ></div>

        {/* Animated particles */}
        <div className="hidden md:block">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-orange-500/20"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${
                  Math.random() * 10 + 10
                }s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-6 space-y-4 md:space-y-6">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-700 transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <div className="flex -space-x-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-5 w-5 md:h-6 md:w-6 rounded-full border-2 border-zinc-800 overflow-hidden"
                  >
                    <Image
                      src={`/placeholder.svg?height=24&width=24`}
                      alt="Client"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-zinc-400 text-xs md:text-sm">
                Trusted by top brands
              </span>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight">
              <div
                className={`text-white transition-all duration-700 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <span className="relative inline-block">
                  Transform
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full transform scale-x-0  transition-transform origin-left"></span>
                </span>
              </div>
              <div
                className={`relative transition-all duration-700 delay-300 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Raw Footage
                </span>
                <Sparkles className="absolute -right-8 -top-2 h-6 w-6 text-orange-500 animate-pulse-slow" />
              </div>
              <div
                className={`text-white transition-all duration-700 delay-500 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Into
              </div>
              <div
                className={`bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent transition-all duration-700 delay-700 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Revenue
              </div>
            </h1>

            <p
              className={`text-lg md:text-xl text-zinc-400 max-w-xl transition-all duration-700 delay-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Stop editing. Start scaling. Professional video editing that
              drives 10X views and maximizes your content revenue.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-3 md:gap-4 transition-all duration-700 delay-1200 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-xl relative overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  Get Started Now
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 text-white h-12 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-xl group"
                onClick={handlePlayVideo}
              >
                <div className="mr-2 h-6 w-6 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-3 w-3 text-white ml-0.5" />
                </div>
                Watch Showreel
              </Button>
            </div>

            <div
              className={`grid grid-cols-3 gap-2 sm:gap-4 pt-6 md:pt-8 transition-all duration-700 delay-1400 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-3 md:p-4 hover:bg-zinc-800/80 hover:border-zinc-600/70 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-900/10">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  10X
                </div>
                <div className="text-zinc-400 text-xs md:text-sm mt-1">
                  More Views
                </div>
              </div>
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-3 md:p-4 hover:bg-zinc-800/80 hover:border-zinc-600/70 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-900/10">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  1,200+
                </div>
                <div className="text-zinc-400 text-xs md:text-sm mt-1">
                  Happy Clients
                </div>
              </div>
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-3 md:p-4 hover:bg-zinc-800/80 hover:border-zinc-600/70 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-900/10">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  5X
                </div>
                <div className="text-zinc-400 text-xs md:text-sm mt-1">
                  Revenue Growth
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div
            className={`lg:col-span-6 relative mt-8 lg:mt-0 transition-all duration-1000 delay-500 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Animated glow effect */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl blur-xl animate-pulse-slow"></div>

            {/* Animated circles */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full border border-orange-500/10 animate-spin-slow"></div>
            <div
              className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full border border-red-500/10 animate-spin-slow"
              style={{
                animationDirection: "reverse",
                animationDuration: "15s",
              }}
            ></div>

            <div
              className={`relative bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-700/50 overflow-hidden transition-all duration-500`}
              onMouseEnter={() => setHoverCard(true)}
              onMouseLeave={() => setHoverCard(false)}
              style={{
                transform: hoverCard
                  ? `perspective(1000px) rotateY(${
                      (mousePosition.x - 0.5) * 5
                    }deg) rotateX(${(0.5 - mousePosition.y) * 5}deg)`
                  : "perspective(1000px)",
                transition: "transform 0.3s ease",
              }}
            >
              <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                Premium Video Editing
              </div>

              <div className="aspect-video relative overflow-hidden rounded-xl">
                {/* Video element using main.mp4 */}
                <video
                src="/hero.mp4"
                  className="w-full h-full object-cover"
                  controls
                  poster="/placeholder.svg?height=400&width=600"
                >
                  Your browser does not support the video tag.
                </video>

                {/* Overlay gradient for better UI integration */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-1/3 pointer-events-none"></div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/Ahmed-hassan.png"
                        alt="Context Media"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm md:text-base">
                        Context Media
                      </h3>
                      <p className="text-xs md:text-sm text-zinc-400">
                        Professional Video Editing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-zinc-400">
                      <Users className="h-3 w-3 md:h-4 md:w-4" />
                      <span className="text-xs md:text-sm">1,281</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-400">
                      <TrendingUp className="h-3 w-3 md:h-4 md:w-4" />
                      <span className="text-xs md:text-sm">500+</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="relative h-1.5 md:h-2 bg-zinc-700 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-[85%] bg-gradient-to-r from-orange-500 to-red-600 rounded-full">
                      <div className="absolute top-0 left-0 h-full w-full bg-white/30 animate-pulse-slow"></div>
                    </div>
                  </div>

                  <div className="flex justify-between text-xs md:text-sm">
                    <div className="text-zinc-400">Stop Editing.</div>
                    <div className="text-white font-medium">Start Scaling</div>
                  </div>

                  <div className="flex items-center justify-between gap-3 md:gap-4 mt-3 md:mt-4">
                    <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white text-xs md:text-sm py-1.5 h-auto md:h-10">
                      Portfolio
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 text-xs md:text-sm py-1.5 h-auto md:h-10 group">
                      Contact Me
                      <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements - hidden on smallest screens, visible on sm and up */}
            <div
              className={`hidden sm:block absolute -top-6 -right-6 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-2 md:p-3 shadow-xl transform transition-all duration-700 delay-1600 ${
                isLoaded
                  ? "opacity-100 translate-y-0 translate-x-0"
                  : "opacity-0 -translate-y-8 translate-x-8"
              } hover:bg-zinc-800 hover:border-zinc-600/80 hover:scale-105 cursor-pointer animate-float`}
            >
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white">
                  <TrendingUp className="h-3 w-3 md:h-4 md:w-4" />
                </div>
                <div>
                  <div className="text-white font-medium text-xs md:text-sm">
                    Revenue Growth
                  </div>
                  <div className="text-orange-500 text-xs">+500% this year</div>
                </div>
              </div>
            </div>

            <div
              className={`hidden sm:block absolute -bottom-4 -left-4 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-2 md:p-3 shadow-xl transform transition-all duration-700 delay-1800 ${
                isLoaded
                  ? "opacity-100 translate-y-0 translate-x-0"
                  : "opacity-0 translate-y-8 -translate-x-8"
              } hover:bg-zinc-800 hover:border-zinc-600/80 hover:scale-105 cursor-pointer animate-float`}
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white">
                  <Star className="h-3 w-3 md:h-4 md:w-4" />
                </div>
                <div>
                  <div className="text-white font-medium text-xs md:text-sm">
                    Top Rated
                  </div>
                  <div className="text-orange-500 text-xs">
                    Trusted by top brands
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    Github,
    Linkedin,
    Twitter,
    Mail,
    Send,
    MapPin,
    Phone,
    ChevronRight,
    Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const footerRef = useRef<HTMLElement>(null);
    const [email, setEmail] = useState("");

    useEffect(() => {
        setIsLoaded(true);

        const handleMouseMove = (e: MouseEvent) => {
            if (footerRef.current) {
                const { left, top, width, height } =
                    footerRef.current.getBoundingClientRect();
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log(`Subscribing email: ${email}`);
        setEmail("");
        // Add success notification logic here
    };

    return (
        <footer
            ref={footerRef}
            className="relative bg-gradient-to-b from-zinc-900 to-black pt-24 pb-8 overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyODI4MjgiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgNjBIMFYwaDYweiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utb3BhY2l0eT0iLjE1Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

                {/* Animated gradient background */}
                <div
                    className="absolute w-full h-full opacity-40"
                    style={{
                        background:
                            "radial-gradient(circle at center, rgba(249,115,22,0.2) 0%, rgba(0,0,0,0) 70%)",
                        transform: `translate(${(mousePosition.x - 0.5) * 5}%, ${(mousePosition.y - 0.5) * 5
                            }%)`,
                        transition: "transform 0.5s ease-out",
                    }}
                ></div>

                {/* Curved lines */}
                <svg
                    className="absolute top-0 w-full"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C400,120 800,0 1200,80 L1200,120 L0,120 Z"
                        className="fill-zinc-900"
                    ></path>
                </svg>

                {/* Animated particles */}
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                            background:
                                i % 3 === 0
                                    ? "rgba(249,115,22,0.4)"
                                    : i % 3 === 1
                                        ? "rgba(239,68,68,0.3)"
                                        : "rgba(255,255,255,0.2)",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 20 + 15
                                }s infinite ease-in-out`,
                            animationDelay: `${Math.random() * 5}s`,
                            boxShadow: i % 3 === 0 ? "0 0 10px rgba(249,115,22,0.5)" : "none",
                        }}
                    ></div>
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
                    {/* Company info and newsletter */}
                    <div className="lg:col-span-5">
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold">CM</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-xl">Context Media</span>
                                    <span className="text-zinc-400 text-xs tracking-wider">DIGITAL SOLUTIONS</span>
                                </div>
                            </div>

                            <p className={`text-zinc-300 mb-6 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
                                }`}>
                                We create cutting-edge video content that captures attention and drives engagement. Our AI-powered technology transforms your ideas into compelling stories.
                            </p>

                            <div className={`space-y-3 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100" : "opacity-0"
                                }`}>
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 text-orange-500 mt-0.5 mr-3" />
                                    <span className="text-zinc-300">
                                        123 Innovation Drive<br />
                                        San Francisco, CA 94103
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="h-5 w-5 text-orange-500 mr-3" />
                                    <a href="mailto:hello@contextmedia.com" className="text-zinc-300 hover:text-white hover:underline transition-colors">
                                        hello@contextmedia.com
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="h-5 w-5 text-orange-500 mr-3" />
                                    <a href="tel:+15551234567" className="text-zinc-300 hover:text-white hover:underline transition-colors">
                                        +1 (555) 123-4567
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}>
                            <div className="relative bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-md rounded-2xl border border-orange-500/20 p-5 overflow-hidden shadow-xl shadow-orange-900/10">
                                {/* Accent glow */}
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl blur-xl opacity-70"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Sparkles className="h-5 w-5 text-orange-400" />
                                        <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
                                    </div>

                                    <p className="text-zinc-300 text-sm mb-4">
                                        Subscribe to our newsletter for the latest industry insights and company news.
                                    </p>

                                    <form onSubmit={handleSubmit} className="flex gap-2">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            required
                                            className="flex-1 bg-zinc-800/50 border border-orange-500/20 rounded-lg px-3 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 text-sm"
                                        />
                                        <Button
                                            type="submit"
                                            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-lg relative overflow-hidden group"
                                        >
                                            <span className="relative z-10 flex items-center">
                                                <Send className="h-4 w-4" />
                                            </span>
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation links and social */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {/* Services */}
                            <div className={`transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}>
                                <h3 className="text-white font-semibold mb-4 text-lg relative inline-block">
                                    Services
                                    <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></span>
                                </h3>
                                <ul className="space-y-2">
                                    {["Video Editing", "Content Creation", "AI Solutions", "Brand Strategy", "Social Media"].map((item) => (
                                        <li key={item}>
                                            <Link
                                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="text-zinc-400 hover:text-white transition-colors flex items-center group"
                                            >
                                                <ChevronRight className="h-3 w-3 text-orange-500 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                                <span>{item}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Company */}
                            <div className={`transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}>
                                <h3 className="text-white font-semibold mb-4 text-lg relative inline-block">
                                    Company
                                    <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></span>
                                </h3>
                                <ul className="space-y-2">
                                    {["About Us", "Our Team", "Careers", "Testimonials", "Contact"].map((item) => (
                                        <li key={item}>
                                            <Link
                                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="text-zinc-400 hover:text-white transition-colors flex items-center group"
                                            >
                                                <ChevronRight className="h-3 w-3 text-orange-500 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                                <span>{item}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Resources */}
                            <div className={`transition-all duration-700 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}>
                                <h3 className="text-white font-semibold mb-4 text-lg relative inline-block">
                                    Resources
                                    <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></span>
                                </h3>
                                <ul className="space-y-2">
                                    {["Blog", "Case Studies", "Help Center", "FAQ", "Privacy Policy"].map((item) => (
                                        <li key={item}>
                                            <Link
                                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="text-zinc-400 hover:text-white transition-colors flex items-center group"
                                            >
                                                <ChevronRight className="h-3 w-3 text-orange-500 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                                <span>{item}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Social links and CTA */}
                        <div className={`mt-10 bg-zinc-800/30 border border-orange-500/10 rounded-xl p-5 transition-all duration-700 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-white font-semibold mb-2">Let&apos;s Connect</h3>
                                    <p className="text-zinc-400 text-sm">Follow us on social media and join our community</p>
                                </div>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <div className="flex space-x-3">
                                        {[
                                            { icon: <Twitter className="h-4 w-4" />, url: "#", label: "Twitter" },
                                            { icon: <Linkedin className="h-4 w-4" />, url: "#", label: "LinkedIn" },
                                            { icon: <Github className="h-4 w-4" />, url: "#", label: "GitHub" },
                                            { icon: <Mail className="h-4 w-4" />, url: "#", label: "Email" }
                                        ].map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                aria-label={link.label}
                                                className="h-9 w-9 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-orange-500/20 flex items-center justify-center text-zinc-300 hover:text-white transition-all hover:scale-110 hover:border-orange-500/40"
                                            >
                                                {link.icon}
                                            </a>
                                        ))}
                                    </div>

                                    <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 rounded-lg relative overflow-hidden group shadow-lg shadow-orange-900/20">
                                        <span className="relative z-10 flex items-center font-medium">
                                            Get Started
                                            <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </span>
                                        <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className={`border-t border-zinc-800 pt-8 mt-8 transition-all duration-1000 delay-800 ${isLoaded ? "opacity-100" : "opacity-0"
                    }`}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-zinc-500 text-sm">
                            © {new Date().getFullYear()} Context Media. All rights reserved.
                        </p>

                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-500">
                            <Link href="#" className="hover:text-zinc-300 transition-colors">Terms</Link>
                            <Link href="#" className="hover:text-zinc-300 transition-colors">Privacy</Link>
                            <Link href="#" className="hover:text-zinc-300 transition-colors">Cookies</Link>
                            <Link href="#" className="hover:text-zinc-300 transition-colors">Accessibility</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
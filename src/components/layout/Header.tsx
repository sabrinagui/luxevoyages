"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Plane, ChevronDown, User, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Flights", href: "/flights" },
  { name: "Hotels", href: "/hotels" },
  {
    name: "Destinations",
    href: "/destinations",
    children: [
      { name: "Europe", href: "/destinations/europe" },
      { name: "Asia", href: "/destinations/asia" },
      { name: "Americas", href: "/destinations/americas" },
      { name: "Africa", href: "/destinations/africa" },
      { name: "Oceania", href: "/destinations/oceania" },
    ],
  },
  { name: "Experiences", href: "/experiences" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-luxury-dark/95 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-luxury">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
              <Plane className="w-5 h-5 text-luxury-dark transform -rotate-45" />
            </div>
            <div>
              <span className="text-xl font-display font-semibold text-white tracking-wide">
                Luxe
              </span>
              <span className="text-xl font-display font-light text-gold-500 tracking-wide">
                Voyages
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-gold-500 transition-colors duration-300 tracking-wide uppercase"
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-4 animate-slide-down">
                    <div className="bg-luxury-dark/95 backdrop-blur-md border border-white/10 p-4 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-white/70 hover:text-gold-500 hover:bg-white/5 transition-all duration-300"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="p-2 text-white/70 hover:text-gold-500 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/account"
              className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-gold-500 transition-colors"
            >
              <User className="w-5 h-5" />
              <span>Account</span>
            </Link>
            <Link href="/admin" className="btn-primary text-xs px-6 py-3">
              Admin Panel
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-luxury-dark border-l border-white/10 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-gold-500 font-display text-lg">Menu</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white/60 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Menu Content */}
            <div className="overflow-y-auto h-[calc(100%-70px)] p-4">
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-3 px-4 text-base font-medium text-white/80 hover:text-gold-500 hover:bg-white/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                      {item.children && <ChevronDown className="w-4 h-4" />}
                    </Link>
                    {item.children && (
                      <div className="pl-6 space-y-1 border-l border-white/10 ml-4 mt-1 mb-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block py-2 px-4 text-sm text-white/60 hover:text-gold-500 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              
              <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                <Link
                  href="/account"
                  className="flex items-center gap-3 py-3 px-4 text-white/80 hover:text-gold-500 hover:bg-white/5 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="w-5 h-5" />
                  <span>My Account</span>
                </Link>
                <Link 
                  href="/admin" 
                  className="btn-primary w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin Panel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

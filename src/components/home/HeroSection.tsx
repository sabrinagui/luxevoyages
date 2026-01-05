"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Play } from "lucide-react";
import Link from "next/link";

const heroSlides = [
  {
    id: 1,
    title: "Discover Paradise",
    subtitle: "Maldives",
    description: "Experience crystal-clear waters and overwater villas in the world's most exclusive island destination.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=80",
    cta: "Explore Maldives",
    link: "/destinations/maldives",
  },
  {
    id: 2,
    title: "Timeless Elegance",
    subtitle: "Paris",
    description: "Immerse yourself in the city of lights with our curated luxury experiences and five-star accommodations.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80",
    cta: "Discover Paris",
    link: "/destinations/paris",
  },
  {
    id: 3,
    title: "Ancient Wonders",
    subtitle: "Kyoto",
    description: "Journey through centuries of tradition in Japan's cultural heart with exclusive ryokan stays.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=80",
    cta: "Visit Kyoto",
    link: "/destinations/kyoto",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${s.image})` }}
          />
          <div className="overlay-dark" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-luxury w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl pt-20 md:pt-0">
            {/* Subtitle */}
            <div className="animate-fade-in mb-3 md:mb-4">
              <span className="text-gold-500 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">
                {slide.subtitle}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-white mb-4 md:mb-6 animate-slide-up">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 md:mb-10 max-w-xl animate-slide-up animate-delay-100 leading-relaxed">
              {slide.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up animate-delay-200">
              <Link href={slide.link} className="btn-primary text-center">
                {slide.cta}
              </Link>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Watch Story
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 sm:bottom-32 left-4 sm:left-1/2 sm:-translate-x-1/2 z-10 flex gap-2 sm:gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-500 ${
              index === currentSlide
                ? "w-8 sm:w-12 bg-gold-500"
                : "w-4 sm:w-6 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden sm:block">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      {/* Side Stats */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-8 text-right">
        <div>
          <div className="text-4xl font-display text-gold-500">500+</div>
          <div className="text-sm text-white/60 uppercase tracking-wider">Destinations</div>
        </div>
        <div className="w-px h-12 bg-white/20 ml-auto" />
        <div>
          <div className="text-4xl font-display text-gold-500">50K+</div>
          <div className="text-sm text-white/60 uppercase tracking-wider">Happy Travelers</div>
        </div>
        <div className="w-px h-12 bg-white/20 ml-auto" />
        <div>
          <div className="text-4xl font-display text-gold-500">15+</div>
          <div className="text-sm text-white/60 uppercase tracking-wider">Years Experience</div>
        </div>
      </div>
    </section>
  );
}

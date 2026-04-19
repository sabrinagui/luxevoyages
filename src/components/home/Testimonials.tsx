"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Alexandra Richardson",
    role: "CEO, Fortune 500",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    text: "Luxe Voyages transformed our family vacation into an unforgettable experience. From the private jet arrangements to the exclusive resort access, every detail was meticulously planned. Their concierge service is unparalleled.",
    trip: "Maldives Private Island",
  },
  {
    id: 2,
    name: "James Montgomery",
    role: "Investment Banker",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    text: "As someone who travels frequently for business, I've experienced many travel agencies. Luxe Voyages stands out for their attention to detail and ability to accommodate last-minute changes without any hassle.",
    trip: "Tokyo Business Trip",
  },
  {
    id: 3,
    name: "Sophia Laurent",
    role: "Fashion Designer",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    text: "The honeymoon package they created for us was beyond our wildest dreams. The Santorini sunset dinner they arranged was straight out of a movie. Worth every penny for the memories we'll cherish forever.",
    trip: "Greek Islands Honeymoon",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (d: number) => ({
      x: d > 0 ? -40 : 40,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    }),
  };

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-luxury-dark">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-[-10%] bg-cover bg-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80)",
          y: bgY,
        }}
      />
      <div className="absolute inset-0 bg-luxury-dark/80" />

      <div className="relative z-10 container-luxury">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium mb-3 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-wide">
            What Our Travelers Say
          </h2>
          <div className="w-12 h-px bg-gold-500 mt-6" />
        </div>

        {/* Testimonial */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
          {/* Left: Avatar + Navigation */}
          <div className="flex flex-row lg:flex-col items-center lg:items-start gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id + "-avatar"}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative shrink-0"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold-500 flex items-center justify-center">
                  <Quote className="w-4 h-4 text-luxury-dark" />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex lg:flex-col gap-4 items-center lg:items-start mt-0 lg:mt-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonial.id + "-info"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="text-white font-display text-lg sm:text-xl tracking-wide">{testimonial.name}</h4>
                  <p className="text-white/40 text-xs mt-0.5">{testimonial.role} · {testimonial.location}</p>
                  <div className="flex items-center gap-0.5 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation dots */}
              <div className="flex gap-2 lg:mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index); }}
                    className={`h-px transition-all duration-500 ${
                      index === currentIndex ? "w-8 bg-gold-500" : "w-4 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Quote */}
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={testimonial.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <p className="text-white/70 text-lg sm:text-xl md:text-2xl font-display font-light leading-relaxed tracking-wide mb-8">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="inline-block px-4 py-2 border border-gold-500/30 bg-gold-500/5">
                  <span className="text-gold-500 text-xs tracking-widest uppercase">{testimonial.trip}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next */}
            <div className="flex gap-3 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/40 hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/40 hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

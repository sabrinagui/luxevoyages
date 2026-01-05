"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

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

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-gradient-luxury relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80)",
        }}
      />

      <div className="container-luxury relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-gold-500 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium mb-3 sm:mb-4 block">
            Testimonials
          </span>
          <h2 className="heading-section text-white mb-3 sm:mb-4">
            What Our Travelers Say
          </h2>
          <div className="divider-gold" />
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="card-luxury p-5 sm:p-8 md:p-12 relative">
            {/* Quote Icon */}
            <Quote className="absolute top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 sm:w-16 sm:h-16 text-gold-500/20" />

            <div className="flex flex-col md:flex-row gap-5 sm:gap-8 items-start">
              {/* Avatar */}
              <div className="shrink-0 mx-auto md:mx-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-gold-500">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 italic text-center md:text-left">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 text-center md:text-left">
                  <div>
                    <h4 className="text-white font-display text-lg sm:text-xl">{testimonial.name}</h4>
                    <p className="text-white/60 text-xs sm:text-sm">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                  <div className="px-3 sm:px-4 py-2 bg-gold-500/10 border border-gold-500/30 mx-auto md:mx-0">
                    <span className="text-gold-500 text-xs sm:text-sm">{testimonial.trip}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 sm:w-8 bg-gold-500"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

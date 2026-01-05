"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-luxury-dark/90" />

      <div className="container-luxury relative px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Content */}
          <span className="text-gold-500 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium mb-3 sm:mb-4 block">
            Stay Inspired
          </span>
          <h2 className="heading-section text-white mb-3 sm:mb-4">
            Join the Luxe Voyages Circle
          </h2>
          <div className="divider-gold mb-4 sm:mb-6" />
          <p className="text-white/60 mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto text-sm sm:text-base">
            Subscribe to receive exclusive travel offers, insider tips, and early 
            access to our most sought-after destinations and experiences.
          </p>

          {/* Form */}
          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 text-gold-500 animate-fade-in">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg">Welcome to the Luxe Voyages family!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 input-luxury text-center sm:text-left"
                required
              />
              <button type="submit" className="btn-primary flex items-center justify-center gap-2">
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Trust Badges */}
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8 text-white/40 text-xs sm:text-sm">
            <span>✓ Exclusive Offers</span>
            <span>✓ No Spam</span>
            <span>✓ Unsubscribe Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

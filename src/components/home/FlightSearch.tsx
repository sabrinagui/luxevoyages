"use client";

import { useState } from "react";
import { Plane, ArrowRightLeft, Calendar, Users, Search, MapPin } from "lucide-react";

type TripType = "roundtrip" | "oneway" | "multi";
type CabinClass = "economy" | "premium" | "business" | "first";

export function FlightSearch() {
  const [tripType, setTripType] = useState<TripType>("roundtrip");
  const [cabinClass, setCabinClass] = useState<CabinClass>("business");
  const [passengers, setPassengers] = useState(1);

  return (
    <section className="relative -mt-16 sm:-mt-24 z-20 px-4 md:px-8">
      <div className="container-luxury">
        <div className="bg-luxury-charcoal/95 sm:bg-luxury-charcoal/80 backdrop-blur-xl border border-white/10 p-4 sm:p-6 md:p-8 lg:p-12">
          {/* Header */}
          <div className="flex flex-col gap-4 mb-6 md:mb-8">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-dark" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-display text-white">Find Your Flight</h2>
                <p className="text-white/60 text-xs sm:text-sm">Search from over 500 airlines worldwide</p>
              </div>
            </div>

            {/* Trip Type Selector */}
            <div className="flex gap-1 sm:gap-2 p-1 bg-white/5 rounded-none overflow-x-auto">
              {[
                { value: "roundtrip", label: "Round Trip" },
                { value: "oneway", label: "One Way" },
                { value: "multi", label: "Multi-City" },
              ].map((type) => (
                <button
                  key={type.value}
                  onClick={() => setTripType(type.value as TripType)}
                  className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    tripType === type.value
                      ? "bg-gold-500 text-luxury-dark"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-6">
            {/* From */}
            <div className="relative group">
              <label className="absolute -top-2 sm:-top-2.5 left-3 sm:left-4 bg-luxury-charcoal px-1.5 sm:px-2 text-[10px] sm:text-xs text-gold-500 uppercase tracking-wider z-10">
                From
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="City or Airport"
                  className="input-luxury pl-10 sm:pl-12"
                  defaultValue="New York (JFK)"
                />
              </div>
            </div>

            {/* To */}
            <div className="relative group">
              <label className="absolute -top-2 sm:-top-2.5 left-3 sm:left-4 bg-luxury-charcoal px-1.5 sm:px-2 text-[10px] sm:text-xs text-gold-500 uppercase tracking-wider z-10">
                To
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="City or Airport"
                  className="input-luxury pl-10 sm:pl-12"
                  defaultValue="Paris (CDG)"
                />
              </div>
            </div>

            {/* Departure Date */}
            <div className="relative group">
              <label className="absolute -top-2 sm:-top-2.5 left-3 sm:left-4 bg-luxury-charcoal px-1.5 sm:px-2 text-[10px] sm:text-xs text-gold-500 uppercase tracking-wider z-10">
                Departure
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/40" />
                <input
                  type="date"
                  className="input-luxury pl-10 sm:pl-12"
                  defaultValue="2026-02-15"
                />
              </div>
            </div>

            {/* Return Date */}
            <div className="relative group">
              <label className="absolute -top-2 sm:-top-2.5 left-3 sm:left-4 bg-luxury-charcoal px-1.5 sm:px-2 text-[10px] sm:text-xs text-gold-500 uppercase tracking-wider z-10">
                Return
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/40" />
                <input
                  type="date"
                  className="input-luxury pl-10 sm:pl-12"
                  defaultValue="2026-02-22"
                  disabled={tripType === "oneway"}
                />
              </div>
            </div>

            {/* Passengers */}
            <div className="relative group sm:col-span-2 lg:col-span-1">
              <label className="absolute -top-2 sm:-top-2.5 left-3 sm:left-4 bg-luxury-charcoal px-1.5 sm:px-2 text-[10px] sm:text-xs text-gold-500 uppercase tracking-wider z-10">
                Passengers
              </label>
              <div className="relative">
                <Users className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/40" />
                <select
                  className="input-luxury pl-10 sm:pl-12 appearance-none cursor-pointer"
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num} className="bg-luxury-dark">
                      {num} {num === 1 ? "Passenger" : "Passengers"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Cabin Class & Search */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Cabin Class */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                { value: "economy", label: "Economy" },
                { value: "premium", label: "Premium" },
                { value: "business", label: "Business" },
                { value: "first", label: "First Class" },
              ].map((cabin) => (
                <button
                  key={cabin.value}
                  onClick={() => setCabinClass(cabin.value as CabinClass)}
                  className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium border transition-all duration-300 ${
                    cabinClass === cabin.value
                      ? "border-gold-500 text-gold-500"
                      : "border-white/20 text-white/60 hover:border-white/40"
                  }`}
                >
                  {cabin.label}
                </button>
              ))}
            </div>

            {/* Search Button */}
            <button className="btn-primary w-full flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Search Flights
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

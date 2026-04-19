"use client";

import { useState } from "react";
import { Calendar, Users, Search, MapPin } from "lucide-react";

type TripType = "roundtrip" | "oneway" | "multi";
type CabinClass = "economy" | "premium" | "business" | "first";

export function FlightSearch() {
  const [tripType, setTripType] = useState<TripType>("roundtrip");
  const [cabinClass, setCabinClass] = useState<CabinClass>("business");
  const [passengers, setPassengers] = useState(1);

  return (
    <section className="relative -mt-16 sm:-mt-24 z-20 px-4 md:px-8">
      <div className="container-luxury">
        <div className="bg-luxury-charcoal/95 backdrop-blur-xl border border-white/10 p-5 sm:p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 border-b border-white/10 pb-5 sm:pb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display text-white tracking-wide">Find Your Flight</h2>
              <p className="text-white/40 text-[10px] mt-1 uppercase tracking-widest">Search from over 500 airlines worldwide</p>
            </div>
            {/* Trip Type */}
            <div className="flex gap-1 p-1 bg-white/5 self-start sm:self-auto">
              {[
                { value: "roundtrip", label: "Round Trip" },
                { value: "oneway", label: "One Way" },
                { value: "multi", label: "Multi-City" },
              ].map((type) => (
                <button
                  key={type.value}
                  onClick={() => setTripType(type.value as TripType)}
                  className={`px-3 py-1.5 text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                    tripType === type.value
                      ? "bg-gold-500 text-luxury-dark"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search Form — responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5 mb-5 sm:mb-6">
            {/* From */}
            <div>
              <label className="block text-[10px] text-gold-500 uppercase tracking-widest mb-1.5">
                From
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="text"
                  placeholder="City or Airport"
                  className="input-luxury pl-9 text-sm"
                  defaultValue="New York (JFK)"
                />
              </div>
            </div>

            {/* To */}
            <div>
              <label className="block text-[10px] text-gold-500 uppercase tracking-widest mb-1.5">
                To
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="text"
                  placeholder="City or Airport"
                  className="input-luxury pl-9 text-sm"
                  defaultValue="Paris (CDG)"
                />
              </div>
            </div>

            {/* Departure */}
            <div>
              <label className="block text-[10px] text-gold-500 uppercase tracking-widest mb-1.5">
                Departure
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="date"
                  className="input-luxury pl-9 text-sm"
                  defaultValue="2026-02-15"
                />
              </div>
            </div>

            {/* Return */}
            <div>
              <label className="block text-[10px] text-gold-500 uppercase tracking-widest mb-1.5">
                Return
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="date"
                  className="input-luxury pl-9 text-sm"
                  defaultValue="2026-02-22"
                  disabled={tripType === "oneway"}
                />
              </div>
            </div>

            {/* Passengers — full width on mobile, half on sm */}
            <div>
              <label className="block text-[10px] text-gold-500 uppercase tracking-widest mb-1.5">
                Passengers
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <select
                  className="input-luxury pl-9 text-sm appearance-none cursor-pointer"
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {[
                { value: "economy", label: "Economy" },
                { value: "premium", label: "Premium" },
                { value: "business", label: "Business" },
                { value: "first", label: "First Class" },
              ].map((cabin) => (
                <button
                  key={cabin.value}
                  onClick={() => setCabinClass(cabin.value as CabinClass)}
                  className={`px-3 py-1.5 text-xs font-medium border transition-all duration-300 ${
                    cabinClass === cabin.value
                      ? "border-gold-500 text-gold-500"
                      : "border-white/15 text-white/40 hover:border-white/30 hover:text-white/70"
                  }`}
                >
                  {cabin.label}
                </button>
              ))}
            </div>

            <button className="btn-primary flex items-center gap-2 sm:ml-auto w-full sm:w-auto justify-center">
              <Search className="w-4 h-4" />
              Search Flights
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

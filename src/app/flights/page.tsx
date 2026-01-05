"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Plane, 
  ArrowRight, 
  Clock, 
  Wifi, 
  UtensilsCrossed, 
  Tv, 
  Briefcase,
  ChevronDown,
  Filter,
  ArrowUpDown
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

// Sample flight data
const flights = [
  {
    id: "FL001",
    airline: "Emirates",
    logo: "✈️",
    flightNumber: "EK 201",
    departure: {
      city: "New York",
      airport: "JFK",
      time: "10:30 PM",
      date: "Feb 15, 2026",
    },
    arrival: {
      city: "Dubai",
      airport: "DXB",
      time: "7:45 PM",
      date: "Feb 16, 2026",
    },
    duration: "12h 15m",
    stops: "Non-stop",
    aircraft: "Airbus A380",
    classes: {
      economy: { price: 850, available: true },
      premium: { price: 1650, available: true },
      business: { price: 4200, available: true },
      first: { price: 12500, available: true },
    },
    amenities: ["wifi", "meals", "entertainment", "power"],
  },
  {
    id: "FL002",
    airline: "Singapore Airlines",
    logo: "✈️",
    flightNumber: "SQ 25",
    departure: {
      city: "New York",
      airport: "JFK",
      time: "11:00 PM",
      date: "Feb 15, 2026",
    },
    arrival: {
      city: "Singapore",
      airport: "SIN",
      time: "6:30 AM",
      date: "Feb 17, 2026",
    },
    duration: "18h 30m",
    stops: "Non-stop",
    aircraft: "Airbus A350",
    classes: {
      economy: { price: 1100, available: true },
      premium: { price: 2200, available: true },
      business: { price: 5800, available: true },
      first: { price: 15000, available: false },
    },
    amenities: ["wifi", "meals", "entertainment", "power"],
  },
  {
    id: "FL003",
    airline: "Qatar Airways",
    logo: "✈️",
    flightNumber: "QR 702",
    departure: {
      city: "New York",
      airport: "JFK",
      time: "9:00 PM",
      date: "Feb 15, 2026",
    },
    arrival: {
      city: "Doha",
      airport: "DOH",
      time: "5:15 PM",
      date: "Feb 16, 2026",
    },
    duration: "11h 15m",
    stops: "Non-stop",
    aircraft: "Boeing 777",
    classes: {
      economy: { price: 780, available: true },
      premium: { price: 1500, available: true },
      business: { price: 4500, available: true },
      first: { price: 11000, available: true },
    },
    amenities: ["wifi", "meals", "entertainment", "power"],
  },
  {
    id: "FL004",
    airline: "Lufthansa",
    logo: "✈️",
    flightNumber: "LH 401",
    departure: {
      city: "New York",
      airport: "JFK",
      time: "6:30 PM",
      date: "Feb 15, 2026",
    },
    arrival: {
      city: "Frankfurt",
      airport: "FRA",
      time: "8:00 AM",
      date: "Feb 16, 2026",
    },
    duration: "7h 30m",
    stops: "Non-stop",
    aircraft: "Airbus A380",
    classes: {
      economy: { price: 650, available: true },
      premium: { price: 1200, available: true },
      business: { price: 3800, available: true },
      first: { price: 9500, available: true },
    },
    amenities: ["wifi", "meals", "entertainment", "power"],
  },
];

const amenityIcons: Record<string, { icon: React.ElementType; label: string }> = {
  wifi: { icon: Wifi, label: "Wi-Fi" },
  meals: { icon: UtensilsCrossed, label: "Meals" },
  entertainment: { icon: Tv, label: "Entertainment" },
  power: { icon: Briefcase, label: "Power Outlets" },
};

export default function FlightsPage() {
  const [selectedClass, setSelectedClass] = useState<"economy" | "premium" | "business" | "first">("business");
  const [sortBy, setSortBy] = useState<"price" | "duration" | "departure">("price");

  const sortedFlights = [...flights].sort((a, b) => {
    if (sortBy === "price") {
      return a.classes[selectedClass].price - b.classes[selectedClass].price;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-luxury-dark pt-32 pb-20">
      <div className="container-luxury">
        {/* Page Header */}
        <div className="mb-12">
          <nav className="text-sm text-white/40 mb-4">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gold-500">Flights</span>
          </nav>
          <h1 className="heading-display text-white mb-4">Flight Search Results</h1>
          <p className="text-white/60">
            Showing {flights.length} available flights for your selected route
          </p>
        </div>

        {/* Search Summary Bar */}
        <div className="bg-white/5 border border-white/10 p-6 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <Plane className="w-6 h-6 text-luxury-dark" />
              </div>
              <div>
                <p className="text-white font-medium">New York (JFK) → Paris (CDG)</p>
                <p className="text-white/40 text-sm">Feb 15-22, 2026 • 1 Passenger</p>
              </div>
            </div>
          </div>
          <button className="btn-secondary text-xs py-2">
            Modify Search
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-72 shrink-0">
            <div className="card-luxury p-6 sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-display text-white">Filters</h3>
                <Filter className="w-5 h-5 text-gold-500" />
              </div>

              {/* Class Filter */}
              <div className="mb-6">
                <label className="text-sm text-white/60 uppercase tracking-wider mb-3 block">
                  Cabin Class
                </label>
                <div className="space-y-2">
                  {["economy", "premium", "business", "first"].map((cls) => (
                    <button
                      key={cls}
                      onClick={() => setSelectedClass(cls as any)}
                      className={`w-full text-left px-4 py-3 border transition-all duration-300 ${
                        selectedClass === cls
                          ? "border-gold-500 bg-gold-500/10 text-gold-500"
                          : "border-white/10 text-white/60 hover:border-white/30"
                      }`}
                    >
                      {cls.charAt(0).toUpperCase() + cls.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stops Filter */}
              <div className="mb-6">
                <label className="text-sm text-white/60 uppercase tracking-wider mb-3 block">
                  Stops
                </label>
                <div className="space-y-2">
                  {["Non-stop", "1 Stop", "2+ Stops"].map((stop) => (
                    <label key={stop} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 accent-gold-500" defaultChecked />
                      <span className="text-white/60 group-hover:text-white transition-colors">
                        {stop}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Airlines Filter */}
              <div className="mb-6">
                <label className="text-sm text-white/60 uppercase tracking-wider mb-3 block">
                  Airlines
                </label>
                <div className="space-y-2">
                  {["Emirates", "Singapore Airlines", "Qatar Airways", "Lufthansa"].map((airline) => (
                    <label key={airline} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 accent-gold-500" defaultChecked />
                      <span className="text-white/60 group-hover:text-white transition-colors text-sm">
                        {airline}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="btn-primary w-full text-sm">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-white/60 text-sm">
                {sortedFlights.length} flights found
              </p>
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-white/40" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-white/60 text-sm border-none focus:outline-none cursor-pointer"
                >
                  <option value="price" className="bg-luxury-dark">Price: Low to High</option>
                  <option value="duration" className="bg-luxury-dark">Duration: Shortest</option>
                  <option value="departure" className="bg-luxury-dark">Departure: Earliest</option>
                </select>
              </div>
            </div>

            {/* Flight Cards */}
            <div className="space-y-4">
              {sortedFlights.map((flight) => (
                <div key={flight.id} className="card-luxury p-6 group">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Airline Info */}
                    <div className="lg:w-40">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{flight.logo}</span>
                        <div>
                          <p className="text-white font-medium">{flight.airline}</p>
                          <p className="text-white/40 text-sm">{flight.flightNumber}</p>
                        </div>
                      </div>
                    </div>

                    {/* Flight Times */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        {/* Departure */}
                        <div className="text-center">
                          <p className="text-2xl font-display text-white">{flight.departure.time}</p>
                          <p className="text-gold-500 font-medium">{flight.departure.airport}</p>
                          <p className="text-white/40 text-xs">{flight.departure.city}</p>
                        </div>

                        {/* Duration */}
                        <div className="flex-1 flex flex-col items-center">
                          <p className="text-white/40 text-sm mb-2">{flight.duration}</p>
                          <div className="w-full h-px bg-white/20 relative">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold-500" />
                            <Plane className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-gold-500" />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold-500" />
                          </div>
                          <p className="text-white/40 text-xs mt-2">{flight.stops}</p>
                        </div>

                        {/* Arrival */}
                        <div className="text-center">
                          <p className="text-2xl font-display text-white">{flight.arrival.time}</p>
                          <p className="text-gold-500 font-medium">{flight.arrival.airport}</p>
                          <p className="text-white/40 text-xs">{flight.arrival.city}</p>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="flex items-center gap-4 mt-4">
                        {flight.amenities.map((amenity) => {
                          const { icon: Icon, label } = amenityIcons[amenity];
                          return (
                            <div key={amenity} className="flex items-center gap-1 text-white/40" title={label}>
                              <Icon className="w-4 h-4" />
                              <span className="text-xs hidden sm:inline">{label}</span>
                            </div>
                          );
                        })}
                        <span className="text-white/30 text-xs">• {flight.aircraft}</span>
                      </div>
                    </div>

                    {/* Price & Book */}
                    <div className="lg:w-48 lg:text-right">
                      <div className="mb-3">
                        <p className="text-white/40 text-xs uppercase tracking-wider">
                          {selectedClass} class
                        </p>
                        <p className="text-3xl font-display text-gold-500">
                          {formatPrice(flight.classes[selectedClass].price)}
                        </p>
                        <p className="text-white/40 text-xs">per person</p>
                      </div>
                      <Link
                        href={`/flights/${flight.id}`}
                        className="btn-primary w-full lg:w-auto text-sm py-3 flex items-center justify-center gap-2"
                      >
                        Select
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <button className="w-full mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-white/40 text-sm hover:text-gold-500 transition-colors">
                    View Details
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

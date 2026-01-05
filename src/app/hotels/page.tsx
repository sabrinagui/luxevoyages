"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  Wifi, 
  UtensilsCrossed, 
  Dumbbell, 
  Waves,
  Car,
  Sparkles,
  Filter,
  Grid3X3,
  List,
  Heart
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

const hotels = [
  {
    id: 1,
    name: "The Ritz Paris",
    location: "Paris, France",
    address: "15 Place Vendôme, 75001",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    ],
    rating: 5,
    reviews: 2847,
    reviewScore: 9.6,
    pricePerNight: 1250,
    originalPrice: 1500,
    amenities: ["wifi", "restaurant", "gym", "spa", "parking", "concierge"],
    badge: "Iconic",
    description: "A legendary palace hotel in the heart of Paris, offering timeless elegance and impeccable service.",
    roomsLeft: 3,
  },
  {
    id: 2,
    name: "Aman Tokyo",
    location: "Tokyo, Japan",
    address: "Otemachi Tower, 1-5-6 Otemachi",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    images: [],
    rating: 5,
    reviews: 1923,
    reviewScore: 9.4,
    pricePerNight: 980,
    originalPrice: null,
    amenities: ["wifi", "restaurant", "gym", "spa", "concierge"],
    badge: "Urban Retreat",
    description: "A sanctuary of serenity offering sweeping views of Tokyo's skyline and traditional Japanese hospitality.",
    roomsLeft: 7,
  },
  {
    id: 3,
    name: "Burj Al Arab Jumeirah",
    location: "Dubai, UAE",
    address: "Jumeirah Street, Umm Suqeim 3",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    images: [],
    rating: 5,
    reviews: 4521,
    reviewScore: 9.8,
    pricePerNight: 2100,
    originalPrice: 2400,
    amenities: ["wifi", "restaurant", "gym", "spa", "pool", "parking", "concierge"],
    badge: "Legendary",
    description: "The world's most luxurious hotel, offering unparalleled Arabian hospitality on its own island.",
    roomsLeft: 2,
  },
  {
    id: 4,
    name: "Four Seasons Resort Maldives",
    location: "Baa Atoll, Maldives",
    address: "Landaa Giraavaru, Baa Atoll",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
    images: [],
    rating: 5,
    reviews: 3156,
    reviewScore: 9.7,
    pricePerNight: 1850,
    originalPrice: null,
    amenities: ["wifi", "restaurant", "spa", "pool", "diving", "concierge"],
    badge: "Paradise",
    description: "Overwater bungalows in a UNESCO Biosphere Reserve with world-class diving and snorkeling.",
    roomsLeft: 5,
  },
  {
    id: 5,
    name: "Claridge's London",
    location: "London, UK",
    address: "Brook Street, Mayfair W1K 4HR",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    images: [],
    rating: 5,
    reviews: 2234,
    reviewScore: 9.5,
    pricePerNight: 890,
    originalPrice: 1100,
    amenities: ["wifi", "restaurant", "gym", "spa", "concierge"],
    badge: "Art Deco",
    description: "An iconic Art Deco masterpiece in the heart of Mayfair with legendary afternoon tea.",
    roomsLeft: 4,
  },
  {
    id: 6,
    name: "Mandarin Oriental Bangkok",
    location: "Bangkok, Thailand",
    address: "48 Oriental Avenue",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    images: [],
    rating: 5,
    reviews: 3890,
    reviewScore: 9.3,
    pricePerNight: 450,
    originalPrice: null,
    amenities: ["wifi", "restaurant", "gym", "spa", "pool", "concierge"],
    badge: "Heritage",
    description: "A legendary riverside retreat offering the finest in Thai hospitality for over 145 years.",
    roomsLeft: 8,
  },
];

const amenityIcons: Record<string, { icon: React.ElementType; label: string }> = {
  wifi: { icon: Wifi, label: "Free Wi-Fi" },
  restaurant: { icon: UtensilsCrossed, label: "Restaurant" },
  gym: { icon: Dumbbell, label: "Fitness Center" },
  spa: { icon: Sparkles, label: "Spa" },
  pool: { icon: Waves, label: "Pool" },
  parking: { icon: Car, label: "Parking" },
  concierge: { icon: Sparkles, label: "Concierge" },
  diving: { icon: Waves, label: "Diving" },
};

export default function HotelsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("recommended");

  return (
    <div className="min-h-screen bg-luxury-dark pt-32 pb-20">
      <div className="container-luxury">
        {/* Page Header */}
        <div className="mb-8">
          <nav className="text-sm text-white/40 mb-4">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gold-500">Hotels</span>
          </nav>
          <h1 className="heading-display text-white mb-4">Luxury Hotels & Resorts</h1>
          <p className="text-white/60">
            Discover world-class accommodations handpicked for discerning travelers
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white/5 border border-white/10 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="input-luxury pl-12"
                defaultValue="Paris, France"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Check-in"
                className="input-luxury pl-12"
                defaultValue="Feb 15, 2026"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Check-out"
                className="input-luxury pl-12"
                defaultValue="Feb 22, 2026"
              />
            </div>
            <button className="btn-primary flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Search Hotels
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-72 shrink-0">
            <div className="card-luxury p-6 sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-display text-white">Filters</h3>
                <Filter className="w-5 h-5 text-gold-500" />
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="text-sm text-white/60 uppercase tracking-wider mb-3 block">
                  Price Per Night
                </label>
                <div className="space-y-2">
                  {["Under $500", "$500 - $1000", "$1000 - $2000", "$2000+"].map((range) => (
                    <label key={range} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 accent-gold-500" defaultChecked />
                      <span className="text-white/60 group-hover:text-white transition-colors">
                        {range}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Star Rating */}
              <div className="mb-6">
                <label className="text-sm text-white/60 uppercase tracking-wider mb-3 block">
                  Star Rating
                </label>
                <div className="space-y-2">
                  {[5, 4, 3].map((stars) => (
                    <label key={stars} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 accent-gold-500" defaultChecked={stars === 5} />
                      <div className="flex items-center gap-1">
                        {[...Array(stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                        ))}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <label className="text-sm text-white/60 uppercase tracking-wider mb-3 block">
                  Amenities
                </label>
                <div className="space-y-2">
                  {["Free Wi-Fi", "Pool", "Spa", "Restaurant", "Gym", "Parking"].map((amenity) => (
                    <label key={amenity} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 accent-gold-500" defaultChecked />
                      <span className="text-white/60 group-hover:text-white transition-colors text-sm">
                        {amenity}
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
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-white/60">
                Showing <span className="text-white font-medium">{hotels.length}</span> luxury hotels
              </p>
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-white/60 text-sm border border-white/10 px-4 py-2 focus:outline-none focus:border-gold-500"
                >
                  <option value="recommended" className="bg-luxury-dark">Recommended</option>
                  <option value="price-low" className="bg-luxury-dark">Price: Low to High</option>
                  <option value="price-high" className="bg-luxury-dark">Price: High to Low</option>
                  <option value="rating" className="bg-luxury-dark">Guest Rating</option>
                </select>
                <div className="hidden md:flex items-center gap-2 border border-white/10">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-gold-500 text-luxury-dark" : "text-white/60"}`}
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? "bg-gold-500 text-luxury-dark" : "text-white/60"}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Hotel Cards */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-6"}>
              {hotels.map((hotel) => (
                <Link
                  key={hotel.id}
                  href={`/hotels/${hotel.id}`}
                  className={`group card-luxury overflow-hidden ${
                    viewMode === "list" ? "flex flex-col md:flex-row" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden ${viewMode === "list" ? "md:w-80 h-64 md:h-auto" : "h-64"}`}>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${hotel.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold-500 text-luxury-dark text-xs font-semibold uppercase tracking-wider">
                        {hotel.badge}
                      </span>
                    </div>

                    {/* Wishlist */}
                    <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-luxury-dark/50 backdrop-blur flex items-center justify-center text-white/60 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>

                    {/* Rooms Left */}
                    {hotel.roomsLeft <= 3 && (
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-red-500/90 text-white text-xs font-medium">
                          Only {hotel.roomsLeft} rooms left!
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`p-6 flex-1 ${viewMode === "list" ? "flex flex-col justify-between" : ""}`}>
                    <div>
                      {/* Rating & Reviews */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(hotel.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-gold-500 fill-gold-500" />
                          ))}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-gold-500 text-luxury-dark text-xs font-bold">
                            {hotel.reviewScore}
                          </span>
                          <span className="text-white/40 text-xs">
                            ({hotel.reviews.toLocaleString()} reviews)
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-display text-white mb-2 group-hover:text-gold-500 transition-colors">
                        {hotel.name}
                      </h3>

                      <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
                        <MapPin className="w-4 h-4 text-gold-500" />
                        {hotel.location}
                      </div>

                      {viewMode === "list" && (
                        <p className="text-white/60 text-sm mb-4 line-clamp-2">
                          {hotel.description}
                        </p>
                      )}

                      {/* Amenities */}
                      <div className="flex items-center gap-2 mb-4">
                        {hotel.amenities.slice(0, 4).map((amenity) => {
                          const config = amenityIcons[amenity];
                          if (!config) return null;
                          return (
                            <div
                              key={amenity}
                              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
                              title={config.label}
                            >
                              <config.icon className="w-4 h-4 text-white/60" />
                            </div>
                          );
                        })}
                        {hotel.amenities.length > 4 && (
                          <span className="text-white/40 text-xs">+{hotel.amenities.length - 4}</span>
                        )}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-end justify-between pt-4 border-t border-white/10">
                      <div>
                        {hotel.originalPrice && (
                          <span className="text-white/40 text-sm line-through mr-2">
                            ${hotel.originalPrice}
                          </span>
                        )}
                        <span className="text-3xl font-display text-gold-500">
                          ${hotel.pricePerNight}
                        </span>
                        <span className="text-white/40 text-sm"> /night</span>
                      </div>
                      <span className="text-gold-500 text-sm font-medium group-hover:underline">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="btn-outline-gold">
                Load More Hotels
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

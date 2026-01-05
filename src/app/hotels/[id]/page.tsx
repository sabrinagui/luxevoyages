"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Wifi, 
  UtensilsCrossed, 
  Dumbbell, 
  Waves,
  Car,
  Sparkles,
  Check,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Shield,
  Clock
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

// Sample hotel data
const hotel = {
  id: 1,
  name: "The Ritz Paris",
  location: "Paris, France",
  address: "15 Place Vendôme, 75001 Paris, France",
  images: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
  ],
  rating: 5,
  reviews: 2847,
  reviewScore: 9.6,
  badge: "Iconic",
  description: `The Ritz Paris is a legendary palace hotel in the heart of Paris, located on the prestigious Place Vendôme. Since its opening in 1898 by César Ritz, the hotel has been synonymous with luxury, elegance, and exceptional service.

Experience the perfect blend of historic grandeur and modern comfort in one of the most celebrated hotels in the world. Each suite tells a story, featuring priceless antiques, fine fabrics, and breathtaking views of the Parisian skyline.`,
  amenities: [
    { id: "wifi", name: "High-Speed Wi-Fi", icon: Wifi },
    { id: "restaurant", name: "L'Espadon Restaurant", icon: UtensilsCrossed },
    { id: "gym", name: "Fitness Center", icon: Dumbbell },
    { id: "spa", name: "Chanel au Ritz Paris Spa", icon: Sparkles },
    { id: "pool", name: "Swimming Pool", icon: Waves },
    { id: "parking", name: "Valet Parking", icon: Car },
  ],
  highlights: [
    "Michelin-starred dining at L'Espadon",
    "Legendary Bar Hemingway",
    "Exclusive Chanel spa treatments",
    "Private cooking classes with our chefs",
    "Personal shopping concierge",
    "24-hour room service",
  ],
  rooms: [
    {
      id: 1,
      name: "Superior Room",
      size: "35 m²",
      maxGuests: 2,
      bedType: "King or Twin",
      price: 950,
      originalPrice: 1100,
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
      features: ["City View", "Marble Bathroom", "Nespresso Machine", "24h Room Service"],
      available: true,
    },
    {
      id: 2,
      name: "Deluxe Room",
      size: "45 m²",
      maxGuests: 2,
      bedType: "King",
      price: 1250,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      features: ["Place Vendôme View", "Sitting Area", "Soaking Tub", "Butler Service"],
      available: true,
    },
    {
      id: 3,
      name: "Junior Suite",
      size: "55 m²",
      maxGuests: 3,
      bedType: "King",
      price: 1850,
      originalPrice: 2100,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      features: ["Separate Living Area", "Garden View", "Champagne on Arrival", "Spa Access"],
      available: true,
    },
    {
      id: 4,
      name: "Coco Chanel Suite",
      size: "188 m²",
      maxGuests: 4,
      bedType: "King + Sofa Bed",
      price: 8500,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      features: ["Historic Suite", "Private Terrace", "Personal Butler", "Chanel Amenities", "Champagne Bar"],
      available: false,
    },
  ],
  policies: {
    checkIn: "3:00 PM",
    checkOut: "12:00 PM",
    cancellation: "Free cancellation up to 48 hours before check-in",
  },
};

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [checkIn, setCheckIn] = useState("2026-02-15");
  const [checkOut, setCheckOut] = useState("2026-02-22");
  const [guests, setGuests] = useState(2);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length);
  };

  const nights = 7; // Calculate from dates
  const selectedRoomData = hotel.rooms.find((r) => r.id === selectedRoom);

  return (
    <div className="min-h-screen bg-luxury-dark pt-32 pb-20">
      <div className="container-luxury">
        {/* Back Button */}
        <Link href="/hotels" className="inline-flex items-center gap-2 text-white/60 hover:text-gold-500 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Hotels
        </Link>

        {/* Image Gallery */}
        <div className="relative mb-12 group">
          <div className="relative h-[500px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700"
              style={{ backgroundImage: `url(${hotel.images[currentImageIndex]})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent" />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-luxury-dark/50 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold-500"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-luxury-dark/50 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold-500"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {hotel.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? "w-8 bg-gold-500" : "bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="w-10 h-10 rounded-full bg-luxury-dark/50 backdrop-blur flex items-center justify-center text-white hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-luxury-dark/50 backdrop-blur flex items-center justify-center text-white hover:text-gold-500 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Hotel Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-gold-500 text-luxury-dark text-xs font-semibold uppercase tracking-wider">
                  {hotel.badge}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(hotel.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                  ))}
                </div>
              </div>

              <h1 className="heading-display text-white mb-4">{hotel.name}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-white/60">
                  <MapPin className="w-5 h-5 text-gold-500" />
                  {hotel.address}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-2 bg-gold-500 text-luxury-dark font-bold text-lg">
                    {hotel.reviewScore}
                  </span>
                  <div>
                    <p className="text-white font-medium">Exceptional</p>
                    <p className="text-white/40 text-sm">{hotel.reviews.toLocaleString()} reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-display text-white mb-4">About This Hotel</h2>
              <div className="text-white/70 leading-relaxed whitespace-pre-line">
                {hotel.description}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-2xl font-display text-white mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.amenities.map((amenity) => (
                  <div key={amenity.id} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10">
                    <amenity.icon className="w-6 h-6 text-gold-500" />
                    <span className="text-white/80">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-display text-white mb-6">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hotel.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gold-500" />
                    <span className="text-white/70">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rooms */}
            <div>
              <h2 className="text-2xl font-display text-white mb-6">Available Rooms</h2>
              <div className="space-y-4">
                {hotel.rooms.map((room) => (
                  <div
                    key={room.id}
                    className={`card-luxury overflow-hidden ${
                      selectedRoom === room.id ? "border-gold-500" : ""
                    } ${!room.available ? "opacity-50" : ""}`}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Room Image */}
                      <div className="md:w-64 h-48 md:h-auto relative overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${room.image})` }}
                        />
                      </div>

                      {/* Room Details */}
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-display text-white mb-2">{room.name}</h3>
                            <div className="flex items-center gap-4 text-sm text-white/60">
                              <span>{room.size}</span>
                              <span>•</span>
                              <span>{room.bedType}</span>
                              <span>•</span>
                              <span>Max {room.maxGuests} guests</span>
                            </div>
                          </div>
                          <div className="text-right">
                            {room.originalPrice && (
                              <span className="text-white/40 text-sm line-through block">
                                ${room.originalPrice}
                              </span>
                            )}
                            <span className="text-2xl font-display text-gold-500">
                              ${room.price}
                            </span>
                            <span className="text-white/40 text-sm"> /night</span>
                          </div>
                        </div>

                        {/* Room Features */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {room.features.map((feature, i) => (
                            <span key={i} className="px-3 py-1 bg-white/5 text-white/60 text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* Select Button */}
                        <button
                          onClick={() => room.available && setSelectedRoom(room.id)}
                          disabled={!room.available}
                          className={`w-full md:w-auto ${
                            room.available
                              ? selectedRoom === room.id
                                ? "btn-primary"
                                : "btn-outline-gold"
                              : "btn-secondary opacity-50 cursor-not-allowed"
                          }`}
                        >
                          {!room.available
                            ? "Sold Out"
                            : selectedRoom === room.id
                            ? "Selected"
                            : "Select Room"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div>
              <h2 className="text-2xl font-display text-white mb-6">Hotel Policies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-white/5 border border-white/10">
                  <p className="text-white/60 text-sm mb-1">Check-in</p>
                  <p className="text-white font-medium">{hotel.policies.checkIn}</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10">
                  <p className="text-white/60 text-sm mb-1">Check-out</p>
                  <p className="text-white font-medium">{hotel.policies.checkOut}</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10">
                  <p className="text-white/60 text-sm mb-1">Cancellation</p>
                  <p className="text-white font-medium text-sm">{hotel.policies.cancellation}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="card-luxury p-6 sticky top-32">
              <h3 className="text-lg font-display text-white mb-6">Book Your Stay</h3>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm text-white/60 mb-2">Check-in</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="input-luxury pl-10 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Check-out</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="input-luxury pl-10 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div className="mb-6">
                <label className="block text-sm text-white/60 mb-2">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="input-luxury pl-10 text-sm"
                  >
                    {[1, 2, 3, 4].map((num) => (
                      <option key={num} value={num} className="bg-luxury-dark">
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Selected Room Summary */}
              {selectedRoomData && (
                <div className="mb-6 p-4 bg-gold-500/10 border border-gold-500/30">
                  <p className="text-white font-medium mb-1">{selectedRoomData.name}</p>
                  <p className="text-white/60 text-sm">{nights} nights</p>
                </div>
              )}

              {/* Price Summary */}
              {selectedRoomData && (
                <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">
                      ${selectedRoomData.price} x {nights} nights
                    </span>
                    <span className="text-white">
                      {formatPrice(selectedRoomData.price * nights)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Taxes & Fees</span>
                    <span className="text-white">
                      {formatPrice(selectedRoomData.price * nights * 0.12)}
                    </span>
                  </div>
                </div>
              )}

              {/* Total */}
              {selectedRoomData && (
                <div className="flex justify-between items-center mb-6">
                  <span className="text-white font-medium">Total</span>
                  <span className="text-3xl font-display text-gold-500">
                    {formatPrice(selectedRoomData.price * nights * 1.12)}
                  </span>
                </div>
              )}

              {/* Book Button */}
              <button
                className="btn-primary w-full mb-4"
                disabled={!selectedRoom}
              >
                {selectedRoom ? "Reserve Now" : "Select a Room"}
              </button>

              <p className="text-white/40 text-xs text-center mb-6">
                You won't be charged yet
              </p>

              {/* Trust Badges */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Shield className="w-4 h-4 text-gold-500" />
                  <span>Best Price Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Check className="w-4 h-4 text-gold-500" />
                  <span>Free Cancellation (48h)</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Clock className="w-4 h-4 text-gold-500" />
                  <span>Instant Confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

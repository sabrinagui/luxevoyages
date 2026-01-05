import Link from "next/link";
import { Star, MapPin, Wifi, UtensilsCrossed, Dumbbell, Waves, ArrowRight } from "lucide-react";

const hotels = [
  {
    id: 1,
    name: "The Ritz Paris",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    rating: 5,
    reviews: 2847,
    pricePerNight: 1250,
    amenities: ["wifi", "restaurant", "gym", "spa"],
    badge: "Iconic",
  },
  {
    id: 2,
    name: "Aman Tokyo",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    rating: 5,
    reviews: 1923,
    pricePerNight: 980,
    amenities: ["wifi", "restaurant", "gym", "spa"],
    badge: "Urban Retreat",
  },
  {
    id: 3,
    name: "Burj Al Arab",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    rating: 5,
    reviews: 4521,
    pricePerNight: 2100,
    amenities: ["wifi", "restaurant", "gym", "pool"],
    badge: "Legendary",
  },
  {
    id: 4,
    name: "Four Seasons Maldives",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
    rating: 5,
    reviews: 3156,
    pricePerNight: 1850,
    amenities: ["wifi", "restaurant", "spa", "pool"],
    badge: "Paradise",
  },
];

const amenityIcons: Record<string, React.ElementType> = {
  wifi: Wifi,
  restaurant: UtensilsCrossed,
  gym: Dumbbell,
  spa: Waves,
  pool: Waves,
};

export function LuxuryHotels() {
  return (
    <section className="section-padding bg-gradient-luxury">
      <div className="container-luxury">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
          <div>
            <span className="text-gold-500 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium mb-3 sm:mb-4 block">
              Exclusive Stays
            </span>
            <h2 className="heading-section text-white mb-3 sm:mb-4">
              Luxury Hotels & Resorts
            </h2>
            <p className="text-white/60 max-w-xl text-sm sm:text-base">
              Indulge in world-class hospitality at our handpicked collection of 
              the finest hotels and resorts across the globe.
            </p>
          </div>
          <Link href="/hotels" className="btn-outline-gold shrink-0 w-full sm:w-auto justify-center">
            View All Hotels
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {hotels.map((hotel) => (
            <Link
              key={hotel.id}
              href={`/hotels/${hotel.id}`}
              className="group card-luxury overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
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
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2 sm:mb-3">
                  {[...Array(hotel.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-gold-500 fill-gold-500"
                    />
                  ))}
                  <span className="text-white/40 text-xs ml-2">
                    ({hotel.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-display text-white mb-2 group-hover:text-gold-500 transition-colors">
                  {hotel.name}
                </h3>

                <div className="flex items-center gap-2 text-white/60 text-xs sm:text-sm mb-3 sm:mb-4">
                  <MapPin className="w-4 h-4 text-gold-500" />
                  {hotel.location}
                </div>

                {/* Amenities */}
                <div className="flex items-center gap-3 mb-4">
                  {hotel.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity];
                    return (
                      <div
                        key={amenity}
                        className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
                        title={amenity}
                      >
                        <Icon className="w-4 h-4 text-white/60" />
                      </div>
                    );
                  })}
                </div>

                {/* Price */}
                <div className="flex items-end justify-between pt-4 border-t border-white/10">
                  <div>
                    <span className="text-white/40 text-xs uppercase tracking-wider">
                      From
                    </span>
                    <p className="text-gold-500 text-2xl font-display">
                      ${hotel.pricePerNight}
                    </p>
                  </div>
                  <span className="text-white/40 text-xs">per night</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

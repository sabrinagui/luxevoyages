import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
    rating: 4.9,
    startingPrice: 2499,
    description: "Iconic white-washed buildings and stunning sunsets",
  },
  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    rating: 4.8,
    startingPrice: 1899,
    description: "Tropical paradise with ancient temples and rice terraces",
  },
  {
    id: 3,
    name: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    rating: 4.9,
    startingPrice: 2199,
    description: "Ultra-modern luxury meets Arabian heritage",
  },
  {
    id: 4,
    name: "Swiss Alps",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    rating: 4.9,
    startingPrice: 3299,
    description: "Majestic peaks and world-class ski resorts",
  },
  {
    id: 5,
    name: "Amalfi Coast",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&q=80",
    rating: 4.8,
    startingPrice: 2799,
    description: "Dramatic cliffs and charming coastal villages",
  },
  {
    id: 6,
    name: "Maldives",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    rating: 5.0,
    startingPrice: 4599,
    description: "Ultimate luxury overwater villa experience",
  },
];

export function FeaturedDestinations() {
  return (
    <section className="section-padding bg-luxury-dark">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-gold-500 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium mb-3 sm:mb-4 block">
            Explore the World
          </span>
          <h2 className="heading-section text-white mb-3 sm:mb-4">
            Featured Destinations
          </h2>
          <div className="divider-gold mb-4 sm:mb-6" />
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Handpicked destinations that offer unparalleled luxury, breathtaking 
            landscapes, and unforgettable experiences.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {destinations.map((destination, index) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.name.toLowerCase().replace(" ", "-")}`}
              className={`group relative overflow-hidden card-luxury ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative ${
                  index === 0 ? "h-[280px] sm:h-[400px] md:h-[500px]" : "h-[220px] sm:h-[260px] md:h-[300px]"
                } overflow-hidden`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${destination.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
                  <span className="text-gold-500 text-sm font-medium">
                    {destination.rating}
                  </span>
                </div>

                <h3 className={`font-display text-white mb-1 ${
                  index === 0 ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
                }`}>
                  {destination.name}
                </h3>
                <p className="text-white/60 text-sm mb-3">{destination.country}</p>
                
                {index === 0 && (
                  <p className="text-white/70 mb-4 max-w-md">
                    {destination.description}
                  </p>
                )}

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/40 text-xs uppercase tracking-wider">From</span>
                    <p className="text-gold-500 text-xl font-display">
                      ${destination.startingPrice.toLocaleString()}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold-500 group-hover:bg-gold-500 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-luxury-dark transition-colors" />
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/destinations" className="btn-outline-gold">
            View All Destinations
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

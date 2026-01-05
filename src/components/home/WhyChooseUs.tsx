import { Shield, Headphones, Globe, Award, Clock, CreditCard } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Booking",
    description: "Your transactions are protected with bank-level encryption and security protocols.",
  },
  {
    icon: Headphones,
    title: "24/7 Concierge",
    description: "Personal travel concierge available around the clock for any assistance you need.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Access to exclusive partnerships with over 500 luxury hotels and airlines worldwide.",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description: "We match any lower price you find, ensuring you always get the best deal.",
  },
  {
    icon: Clock,
    title: "Instant Confirmation",
    description: "Receive immediate booking confirmation with detailed itinerary via email.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Multiple payment options including installments for your convenience.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-luxury-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-luxury relative">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-gold-500 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium mb-3 sm:mb-4 block">
            Why Choose Us
          </span>
          <h2 className="heading-section text-white mb-3 sm:mb-4">
            The Luxe Voyages Difference
          </h2>
          <div className="divider-gold mb-4 sm:mb-6" />
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Experience travel excellence with our commitment to unparalleled service, 
            exclusive access, and attention to every detail.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-5 sm:p-6 md:p-8 card-luxury text-center hover:border-gold-500/50 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-gradient-gold flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-luxury-dark" />
              </div>

              <h3 className="text-lg sm:text-xl font-display text-white mb-2 sm:mb-3 group-hover:text-gold-500 transition-colors">
                {feature.title}
              </h3>

              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-5 sm:p-6 md:p-8 bg-white/5 border border-white/10">
          {[
            { value: "50K+", label: "Happy Travelers" },
            { value: "500+", label: "Destinations" },
            { value: "1000+", label: "Partner Hotels" },
            { value: "99%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-gold-500 mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs sm:text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Shield, Headphones, Globe, Award, Clock, CreditCard } from "lucide-react";

const features = [
  {
    number: "01",
    icon: Shield,
    title: "Secure Booking",
    description: "Your transactions are protected with bank-level encryption and security protocols.",
  },
  {
    number: "02",
    icon: Headphones,
    title: "24/7 Concierge",
    description: "Personal travel concierge available around the clock for any assistance you need.",
  },
  {
    number: "03",
    icon: Globe,
    title: "Global Network",
    description: "Access to exclusive partnerships with over 500 luxury hotels and airlines worldwide.",
  },
  {
    number: "04",
    icon: Award,
    title: "Best Price Guarantee",
    description: "We match any lower price you find, ensuring you always get the best deal.",
  },
  {
    number: "05",
    icon: Clock,
    title: "Instant Confirmation",
    description: "Receive immediate booking confirmation with detailed itinerary via email.",
  },
  {
    number: "06",
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Multiple payment options including installments for your convenience.",
  },
];

const stats = [
  { value: "50K+", label: "Happy Travelers" },
  { value: "500+", label: "Destinations" },
  { value: "1000+", label: "Partner Hotels" },
  { value: "99%", label: "Satisfaction Rate" },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 md:py-36 bg-luxury-cream">
      <div className="container-luxury">
        {/* Header */}
        <div className="mb-16 sm:mb-20">
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium mb-4 block">
            Why Choose Us
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-luxury-dark font-light tracking-wide leading-tight max-w-md">
              The Luxe Voyages<br />Difference
            </h2>
            <p className="text-luxury-dark/50 max-w-xs text-sm leading-relaxed sm:text-right">
              Unparalleled service, exclusive access, and attention to every detail.
            </p>
          </div>
          <div className="w-full h-px bg-luxury-dark/10 mt-10" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y divide-luxury-dark/10 sm:divide-y-0">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const col = index % 3;
            const row = Math.floor(index / 3);
            const totalRows = Math.ceil(features.length / 3);
            return (
              <div
                key={index}
                className={[
                  "group py-8 sm:py-10",
                  col < 2 ? "lg:pr-10 lg:border-r lg:border-luxury-dark/10" : "lg:pl-0",
                  col === 1 ? "lg:px-10" : "",
                  col === 2 ? "lg:pl-10" : "",
                  row < totalRows - 1 ? "lg:border-b lg:border-luxury-dark/10 lg:pb-10 lg:mb-0" : "",
                  index % 2 === 0 ? "sm:pr-8 sm:border-r sm:border-luxury-dark/10" : "sm:pl-8",
                  index < features.length - 2 ? "sm:border-b sm:border-luxury-dark/10" : "",
                ].filter(Boolean).join(" ")}
              >
                <div className="flex items-start gap-5">
                  <div className="pt-0.5 shrink-0">
                    <span className="text-[10px] text-gold-500 font-medium tracking-widest block mb-4 uppercase">{feature.number}</span>
                    <Icon className="w-5 h-5 text-luxury-dark/30 group-hover:text-gold-500 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-luxury-dark font-display text-xl sm:text-2xl font-light tracking-wide mb-2 group-hover:text-gold-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-luxury-dark/50 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-luxury-dark/10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="font-display text-4xl sm:text-5xl text-luxury-dark font-light tracking-wide">
                {stat.value}
              </div>
              <div className="text-luxury-dark/40 text-xs uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

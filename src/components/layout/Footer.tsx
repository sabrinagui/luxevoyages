import Link from "next/link";
import { Plane, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  services: [
    { name: "Flight Booking", href: "/flights" },
    { name: "Hotel Reservations", href: "/hotels" },
    { name: "Vacation Packages", href: "/packages" },
    { name: "Travel Insurance", href: "/insurance" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
  destinations: [
    { name: "Paris, France", href: "/destinations/paris" },
    { name: "Maldives", href: "/destinations/maldives" },
    { name: "Tokyo, Japan", href: "/destinations/tokyo" },
    { name: "New York, USA", href: "/destinations/new-york" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-luxury-darker border-t border-white/10">
      {/* Main Footer */}
      <div className="container-luxury section-padding pb-8 sm:pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-luxury-dark transform -rotate-45" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-display font-semibold text-white">
                  Luxe
                </span>
                <span className="text-lg sm:text-xl font-display font-light text-gold-500">
                  Voyages
                </span>
              </div>
            </Link>
            <p className="text-white/60 mb-4 sm:mb-6 max-w-sm text-sm sm:text-base">
              Crafting extraordinary journeys for discerning travelers since 2010. 
              Experience the world in unparalleled luxury and comfort.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 text-white/60 text-sm sm:text-base">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span className="truncate">concierge@luxevoyages.com</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-white/60 text-sm sm:text-base">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>+1 (888) 555-LUXE</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-white/60 text-sm sm:text-base">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>Fifth Avenue, New York, NY</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-4 sm:mb-6">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold-500 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-4 sm:mb-6">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold-500 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-4 sm:mb-6">
              Support
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold-500 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-4 sm:mb-6">
              Top Destinations
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold-500 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-luxury py-6 sm:py-8 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-white/40 text-xs sm:text-sm text-center md:text-left order-3 md:order-1">
            © 2026 Luxe Voyages. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4 order-1 md:order-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-gold-500 hover:border-gold-500 transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/40 order-2 md:order-3">
            <Link href="/privacy" className="hover:text-gold-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

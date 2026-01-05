"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Plane, 
  ArrowLeft, 
  Clock, 
  Wifi, 
  UtensilsCrossed, 
  Tv, 
  Armchair,
  Shield,
  CreditCard,
  Check,
  User,
  Mail,
  Phone
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

// Sample flight detail
const flight = {
  id: "FL001",
  airline: "Emirates",
  logo: "✈️",
  flightNumber: "EK 201",
  departure: {
    city: "New York",
    airport: "JFK",
    terminal: "Terminal 4",
    time: "10:30 PM",
    date: "February 15, 2026",
  },
  arrival: {
    city: "Dubai",
    airport: "DXB",
    terminal: "Terminal 3",
    time: "7:45 PM",
    date: "February 16, 2026",
  },
  duration: "12h 15m",
  stops: "Non-stop",
  aircraft: "Airbus A380",
  classes: {
    economy: { 
      price: 850, 
      available: true,
      features: ["32\" seat pitch", "Personal screen", "USB charging", "Complimentary meals"]
    },
    premium: { 
      price: 1650, 
      available: true,
      features: ["38\" seat pitch", "13\" HD screen", "Power outlets", "Premium dining", "Priority boarding"]
    },
    business: { 
      price: 4200, 
      available: true,
      features: ["Lie-flat seats", "23\" HD screen", "Onboard lounge", "Gourmet dining", "Chauffeur service", "Lounge access"]
    },
    first: { 
      price: 12500, 
      available: true,
      features: ["Private suites", "32\" HD screen", "Shower spa", "Fine dining", "Personal butler", "Unlimited champagne", "Limousine service"]
    },
  },
};

type CabinClass = "economy" | "premium" | "business" | "first";

export default function FlightDetailPage({ params }: { params: { id: string } }) {
  const [selectedClass, setSelectedClass] = useState<CabinClass>("business");
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const selectedClassData = flight.classes[selectedClass];

  return (
    <div className="min-h-screen bg-luxury-dark pt-32 pb-20">
      <div className="container-luxury">
        {/* Back Button */}
        <Link href="/flights" className="inline-flex items-center gap-2 text-white/60 hover:text-gold-500 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Search Results
        </Link>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4">
            {[
              { num: 1, label: "Select Class" },
              { num: 2, label: "Passenger Details" },
              { num: 3, label: "Payment" },
            ].map((s, index) => (
              <div key={s.num} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    step >= s.num
                      ? "border-gold-500 bg-gold-500 text-luxury-dark"
                      : "border-white/20 text-white/40"
                  }`}
                >
                  {step > s.num ? <Check className="w-5 h-5" /> : s.num}
                </div>
                <span className={`ml-3 hidden sm:block ${step >= s.num ? "text-gold-500" : "text-white/40"}`}>
                  {s.label}
                </span>
                {index < 2 && (
                  <div className={`w-12 lg:w-24 h-px mx-4 ${step > s.num ? "bg-gold-500" : "bg-white/20"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Flight Overview Card */}
            <div className="card-luxury p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{flight.logo}</span>
                  <div>
                    <h2 className="text-xl font-display text-white">{flight.airline}</h2>
                    <p className="text-white/40">{flight.flightNumber} • {flight.aircraft}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gold-500 text-sm uppercase tracking-wider">{flight.stops}</p>
                  <p className="text-white/60">{flight.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                {/* Departure */}
                <div className="flex-1">
                  <p className="text-4xl font-display text-white mb-2">{flight.departure.time}</p>
                  <p className="text-gold-500 font-medium text-lg">{flight.departure.airport}</p>
                  <p className="text-white/60">{flight.departure.city}</p>
                  <p className="text-white/40 text-sm mt-2">{flight.departure.terminal}</p>
                  <p className="text-white/40 text-sm">{flight.departure.date}</p>
                </div>

                {/* Timeline */}
                <div className="flex-1 flex flex-col items-center">
                  <Plane className="w-8 h-8 text-gold-500 mb-2" />
                  <div className="w-full h-px bg-gradient-to-r from-gold-500 via-white/30 to-gold-500" />
                  <p className="text-white/40 text-sm mt-2">{flight.duration}</p>
                </div>

                {/* Arrival */}
                <div className="flex-1 text-right">
                  <p className="text-4xl font-display text-white mb-2">{flight.arrival.time}</p>
                  <p className="text-gold-500 font-medium text-lg">{flight.arrival.airport}</p>
                  <p className="text-white/60">{flight.arrival.city}</p>
                  <p className="text-white/40 text-sm mt-2">{flight.arrival.terminal}</p>
                  <p className="text-white/40 text-sm">{flight.arrival.date}</p>
                </div>
              </div>
            </div>

            {/* Step 1: Class Selection */}
            {step === 1 && (
              <div className="card-luxury p-8">
                <h3 className="text-xl font-display text-white mb-6">Select Your Cabin Class</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(Object.entries(flight.classes) as [CabinClass, typeof flight.classes.economy][]).map(([cls, data]) => (
                    <button
                      key={cls}
                      onClick={() => setSelectedClass(cls)}
                      disabled={!data.available}
                      className={`p-6 border text-left transition-all duration-300 ${
                        selectedClass === cls
                          ? "border-gold-500 bg-gold-500/10"
                          : data.available
                          ? "border-white/10 hover:border-white/30"
                          : "border-white/5 opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-display text-white capitalize">{cls}</h4>
                        {selectedClass === cls && (
                          <div className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center">
                            <Check className="w-4 h-4 text-luxury-dark" />
                          </div>
                        )}
                      </div>
                      <p className="text-3xl font-display text-gold-500 mb-4">
                        {formatPrice(data.price)}
                      </p>
                      <ul className="space-y-2">
                        {data.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-white/60 text-sm">
                            <Check className="w-4 h-4 text-gold-500" />
                            {feature}
                          </li>
                        ))}
                        {data.features.length > 4 && (
                          <li className="text-gold-500 text-sm">+{data.features.length - 4} more</li>
                        )}
                      </ul>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="btn-primary w-full mt-8"
                >
                  Continue to Passenger Details
                </button>
              </div>
            )}

            {/* Step 2: Passenger Details */}
            {step === 2 && (
              <div className="card-luxury p-8">
                <h3 className="text-xl font-display text-white mb-6">Passenger Details</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">First Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input type="text" className="input-luxury pl-12" placeholder="John" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Last Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input type="text" className="input-luxury pl-12" placeholder="Doe" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input type="email" className="input-luxury pl-12" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input type="tel" className="input-luxury pl-12" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Passport Number</label>
                      <input type="text" className="input-luxury" placeholder="AB1234567" />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Nationality</label>
                      <select className="input-luxury">
                        <option value="" className="bg-luxury-dark">Select Country</option>
                        <option value="US" className="bg-luxury-dark">United States</option>
                        <option value="UK" className="bg-luxury-dark">United Kingdom</option>
                        <option value="CA" className="bg-luxury-dark">Canada</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button onClick={() => setStep(1)} className="btn-secondary flex-1">
                    Back
                  </button>
                  <button onClick={() => setStep(3)} className="btn-primary flex-1">
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="card-luxury p-8">
                <h3 className="text-xl font-display text-white mb-6">Payment Details</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-white/60 mb-2">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input type="text" className="input-luxury pl-12" placeholder="1234 5678 9012 3456" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Expiry Date</label>
                      <input type="text" className="input-luxury" placeholder="MM/YY" />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">CVV</label>
                      <input type="text" className="input-luxury" placeholder="123" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2">Cardholder Name</label>
                    <input type="text" className="input-luxury" placeholder="JOHN DOE" />
                  </div>

                  <div className="p-4 bg-gold-500/10 border border-gold-500/30 flex items-start gap-3">
                    <Shield className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <p className="text-white/70 text-sm">
                      Your payment is secured with bank-level encryption. We never store your full card details.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button onClick={() => setStep(2)} className="btn-secondary flex-1">
                    Back
                  </button>
                  <button className="btn-primary flex-1">
                    Complete Booking
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="card-luxury p-6 sticky top-32">
              <h3 className="text-lg font-display text-white mb-6">Booking Summary</h3>

              {/* Flight Summary */}
              <div className="pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{flight.logo}</span>
                  <div>
                    <p className="text-white font-medium">{flight.airline}</p>
                    <p className="text-white/40 text-sm">{flight.flightNumber}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Route</span>
                    <span className="text-white">{flight.departure.airport} → {flight.arrival.airport}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Date</span>
                    <span className="text-white">Feb 15, 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Duration</span>
                    <span className="text-white">{flight.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Class</span>
                    <span className="text-gold-500 capitalize">{selectedClass}</span>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Base Fare</span>
                  <span className="text-white">{formatPrice(selectedClassData.price * 0.85)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Taxes & Fees</span>
                  <span className="text-white">{formatPrice(selectedClassData.price * 0.15)}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">Total</span>
                  <span className="text-3xl font-display text-gold-500">
                    {formatPrice(selectedClassData.price)}
                  </span>
                </div>
                <p className="text-white/40 text-xs text-right mt-1">per person</p>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Shield className="w-4 h-4 text-gold-500" />
                  <span>Secure SSL Encryption</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Check className="w-4 h-4 text-gold-500" />
                  <span>Free Cancellation within 24h</span>
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

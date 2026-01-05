"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft,
  Save,
  Plane,
  LayoutDashboard,
  Building2,
  Calendar,
  FileText,
  Users,
  Settings,
  Plus,
  Trash2
} from "lucide-react";

export default function NewFlightPage() {
  const [formData, setFormData] = useState({
    airline: "",
    flightNumber: "",
    aircraft: "",
    originCity: "",
    originAirport: "",
    originTerminal: "",
    destinationCity: "",
    destinationAirport: "",
    destinationTerminal: "",
    departureDate: "",
    departureTime: "",
    arrivalDate: "",
    arrivalTime: "",
    duration: "",
    stops: "non-stop",
    economyPrice: "",
    premiumPrice: "",
    businessPrice: "",
    firstPrice: "",
    economyAvailable: true,
    premiumAvailable: true,
    businessAvailable: true,
    firstAvailable: true,
    status: "active",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-luxury-darker">
      {/* Admin Header */}
      <header className="bg-luxury-dark border-b border-white/10 px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-display">
              <span className="text-white">Luxe</span>
              <span className="text-gold-500">Voyages</span>
            </Link>
            <span className="text-white/40">|</span>
            <span className="text-white/60">Admin Panel</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-white/60 hover:text-gold-500 text-sm">
              View Site
            </Link>
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-luxury-dark font-bold">
              A
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-[calc(100vh-73px)] bg-luxury-dark border-r border-white/10 p-6">
          <nav className="space-y-2">
            <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors">
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </Link>
            <Link href="/admin/flights" className="flex items-center gap-3 px-4 py-3 bg-gold-500/10 text-gold-500 rounded-none">
              <Plane className="w-5 h-5" />
              Flights
            </Link>
            <Link href="/admin/hotels" className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors">
              <Building2 className="w-5 h-5" />
              Hotels
            </Link>
            <Link href="/admin/bookings" className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors">
              <Calendar className="w-5 h-5" />
              Bookings
            </Link>
            <Link href="/admin/blog" className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors">
              <FileText className="w-5 h-5" />
              Blog Posts
            </Link>
            <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors">
              <Users className="w-5 h-5" />
              Users
            </Link>
            <div className="pt-6 border-t border-white/10 mt-6">
              <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors">
                <Settings className="w-5 h-5" />
                Settings
              </Link>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Page Header */}
          <div className="mb-8">
            <Link href="/admin/flights" className="inline-flex items-center gap-2 text-white/60 hover:text-gold-500 transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Flights
            </Link>
            <h1 className="text-3xl font-display text-white mb-2">Add New Flight</h1>
            <p className="text-white/60">Create a new flight listing for the platform</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Airline Info */}
                <div className="card-luxury p-6">
                  <h2 className="text-lg font-display text-white mb-6">Airline Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Airline Name *</label>
                      <input
                        type="text"
                        className="input-luxury w-full"
                        placeholder="Emirates"
                        value={formData.airline}
                        onChange={(e) => setFormData({ ...formData, airline: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Flight Number *</label>
                      <input
                        type="text"
                        className="input-luxury w-full"
                        placeholder="EK 201"
                        value={formData.flightNumber}
                        onChange={(e) => setFormData({ ...formData, flightNumber: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Aircraft</label>
                      <input
                        type="text"
                        className="input-luxury w-full"
                        placeholder="Airbus A380"
                        value={formData.aircraft}
                        onChange={(e) => setFormData({ ...formData, aircraft: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Origin */}
                <div className="card-luxury p-6">
                  <h2 className="text-lg font-display text-white mb-6">Origin</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">City *</label>
                      <input
                        type="text"
                        className="input-luxury w-full"
                        placeholder="New York"
                        value={formData.originCity}
                        onChange={(e) => setFormData({ ...formData, originCity: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Airport Code *</label>
                      <input
                        type="text"
                        className="input-luxury w-full"
                        placeholder="JFK"
                        value={formData.originAirport}
                        onChange={(e) => setFormData({ ...formData, originAirport: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Terminal</label>
                      <input
                        type="text"
                        className="input-luxury w-full"
                        placeholder="Terminal 4"
                        value={formData.originTerminal}
                        onChange={(e) => setFormData({ ...formData, originTerminal: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Destination */}
                <div className="card-luxury p-6">
                  <h2 className="text-lg font-display text-white mb-6">Destination</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">City *</label>
                      <input
                        type="text"
                        className="input-luxury w-full"
                        placeholder="Dubai"
                        value={formData.destinationCity}
                        onChange={(e) => setFormData({ ...formData, destinationCity: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Airport Code *</label>
                      <input
                        type="text"
                        className="input-luxury w-full"
                        placeholder="DXB"
                        value={formData.destinationAirport}
                        onChange={(e) => setFormData({ ...formData, destinationAirport: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Terminal</label>
                      <input
                        type="text"
                        className="input-luxury w-full"
                        placeholder="Terminal 3"
                        value={formData.destinationTerminal}
                        onChange={(e) => setFormData({ ...formData, destinationTerminal: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Schedule */}
                <div className="card-luxury p-6">
                  <h2 className="text-lg font-display text-white mb-6">Schedule</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Departure Date *</label>
                      <input
                        type="date"
                        className="input-luxury w-full"
                        value={formData.departureDate}
                        onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Departure Time *</label>
                      <input
                        type="time"
                        className="input-luxury w-full"
                        value={formData.departureTime}
                        onChange={(e) => setFormData({ ...formData, departureTime: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Arrival Date *</label>
                      <input
                        type="date"
                        className="input-luxury w-full"
                        value={formData.arrivalDate}
                        onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Arrival Time *</label>
                      <input
                        type="time"
                        className="input-luxury w-full"
                        value={formData.arrivalTime}
                        onChange={(e) => setFormData({ ...formData, arrivalTime: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Duration</label>
                      <input
                        type="text"
                        className="input-luxury w-full"
                        placeholder="12h 15m"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Stops</label>
                      <select
                        className="input-luxury w-full"
                        value={formData.stops}
                        onChange={(e) => setFormData({ ...formData, stops: e.target.value })}
                      >
                        <option value="non-stop" className="bg-luxury-dark">Non-stop</option>
                        <option value="1-stop" className="bg-luxury-dark">1 Stop</option>
                        <option value="2-stops" className="bg-luxury-dark">2+ Stops</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="card-luxury p-6">
                  <h2 className="text-lg font-display text-white mb-6">Pricing (USD)</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Economy *</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">$</span>
                        <input
                          type="number"
                          className="input-luxury w-full pl-8"
                          placeholder="850"
                          value={formData.economyPrice}
                          onChange={(e) => setFormData({ ...formData, economyPrice: e.target.value })}
                          required
                        />
                      </div>
                      <label className="flex items-center gap-2 mt-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.economyAvailable}
                          onChange={(e) => setFormData({ ...formData, economyAvailable: e.target.checked })}
                          className="accent-gold-500"
                        />
                        <span className="text-white/60 text-sm">Available</span>
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Premium Economy</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">$</span>
                        <input
                          type="number"
                          className="input-luxury w-full pl-8"
                          placeholder="1650"
                          value={formData.premiumPrice}
                          onChange={(e) => setFormData({ ...formData, premiumPrice: e.target.value })}
                        />
                      </div>
                      <label className="flex items-center gap-2 mt-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.premiumAvailable}
                          onChange={(e) => setFormData({ ...formData, premiumAvailable: e.target.checked })}
                          className="accent-gold-500"
                        />
                        <span className="text-white/60 text-sm">Available</span>
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Business</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">$</span>
                        <input
                          type="number"
                          className="input-luxury w-full pl-8"
                          placeholder="4200"
                          value={formData.businessPrice}
                          onChange={(e) => setFormData({ ...formData, businessPrice: e.target.value })}
                        />
                      </div>
                      <label className="flex items-center gap-2 mt-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.businessAvailable}
                          onChange={(e) => setFormData({ ...formData, businessAvailable: e.target.checked })}
                          className="accent-gold-500"
                        />
                        <span className="text-white/60 text-sm">Available</span>
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">First Class</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">$</span>
                        <input
                          type="number"
                          className="input-luxury w-full pl-8"
                          placeholder="12500"
                          value={formData.firstPrice}
                          onChange={(e) => setFormData({ ...formData, firstPrice: e.target.value })}
                        />
                      </div>
                      <label className="flex items-center gap-2 mt-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.firstAvailable}
                          onChange={(e) => setFormData({ ...formData, firstAvailable: e.target.checked })}
                          className="accent-gold-500"
                        />
                        <span className="text-white/60 text-sm">Available</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Publish */}
                <div className="card-luxury p-6">
                  <h2 className="text-lg font-display text-white mb-6">Publish</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Status</label>
                      <select
                        className="input-luxury w-full"
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      >
                        <option value="active" className="bg-luxury-dark">Active</option>
                        <option value="inactive" className="bg-luxury-dark">Inactive</option>
                        <option value="draft" className="bg-luxury-dark">Draft</option>
                      </select>
                    </div>
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                      <Save className="w-5 h-5" />
                      Save Flight
                    </button>
                    <button type="button" className="btn-secondary w-full">
                      Save as Draft
                    </button>
                  </div>
                </div>

                {/* Amenities */}
                <div className="card-luxury p-6">
                  <h2 className="text-lg font-display text-white mb-6">Amenities</h2>
                  <div className="space-y-3">
                    {["Wi-Fi", "In-flight Meals", "Entertainment System", "Power Outlets", "USB Charging", "Blankets & Pillows"].map((amenity) => (
                      <label key={amenity} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="accent-gold-500" defaultChecked />
                        <span className="text-white/70">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Filter,
  Download,
  Star,
  Plane,
  LayoutDashboard,
  Building2,
  Calendar,
  FileText,
  Users,
  Settings
} from "lucide-react";

const hotels = [
  {
    id: 1,
    name: "The Ritz Paris",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&q=80",
    rating: 5,
    reviewScore: 9.6,
    rooms: 142,
    priceFrom: 950,
    status: "active",
  },
  {
    id: 2,
    name: "Aman Tokyo",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=200&q=80",
    rating: 5,
    reviewScore: 9.4,
    rooms: 84,
    priceFrom: 980,
    status: "active",
  },
  {
    id: 3,
    name: "Burj Al Arab Jumeirah",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=200&q=80",
    rating: 5,
    reviewScore: 9.8,
    rooms: 202,
    priceFrom: 2100,
    status: "active",
  },
  {
    id: 4,
    name: "Four Seasons Maldives",
    location: "Baa Atoll, Maldives",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=200&q=80",
    rating: 5,
    reviewScore: 9.7,
    rooms: 103,
    priceFrom: 1850,
    status: "active",
  },
  {
    id: 5,
    name: "Claridge's London",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=200&q=80",
    rating: 5,
    reviewScore: 9.5,
    rooms: 190,
    priceFrom: 890,
    status: "inactive",
  },
];

export default function AdminHotelsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHotels = hotels.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <Link href="/admin/flights" className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors">
              <Plane className="w-5 h-5" />
              Flights
            </Link>
            <Link href="/admin/hotels" className="flex items-center gap-3 px-4 py-3 bg-gold-500/10 text-gold-500 rounded-none">
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
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-display text-white mb-2">Manage Hotels</h1>
              <p className="text-white/60">Add, edit, and manage hotel listings</p>
            </div>
            <Link href="/admin/hotels/new" className="btn-primary flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add New Hotel
            </Link>
          </div>

          {/* Filters & Search */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search hotels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-luxury pl-12 w-full"
              />
            </div>
            <button className="btn-secondary flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHotels.map((hotel) => (
              <div key={hotel.id} className="card-luxury overflow-hidden group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${hotel.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                      hotel.status === "active"
                        ? "bg-green-500/90 text-white"
                        : "bg-red-500/90 text-white"
                    }`}>
                      {hotel.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(hotel.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-gold-500 fill-gold-500" />
                      ))}
                    </div>
                    <span className="px-2 py-1 bg-gold-500 text-luxury-dark text-xs font-bold">
                      {hotel.reviewScore}
                    </span>
                  </div>

                  <h3 className="text-lg font-display text-white mb-1">{hotel.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{hotel.location}</p>

                  <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                    <span>{hotel.rooms} rooms</span>
                    <span>From <span className="text-gold-500 font-medium">${hotel.priceFrom}</span>/night</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                    <Link href={`/hotels/${hotel.id}`} className="flex-1 btn-secondary py-2 flex items-center justify-center gap-2 text-sm">
                      <Eye className="w-4 h-4" />
                      View
                    </Link>
                    <Link href={`/admin/hotels/${hotel.id}/edit`} className="flex-1 btn-outline-gold py-2 flex items-center justify-center gap-2 text-sm">
                      <Edit className="w-4 h-4" />
                      Edit
                    </Link>
                    <button className="p-2 text-white/40 hover:text-red-500 hover:bg-red-500/10 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-8">
            <p className="text-white/40 text-sm">
              Showing 1-{filteredHotels.length} of {filteredHotels.length} hotels
            </p>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-white/40 hover:text-white text-sm" disabled>
                Previous
              </button>
              <button className="px-4 py-2 bg-gold-500 text-luxury-dark text-sm">1</button>
              <button className="px-4 py-2 text-white/40 hover:text-white text-sm">
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

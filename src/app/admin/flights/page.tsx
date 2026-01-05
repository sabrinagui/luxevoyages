"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft,
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  MoreHorizontal,
  Filter,
  Download,
  Plane,
  LayoutDashboard,
  Building2,
  Calendar,
  FileText,
  Users,
  Settings
} from "lucide-react";

const flights = [
  {
    id: "FL001",
    airline: "Emirates",
    flightNumber: "EK 201",
    origin: "New York (JFK)",
    destination: "Dubai (DXB)",
    departure: "2026-02-15 22:30",
    duration: "12h 15m",
    economy: 850,
    business: 4200,
    first: 12500,
    status: "active",
  },
  {
    id: "FL002",
    airline: "Singapore Airlines",
    flightNumber: "SQ 25",
    origin: "New York (JFK)",
    destination: "Singapore (SIN)",
    departure: "2026-02-15 23:00",
    duration: "18h 30m",
    economy: 1100,
    business: 5800,
    first: 15000,
    status: "active",
  },
  {
    id: "FL003",
    airline: "Qatar Airways",
    flightNumber: "QR 702",
    origin: "New York (JFK)",
    destination: "Doha (DOH)",
    departure: "2026-02-15 21:00",
    duration: "11h 15m",
    economy: 780,
    business: 4500,
    first: 11000,
    status: "active",
  },
  {
    id: "FL004",
    airline: "British Airways",
    flightNumber: "BA 178",
    origin: "New York (JFK)",
    destination: "London (LHR)",
    departure: "2026-02-16 19:00",
    duration: "7h 00m",
    economy: 650,
    business: 3200,
    first: 8500,
    status: "inactive",
  },
];

export default function AdminFlightsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFlights = flights.filter(
    (flight) =>
      flight.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.destination.toLowerCase().includes(searchTerm.toLowerCase())
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
            <Link
              href="/admin"
              className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </Link>
            <Link
              href="/admin/flights"
              className="flex items-center gap-3 px-4 py-3 bg-gold-500/10 text-gold-500 rounded-none"
            >
              <Plane className="w-5 h-5" />
              Flights
            </Link>
            <Link
              href="/admin/hotels"
              className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Building2 className="w-5 h-5" />
              Hotels
            </Link>
            <Link
              href="/admin/bookings"
              className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Bookings
            </Link>
            <Link
              href="/admin/blog"
              className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FileText className="w-5 h-5" />
              Blog Posts
            </Link>
            <Link
              href="/admin/users"
              className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Users className="w-5 h-5" />
              Users
            </Link>
            <div className="pt-6 border-t border-white/10 mt-6">
              <Link
                href="/admin/settings"
                className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors"
              >
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
              <h1 className="text-3xl font-display text-white mb-2">Manage Flights</h1>
              <p className="text-white/60">Add, edit, and manage flight listings</p>
            </div>
            <Link href="/admin/flights/new" className="btn-primary flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add New Flight
            </Link>
          </div>

          {/* Filters & Search */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search flights..."
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

          {/* Flights Table */}
          <div className="card-luxury overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Flight
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Route
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Departure
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Economy
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Business
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      First
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFlights.map((flight) => (
                    <tr key={flight.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white font-medium">{flight.airline}</p>
                          <p className="text-white/40 text-sm">{flight.flightNumber}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white">{flight.origin}</p>
                          <p className="text-gold-500 text-sm">→ {flight.destination}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-white/60">{flight.departure}</td>
                      <td className="px-6 py-4 text-white">{flight.duration}</td>
                      <td className="px-6 py-4 text-white">${flight.economy}</td>
                      <td className="px-6 py-4 text-white">${flight.business}</td>
                      <td className="px-6 py-4 text-gold-500">${flight.first}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 text-xs font-medium uppercase tracking-wider ${
                          flight.status === "active"
                            ? "bg-green-500/20 text-green-500"
                            : "bg-red-500/20 text-red-500"
                        }`}>
                          {flight.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-white/40 hover:text-white hover:bg-white/10 transition-colors" title="View">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-white/40 hover:text-gold-500 hover:bg-gold-500/10 transition-colors" title="Edit">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-white/40 hover:text-red-500 hover:bg-red-500/10 transition-colors" title="Delete">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-white/10">
              <p className="text-white/40 text-sm">
                Showing 1-{filteredFlights.length} of {filteredFlights.length} flights
              </p>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 text-white/40 hover:text-white text-sm" disabled>
                  Previous
                </button>
                <button className="px-4 py-2 bg-gold-500 text-luxury-dark text-sm">1</button>
                <button className="px-4 py-2 text-white/40 hover:text-white text-sm">2</button>
                <button className="px-4 py-2 text-white/40 hover:text-white text-sm">3</button>
                <button className="px-4 py-2 text-white/40 hover:text-white text-sm">
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

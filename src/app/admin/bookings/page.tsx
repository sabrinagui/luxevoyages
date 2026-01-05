"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Filter,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  LayoutDashboard,
  Plane,
  Building2,
  Calendar,
  FileText,
  Users,
  Settings,
  Download,
  ChevronDown
} from "lucide-react";

const bookings = [
  {
    id: "BK-001234",
    type: "flight",
    customer: "John Anderson",
    email: "john@email.com",
    product: "New York → Paris",
    details: "Emirates, Business Class",
    date: "Jan 5, 2026",
    travelers: 2,
    amount: "$8,450",
    status: "confirmed",
    paymentStatus: "paid",
  },
  {
    id: "BK-001233",
    type: "hotel",
    customer: "Sarah Mitchell",
    email: "sarah@email.com",
    product: "Burj Al Arab, Dubai",
    details: "Royal Suite, 5 nights",
    date: "Jan 4, 2026",
    travelers: 2,
    amount: "$12,500",
    status: "confirmed",
    paymentStatus: "paid",
  },
  {
    id: "BK-001232",
    type: "flight",
    customer: "Michael Chen",
    email: "michael@email.com",
    product: "London → Tokyo",
    details: "Qatar Airways, First Class",
    date: "Jan 4, 2026",
    travelers: 1,
    amount: "$15,200",
    status: "pending",
    paymentStatus: "pending",
  },
  {
    id: "BK-001231",
    type: "hotel",
    customer: "Emma Wilson",
    email: "emma@email.com",
    product: "Four Seasons Maldives",
    details: "Water Villa, 7 nights",
    date: "Jan 3, 2026",
    travelers: 2,
    amount: "$28,000",
    status: "confirmed",
    paymentStatus: "paid",
  },
  {
    id: "BK-001230",
    type: "flight",
    customer: "David Brown",
    email: "david@email.com",
    product: "Los Angeles → Bali",
    details: "Singapore Airlines, Business",
    date: "Jan 3, 2026",
    travelers: 4,
    amount: "$18,600",
    status: "cancelled",
    paymentStatus: "refunded",
  },
  {
    id: "BK-001229",
    type: "hotel",
    customer: "Lisa Garcia",
    email: "lisa@email.com",
    product: "The Ritz Paris",
    details: "Prestige Suite, 3 nights",
    date: "Jan 2, 2026",
    travelers: 2,
    amount: "$9,800",
    status: "confirmed",
    paymentStatus: "paid",
  },
];

export default function AdminBookingsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBooking, setSelectedBooking] = useState<string | null>(null);

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/20 text-green-500";
      case "pending":
        return "bg-yellow-500/20 text-yellow-500";
      case "cancelled":
        return "bg-red-500/20 text-red-500";
      default:
        return "bg-white/10 text-white/60";
    }
  };

  const getPaymentColor = (status: string) => {
    switch (status) {
      case "paid":
        return "text-green-500";
      case "pending":
        return "text-yellow-500";
      case "refunded":
        return "text-blue-500";
      default:
        return "text-white/60";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "cancelled":
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
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
            <Link href="/admin/flights" className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors">
              <Plane className="w-5 h-5" />
              Flights
            </Link>
            <Link href="/admin/hotels" className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors">
              <Building2 className="w-5 h-5" />
              Hotels
            </Link>
            <Link href="/admin/bookings" className="flex items-center gap-3 px-4 py-3 bg-gold-500/10 text-gold-500 rounded-none">
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
              <h1 className="text-3xl font-display text-white mb-2">Bookings</h1>
              <p className="text-white/60">Manage customer reservations and orders</p>
            </div>
            <button className="btn-secondary flex items-center gap-2">
              <Download className="w-5 h-5" />
              Export
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="card-luxury p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-500/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-white/60 text-sm">Confirmed</span>
              </div>
              <p className="text-3xl font-display text-white">248</p>
            </div>
            <div className="card-luxury p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-yellow-500/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-500" />
                </div>
                <span className="text-white/60 text-sm">Pending</span>
              </div>
              <p className="text-3xl font-display text-white">12</p>
            </div>
            <div className="card-luxury p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-red-500/20 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <span className="text-white/60 text-sm">Cancelled</span>
              </div>
              <p className="text-3xl font-display text-white">8</p>
            </div>
            <div className="card-luxury p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gold-500/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-gold-500" />
                </div>
                <span className="text-white/60 text-sm">Total Revenue</span>
              </div>
              <p className="text-3xl font-display text-white">$1.2M</p>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search bookings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-luxury pl-12 w-full"
              />
            </div>
            <select className="input-luxury w-40">
              <option value="" className="bg-luxury-dark">All Types</option>
              <option value="flight" className="bg-luxury-dark">Flights</option>
              <option value="hotel" className="bg-luxury-dark">Hotels</option>
            </select>
            <select className="input-luxury w-40">
              <option value="" className="bg-luxury-dark">All Status</option>
              <option value="confirmed" className="bg-luxury-dark">Confirmed</option>
              <option value="pending" className="bg-luxury-dark">Pending</option>
              <option value="cancelled" className="bg-luxury-dark">Cancelled</option>
            </select>
            <select className="input-luxury w-40">
              <option value="" className="bg-luxury-dark">Date Range</option>
              <option value="today" className="bg-luxury-dark">Today</option>
              <option value="week" className="bg-luxury-dark">This Week</option>
              <option value="month" className="bg-luxury-dark">This Month</option>
              <option value="year" className="bg-luxury-dark">This Year</option>
            </select>
          </div>

          {/* Bookings Table */}
          <div className="card-luxury overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Booking ID
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Product
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Date
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Payment
                    </th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {booking.type === "flight" ? (
                            <Plane className="w-4 h-4 text-gold-500" />
                          ) : (
                            <Building2 className="w-4 h-4 text-gold-500" />
                          )}
                          <span className="text-white font-mono text-sm">{booking.id}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-white">{booking.customer}</p>
                        <p className="text-white/40 text-sm">{booking.email}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-white">{booking.product}</p>
                        <p className="text-white/40 text-sm">{booking.details}</p>
                      </td>
                      <td className="px-6 py-4 text-white/60">{booking.date}</td>
                      <td className="px-6 py-4 text-white font-medium">{booking.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium uppercase tracking-wider ${getStatusColor(booking.status)}`}>
                          {getStatusIcon(booking.status)}
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm capitalize ${getPaymentColor(booking.paymentStatus)}`}>
                          {booking.paymentStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="p-2 text-white/40 hover:text-white hover:bg-white/10 transition-colors" title="View Details">
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-white/10">
              <p className="text-white/40 text-sm">
                Showing 1-{filteredBookings.length} of {filteredBookings.length} bookings
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

import Link from "next/link";
import { 
  LayoutDashboard, 
  Plane, 
  Building2, 
  FileText, 
  Users, 
  Settings, 
  TrendingUp,
  Calendar,
  DollarSign,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal
} from "lucide-react";

const stats = [
  {
    label: "Total Revenue",
    value: "$1,284,500",
    change: "+12.5%",
    isPositive: true,
    icon: DollarSign,
  },
  {
    label: "Active Bookings",
    value: "2,847",
    change: "+8.2%",
    isPositive: true,
    icon: Calendar,
  },
  {
    label: "Page Views",
    value: "148,293",
    change: "+24.1%",
    isPositive: true,
    icon: Eye,
  },
  {
    label: "Conversion Rate",
    value: "3.24%",
    change: "-0.8%",
    isPositive: false,
    icon: TrendingUp,
  },
];

const recentBookings = [
  {
    id: "BK001",
    customer: "Alexandra Richardson",
    type: "Flight",
    destination: "Dubai",
    amount: 4200,
    status: "confirmed",
    date: "2 hours ago",
  },
  {
    id: "BK002",
    customer: "James Montgomery",
    type: "Hotel",
    destination: "Paris",
    amount: 8750,
    status: "pending",
    date: "4 hours ago",
  },
  {
    id: "BK003",
    customer: "Sophie Laurent",
    type: "Package",
    destination: "Maldives",
    amount: 15900,
    status: "confirmed",
    date: "6 hours ago",
  },
  {
    id: "BK004",
    customer: "Marcus Chen",
    type: "Flight",
    destination: "Tokyo",
    amount: 5800,
    status: "confirmed",
    date: "8 hours ago",
  },
  {
    id: "BK005",
    customer: "Elena Rossi",
    type: "Hotel",
    destination: "London",
    amount: 6230,
    status: "cancelled",
    date: "12 hours ago",
  },
];

const quickLinks = [
  { label: "Add Flight", href: "/admin/flights/new", icon: Plane },
  { label: "Add Hotel", href: "/admin/hotels/new", icon: Building2 },
  { label: "New Blog Post", href: "/admin/blog/new", icon: FileText },
  { label: "Manage Users", href: "/admin/users", icon: Users },
];

export default function AdminDashboard() {
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
              className="flex items-center gap-3 px-4 py-3 bg-gold-500/10 text-gold-500 rounded-none"
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </Link>
            <Link
              href="/admin/flights"
              className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors"
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
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-display text-white mb-2">Dashboard</h1>
            <p className="text-white/60">Welcome back! Here's what's happening with your travel platform.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="card-luxury p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <span className={`flex items-center gap-1 text-sm ${
                    stat.isPositive ? "text-green-500" : "text-red-500"
                  }`}>
                    {stat.isPositive ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-3xl font-display text-white mb-1">{stat.value}</h3>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-gold-500/5 transition-all"
              >
                <link.icon className="w-5 h-5 text-gold-500" />
                <span className="text-white">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Recent Bookings */}
          <div className="card-luxury">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-xl font-display text-white">Recent Bookings</h2>
              <Link href="/admin/bookings" className="text-gold-500 text-sm hover:underline">
                View All
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Booking ID
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Type
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Destination
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-6 py-4 text-gold-500 font-medium">{booking.id}</td>
                      <td className="px-6 py-4 text-white">{booking.customer}</td>
                      <td className="px-6 py-4 text-white/60">{booking.type}</td>
                      <td className="px-6 py-4 text-white">{booking.destination}</td>
                      <td className="px-6 py-4 text-white font-medium">
                        ${booking.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 text-xs font-medium uppercase tracking-wider ${
                          booking.status === "confirmed"
                            ? "bg-green-500/20 text-green-500"
                            : booking.status === "pending"
                            ? "bg-yellow-500/20 text-yellow-500"
                            : "bg-red-500/20 text-red-500"
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/40 text-sm">{booking.date}</td>
                      <td className="px-6 py-4">
                        <button className="text-white/40 hover:text-white">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

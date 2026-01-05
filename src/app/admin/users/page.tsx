"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2,
  Shield,
  LayoutDashboard,
  Plane,
  Building2,
  Calendar,
  FileText,
  Users,
  Settings,
  Mail,
  MoreVertical,
  UserCheck,
  UserX
} from "lucide-react";

const users = [
  {
    id: 1,
    name: "John Anderson",
    email: "john.anderson@email.com",
    role: "admin",
    status: "active",
    lastLogin: "2 hours ago",
    totalBookings: 0,
    totalSpent: "$0",
    joinDate: "Mar 15, 2024",
    avatar: "JA",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    email: "sarah.mitchell@email.com",
    role: "customer",
    status: "active",
    lastLogin: "1 day ago",
    totalBookings: 12,
    totalSpent: "$48,500",
    joinDate: "Jan 8, 2024",
    avatar: "SM",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    role: "customer",
    status: "active",
    lastLogin: "3 hours ago",
    totalBookings: 8,
    totalSpent: "$32,400",
    joinDate: "Feb 22, 2024",
    avatar: "MC",
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    role: "customer",
    status: "inactive",
    lastLogin: "2 weeks ago",
    totalBookings: 5,
    totalSpent: "$28,000",
    joinDate: "Nov 10, 2023",
    avatar: "EW",
  },
  {
    id: 5,
    name: "Victoria Sterling",
    email: "victoria@luxevoyages.com",
    role: "editor",
    status: "active",
    lastLogin: "5 minutes ago",
    totalBookings: 0,
    totalSpent: "$0",
    joinDate: "Oct 1, 2023",
    avatar: "VS",
  },
  {
    id: 6,
    name: "David Brown",
    email: "david.brown@email.com",
    role: "customer",
    status: "active",
    lastLogin: "1 hour ago",
    totalBookings: 15,
    totalSpent: "$72,300",
    joinDate: "Sep 5, 2023",
    avatar: "DB",
  },
];

export default function AdminUsersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-500/20 text-red-500";
      case "editor":
        return "bg-purple-500/20 text-purple-500";
      case "customer":
        return "bg-blue-500/20 text-blue-500";
      default:
        return "bg-white/10 text-white/60";
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
            <Link href="/admin/bookings" className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors">
              <Calendar className="w-5 h-5" />
              Bookings
            </Link>
            <Link href="/admin/blog" className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors">
              <FileText className="w-5 h-5" />
              Blog Posts
            </Link>
            <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 bg-gold-500/10 text-gold-500 rounded-none">
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
              <h1 className="text-3xl font-display text-white mb-2">Users</h1>
              <p className="text-white/60">Manage customers and team members</p>
            </div>
            <button className="btn-primary flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add User
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="card-luxury p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-500/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-white/60 text-sm">Total Users</span>
              </div>
              <p className="text-3xl font-display text-white">2,847</p>
            </div>
            <div className="card-luxury p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-500/20 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-white/60 text-sm">Active</span>
              </div>
              <p className="text-3xl font-display text-white">2,654</p>
            </div>
            <div className="card-luxury p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-purple-500" />
                </div>
                <span className="text-white/60 text-sm">Team Members</span>
              </div>
              <p className="text-3xl font-display text-white">12</p>
            </div>
            <div className="card-luxury p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gold-500/20 flex items-center justify-center">
                  <UserX className="w-5 h-5 text-gold-500" />
                </div>
                <span className="text-white/60 text-sm">Inactive</span>
              </div>
              <p className="text-3xl font-display text-white">193</p>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-luxury pl-12 w-full"
              />
            </div>
            <select className="input-luxury w-36">
              <option value="" className="bg-luxury-dark">All Roles</option>
              <option value="admin" className="bg-luxury-dark">Admin</option>
              <option value="editor" className="bg-luxury-dark">Editor</option>
              <option value="customer" className="bg-luxury-dark">Customer</option>
            </select>
            <select className="input-luxury w-36">
              <option value="" className="bg-luxury-dark">All Status</option>
              <option value="active" className="bg-luxury-dark">Active</option>
              <option value="inactive" className="bg-luxury-dark">Inactive</option>
            </select>
          </div>

          {/* Users Table */}
          <div className="card-luxury overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      User
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Role
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Last Login
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Bookings
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Total Spent
                    </th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-gold flex items-center justify-center text-luxury-dark font-bold text-sm">
                            {user.avatar}
                          </div>
                          <div>
                            <p className="text-white font-medium">{user.name}</p>
                            <p className="text-white/40 text-sm">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium uppercase tracking-wider ${getRoleColor(user.role)}`}>
                          {user.role === "admin" && <Shield className="w-3 h-3" />}
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium uppercase tracking-wider ${
                          user.status === "active"
                            ? "bg-green-500/20 text-green-500"
                            : "bg-white/10 text-white/40"
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            user.status === "active" ? "bg-green-500" : "bg-white/40"
                          }`} />
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/60">{user.lastLogin}</td>
                      <td className="px-6 py-4 text-white">{user.totalBookings}</td>
                      <td className="px-6 py-4 text-white font-medium">{user.totalSpent}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-white/40 hover:text-white hover:bg-white/10 transition-colors" title="Send Email">
                            <Mail className="w-4 h-4" />
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
                Showing 1-{filteredUsers.length} of {filteredUsers.length} users
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
          </div>
        </main>
      </div>
    </div>
  );
}

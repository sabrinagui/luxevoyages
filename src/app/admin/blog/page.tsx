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
  Plane,
  LayoutDashboard,
  Building2,
  Calendar,
  FileText,
  Users,
  Settings
} from "lucide-react";

const posts = [
  {
    id: 1,
    title: "The Ultimate Guide to Luxury Travel in 2026",
    category: "Travel Trends",
    author: "Victoria Sterling",
    date: "Jan 3, 2026",
    status: "published",
    views: 12453,
  },
  {
    id: 2,
    title: "Hidden Gems: Private Islands You Can Actually Book",
    category: "Destinations",
    author: "Marcus Chen",
    date: "Jan 1, 2026",
    status: "published",
    views: 8921,
  },
  {
    id: 3,
    title: "First Class vs Private Jet: Which Is Right for You?",
    category: "Flights",
    author: "James Morrison",
    date: "Dec 28, 2025",
    status: "published",
    views: 7654,
  },
  {
    id: 4,
    title: "The World's Most Exclusive Hotel Suites",
    category: "Luxury Hotels",
    author: "Sophie Laurent",
    date: "Dec 25, 2025",
    status: "draft",
    views: 0,
  },
  {
    id: 5,
    title: "Culinary Journeys: Michelin-Star Experiences Around the World",
    category: "Experiences",
    author: "Pierre Dubois",
    date: "Dec 22, 2025",
    status: "published",
    views: 5432,
  },
];

export default function AdminBlogPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
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
            <Link href="/admin/hotels" className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors">
              <Building2 className="w-5 h-5" />
              Hotels
            </Link>
            <Link href="/admin/bookings" className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors">
              <Calendar className="w-5 h-5" />
              Bookings
            </Link>
            <Link href="/admin/blog" className="flex items-center gap-3 px-4 py-3 bg-gold-500/10 text-gold-500 rounded-none">
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
              <h1 className="text-3xl font-display text-white mb-2">Blog Posts</h1>
              <p className="text-white/60">Create and manage blog content</p>
            </div>
            <Link href="/admin/blog/new" className="btn-primary flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Post
            </Link>
          </div>

          {/* Filters & Search */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-luxury pl-12 w-full"
              />
            </div>
            <select className="input-luxury w-48">
              <option value="" className="bg-luxury-dark">All Categories</option>
              <option value="destinations" className="bg-luxury-dark">Destinations</option>
              <option value="flights" className="bg-luxury-dark">Flights</option>
              <option value="hotels" className="bg-luxury-dark">Luxury Hotels</option>
              <option value="experiences" className="bg-luxury-dark">Experiences</option>
              <option value="trends" className="bg-luxury-dark">Travel Trends</option>
            </select>
            <select className="input-luxury w-36">
              <option value="" className="bg-luxury-dark">All Status</option>
              <option value="published" className="bg-luxury-dark">Published</option>
              <option value="draft" className="bg-luxury-dark">Draft</option>
            </select>
          </div>

          {/* Posts Table */}
          <div className="card-luxury overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Title
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Category
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Author
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Date
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Views
                    </th>
                    <th className="text-left px-6 py-4 text-white/60 text-sm font-medium uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.map((post) => (
                    <tr key={post.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-6 py-4">
                        <p className="text-white font-medium line-clamp-1 max-w-xs">{post.title}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-white/5 text-gold-500 text-xs">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/60">{post.author}</td>
                      <td className="px-6 py-4 text-white/60">{post.date}</td>
                      <td className="px-6 py-4 text-white">{post.views.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 text-xs font-medium uppercase tracking-wider ${
                          post.status === "published"
                            ? "bg-green-500/20 text-green-500"
                            : "bg-yellow-500/20 text-yellow-500"
                        }`}>
                          {post.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Link href={`/blog/${post.id}`} className="p-2 text-white/40 hover:text-white hover:bg-white/10 transition-colors" title="View">
                            <Eye className="w-4 h-4" />
                          </Link>
                          <Link href={`/admin/blog/${post.id}/edit`} className="p-2 text-white/40 hover:text-gold-500 hover:bg-gold-500/10 transition-colors" title="Edit">
                            <Edit className="w-4 h-4" />
                          </Link>
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
                Showing 1-{filteredPosts.length} of {filteredPosts.length} posts
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

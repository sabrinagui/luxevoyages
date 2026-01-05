import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";

const categories = [
  { name: "All", slug: "all", count: 24 },
  { name: "Destinations", slug: "destinations", count: 12 },
  { name: "Travel Tips", slug: "travel-tips", count: 8 },
  { name: "Luxury Hotels", slug: "luxury-hotels", count: 6 },
  { name: "Flights", slug: "flights", count: 4 },
  { name: "Experiences", slug: "experiences", count: 5 },
];

const featuredPost = {
  id: 1,
  title: "The Ultimate Guide to Luxury Travel in 2026",
  excerpt: "Discover the emerging trends in luxury travel and the most exclusive destinations that discerning travelers are seeking this year. From private island retreats to curated cultural experiences, we explore what defines premium travel in the modern era.",
  image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
  category: "Travel Trends",
  author: {
    name: "Victoria Sterling",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    role: "Travel Editor",
  },
  date: "Jan 3, 2026",
  readTime: "8 min read",
};

const posts = [
  {
    id: 2,
    title: "Hidden Gems: Private Islands You Can Actually Book",
    excerpt: "From the Caribbean to the South Pacific, we reveal the world's most exclusive private island retreats.",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
    category: "Destinations",
    author: "Marcus Chen",
    date: "Jan 1, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "First Class vs Private Jet: Which Is Right for You?",
    excerpt: "A comprehensive comparison of first-class airline travel versus chartering a private jet.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
    category: "Flights",
    author: "James Morrison",
    date: "Dec 28, 2025",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "The World's Most Exclusive Hotel Suites",
    excerpt: "Step inside the most opulent hotel suites that money can buy, from penthouses to private villas.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    category: "Luxury Hotels",
    author: "Sophie Laurent",
    date: "Dec 25, 2025",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Culinary Journeys: Michelin-Star Experiences Around the World",
    excerpt: "Explore the finest dining destinations and exclusive culinary experiences for food lovers.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    category: "Experiences",
    author: "Pierre Dubois",
    date: "Dec 22, 2025",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Traveling with Art: The Best Museum Hotels",
    excerpt: "Hotels that double as art galleries, offering guests an immersive cultural experience.",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    category: "Luxury Hotels",
    author: "Elena Rossi",
    date: "Dec 20, 2025",
    readTime: "5 min read",
  },
  {
    id: 7,
    title: "Safari in Style: Africa's Most Luxurious Lodges",
    excerpt: "Experience the wild side of luxury at these extraordinary African safari destinations.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    category: "Destinations",
    author: "David Okonkwo",
    date: "Dec 18, 2025",
    readTime: "8 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-luxury-dark pt-32 pb-20">
      <div className="container-luxury">
        {/* Page Header */}
        <div className="text-center mb-16">
          <nav className="text-sm text-white/40 mb-4 inline-block">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gold-500">Blog</span>
          </nav>
          <h1 className="heading-display text-white mb-4">Travel Journal</h1>
          <div className="divider-gold mb-6" />
          <p className="text-white/60 max-w-2xl mx-auto">
            Insights, guides, and inspiration for the discerning traveler. Discover 
            the world through our curated collection of luxury travel stories.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className={`px-4 py-2 text-sm transition-all duration-300 ${
                  cat.slug === "all"
                    ? "bg-gold-500 text-luxury-dark"
                    : "border border-white/20 text-white/60 hover:border-gold-500 hover:text-gold-500"
                }`}
              >
                {cat.name}
                <span className="ml-2 text-xs opacity-60">({cat.count})</span>
              </Link>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search articles..."
              className="input-luxury pl-12 w-full"
            />
          </div>
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${featuredPost.id}`} className="group block mb-16">
          <div className="card-luxury overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${featuredPost.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark via-luxury-dark/50 to-transparent lg:hidden" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-gold-500 text-sm uppercase tracking-wider mb-4">
                  Featured • {featuredPost.category}
                </span>
                <h2 className="text-3xl lg:text-4xl font-display text-white mb-4 group-hover:text-gold-500 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-white/60 mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold-500"
                  />
                  <div>
                    <p className="text-white font-medium">{featuredPost.author.name}</p>
                    <p className="text-white/40 text-sm">{featuredPost.author.role}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-6 text-sm text-white/40">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group card-luxury overflow-hidden">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent" />
                
                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gold-500 text-luxury-dark text-xs font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display text-white mb-3 group-hover:text-gold-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-white/40 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="btn-outline-gold">
            Load More Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

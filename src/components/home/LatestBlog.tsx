import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Luxury Travel in 2026",
    excerpt: "Discover the emerging trends in luxury travel and the most exclusive destinations that discerning travelers are seeking this year.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    category: "Travel Trends",
    author: "Victoria Sterling",
    date: "Jan 3, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Hidden Gems: Private Islands You Can Actually Book",
    excerpt: "From the Caribbean to the South Pacific, we reveal the world's most exclusive private island retreats available for booking.",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
    category: "Destinations",
    author: "Marcus Chen",
    date: "Jan 1, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    title: "First Class vs Private Jet: Which Is Right for You?",
    excerpt: "A comprehensive comparison of first-class airline travel versus chartering a private jet for your next luxury journey.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
    category: "Flights",
    author: "James Morrison",
    date: "Dec 28, 2025",
    readTime: "5 min read",
    featured: false,
  },
];

export function LatestBlog() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section className="section-padding bg-luxury-dark">
      <div className="container-luxury">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
          <div>
            <span className="text-gold-500 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium mb-3 sm:mb-4 block">
              Travel Journal
            </span>
            <h2 className="heading-section text-white mb-3 sm:mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-white/60 max-w-xl text-sm sm:text-base">
              Insights, guides, and inspiration for the discerning traveler.
            </p>
          </div>
          <Link href="/blog" className="btn-outline-gold shrink-0 w-full sm:w-auto justify-center">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Featured Post */}
          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.id}`}
              className="group card-luxury overflow-hidden"
            >
              <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${featuredPost.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <span className="px-2 sm:px-3 py-1 bg-gold-500 text-luxury-dark text-xs font-semibold uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-display text-white mb-3 sm:mb-4 group-hover:text-gold-500 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-white/60 mb-4 sm:mb-6 line-clamp-2 text-sm sm:text-base">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm text-white/40 gap-2">
                  <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                    <span className="flex items-center gap-1 sm:gap-2">
                      <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1 sm:gap-2">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      {featuredPost.date}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 sm:gap-2">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Regular Posts */}
          <div className="space-y-4 sm:space-y-6">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group flex gap-4 sm:gap-6 card-luxury overflow-hidden p-3 sm:p-4"
              >
                {/* Thumbnail */}
                <div className="shrink-0 w-24 h-24 sm:w-32 sm:h-32 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center min-w-0">
                  <span className="text-gold-500 text-xs uppercase tracking-wider mb-1 sm:mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-display text-white mb-1 sm:mb-2 group-hover:text-gold-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 sm:gap-4 text-xs text-white/40">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

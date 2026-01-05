import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react";

// Sample blog post data
const post = {
  id: 1,
  title: "The Ultimate Guide to Luxury Travel in 2026",
  excerpt: "Discover the emerging trends in luxury travel and the most exclusive destinations that discerning travelers are seeking this year.",
  content: `
    <p class="lead">The landscape of luxury travel is evolving rapidly, driven by travelers who seek more than just opulence—they crave authentic, transformative experiences that money alone cannot buy. In 2026, the definition of luxury has shifted from material excess to meaningful connection.</p>

    <h2>The Rise of Purposeful Travel</h2>
    <p>Today's luxury travelers are increasingly drawn to experiences that offer personal growth and cultural immersion. Private access to historical sites, exclusive culinary experiences with renowned chefs, and wellness retreats in pristine natural settings are in high demand.</p>
    
    <blockquote>"Luxury is no longer about the thread count of your sheets—it's about the depth of your experiences and the memories you create."</blockquote>

    <h2>Sustainable Luxury: The New Standard</h2>
    <p>Eco-conscious travel has moved from a niche interest to a fundamental expectation among high-net-worth travelers. The most sought-after resorts now seamlessly blend sustainability with indulgence, offering carbon-neutral experiences without compromising on comfort.</p>
    
    <p>Properties like the upcoming eco-resort in Costa Rica's Osa Peninsula demonstrate this evolution perfectly—solar-powered luxury villas, farm-to-table dining, and conservation programs that guests can actively participate in.</p>

    <h2>Private and Exclusive Access</h2>
    <p>The pandemic has permanently altered travel preferences, with privacy and exclusivity now paramount. Private jet memberships have surged, and hotels are offering entire wing buyouts for discerning guests who value seclusion.</p>

    <h2>Top Destinations for 2026</h2>
    <p>Our travel experts have identified the following destinations as the most compelling for luxury travelers this year:</p>
    
    <ul>
      <li><strong>Bhutan:</strong> The world's only carbon-negative country offers unparalleled spiritual experiences</li>
      <li><strong>The Faroe Islands:</strong> Dramatic landscapes and exclusive lodge experiences</li>
      <li><strong>Rwanda:</strong> Luxury gorilla trekking with conservation impact</li>
      <li><strong>Oman:</strong> Arabian hospitality meets undiscovered beauty</li>
      <li><strong>Japanese Alps:</strong> Private ryokan experiences in snow country</li>
    </ul>

    <h2>The Technology Touch</h2>
    <p>Artificial intelligence is revolutionizing personalized travel experiences. From AI concierges that anticipate your needs to blockchain-secured itineraries, technology is enhancing—not replacing—the human touch in luxury hospitality.</p>

    <h2>Looking Ahead</h2>
    <p>As we navigate 2026, the essence of luxury travel continues to evolve toward authenticity, sustainability, and profound personal experiences. The travelers who embrace this shift will discover that true luxury lies not in what we acquire, but in who we become through our journeys.</p>
  `,
  image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1400&q=80",
  category: "Travel Trends",
  tags: ["Luxury Travel", "2026 Trends", "Sustainable Tourism", "Exclusive Destinations"],
  author: {
    name: "Victoria Sterling",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    role: "Travel Editor",
    bio: "Victoria has been curating luxury travel experiences for over 15 years. Her passion for discovering hidden gems has taken her to over 100 countries.",
  },
  date: "January 3, 2026",
  readTime: "8 min read",
};

const relatedPosts = [
  {
    id: 2,
    title: "Hidden Gems: Private Islands You Can Actually Book",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
    category: "Destinations",
    date: "Jan 1, 2026",
  },
  {
    id: 3,
    title: "First Class vs Private Jet: Which Is Right for You?",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
    category: "Flights",
    date: "Dec 28, 2025",
  },
  {
    id: 4,
    title: "The World's Most Exclusive Hotel Suites",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    category: "Luxury Hotels",
    date: "Dec 25, 2025",
  },
];

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-luxury-dark pt-32 pb-20">
      {/* Hero Image */}
      <div className="relative h-[60vh] mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/50 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 container-luxury pb-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-gold-500 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <span className="inline-block px-3 py-1 bg-gold-500 text-luxury-dark text-xs font-semibold uppercase tracking-wider mb-4">
            {post.category}
          </span>
          
          <h1 className="heading-display text-white max-w-4xl mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white/60">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-gold-500"
              />
              <span className="text-white">{post.author.name}</span>
            </div>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar - Share & Actions */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="lg:sticky lg:top-32 flex lg:flex-col items-center gap-4">
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold-500 hover:text-gold-500 transition-all">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold-500 hover:text-gold-500 transition-all">
                <Bookmark className="w-4 h-4" />
              </button>
              <div className="hidden lg:block w-px h-8 bg-white/20" />
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-blue-500 hover:text-blue-500 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-sky-500 hover:text-sky-500 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-blue-600 hover:text-blue-600 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Main Content */}
          <article className="lg:col-span-7 order-1 lg:order-2">
            {/* Article Content */}
            <div 
              className="prose prose-lg prose-invert prose-gold max-w-none
                prose-headings:font-display prose-headings:font-normal prose-headings:text-white
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-p:text-white/70 prose-p:leading-relaxed
                prose-a:text-gold-500 prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-gold-500 prose-blockquote:bg-white/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-white/80
                prose-ul:text-white/70 prose-li:marker:text-gold-500
                prose-strong:text-white
                [&_.lead]:text-xl [&_.lead]:text-white/80 [&_.lead]:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase().replace(" ", "-")}`}
                    className="px-4 py-2 bg-white/5 text-white/60 text-sm hover:bg-gold-500/20 hover:text-gold-500 transition-all"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-12 p-8 bg-white/5 border border-white/10">
              <div className="flex items-start gap-6">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gold-500"
                />
                <div>
                  <h4 className="text-xl font-display text-white mb-1">{post.author.name}</h4>
                  <p className="text-gold-500 text-sm mb-3">{post.author.role}</p>
                  <p className="text-white/60 text-sm">{post.author.bio}</p>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar - Related Posts */}
          <aside className="lg:col-span-4 order-3">
            <div className="lg:sticky lg:top-32">
              <h3 className="text-lg font-display text-white mb-6">Related Articles</h3>
              <div className="space-y-6">
                {relatedPosts.map((related) => (
                  <Link key={related.id} href={`/blog/${related.id}`} className="group flex gap-4">
                    <div className="w-24 h-24 shrink-0 overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${related.image})` }}
                      />
                    </div>
                    <div>
                      <span className="text-gold-500 text-xs uppercase tracking-wider">
                        {related.category}
                      </span>
                      <h4 className="text-white font-medium mt-1 group-hover:text-gold-500 transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                      <p className="text-white/40 text-xs mt-2">{related.date}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Newsletter CTA */}
              <div className="mt-12 p-6 bg-gradient-gold text-luxury-dark">
                <h4 className="font-display text-xl mb-2">Stay Inspired</h4>
                <p className="text-sm opacity-80 mb-4">
                  Get the latest travel insights delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-luxury-dark/20 placeholder-luxury-dark/60 text-luxury-dark border-none mb-3"
                />
                <button className="w-full py-3 bg-luxury-dark text-white font-medium text-sm uppercase tracking-wider hover:bg-luxury-charcoal transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* More Articles */}
        <section className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display text-white">More from the Journal</h2>
            <Link href="/blog" className="text-gold-500 hover:underline flex items-center gap-2">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <Link key={related.id} href={`/blog/${related.id}`} className="group card-luxury overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${related.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <span className="text-gold-500 text-xs uppercase tracking-wider">
                    {related.category}
                  </span>
                  <h3 className="text-lg font-display text-white mt-2 group-hover:text-gold-500 transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-white/40 text-sm mt-2">{related.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

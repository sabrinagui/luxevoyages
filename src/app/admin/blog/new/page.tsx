"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft,
  Image,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link2,
  Quote,
  Code,
  Eye,
  Save,
  Upload,
  LayoutDashboard,
  Plane,
  Building2,
  Calendar,
  FileText,
  Users,
  Settings,
  X
} from "lucide-react";

export default function NewBlogPostPage() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [status, setStatus] = useState("draft");
  const [author, setAuthor] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      title,
      excerpt,
      content,
      category,
      tags,
      featuredImage,
      status,
      author,
      seoTitle,
      seoDescription,
    });
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
            <div className="flex items-center gap-4">
              <Link href="/admin/blog" className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-3xl font-display text-white mb-1">New Blog Post</h1>
                <p className="text-white/60">Create compelling travel content</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="btn-secondary flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Preview
              </button>
              <button className="btn-primary flex items-center gap-2">
                <Save className="w-5 h-5" />
                Publish
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="col-span-2 space-y-6">
                {/* Title */}
                <div className="card-luxury p-6">
                  <label className="block text-white/60 text-sm mb-2">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter post title..."
                    className="input-luxury w-full text-2xl font-display"
                  />
                </div>

                {/* Excerpt */}
                <div className="card-luxury p-6">
                  <label className="block text-white/60 text-sm mb-2">Excerpt</label>
                  <textarea
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Write a short summary of the post..."
                    rows={3}
                    className="input-luxury w-full resize-none"
                  />
                </div>

                {/* Content Editor */}
                <div className="card-luxury p-6">
                  <label className="block text-white/60 text-sm mb-4">Content</label>
                  
                  {/* Editor Toolbar */}
                  <div className="flex items-center gap-1 mb-4 p-2 bg-white/5 border border-white/10">
                    <button type="button" className="p-2 text-white/60 hover:text-white hover:bg-white/10">
                      <Bold className="w-4 h-4" />
                    </button>
                    <button type="button" className="p-2 text-white/60 hover:text-white hover:bg-white/10">
                      <Italic className="w-4 h-4" />
                    </button>
                    <button type="button" className="p-2 text-white/60 hover:text-white hover:bg-white/10">
                      <Underline className="w-4 h-4" />
                    </button>
                    <div className="w-px h-6 bg-white/10 mx-2" />
                    <button type="button" className="p-2 text-white/60 hover:text-white hover:bg-white/10">
                      <List className="w-4 h-4" />
                    </button>
                    <button type="button" className="p-2 text-white/60 hover:text-white hover:bg-white/10">
                      <ListOrdered className="w-4 h-4" />
                    </button>
                    <div className="w-px h-6 bg-white/10 mx-2" />
                    <button type="button" className="p-2 text-white/60 hover:text-white hover:bg-white/10">
                      <Link2 className="w-4 h-4" />
                    </button>
                    <button type="button" className="p-2 text-white/60 hover:text-white hover:bg-white/10">
                      <Image className="w-4 h-4" />
                    </button>
                    <button type="button" className="p-2 text-white/60 hover:text-white hover:bg-white/10">
                      <Quote className="w-4 h-4" />
                    </button>
                    <button type="button" className="p-2 text-white/60 hover:text-white hover:bg-white/10">
                      <Code className="w-4 h-4" />
                    </button>
                  </div>

                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Start writing your content here..."
                    rows={20}
                    className="input-luxury w-full resize-none font-mono text-sm"
                  />
                </div>

                {/* SEO Settings */}
                <div className="card-luxury p-6">
                  <h3 className="text-lg font-display text-white mb-4">SEO Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white/60 text-sm mb-2">SEO Title</label>
                      <input
                        type="text"
                        value={seoTitle}
                        onChange={(e) => setSeoTitle(e.target.value)}
                        placeholder="Custom SEO title (leave blank to use post title)"
                        className="input-luxury w-full"
                      />
                      <p className="text-white/40 text-xs mt-1">{seoTitle.length}/60 characters</p>
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Meta Description</label>
                      <textarea
                        value={seoDescription}
                        onChange={(e) => setSeoDescription(e.target.value)}
                        placeholder="Write a compelling description for search engines..."
                        rows={3}
                        className="input-luxury w-full resize-none"
                      />
                      <p className="text-white/40 text-xs mt-1">{seoDescription.length}/160 characters</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Status */}
                <div className="card-luxury p-6">
                  <h3 className="text-lg font-display text-white mb-4">Status</h3>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="input-luxury w-full"
                  >
                    <option value="draft" className="bg-luxury-dark">Draft</option>
                    <option value="published" className="bg-luxury-dark">Published</option>
                    <option value="scheduled" className="bg-luxury-dark">Scheduled</option>
                  </select>
                </div>

                {/* Featured Image */}
                <div className="card-luxury p-6">
                  <h3 className="text-lg font-display text-white mb-4">Featured Image</h3>
                  <div className="border-2 border-dashed border-white/20 p-8 text-center hover:border-gold-500/50 transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-white/40 mx-auto mb-4" />
                    <p className="text-white/60 text-sm mb-2">Drag & drop or click to upload</p>
                    <p className="text-white/40 text-xs">Recommended: 1200x630px</p>
                  </div>
                </div>

                {/* Category */}
                <div className="card-luxury p-6">
                  <h3 className="text-lg font-display text-white mb-4">Category</h3>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="input-luxury w-full"
                  >
                    <option value="" className="bg-luxury-dark">Select category</option>
                    <option value="destinations" className="bg-luxury-dark">Destinations</option>
                    <option value="flights" className="bg-luxury-dark">Flights</option>
                    <option value="hotels" className="bg-luxury-dark">Luxury Hotels</option>
                    <option value="experiences" className="bg-luxury-dark">Experiences</option>
                    <option value="travel-trends" className="bg-luxury-dark">Travel Trends</option>
                    <option value="tips" className="bg-luxury-dark">Travel Tips</option>
                  </select>
                </div>

                {/* Tags */}
                <div className="card-luxury p-6">
                  <h3 className="text-lg font-display text-white mb-4">Tags</h3>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                      placeholder="Add tag..."
                      className="input-luxury flex-1"
                    />
                    <button
                      type="button"
                      onClick={addTag}
                      className="px-4 py-2 bg-gold-500/20 text-gold-500 hover:bg-gold-500/30 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 text-white text-sm"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="text-white/40 hover:text-white"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author */}
                <div className="card-luxury p-6">
                  <h3 className="text-lg font-display text-white mb-4">Author</h3>
                  <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="input-luxury w-full"
                  >
                    <option value="" className="bg-luxury-dark">Select author</option>
                    <option value="victoria" className="bg-luxury-dark">Victoria Sterling</option>
                    <option value="marcus" className="bg-luxury-dark">Marcus Chen</option>
                    <option value="james" className="bg-luxury-dark">James Morrison</option>
                    <option value="sophie" className="bg-luxury-dark">Sophie Laurent</option>
                    <option value="pierre" className="bg-luxury-dark">Pierre Dubois</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

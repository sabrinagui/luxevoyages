"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft,
  Save,
  Upload,
  Star,
  Plus,
  X,
  LayoutDashboard,
  Plane,
  Building2,
  Calendar,
  FileText,
  Users,
  Settings
} from "lucide-react";

export default function NewHotelPage() {
  const [images, setImages] = useState<string[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [newAmenity, setNewAmenity] = useState("");
  const [rooms, setRooms] = useState([
    { name: "", price: "", capacity: "", beds: "", size: "", description: "" }
  ]);

  const addAmenity = () => {
    if (newAmenity && !amenities.includes(newAmenity)) {
      setAmenities([...amenities, newAmenity]);
      setNewAmenity("");
    }
  };

  const removeAmenity = (amenityToRemove: string) => {
    setAmenities(amenities.filter((a) => a !== amenityToRemove));
  };

  const addRoom = () => {
    setRooms([...rooms, { name: "", price: "", capacity: "", beds: "", size: "", description: "" }]);
  };

  const removeRoom = (index: number) => {
    setRooms(rooms.filter((_, i) => i !== index));
  };

  const updateRoom = (index: number, field: string, value: string) => {
    const updatedRooms = [...rooms];
    updatedRooms[index] = { ...updatedRooms[index], [field]: value };
    setRooms(updatedRooms);
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
            <div className="flex items-center gap-4">
              <Link href="/admin/hotels" className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-3xl font-display text-white mb-1">Add New Hotel</h1>
                <p className="text-white/60">Create a new luxury hotel listing</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="btn-secondary">Save as Draft</button>
              <button className="btn-primary flex items-center gap-2">
                <Save className="w-5 h-5" />
                Publish Hotel
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="col-span-2 space-y-6">
              {/* Basic Information */}
              <div className="card-luxury p-6">
                <h3 className="text-xl font-display text-white mb-6">Basic Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Hotel Name</label>
                    <input
                      type="text"
                      placeholder="e.g., The Ritz-Carlton, Paris"
                      className="input-luxury w-full"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Category</label>
                      <select className="input-luxury w-full">
                        <option value="" className="bg-luxury-dark">Select category</option>
                        <option value="luxury" className="bg-luxury-dark">Luxury Hotel</option>
                        <option value="resort" className="bg-luxury-dark">Resort</option>
                        <option value="boutique" className="bg-luxury-dark">Boutique Hotel</option>
                        <option value="villa" className="bg-luxury-dark">Private Villa</option>
                        <option value="palace" className="bg-luxury-dark">Palace Hotel</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Star Rating</label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className="p-1 text-gold-500 hover:scale-110 transition-transform"
                          >
                            <Star className="w-6 h-6 fill-current" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Description</label>
                    <textarea
                      placeholder="Write a compelling description of the hotel..."
                      rows={5}
                      className="input-luxury w-full resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="card-luxury p-6">
                <h3 className="text-xl font-display text-white mb-6">Location</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Full Address</label>
                    <input
                      type="text"
                      placeholder="Street address"
                      className="input-luxury w-full"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-white/60 text-sm mb-2">City</label>
                      <input
                        type="text"
                        placeholder="e.g., Paris"
                        className="input-luxury w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Country</label>
                      <select className="input-luxury w-full">
                        <option value="" className="bg-luxury-dark">Select country</option>
                        <option value="france" className="bg-luxury-dark">France</option>
                        <option value="italy" className="bg-luxury-dark">Italy</option>
                        <option value="uae" className="bg-luxury-dark">United Arab Emirates</option>
                        <option value="maldives" className="bg-luxury-dark">Maldives</option>
                        <option value="japan" className="bg-luxury-dark">Japan</option>
                        <option value="switzerland" className="bg-luxury-dark">Switzerland</option>
                        <option value="usa" className="bg-luxury-dark">United States</option>
                        <option value="uk" className="bg-luxury-dark">United Kingdom</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Postal Code</label>
                      <input
                        type="text"
                        placeholder="Postal code"
                        className="input-luxury w-full"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Latitude</label>
                      <input
                        type="text"
                        placeholder="e.g., 48.8566"
                        className="input-luxury w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Longitude</label>
                      <input
                        type="text"
                        placeholder="e.g., 2.3522"
                        className="input-luxury w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Images */}
              <div className="card-luxury p-6">
                <h3 className="text-xl font-display text-white mb-6">Images</h3>
                <div className="grid grid-cols-4 gap-4 mb-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative aspect-video bg-white/10">
                      <button
                        type="button"
                        onClick={() => setImages(images.filter((_, i) => i !== index))}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <label className="aspect-video border-2 border-dashed border-white/20 flex flex-col items-center justify-center cursor-pointer hover:border-gold-500/50 transition-colors">
                    <Upload className="w-8 h-8 text-white/40 mb-2" />
                    <span className="text-white/40 text-xs">Add Image</span>
                    <input type="file" className="hidden" accept="image/*" />
                  </label>
                </div>
                <p className="text-white/40 text-sm">First image will be used as the main thumbnail. Recommended size: 1200x800px</p>
              </div>

              {/* Room Types */}
              <div className="card-luxury p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-display text-white">Room Types</h3>
                  <button
                    type="button"
                    onClick={addRoom}
                    className="text-gold-500 hover:text-gold-400 text-sm flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    Add Room
                  </button>
                </div>
                <div className="space-y-6">
                  {rooms.map((room, index) => (
                    <div key={index} className="p-4 bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-white font-medium">Room {index + 1}</h4>
                        {rooms.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeRoom(index)}
                            className="text-red-500 hover:text-red-400 text-sm"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white/60 text-sm mb-2">Room Name</label>
                          <input
                            type="text"
                            value={room.name}
                            onChange={(e) => updateRoom(index, "name", e.target.value)}
                            placeholder="e.g., Presidential Suite"
                            className="input-luxury w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm mb-2">Price per Night</label>
                          <input
                            type="text"
                            value={room.price}
                            onChange={(e) => updateRoom(index, "price", e.target.value)}
                            placeholder="e.g., 1500"
                            className="input-luxury w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm mb-2">Max Guests</label>
                          <input
                            type="number"
                            value={room.capacity}
                            onChange={(e) => updateRoom(index, "capacity", e.target.value)}
                            placeholder="e.g., 4"
                            className="input-luxury w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm mb-2">Beds</label>
                          <input
                            type="text"
                            value={room.beds}
                            onChange={(e) => updateRoom(index, "beds", e.target.value)}
                            placeholder="e.g., 1 King"
                            className="input-luxury w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm mb-2">Room Size (sqm)</label>
                          <input
                            type="text"
                            value={room.size}
                            onChange={(e) => updateRoom(index, "size", e.target.value)}
                            placeholder="e.g., 85"
                            className="input-luxury w-full"
                          />
                        </div>
                        <div className="col-span-2">
                          <label className="block text-white/60 text-sm mb-2">Room Description</label>
                          <textarea
                            value={room.description}
                            onChange={(e) => updateRoom(index, "description", e.target.value)}
                            placeholder="Describe the room features..."
                            rows={2}
                            className="input-luxury w-full resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Status */}
              <div className="card-luxury p-6">
                <h3 className="text-lg font-display text-white mb-4">Status</h3>
                <select className="input-luxury w-full">
                  <option value="draft" className="bg-luxury-dark">Draft</option>
                  <option value="active" className="bg-luxury-dark">Active</option>
                  <option value="inactive" className="bg-luxury-dark">Inactive</option>
                </select>
              </div>

              {/* Pricing */}
              <div className="card-luxury p-6">
                <h3 className="text-lg font-display text-white mb-4">Base Pricing</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Starting From (USD)</label>
                    <input
                      type="text"
                      placeholder="e.g., 850"
                      className="input-luxury w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Currency</label>
                    <select className="input-luxury w-full">
                      <option value="USD" className="bg-luxury-dark">USD - US Dollar</option>
                      <option value="EUR" className="bg-luxury-dark">EUR - Euro</option>
                      <option value="GBP" className="bg-luxury-dark">GBP - British Pound</option>
                      <option value="CHF" className="bg-luxury-dark">CHF - Swiss Franc</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="card-luxury p-6">
                <h3 className="text-lg font-display text-white mb-4">Amenities</h3>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={newAmenity}
                    onChange={(e) => setNewAmenity(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addAmenity())}
                    placeholder="Add amenity..."
                    className="input-luxury flex-1"
                  />
                  <button
                    type="button"
                    onClick={addAmenity}
                    className="px-4 py-2 bg-gold-500/20 text-gold-500 hover:bg-gold-500/30 transition-colors"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 text-white text-sm"
                    >
                      {amenity}
                      <button
                        type="button"
                        onClick={() => removeAmenity(amenity)}
                        className="text-white/40 hover:text-white"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <p className="text-white/40 text-xs mb-2">Quick add:</p>
                <div className="flex flex-wrap gap-2">
                  {["Spa", "Pool", "Restaurant", "Bar", "Gym", "WiFi", "Concierge", "Room Service"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => !amenities.includes(item) && setAmenities([...amenities, item])}
                      className="px-2 py-1 bg-white/5 text-white/40 text-xs hover:bg-white/10 hover:text-white transition-colors"
                    >
                      + {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Check-in/out */}
              <div className="card-luxury p-6">
                <h3 className="text-lg font-display text-white mb-4">Policies</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Check-in Time</label>
                    <input
                      type="time"
                      defaultValue="15:00"
                      className="input-luxury w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Check-out Time</label>
                    <input
                      type="time"
                      defaultValue="11:00"
                      className="input-luxury w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Cancellation Policy</label>
                    <select className="input-luxury w-full">
                      <option value="flexible" className="bg-luxury-dark">Flexible (24h before)</option>
                      <option value="moderate" className="bg-luxury-dark">Moderate (5 days before)</option>
                      <option value="strict" className="bg-luxury-dark">Strict (14 days before)</option>
                      <option value="non-refundable" className="bg-luxury-dark">Non-refundable</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="card-luxury p-6">
                <h3 className="text-lg font-display text-white mb-4">Contact</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="input-luxury w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="reservations@hotel.com"
                      className="input-luxury w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Website</label>
                    <input
                      type="url"
                      placeholder="https://hotel.com"
                      className="input-luxury w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

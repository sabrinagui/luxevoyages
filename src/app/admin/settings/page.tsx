"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Save,
  LayoutDashboard,
  Plane,
  Building2,
  Calendar,
  FileText,
  Users,
  Settings,
  Globe,
  Mail,
  Bell,
  CreditCard,
  Shield,
  Palette,
  Key,
  Upload
} from "lucide-react";

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

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
            <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors">
              <Users className="w-5 h-5" />
              Users
            </Link>
            <div className="pt-6 border-t border-white/10 mt-6">
              <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 bg-gold-500/10 text-gold-500 rounded-none">
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
              <h1 className="text-3xl font-display text-white mb-2">Settings</h1>
              <p className="text-white/60">Configure your platform preferences</p>
            </div>
            <button className="btn-primary flex items-center gap-2">
              <Save className="w-5 h-5" />
              Save Changes
            </button>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {/* Settings Tabs */}
            <div className="card-luxury p-4">
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab("general")}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    activeTab === "general"
                      ? "bg-gold-500/10 text-gold-500"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Globe className="w-5 h-5" />
                  General
                </button>
                <button
                  onClick={() => setActiveTab("email")}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    activeTab === "email"
                      ? "bg-gold-500/10 text-gold-500"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Mail className="w-5 h-5" />
                  Email
                </button>
                <button
                  onClick={() => setActiveTab("notifications")}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    activeTab === "notifications"
                      ? "bg-gold-500/10 text-gold-500"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Bell className="w-5 h-5" />
                  Notifications
                </button>
                <button
                  onClick={() => setActiveTab("payments")}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    activeTab === "payments"
                      ? "bg-gold-500/10 text-gold-500"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  Payments
                </button>
                <button
                  onClick={() => setActiveTab("security")}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    activeTab === "security"
                      ? "bg-gold-500/10 text-gold-500"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Shield className="w-5 h-5" />
                  Security
                </button>
                <button
                  onClick={() => setActiveTab("branding")}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    activeTab === "branding"
                      ? "bg-gold-500/10 text-gold-500"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Palette className="w-5 h-5" />
                  Branding
                </button>
                <button
                  onClick={() => setActiveTab("api")}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    activeTab === "api"
                      ? "bg-gold-500/10 text-gold-500"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Key className="w-5 h-5" />
                  API Keys
                </button>
              </nav>
            </div>

            {/* Settings Content */}
            <div className="col-span-3">
              {/* General Settings */}
              {activeTab === "general" && (
                <div className="space-y-6">
                  <div className="card-luxury p-6">
                    <h3 className="text-xl font-display text-white mb-6">General Settings</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Site Name</label>
                        <input
                          type="text"
                          defaultValue="LuxeVoyages"
                          className="input-luxury w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Site Description</label>
                        <textarea
                          defaultValue="Premium luxury travel experiences for discerning travelers worldwide."
                          rows={3}
                          className="input-luxury w-full resize-none"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white/60 text-sm mb-2">Contact Email</label>
                          <input
                            type="email"
                            defaultValue="contact@luxevoyages.com"
                            className="input-luxury w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm mb-2">Support Phone</label>
                          <input
                            type="tel"
                            defaultValue="+1 (888) 555-0123"
                            className="input-luxury w-full"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white/60 text-sm mb-2">Default Currency</label>
                          <select className="input-luxury w-full">
                            <option value="USD" className="bg-luxury-dark">USD - US Dollar</option>
                            <option value="EUR" className="bg-luxury-dark">EUR - Euro</option>
                            <option value="GBP" className="bg-luxury-dark">GBP - British Pound</option>
                            <option value="CHF" className="bg-luxury-dark">CHF - Swiss Franc</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm mb-2">Timezone</label>
                          <select className="input-luxury w-full">
                            <option value="UTC" className="bg-luxury-dark">UTC</option>
                            <option value="EST" className="bg-luxury-dark">Eastern Time (EST)</option>
                            <option value="PST" className="bg-luxury-dark">Pacific Time (PST)</option>
                            <option value="CET" className="bg-luxury-dark">Central European (CET)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-luxury p-6">
                    <h3 className="text-xl font-display text-white mb-6">Business Address</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Street Address</label>
                        <input
                          type="text"
                          defaultValue="100 Park Avenue, Suite 1500"
                          className="input-luxury w-full"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="block text-white/60 text-sm mb-2">City</label>
                          <input
                            type="text"
                            defaultValue="New York"
                            className="input-luxury w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm mb-2">State</label>
                          <input
                            type="text"
                            defaultValue="NY"
                            className="input-luxury w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm mb-2">ZIP Code</label>
                          <input
                            type="text"
                            defaultValue="10178"
                            className="input-luxury w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Email Settings */}
              {activeTab === "email" && (
                <div className="space-y-6">
                  <div className="card-luxury p-6">
                    <h3 className="text-xl font-display text-white mb-6">Email Configuration</h3>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white/60 text-sm mb-2">SMTP Host</label>
                          <input
                            type="text"
                            placeholder="smtp.example.com"
                            className="input-luxury w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm mb-2">SMTP Port</label>
                          <input
                            type="text"
                            placeholder="587"
                            className="input-luxury w-full"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white/60 text-sm mb-2">Username</label>
                          <input
                            type="text"
                            placeholder="your-email@example.com"
                            className="input-luxury w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm mb-2">Password</label>
                          <input
                            type="password"
                            placeholder="••••••••"
                            className="input-luxury w-full"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">From Email</label>
                        <input
                          type="email"
                          placeholder="noreply@luxevoyages.com"
                          className="input-luxury w-full"
                        />
                      </div>
                      <button className="btn-secondary">Test Connection</button>
                    </div>
                  </div>

                  <div className="card-luxury p-6">
                    <h3 className="text-xl font-display text-white mb-6">Email Templates</h3>
                    <div className="space-y-4">
                      {["Booking Confirmation", "Payment Receipt", "Welcome Email", "Password Reset", "Newsletter"].map((template) => (
                        <div key={template} className="flex items-center justify-between p-4 bg-white/5 border border-white/10">
                          <div>
                            <p className="text-white">{template}</p>
                            <p className="text-white/40 text-sm">Last edited 2 days ago</p>
                          </div>
                          <button className="text-gold-500 hover:text-gold-400 text-sm">Edit Template</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Settings */}
              {activeTab === "notifications" && (
                <div className="card-luxury p-6">
                  <h3 className="text-xl font-display text-white mb-6">Notification Preferences</h3>
                  <div className="space-y-6">
                    {[
                      { label: "New Booking", desc: "Receive notifications when a new booking is made" },
                      { label: "Booking Cancellation", desc: "Get notified when a booking is cancelled" },
                      { label: "Payment Received", desc: "Notification for successful payments" },
                      { label: "New User Registration", desc: "When a new user creates an account" },
                      { label: "Low Inventory", desc: "Alert when flight or hotel availability is low" },
                      { label: "Customer Messages", desc: "New messages from customers" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between p-4 bg-white/5 border border-white/10">
                        <div>
                          <p className="text-white">{item.label}</p>
                          <p className="text-white/40 text-sm">{item.desc}</p>
                        </div>
                        <div className="flex items-center gap-6">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" defaultChecked className="w-4 h-4 accent-gold-500" />
                            <span className="text-white/60 text-sm">Email</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" defaultChecked className="w-4 h-4 accent-gold-500" />
                            <span className="text-white/60 text-sm">Push</span>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Payments Settings */}
              {activeTab === "payments" && (
                <div className="space-y-6">
                  <div className="card-luxury p-6">
                    <h3 className="text-xl font-display text-white mb-6">Payment Gateway</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Payment Provider</label>
                        <select className="input-luxury w-full">
                          <option value="stripe" className="bg-luxury-dark">Stripe</option>
                          <option value="paypal" className="bg-luxury-dark">PayPal</option>
                          <option value="square" className="bg-luxury-dark">Square</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Stripe Public Key</label>
                        <input
                          type="text"
                          placeholder="pk_live_..."
                          className="input-luxury w-full font-mono text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Stripe Secret Key</label>
                        <input
                          type="password"
                          placeholder="sk_live_..."
                          className="input-luxury w-full font-mono text-sm"
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 accent-gold-500" />
                          <span className="text-white/60 text-sm">Test Mode</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="card-luxury p-6">
                    <h3 className="text-xl font-display text-white mb-6">Accepted Payment Methods</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {["Visa", "Mastercard", "American Express", "Apple Pay", "Google Pay", "Bank Transfer"].map((method) => (
                        <label key={method} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 cursor-pointer hover:border-gold-500/50 transition-colors">
                          <input type="checkbox" defaultChecked className="w-4 h-4 accent-gold-500" />
                          <span className="text-white">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === "security" && (
                <div className="space-y-6">
                  <div className="card-luxury p-6">
                    <h3 className="text-xl font-display text-white mb-6">Security Settings</h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10">
                        <div>
                          <p className="text-white">Two-Factor Authentication</p>
                          <p className="text-white/40 text-sm">Require 2FA for admin accounts</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10">
                        <div>
                          <p className="text-white">Force HTTPS</p>
                          <p className="text-white/40 text-sm">Redirect all traffic to HTTPS</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10">
                        <div>
                          <p className="text-white">Login Rate Limiting</p>
                          <p className="text-white/40 text-sm">Limit login attempts to prevent brute force</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                        </label>
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Session Timeout (minutes)</label>
                        <input
                          type="number"
                          defaultValue="60"
                          className="input-luxury w-40"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Branding Settings */}
              {activeTab === "branding" && (
                <div className="space-y-6">
                  <div className="card-luxury p-6">
                    <h3 className="text-xl font-display text-white mb-6">Logo & Branding</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-white/60 text-sm mb-4">Site Logo</label>
                        <div className="border-2 border-dashed border-white/20 p-8 text-center hover:border-gold-500/50 transition-colors cursor-pointer">
                          <Upload className="w-12 h-12 text-white/40 mx-auto mb-4" />
                          <p className="text-white/60 text-sm mb-2">Upload your logo</p>
                          <p className="text-white/40 text-xs">Recommended: SVG or PNG, max 2MB</p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-4">Favicon</label>
                        <div className="border-2 border-dashed border-white/20 p-8 text-center hover:border-gold-500/50 transition-colors cursor-pointer w-40">
                          <Upload className="w-8 h-8 text-white/40 mx-auto mb-2" />
                          <p className="text-white/40 text-xs">32x32 PNG</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-luxury p-6">
                    <h3 className="text-xl font-display text-white mb-6">Color Scheme</h3>
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Primary Color</label>
                        <div className="flex items-center gap-3">
                          <input type="color" defaultValue="#D4AF37" className="w-12 h-12 border-none cursor-pointer" />
                          <input type="text" defaultValue="#D4AF37" className="input-luxury flex-1 font-mono uppercase" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Secondary Color</label>
                        <div className="flex items-center gap-3">
                          <input type="color" defaultValue="#1A1A2E" className="w-12 h-12 border-none cursor-pointer" />
                          <input type="text" defaultValue="#1A1A2E" className="input-luxury flex-1 font-mono uppercase" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Accent Color</label>
                        <div className="flex items-center gap-3">
                          <input type="color" defaultValue="#C9B037" className="w-12 h-12 border-none cursor-pointer" />
                          <input type="text" defaultValue="#C9B037" className="input-luxury flex-1 font-mono uppercase" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* API Keys Settings */}
              {activeTab === "api" && (
                <div className="card-luxury p-6">
                  <h3 className="text-xl font-display text-white mb-6">API Keys</h3>
                  <div className="space-y-6">
                    <div className="p-4 bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-white font-medium">Production API Key</p>
                          <p className="text-white/40 text-sm">Use this key for live environment</p>
                        </div>
                        <button className="text-gold-500 hover:text-gold-400 text-sm">Regenerate</button>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          readOnly
                          value="lv_prod_sk_••••••••••••••••••••••••"
                          className="input-luxury flex-1 font-mono text-sm"
                        />
                        <button className="btn-secondary">Copy</button>
                      </div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-white font-medium">Test API Key</p>
                          <p className="text-white/40 text-sm">Use this key for development</p>
                        </div>
                        <button className="text-gold-500 hover:text-gold-400 text-sm">Regenerate</button>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          readOnly
                          value="lv_test_sk_••••••••••••••••••••••••"
                          className="input-luxury flex-1 font-mono text-sm"
                        />
                        <button className="btn-secondary">Copy</button>
                      </div>
                    </div>
                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/30">
                      <p className="text-yellow-500 text-sm">
                        <strong>Warning:</strong> Keep your API keys secure. Never share them publicly or commit them to version control.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

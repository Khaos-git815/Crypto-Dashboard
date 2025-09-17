"use client"

import { Button } from "@/components/ui/button"
import { Send, Bird, Bot, TrendingUp, MessageCircle, Heart, Flame, Clock, Zap, LinkIcon, Diamond, BarChart3, FileText, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function StreamDotFunLanding() {
  const widgets = [
    {
      icon: Bot,
      name: "Buy Bot",
      description: "Real-time buy alerts customizable animations",
      href: "/configure?widget=buy-bot",
    },
    {
      icon: TrendingUp,
      name: "Market Cap",
      description: "Live market cap display with custom goals",
      href: "/configure?widget=market-cap",
    },
    {
      icon: MessageCircle,
      name: "Chat Widget",
      description: "Real-time chat integration for your stream",
      href: "/configure?widget=chat-widget",
    },
    {
      icon: Heart,
      name: "Donations",
      description: "Donation system with alerts and text-to-speech",
      href: "/configure?widget=donations",
    },
    {
      icon: Flame,
      name: "Burn Goals",
      description: "Token burn tracking with custom goals",
      href: "/configure?widget=burn-goals",
    },
    {
      icon: Clock,
      name: "Subathon",
      description: "Subathon style timer interacting to buys and sells",
      href: "/configure?widget=subathon",
    },
  ]

  const features = [
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "All widgets update in real-time, keeping your audience engaged with live data",
    },
    {
      icon: LinkIcon,
      title: "Easy Integration",
      description: "Simple URL-based widgets that work with any streaming software",
    },
    {
      icon: Diamond,
      title: "pump.fun Native",
      description: "Built for the pump.fun ecosystem with ease of use in mind",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black">
      {/* Modern Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-orange-500/20">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d0975fda-cac3-49b8-9344-375ae414ace1-1J1cNtltc4rpVQXZZIUqRcoQjjBirX.webp"
                    alt="Streamertools.fun Logo"
                    className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-orange-300 group-hover:to-amber-300">
                  Streamertools.fun
                </span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link 
                href="/" 
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-orange-500/10 transition-all duration-300 font-medium"
              >
                Home
              </Link>
              <Link 
                href="/explore" 
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-orange-500/10 transition-all duration-300 font-medium"
              >
                Explore
              </Link>
              <Link 
                href="/configure" 
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-orange-500/10 transition-all duration-300 font-medium"
              >
                Configure
              </Link>
              <Link 
                href="/documentation" 
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-orange-500/10 transition-all duration-300 font-medium"
              >
                Docs
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Mobile Menu Button */}
              <button className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-orange-500/10 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 text-center">
        <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-wider font-mono gradient-text pixelated-text">
                Streamertools.fun
              </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-white max-w-3xl mx-auto leading-relaxed">
            The ultimate toolkit for creators on pump.fun — track markets, boost engagement, and grow your community.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/25 glow-orange"
            >
              Get Started
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-orange-400/10 hover:border-orange-400 px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 bg-transparent"
            >
              View Documentation
            </Button>
          </div>
        </div>


      </main>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Available Widgets</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Choose from our collection of interactive widgets designed for pump.fun streamers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {widgets.map((widget, index) => (
              <div
                key={index}
                className="crypto-card p-6 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-orange-400/20 rounded-lg">
                    <widget.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{widget.name}</h3>
                    <p className="text-gray-400 tewjanfwhwpfmffajdlxt-sm leading-relaxed">{widget.description}</p>
                  </div>
                </div>

                <Link href={widget.href} className="block">
                  <Button className="w-full bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 text-white rounded-lg font-medium transition-all duration-300">
                    Configure Widget →
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose streamdotfun?</h2>
            <p className="text-lg text-gray-400">Built specifically for pump.fun content creators</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-400/20 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Community & Analytics Section */}
          <div className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Community & Analytics</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Join thousands of creators building the future of crypto streaming
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                {/* Community Stats */}
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Live Community Stats</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-400 mb-2">2,847</div>
                        <div className="text-gray-400 text-sm">Active Creators</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-400 mb-2">$12.4M</div>
                        <div className="text-gray-400 text-sm">Total Volume</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-400 mb-2">156K</div>
                        <div className="text-gray-400 text-sm">Widget Views</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-400 mb-2">98.7%</div>
                        <div className="text-gray-400 text-sm">Uptime</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white">Why Creators Choose Us</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-300">Real-time market data integration</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-300">Zero-configuration setup</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-300">Customizable widget themes</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-300">24/7 community support</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Preview */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-white">Analytics Dashboard</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-green-400 text-sm">Live</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Performance Chart */}
                      <div className="bg-black/40 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-gray-300 text-sm">Stream Performance</span>
                          <span className="text-orange-400 text-sm font-medium">+23.5%</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded flex items-end space-x-1">
                          {[40, 65, 45, 80, 60, 90, 75, 85].map((height, i) => (
                            <div
                              key={i}
                              className="bg-gradient-to-t from-orange-500 to-amber-400 rounded-t"
                              style={{ height: `${height}%`, width: '12%' }}
                            ></div>
                          ))}
                        </div>
                      </div>

                      {/* Revenue Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/40 rounded-lg p-4">
                          <div className="text-2xl font-bold text-green-400 mb-1">$2,847</div>
                          <div className="text-gray-400 text-xs">Today's Revenue</div>
                        </div>
                        <div className="bg-black/40 rounded-lg p-4">
                          <div className="text-2xl font-bold text-orange-400 mb-1">1,234</div>
                          <div className="text-gray-400 text-xs">Active Viewers</div>
                        </div>
                      </div>

                      {/* Top Tokens */}
                      <div className="bg-black/40 rounded-lg p-4">
                        <div className="text-gray-300 text-sm mb-3">Top Performing Tokens</div>
                        <div className="space-y-2">
                          {[
                            { name: "PEPE", change: "+45.2%", color: "text-green-400" },
                            { name: "DOGE", change: "+23.1%", color: "text-green-400" },
                            { name: "SHIB", change: "-12.3%", color: "text-red-400" }
                          ].map((token, i) => (
                            <div key={i} className="flex items-center justify-between">
                              <span className="text-white text-sm">{token.name}</span>
                              <span className={`text-sm font-medium ${token.color}`}>{token.change}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coming Soon Section */}
              <div className="text-center">
                <div className="inline-block bg-orange-500/20 border border-orange-500/30 rounded-full px-6 py-3 mb-8">
                  <span className="text-orange-400 text-sm font-medium">✦ COMING SOON</span>
                </div>

                <h3 className="text-4xl font-bold text-white mb-8 max-w-4xl mx-auto">
                  A new era for creators: more control, more insight, more style.
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                  <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-6 h-6 text-orange-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Creators Dashboard</h4>
                    <p className="text-gray-400 text-sm">Track your performance and earnings in real-time</p>
                  </div>

                  <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-orange-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Performance Trackers</h4>
                    <p className="text-gray-400 text-sm">Monitor stream metrics and audience engagement</p>
                  </div>

                  <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-6 h-6 text-orange-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Widget Presets</h4>
                    <p className="text-gray-400 text-sm">Save and reuse your favorite widget configurations</p>
                  </div>

                  <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-6 h-6 text-orange-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Custom Styling</h4>
                    <p className="text-gray-400 text-sm">Fully customize the look and feel of your widgets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories & Testimonials Section */}
          <div className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Success Stories</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  See how creators are using our tools to grow their streams and maximize earnings
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {/* Success Story 1 */}
                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">C</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">CryptoKing</h4>
                      <p className="text-gray-400 text-sm">Pump.fun Streamer</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "Streamertools.fun transformed my stream. My audience engagement increased by 300% and I've made over $50K in the last month alone. The widgets are incredibly easy to set up and look amazing."
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div className="text-orange-400 font-bold text-lg">+300%</div>
                    <div className="text-gray-400 text-sm">Engagement</div>
                  </div>
                </div>

                {/* Success Story 2 */}
                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">M</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">MoonMaster</h4>
                      <p className="text-gray-400 text-sm">Crypto Influencer</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "The real-time market cap widget is a game changer. My viewers love seeing live price updates and it keeps them engaged throughout the entire stream. Setup took less than 5 minutes."
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div className="text-orange-400 font-bold text-lg">+150%</div>
                    <div className="text-gray-400 text-sm">Viewer Retention</div>
                  </div>
                </div>

                {/* Success Story 3 */}
                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">D</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">DiamondHands</h4>
                      <p className="text-gray-400 text-sm">Trading Streamer</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "The donation widget has been incredible for my community. I've received over $25K in donations and the custom styling makes it look professional. My community loves the transparency."
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div className="text-orange-400 font-bold text-lg">$25K+</div>
                    <div className="text-gray-400 text-sm">Donations</div>
                  </div>
                </div>
              </div>

              {/* Achievement Stats */}
              <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Platform Achievements</h3>
                  <p className="text-gray-400">Real results from our community</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400 mb-2">$2.3M+</div>
                    <div className="text-gray-400 text-sm">Total Creator Earnings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400 mb-2">15K+</div>
                    <div className="text-gray-400 text-sm">Active Streams</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400 mb-2">98.9%</div>
                    <div className="text-gray-400 text-sm">Creator Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                    <div className="text-gray-400 text-sm">Support Available</div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-16">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Start your journey with streamertools.fun and become the next success story in the crypto streaming community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-600 text-white hover:bg-orange-400/10 hover:border-orange-400 px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 bg-transparent"
                  >
                    View All Testimonials
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800/30 py-16 px-6 bg-gradient-to-t from-black/60 to-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d0975fda-cac3-49b8-9344-375ae414ace1-1J1cNtltc4rpVQXZZIUqRcoQjjBirX.webp"
                  alt="StreamDotFun Logo"
                  className="w-10 h-10"
                />
                <span className="text-2xl font-bold text-white">Streamertools.fun</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg mb-6">
                The ultimate toolkit for creators on pump.fun — track markets, boost engagement, and grow your community with our comprehensive suite of widgets and tools.
              </p>
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                  />
                  <Button className="bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 text-white px-6 rounded-lg">
                    Subscribe
                  </Button>
                </div>
                <p className="text-gray-500 text-xs mt-2">Get the latest updates and new features</p>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                <div className="flex items-center space-x-3">
                  <a href="https://t.me/streamdotfun" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-white/5 text-white hover:bg-white/10 hover:shadow-lg hover:shadow-orange-400/20 transition-all duration-300">
                      <Send className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href="https://x.com/streamdotfun" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-white/5 text-white hover:bg-white/10 hover:shadow-lg hover:shadow-orange-400/20 transition-all duration-300">
                      <Bird className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/explore" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Explore Widgets
                  </Link>
                </li>
                <li>
                  <Link href="/configure" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Configure Widgets
                  </Link>
                </li>
                <li>
                  <Link href="/documentation" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="/integrations" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Widget Types */}
            <div>
              <h3 className="text-white font-semibold mb-4">Widgets</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/configure?widget=buy-bot" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Buy Bot
                  </Link>
                </li>
                <li>
                  <Link href="/configure?widget=market-cap" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Market Cap
                  </Link>
                </li>
                <li>
                  <Link href="/configure?widget=chat-widget" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Chat Widget
                  </Link>
                </li>
                <li>
                  <Link href="/configure?widget=donations" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Donations
                  </Link>
                </li>
                <li>
                  <Link href="/configure?widget=burn-goals" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Burn Goals
                  </Link>
                </li>
                <li>
                  <Link href="/configure?widget=subathon" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Subathon Timer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support & Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-3 mb-6">
                <li>
                  <Link href="/help" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    System Status
                  </Link>
                </li>
                <li>
                  <Link href="/changelog" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Changelog
                  </Link>
                </li>
              </ul>

              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/examples" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-8 border-t border-gray-800/30 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">10K+</div>
                <div className="text-gray-400 text-sm">Active Creators</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">50M+</div>
                <div className="text-gray-400 text-sm">Widget Views</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-gray-800/30 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="text-gray-400 text-sm">
                © 2025 Streamertools.fun. All rights reserved.
              </div>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <Link href="/privacy" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-orange-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-orange-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Made with ❤️ for creators</span>
              <span>•</span>
              <span>Powered by Next.js & Vercel</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

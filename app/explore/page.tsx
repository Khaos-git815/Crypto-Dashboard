"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ChevronDown } from "lucide-react"

const currentPopularTokens = [
  {
    id: 1,
    name: "LAMPS",
    handle: "@54743c",
    followers: 14,
    viewers: 145,
    marketCap: "164.7K",
    thumbnail: "/crypto-trading-stream.jpg",
    description: "Lamps.",
    timeStarted: "7h 26m ago",
  },
  {
    id: 2,
    name: "Food for Folks",
    handle: "@foodforfolks",
    followers: 5,
    viewers: 141,
    marketCap: "200K",
    thumbnail: "/food-cooking-stream.jpg",
    description: "we're just folks feeding folks",
    timeStarted: "4h 2m ago",
  },
  {
    id: 3,
    name: "WE ARE BACK",
    handle: "@zccwmk",
    followers: 54,
    viewers: 45,
    marketCap: "160.1K",
    thumbnail: "/australian-workers-stream.jpg",
    description: "We are the UK version of BAGWORK.",
    timeStarted: "11h 35m ago",
  },
  {
    id: 4,
    name: "donuts",
    handle: "@Onefirm",
    followers: 0,
    viewers: 31,
    marketCap: "184.6K",
    thumbnail: "/donation-charity-stream.jpg",
    description: "Donate to streamers with Donuts",
    timeStarted: "13h 3m ago",
  },
]

const liveTokens = [
  {
    id: 1,
    name: "Catching Pedos",
    handle: "@3weix",
    followers: 0,
    viewers: 509,
    marketCap: "723.5K",
    thumbnail: "/crypto-investigation-stream.jpg",
    description: "Catching Weirdos On Live",
    timeStarted: "6h 40m ago",
    stats: {
      msgLast5m: "0",
      replies: "0.0",
      prevStreams: "0",
      vol5m: "35.6K",
      vol1h: "714.1K",
      vol24h: "2.3M",
    },
    activity: {
      type: "bro",
      message: "bro who cares abt his coins",
      launched: "6h 40m ago",
      updated: "11s ago",
    },
  },
  {
    id: 2,
    name: "Walking till $20M MC",
    handle: "@AFMike",
    followers: 0,
    viewers: 453,
    marketCap: "156.8K",
    thumbnail: "/walking-exercise-stream.jpg",
    description: "No description",
    timeStarted: "3h 40m ago",
    stats: {
      msgLast5m: "0",
      replies: "0.0",
      prevStreams: "0",
      vol5m: "16.5K",
      vol1h: "480.9K",
      vol24h: "480.9K",
    },
    activity: {
      type: "crying",
      message: "Great crying",
      launched: "3h 40m ago",
      updated: "11s ago",
    },
  },
  {
    id: 3,
    name: "yskaela",
    handle: "@yskaelastream",
    followers: 251,
    viewers: 393,
    marketCap: "1.1M",
    thumbnail: "/charity-food-stream.jpg",
    description: "hello :)",
    timeStarted: "3h 1 hr ago",
    stats: {
      msgLast5m: "0",
      replies: "0.0",
      prevStreams: "0",
      vol5m: "65.1K",
      vol1h: "202.6K",
      vol24h: "5.8M",
    },
    activity: {
      type: "army",
      message: "Sht4th army will cry if you sell and...",
      launched: "18h 3 hr ago",
      updated: "11s ago",
    },
  },
  {
    id: 4,
    name: "Becker Live : Beat Me, I Giv...",
    handle: "@Probecker",
    followers: 245,
    viewers: 382,
    marketCap: "4.9M",
    thumbnail: "/crypto-trading-stream.jpg",
    description: "The official coin of Stream SZN bb.",
    timeStarted: "4h 4m ago",
    stats: {
      msgLast5m: "0",
      replies: "0.0",
      prevStreams: "1",
      vol5m: "20.4K",
      vol1h: "364.3K",
      vol24h: "87.6M",
    },
    activity: {
      type: "dj",
      message: "Im a DJ on Twitch Radio we live in...",
      launched: "24h 3hr ago",
      updated: "11s ago",
    },
  },
  {
    id: 5,
    name: "ALL NIGHTER INTO BULLS...",
    handle: "@chjvjt",
    followers: 0,
    viewers: 344,
    marketCap: "16.2M",
    thumbnail: "/crypto-trading-stream.jpg",
    description: "No description",
    timeStarted: "4h 3m ago",
    stats: {
      msgLast5m: "0",
      replies: "0.0",
      prevStreams: "130",
      vol5m: "238K",
      vol1h: "1.4M",
      vol24h: "32.1M",
    },
    activity: {
      type: "afm",
      message: "Afm",
      launched: "5d 11h ago",
      updated: "11s ago",
    },
  },
  {
    id: 6,
    name: "Donating fees to get you o...",
    handle: "@DEBT04",
    followers: 0,
    viewers: 307,
    marketCap: "395.6K",
    thumbnail: "/donation-charity-stream.jpg",
    description: "Help me get out of debt.",
    timeStarted: "3h 34m ago",
    stats: {
      msgLast5m: "0",
      replies: "0.0",
      prevStreams: "2",
      vol5m: "38.9K",
      vol1h: "577.6K",
      vol24h: "889.8K",
    },
    activity: {
      type: "debt",
      message: "now im in more debt, im down 50...",
      launched: "10h 18h ago",
      updated: "11s ago",
    },
  },
  {
    id: 7,
    name: "24 HOUR - STREAM | 1.5 M...",
    handle: "@burnyfutur",
    followers: 578,
    viewers: 240,
    marketCap: "1.8M",
    thumbnail: "/treadmill-fitness-stream.jpg",
    description: "1.5 Million Subscriber Pump.fun Streamer",
    timeStarted: "2d 12h ago",
    stats: {
      msgLast5m: "0",
      replies: "0.0",
      prevStreams: "4",
      vol5m: "3.4K",
      vol1h: "84.1K",
      vol24h: "5.3M",
    },
    activity: {
      type: "today",
      message: "So on his to do list today",
      launched: "1d 1h ago",
      updated: "9s ago",
    },
  },
  {
    id: 8,
    name: "Day 1",
    handle: "@business_dev",
    followers: 21,
    viewers: 222,
    marketCap: "368.4K",
    thumbnail: "/crypto-trading-stream.jpg",
    description: "Building a business from scratch live. The goal is to go from $0 to $10k/month...",
    timeStarted: "5h 20m ago",
    stats: {
      msgLast5m: "0",
      replies: "0.0",
      prevStreams: "0",
      vol5m: "22.2K",
      vol1h: "267.3K",
      vol24h: "1.4M",
    },
    activity: {
      type: "customers",
      message: "We are also customers",
      launched: "5h 36m ago",
      updated: "9s ago",
    },
  },
]

const getActivityBadgeColor = (type: string) => {
  switch (type) {
    case "bro":
      return "bg-red-500"
    case "crying":
      return "bg-purple-500"
    case "army":
      return "bg-pink-500"
    case "dj":
      return "bg-blue-500"
    case "afm":
      return "bg-red-500"
    case "debt":
      return "bg-red-500"
    case "today":
      return "bg-red-500"
    case "customers":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("Viewers ↓")

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black">
      {/* Header */}
      <header className="border-b border-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.webp" alt="StreamDotFun" className="w-12 h-12" />
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/explore" className="text-pink-500 font-medium">
                Explore
              </Link>
              <Link href="/configure" className="text-gray-300 hover:text-white transition-colors">
                Configure
              </Link>
              <Link href="/documentation" className="text-gray-300 hover:text-white transition-colors">
                Documentation
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <a
                href="https://t.me/streamdotfun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.302 1.507-1.123 1.507-1.123 1.507l-2.896-2.16s-.896-.672-1.792-1.344c-.448-.336-.747-.504-.896-.672-.149-.168-.298-.336-.298-.672 0-.336.149-.504.298-.672.896-.672 1.792-1.344 1.792-1.344l2.896-2.16s.821 0 1.123 1.507c0 0 .727 4.87.896 6.728z" />
                </svg>
              </a>
              <a
                href="https://x.com/streamdotfun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white text-center mb-2">Live Tokens</h1>
          <p className="text-gray-400 text-lg">Trending now</p>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Current popular items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentPopularTokens.map((token) => (
              <Link key={token.id} href={`/token/${token.id}`} className="group">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-pink-500/50 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={token.thumbnail || "/placeholder.svg"}
                      alt={token.name}
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>{token.viewers}</span>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {token.marketCap}
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-white font-semibold text-sm mb-1 truncate">{token.name}</h3>
                    <p className="text-gray-400 text-xs mb-2">
                      {token.handle} · {token.followers} followers
                    </p>
                    <div className="flex justify-end mb-2">
                      <span className="text-gray-500 text-xs bg-gray-800 px-2 py-1 rounded">CA</span>
                    </div>
                    <p className="text-gray-300 text-xs mb-2 line-clamp-2">{token.description}</p>
                    <p className="text-gray-500 text-xs">Livestream started {token.timeStarted}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search token..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-900/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 w-64"
            />
          </div>

          <div className="relative">
            <button className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white flex items-center space-x-2 hover:border-pink-500 transition-colors">
              <span>{sortBy}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {liveTokens.map((token) => (
            <Link key={token.id} href={`/token/${token.id}`} className="group">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-pink-500/50 transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative">
                  <img
                    src={token.thumbnail || "/placeholder.svg"}
                    alt={token.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>{token.viewers}</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {token.marketCap}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3">
                  <h3 className="text-white font-semibold text-sm mb-1 truncate">{token.name}</h3>
                  <p className="text-gray-400 text-xs mb-2">
                    {token.handle} · {token.followers} followers
                  </p>

                  <div className="flex justify-end mb-3">
                    <span className="text-gray-500 text-xs bg-gray-800 px-2 py-1 rounded">CA</span>
                  </div>

                  <p className="text-gray-300 text-xs mb-2 line-clamp-2">{token.description}</p>
                  <p className="text-gray-500 text-xs mb-3">Livestream started {token.timeStarted}</p>

                  {/* Trading Statistics */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="text-center">
                      <div className="text-white font-semibold text-lg">{token.stats.msgLast5m}</div>
                      <div className="text-gray-500 text-xs">msg last 5m</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold text-lg">{token.stats.replies}</div>
                      <div className="text-gray-500 text-xs">replies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold text-lg">{token.stats.prevStreams}</div>
                      <div className="text-gray-500 text-xs">prev streams</div>
                    </div>
                  </div>

                  {/* Volume Statistics */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="text-center">
                      <div className="text-white font-semibold text-sm">{token.stats.vol5m}</div>
                      <div className="text-gray-500 text-xs">5m vol</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold text-sm">{token.stats.vol1h}</div>
                      <div className="text-gray-500 text-xs">1h vol</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold text-sm">{token.stats.vol24h}</div>
                      <div className="text-gray-500 text-xs">24h vol</div>
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="border-t border-gray-700 pt-2">
                    <div className="flex items-center space-x-2 mb-1">
                      <span
                        className={`${getActivityBadgeColor(token.activity.type)} text-white text-xs px-2 py-1 rounded`}
                      >
                        {token.activity.type.toUpperCase()}
                      </span>
                      <span className="text-gray-300 text-xs flex-1 truncate">{token.activity.message}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>launched {token.activity.launched}</span>
                      <span>updated {token.activity.updated}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-gray-800 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4 text-gray-400">
            <span>STREAM</span>
            <span>MC 4.3M</span>
            <span>CA</span>
          </div>
          <div className="flex items-center space-x-6 text-gray-400">
            <div className="flex items-center space-x-1">
              <span>ACTIVE STREAMS</span>
              <span className="text-white font-medium">152</span>
              <span className="text-green-500">↑</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>TOTAL VIEWERS</span>
              <span className="text-white font-medium">6476</span>
              <span className="text-green-500">↑</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

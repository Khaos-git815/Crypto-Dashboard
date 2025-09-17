"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"
import Link from "next/link"

interface Token {
  id: string
  name: string
  symbol: string
  image: string
  price: number
  marketCap: number
  volume24h: number
  priceChange24h: number
  bondingStatus: "Pre-bond" | "Post-bond"
}

interface TokenTableProps {
  filter: string
  searchQuery: string
  sortBy: string
  bondingFilter: string
}

// Mock data - in a real app, this would come from an API
const generateMockTokens = (): Token[] => [
  {
    id: "1",
    name: "Bitcoin",
    symbol: "BTC",
    image: "/bitcoin-logo.png",
    price: 43250.75,
    marketCap: 847500000000,
    volume24h: 28500000000,
    priceChange24h: 2.45,
    bondingStatus: "Post-bond",
  },
  {
    id: "2",
    name: "Ethereum",
    symbol: "ETH",
    image: "/ethereum-logo.png",
    price: 2650.3,
    marketCap: 318700000000,
    volume24h: 15200000000,
    priceChange24h: -1.23,
    bondingStatus: "Post-bond",
  },
  {
    id: "3",
    name: "Solana",
    symbol: "SOL",
    image: "/solana-logo.png",
    price: 98.45,
    marketCap: 42800000000,
    volume24h: 2100000000,
    priceChange24h: 5.67,
    bondingStatus: "Pre-bond",
  },
  {
    id: "4",
    name: "Cardano",
    symbol: "ADA",
    image: "/cardano-logo.jpg",
    price: 0.485,
    marketCap: 17200000000,
    volume24h: 890000000,
    priceChange24h: -3.21,
    bondingStatus: "Pre-bond",
  },
  {
    id: "5",
    name: "Polygon",
    symbol: "MATIC",
    image: "/polygon-logo.png",
    price: 0.875,
    marketCap: 8100000000,
    volume24h: 450000000,
    priceChange24h: 1.89,
    bondingStatus: "Post-bond",
  },
  {
    id: "6",
    name: "Chainlink",
    symbol: "LINK",
    image: "/chainlink-logo.png",
    price: 14.25,
    marketCap: 8400000000,
    volume24h: 520000000,
    priceChange24h: 4.12,
    bondingStatus: "Pre-bond",
  },
]

export function TokenTable({ filter, searchQuery, sortBy, bondingFilter }: TokenTableProps) {
  const [tokens, setTokens] = useState<Token[]>([])

  useEffect(() => {
    // Simulate API call and auto-refresh
    const updateTokens = () => {
      let mockTokens = generateMockTokens()

      if (bondingFilter === "Pre-bond") {
        mockTokens = mockTokens.filter((token) => token.bondingStatus === "Pre-bond")
      } else if (bondingFilter === "Post-bond") {
        mockTokens = mockTokens.filter((token) => token.bondingStatus === "Post-bond")
      }

      // Apply legacy filter for navbar compatibility
      if (filter === "Pre-bond") {
        mockTokens = mockTokens.filter((token) => token.bondingStatus === "Pre-bond")
      } else if (filter === "Post-bond") {
        mockTokens = mockTokens.filter((token) => token.bondingStatus === "Post-bond")
      } else if (filter === "Trending") {
        mockTokens = mockTokens.filter((token) => Math.abs(token.priceChange24h) > 3)
      }

      // Apply search filter
      if (searchQuery) {
        mockTokens = mockTokens.filter(
          (token) =>
            token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            token.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      }

      switch (sortBy) {
        case "Volume":
          mockTokens.sort((a, b) => b.volume24h - a.volume24h)
          break
        case "Market Cap":
          mockTokens.sort((a, b) => b.marketCap - a.marketCap)
          break
        case "Trending":
          mockTokens.sort((a, b) => Math.abs(b.priceChange24h) - Math.abs(a.priceChange24h))
          break
        case "Latest":
        default:
          // Keep original order for "Latest"
          break
      }

      // Add small random price variations to simulate live updates
      mockTokens = mockTokens.map((token) => ({
        ...token,
        price: token.price * (1 + (Math.random() - 0.5) * 0.001),
        priceChange24h: token.priceChange24h + (Math.random() - 0.5) * 0.1,
      }))

      setTokens(mockTokens)
    }

    updateTokens()
    const interval = setInterval(updateTokens, 3000) // Update every 3 seconds

    return () => clearInterval(interval)
  }, [filter, searchQuery, sortBy, bondingFilter])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: price < 1 ? 4 : 2,
    }).format(price)
  }

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e12) return `$${(marketCap / 1e12).toFixed(2)}T`
    if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`
    if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`
    return `$${marketCap.toLocaleString()}`
  }

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary border-b border-border">
            <tr>
              <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Token</th>
              <th className="text-right py-4 px-6 text-sm font-semibold text-foreground">Price</th>
              <th className="text-right py-4 px-6 text-sm font-semibold text-foreground">Market Cap</th>
              <th className="text-right py-4 px-6 text-sm font-semibold text-foreground">24h Volume</th>
              <th className="text-center py-4 px-6 text-sm font-semibold text-foreground">Status</th>
              <th className="text-center py-4 px-6 text-sm font-semibold text-foreground">Action</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token) => (
              <tr key={token.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                <td className="py-4 px-6">
                  <Link href={`/token/${token.id}`} className="flex items-center space-x-3 hover:opacity-80">
                    <img src={token.image || "/placeholder.svg"} alt={token.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="font-semibold text-foreground">{token.name}</div>
                      <div className="text-sm text-muted-foreground">{token.symbol}</div>
                    </div>
                  </Link>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="font-semibold text-foreground">{formatPrice(token.price)}</div>
                  <div
                    className={`text-sm flex items-center justify-end space-x-1 ${
                      token.priceChange24h >= 0 ? "text-chart-1" : "text-chart-5"
                    }`}
                  >
                    {token.priceChange24h >= 0 ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    <span>{Math.abs(token.priceChange24h).toFixed(2)}%</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-right text-foreground font-medium">{formatMarketCap(token.marketCap)}</td>
                <td className="py-4 px-6 text-right text-foreground font-medium">{formatMarketCap(token.volume24h)}</td>
                <td className="py-4 px-6 text-center">
                  <Badge
                    variant={token.bondingStatus === "Post-bond" ? "default" : "secondary"}
                    className={
                      token.bondingStatus === "Post-bond"
                        ? "bg-chart-1 text-white hover:bg-chart-1/90"
                        : "bg-accent text-accent-foreground hover:bg-accent/90"
                    }
                  >
                    {token.bondingStatus}
                  </Badge>
                </td>
                <td className="py-4 px-6 text-center">
                  <Link href={`/token/${token.id}`}>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                      Trade
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {tokens.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">No tokens found matching your criteria.</div>
      )}
    </div>
  )
}

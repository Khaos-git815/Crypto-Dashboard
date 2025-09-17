"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { ArrowLeft, ExternalLink, Copy, TrendingUp, TrendingDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TokenChart } from "@/components/token-chart"
import { TransactionFeed } from "@/components/transaction-feed"
import { TokenTabs } from "@/components/token-tabs"

interface TokenDetail {
  id: string
  name: string
  symbol: string
  image: string
  price: number
  marketCap: number
  totalSupply: number
  holders: number
  creator: string
  priceChange24h: number
  bondingStatus: "Pre-bond" | "Post-bond"
  description: string
}

// Mock token data - in a real app, this would come from an API
const getTokenDetail = (id: string): TokenDetail => {
  const tokens: Record<string, TokenDetail> = {
    "1": {
      id: "1",
      name: "Bitcoin",
      symbol: "BTC",
      image: "/bitcoin-logo.png",
      price: 43250.75,
      marketCap: 847500000000,
      totalSupply: 21000000,
      holders: 45678123,
      creator: "0x1A2B...7F8E",
      priceChange24h: 2.45,
      bondingStatus: "Post-bond",
      description: "The first and most well-known cryptocurrency, created by Satoshi Nakamoto.",
    },
    "2": {
      id: "2",
      name: "Ethereum",
      symbol: "ETH",
      image: "/ethereum-logo.png",
      price: 2650.3,
      marketCap: 318700000000,
      totalSupply: 120280000,
      holders: 98765432,
      creator: "0x3C4D...9A0B",
      priceChange24h: -1.23,
      bondingStatus: "Post-bond",
      description: "A decentralized platform that runs smart contracts and decentralized applications.",
    },
    "3": {
      id: "3",
      name: "Solana",
      symbol: "SOL",
      image: "/solana-logo.png",
      price: 98.45,
      marketCap: 42800000000,
      totalSupply: 511616946,
      holders: 12345678,
      creator: "0x5E6F...1C2D",
      priceChange24h: 5.67,
      bondingStatus: "Pre-bond",
      description: "A high-performance blockchain supporting builders around the world creating crypto apps.",
    },
  }

  return tokens[id] || tokens["1"]
}

export default function TokenDetailPage() {
  const params = useParams()
  const tokenId = params.id as string
  const [token, setToken] = useState<TokenDetail>(getTokenDetail(tokenId))
  const [activeTab, setActiveTab] = useState("Overview")

  useEffect(() => {
    // Simulate real-time price updates
    const interval = setInterval(() => {
      setToken((prev) => ({
        ...prev,
        price: prev.price * (1 + (Math.random() - 0.5) * 0.002),
        priceChange24h: prev.priceChange24h + (Math.random() - 0.5) * 0.1,
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: price < 1 ? 4 : 2,
    }).format(price)
  }

  const formatNumber = (num: number) => {
    if (num >= 1e12) return `${(num / 1e12).toFixed(2)}T`
    if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`
    if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`
    if (num >= 1e3) return `${(num / 1e3).toFixed(2)}K`
    return num.toLocaleString()
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>

              <div className="flex items-center space-x-3">
                <img src={token.image || "/placeholder.svg"} alt={token.name} className="w-12 h-12 rounded-full" />
                <div>
                  <div className="flex items-center space-x-2">
                    <h1 className="text-2xl font-bold text-foreground">{token.name}</h1>
                    <span className="text-lg text-muted-foreground">{token.symbol}</span>
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
                  </div>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="text-3xl font-bold text-foreground">{formatPrice(token.price)}</div>
                    <div
                      className={`flex items-center space-x-1 text-lg font-semibold ${
                        token.priceChange24h >= 0 ? "text-chart-1" : "text-chart-5"
                      }`}
                    >
                      {token.priceChange24h >= 0 ? (
                        <TrendingUp className="w-5 h-5" />
                      ) : (
                        <TrendingDown className="w-5 h-5" />
                      )}
                      <span>{Math.abs(token.priceChange24h).toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Trade {token.symbol}
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <TokenTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {activeTab === "Overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Section */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Price Chart</CardTitle>
                </CardHeader>
                <CardContent>
                  <TokenChart tokenSymbol={token.symbol} />
                </CardContent>
              </Card>
            </div>

            {/* Token Info Card */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Token Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Market Cap</span>
                    <span className="font-semibold text-foreground">${formatNumber(token.marketCap)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Supply</span>
                    <span className="font-semibold text-foreground">{formatNumber(token.totalSupply)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Holders</span>
                    <span className="font-semibold text-foreground">{formatNumber(token.holders)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Creator</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-sm text-foreground">{token.creator}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(token.creator)}
                        className="h-6 w-6 p-0"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>About {token.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{token.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "Transactions" && (
          <div className="max-w-4xl">
            <TransactionFeed tokenSymbol={token.symbol} />
          </div>
        )}

        {activeTab === "Holders" && (
          <div className="max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>Top Holders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">Holder data coming soon...</div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Transaction {
  id: string
  wallet: string
  type: "Buy" | "Sell"
  amount: number
  price: number
  timestamp: Date
  hash: string
}

interface TransactionFeedProps {
  tokenSymbol: string
}

export function TransactionFeed({ tokenSymbol }: TransactionFeedProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    // Generate mock transaction data
    const generateTransactions = () => {
      const txs: Transaction[] = []
      const basePrice = tokenSymbol === "BTC" ? 43000 : tokenSymbol === "ETH" ? 2600 : 95

      for (let i = 0; i < 20; i++) {
        const isRecent = i < 5
        const timestamp = new Date(Date.now() - i * 2 * 60 * 1000) // Every 2 minutes

        txs.push({
          id: `tx-${i}`,
          wallet: `0x${Math.random().toString(16).substr(2, 4).toUpperCase()}...${Math.random().toString(16).substr(2, 4).toUpperCase()}`,
          type: Math.random() > 0.5 ? "Buy" : "Sell",
          amount: Math.random() * 10 + 0.1,
          price: basePrice * (1 + (Math.random() - 0.5) * 0.02),
          timestamp,
          hash: `0x${Math.random().toString(16).substr(2, 8)}`,
        })
      }

      return txs.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    }

    const initialTxs = generateTransactions()
    setTransactions(initialTxs)

    // Add new transactions every 10 seconds
    const interval = setInterval(() => {
      const basePrice = tokenSymbol === "BTC" ? 43000 : tokenSymbol === "ETH" ? 2600 : 95
      const newTx: Transaction = {
        id: `tx-${Date.now()}`,
        wallet: `0x${Math.random().toString(16).substr(2, 4).toUpperCase()}...${Math.random().toString(16).substr(2, 4).toUpperCase()}`,
        type: Math.random() > 0.5 ? "Buy" : "Sell",
        amount: Math.random() * 10 + 0.1,
        price: basePrice * (1 + (Math.random() - 0.5) * 0.02),
        timestamp: new Date(),
        hash: `0x${Math.random().toString(16).substr(2, 8)}`,
      }

      setTransactions((prev) => [newTx, ...prev.slice(0, 19)]) // Keep only 20 transactions
    }, 10000)

    return () => clearInterval(interval)
  }, [tokenSymbol])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: price < 1 ? 4 : 2,
    }).format(price)
  }

  const formatTime = (date: Date) => {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)

    if (diffMins < 1) return "Just now"
    if (diffMins < 60) return `${diffMins}m ago`

    const diffHours = Math.floor(diffMins / 60)
    if (diffHours < 24) return `${diffHours}h ago`

    return date.toLocaleDateString()
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {transactions.map((tx, index) => (
            <div
              key={tx.id}
              className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-300 ${
                index < 3 ? "bg-secondary/30 border-primary/20" : "bg-card border-border"
              } hover:bg-secondary/50`}
            >
              <div className="flex items-center space-x-4">
                <Badge
                  variant={tx.type === "Buy" ? "default" : "destructive"}
                  className={
                    tx.type === "Buy"
                      ? "bg-chart-1 text-white hover:bg-chart-1/90"
                      : "bg-chart-5 text-white hover:bg-chart-5/90"
                  }
                >
                  {tx.type}
                </Badge>

                <div className="flex items-center space-x-2">
                  <span className="font-mono text-sm text-foreground">{tx.wallet}</span>
                  <Button variant="ghost" size="sm" onClick={() => copyToClipboard(tx.wallet)} className="h-6 w-6 p-0">
                    <Copy className="w-3 h-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <div className="font-semibold text-foreground">
                    {tx.amount.toFixed(3)} {tokenSymbol}
                  </div>
                  <div className="text-sm text-muted-foreground">{formatPrice(tx.price)}</div>
                </div>

                <div className="text-right min-w-[80px]">
                  <div className="text-sm text-muted-foreground">{formatTime(tx.timestamp)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

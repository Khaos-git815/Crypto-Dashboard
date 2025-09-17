"use client"

import { useState, useEffect } from "react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface TokenChartProps {
  tokenSymbol: string
}

interface ChartData {
  time: string
  price: number
  timestamp: number
}

export function TokenChart({ tokenSymbol }: TokenChartProps) {
  const [chartData, setChartData] = useState<ChartData[]>([])

  useEffect(() => {
    // Generate mock historical data
    const generateChartData = () => {
      const data: ChartData[] = []
      const now = Date.now()
      const basePrice = tokenSymbol === "BTC" ? 43000 : tokenSymbol === "ETH" ? 2600 : 95

      // Generate 24 hours of data (1 point per hour)
      for (let i = 23; i >= 0; i--) {
        const timestamp = now - i * 60 * 60 * 1000
        const randomVariation = (Math.random() - 0.5) * 0.1
        const price = basePrice * (1 + randomVariation + Math.sin(i / 4) * 0.05)

        data.push({
          time: new Date(timestamp).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          price: Math.max(0, price),
          timestamp,
        })
      }

      return data
    }

    const initialData = generateChartData()
    setChartData(initialData)

    // Update chart data every 30 seconds with new point
    const interval = setInterval(() => {
      setChartData((prev) => {
        const newData = [...prev.slice(1)] // Remove first point
        const lastPrice = prev[prev.length - 1]?.price || 100
        const newPrice = lastPrice * (1 + (Math.random() - 0.5) * 0.02)

        newData.push({
          time: new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          price: Math.max(0, newPrice),
          timestamp: Date.now(),
        })

        return newData
      })
    }, 30000)

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

  return (
    <div className="h-[400px] w-full">
      <ChartContainer
        config={{
          price: {
            label: "Price",
            color: "hsl(var(--primary))",
          },
        }}
        className="h-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
            <XAxis dataKey="time" className="text-muted-foreground" tick={{ fontSize: 12 }} />
            <YAxis
              className="text-muted-foreground"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => formatPrice(value)}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              formatter={(value: number) => [formatPrice(value), "Price"]}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "hsl(var(--primary))" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

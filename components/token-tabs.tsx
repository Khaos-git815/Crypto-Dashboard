"use client"

import { Button } from "@/components/ui/button"

interface TokenTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const tabs = ["Overview", "Transactions", "Holders"]

export function TokenTabs({ activeTab, onTabChange }: TokenTabsProps) {
  return (
    <div className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-1">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "ghost"}
              size="sm"
              onClick={() => onTabChange(tab)}
              className={
                activeTab === tab
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 border-b-2 border-primary rounded-b-none"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary rounded-b-none"
              }
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

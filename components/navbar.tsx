"use client"

import { Button } from "@/components/ui/button"

interface NavbarProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

const filters = ["Latest", "Trending", "Pre-bond", "Post-bond"]

export function Navbar({ activeFilter, onFilterChange }: NavbarProps) {
  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">StreamFun</span>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center space-x-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "ghost"}
                size="sm"
                onClick={() => onFilterChange(filter)}
                className={
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

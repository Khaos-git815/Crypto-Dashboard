"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, ChevronDown } from "lucide-react"

interface FilterBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  sortBy: string
  onSortChange: (sort: string) => void
  bondingFilter: string
  onBondingFilterChange: (filter: string) => void
}

export function FilterBar({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  bondingFilter,
  onBondingFilterChange,
}: FilterBarProps) {
  return (
    <div className="bg-card rounded-lg border border-border p-6 mb-6">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        {/* Left side - Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Search tokens by name or symbol..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-secondary border-border rounded-full h-10 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Right side - Filters */}
        <div className="flex flex-wrap gap-3 items-center">
          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground whitespace-nowrap">Sort by:</span>
            <Select value={sortBy} onValueChange={onSortChange}>
              <SelectTrigger className="w-[140px] bg-secondary border-border rounded-lg h-10 focus:ring-2 focus:ring-primary">
                <SelectValue />
                <ChevronDown className="w-4 h-4 opacity-50" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="Latest" className="hover:bg-secondary">
                  Latest
                </SelectItem>
                <SelectItem value="Trending" className="hover:bg-secondary">
                  Trending
                </SelectItem>
                <SelectItem value="Volume" className="hover:bg-secondary">
                  Volume
                </SelectItem>
                <SelectItem value="Market Cap" className="hover:bg-secondary">
                  Market Cap
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bonding Status Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground whitespace-nowrap">Status:</span>
            <div className="flex bg-secondary rounded-lg p-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onBondingFilterChange("All")}
                className={`px-4 py-2 text-xs font-medium rounded-md transition-all duration-200 ${
                  bondingFilter === "All"
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                All
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onBondingFilterChange("Pre-bond")}
                className={`px-4 py-2 text-xs font-medium rounded-md transition-all duration-200 ${
                  bondingFilter === "Pre-bond"
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                Pre-bond
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onBondingFilterChange("Post-bond")}
                className={`px-4 py-2 text-xs font-medium rounded-md transition-all duration-200 ${
                  bondingFilter === "Post-bond"
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                Post-bond
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

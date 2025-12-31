"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function TravelComponentsDemo() {
  return (
    <div className="space-y-8">
      <StarRatingDemo />
      <h3 className="text-xl font-semibold text-foreground pt-4">Budget Slider Comparison Study</h3>
      <p className="text-sm text-muted-foreground -mt-6 mb-2">
        Exploring different interaction patterns for hotel price filtering
      </p>
      <BudgetSliderDemo />
      <CombinedRangeSliderDemo />
      <InputBasedSliderDemo />
      <SegmentedSliderDemo />
    </div>
  )
}

function StarRatingDemo() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
      <h3 className="text-lg font-semibold mb-3">Interactive Star Rating</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Accessible star rating component with hover states and keyboard navigation
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex gap-1" role="group" aria-label="Rate hotel">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent rounded"
                aria-label={`Rate ${star} stars`}
              >
                <Star
                  className={`h-8 w-8 transition-colors ${
                    star <= (hoverRating || rating) ? "fill-accent text-accent" : "text-muted-foreground"
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">{rating ? `${rating}/5 stars` : "Click to rate"}</span>
        </div>

        <div className="pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            <strong>Features:</strong> ARIA labels, keyboard navigation, hover states, visual feedback
          </p>
        </div>
      </div>
    </Card>
  )
}

function BudgetSliderDemo() {
  const [minPrice, setMinPrice] = useState(80)
  const [maxPrice, setMaxPrice] = useState(250)
  const absoluteMin = 0
  const absoluteMax = 500

  const hotels = [
    { name: "Budget Inn", price: 75, rating: 3.5 },
    { name: "Comfort Suites", price: 120, rating: 4.0 },
    { name: "Grand Hotel", price: 180, rating: 4.5 },
    { name: "Luxury Resort", price: 320, rating: 4.8 },
    { name: "Downtown Stay", price: 95, rating: 3.8 },
  ]

  const filteredHotels = hotels.filter((hotel) => hotel.price >= minPrice && hotel.price <= maxPrice)

  return (
    <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
      <h3 className="text-lg font-semibold mb-3">Budget Range Slider</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Filter hotels by price range with real-time results and accessibility support
      </p>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Price per night</span>
            <span className="font-mono font-semibold text-foreground">
              ${minPrice} - ${maxPrice}
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <label htmlFor="min-price" className="sr-only">
                Minimum price
              </label>
              <input
                id="min-price"
                type="range"
                min={absoluteMin}
                max={absoluteMax}
                value={minPrice}
                onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 10))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>
            <div>
              <label htmlFor="max-price" className="sr-only">
                Maximum price
              </label>
              <input
                id="max-price"
                type="range"
                min={absoluteMin}
                max={absoluteMax}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 10))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium">Available Hotels</p>
            <Badge variant="secondary" className="text-xs">
              {filteredHotels.length} results
            </Badge>
          </div>

          <div className="space-y-2">
            {filteredHotels.map((hotel, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div>
                  <p className="text-sm font-medium">{hotel.name}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(hotel.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">{hotel.rating}</span>
                  </div>
                </div>
                <p className="font-mono text-sm font-semibold">${hotel.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            <strong>Features:</strong> Dual-range filtering, real-time updates, semantic HTML, WCAG compliant
          </p>
        </div>
      </div>
    </Card>
  )
}

function CombinedRangeSliderDemo() {
  const [minPrice, setMinPrice] = useState(80)
  const [maxPrice, setMaxPrice] = useState(250)
  const absoluteMin = 0
  const absoluteMax = 500

  const hotels = [
    { name: "Budget Inn", price: 75, rating: 3.5 },
    { name: "Comfort Suites", price: 120, rating: 4.0 },
    { name: "Grand Hotel", price: 180, rating: 4.5 },
    { name: "Luxury Resort", price: 320, rating: 4.8 },
    { name: "Downtown Stay", price: 95, rating: 3.8 },
  ]

  const filteredHotels = hotels.filter((hotel) => hotel.price >= minPrice && hotel.price <= maxPrice)

  return (
    <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="text-lg font-semibold">Variant 2: Combined Range Track</h4>
          <p className="text-sm text-muted-foreground mt-1">
            Single visual track with dual handles for intuitive range selection
          </p>
        </div>
        <Badge variant="outline" className="text-xs">
          {filteredHotels.length} hotels
        </Badge>
      </div>

      <div className="space-y-6 mt-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Price Range</span>
            <span className="font-mono font-semibold text-accent">
              ${minPrice} - ${maxPrice}
            </span>
          </div>

          <div className="relative pt-6 pb-2">
            <div className="relative h-2 bg-muted rounded-full">
              <div
                className="absolute h-2 bg-accent rounded-full"
                style={{
                  left: `${(minPrice / absoluteMax) * 100}%`,
                  right: `${100 - (maxPrice / absoluteMax) * 100}%`,
                }}
              />
            </div>

            <input
              type="range"
              min={absoluteMin}
              max={absoluteMax}
              value={minPrice}
              onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 10))}
              className="absolute w-full h-2 top-6 appearance-none bg-transparent cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-background [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:transition-transform [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-accent [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-background [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:cursor-grab [&::-moz-range-thumb]:hover:scale-110 [&::-moz-range-thumb]:transition-transform"
              aria-label="Minimum price"
            />

            <input
              type="range"
              min={absoluteMin}
              max={absoluteMax}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 10))}
              className="absolute w-full h-2 top-6 appearance-none bg-transparent cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-background [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:transition-transform [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-accent [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-background [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:cursor-grab [&::-moz-range-thumb]:hover:scale-110 [&::-moz-range-thumb]:transition-transform"
              aria-label="Maximum price"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {filteredHotels.map((hotel, index) => (
            <div key={index} className="flex flex-col p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <p className="text-sm font-medium">{hotel.name}</p>
              <p className="font-mono text-lg font-semibold text-accent mt-1">${hotel.price}</p>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            <strong>UX Benefits:</strong> Visual feedback with highlighted range, overlapping handles, compact design
          </p>
        </div>
      </div>
    </Card>
  )
}

function InputBasedSliderDemo() {
  const [minPrice, setMinPrice] = useState(80)
  const [maxPrice, setMaxPrice] = useState(250)
  const absoluteMin = 0
  const absoluteMax = 500

  const hotels = [
    { name: "Budget Inn", price: 75, rating: 3.5 },
    { name: "Comfort Suites", price: 120, rating: 4.0 },
    { name: "Grand Hotel", price: 180, rating: 4.5 },
    { name: "Luxury Resort", price: 320, rating: 4.8 },
    { name: "Downtown Stay", price: 95, rating: 3.8 },
  ]

  const filteredHotels = hotels.filter((hotel) => hotel.price >= minPrice && hotel.price <= maxPrice)

  const handleMinInput = (value: string) => {
    const num = Number(value)
    if (!isNaN(num)) {
      setMinPrice(Math.max(absoluteMin, Math.min(num, maxPrice - 10)))
    }
  }

  const handleMaxInput = (value: string) => {
    const num = Number(value)
    if (!isNaN(num)) {
      setMaxPrice(Math.min(absoluteMax, Math.max(num, minPrice + 10)))
    }
  }

  return (
    <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="text-lg font-semibold">Variant 3: Input + Slider Hybrid</h4>
          <p className="text-sm text-muted-foreground mt-1">
            Combines slider interaction with direct numeric input for precision
          </p>
        </div>
        <Badge variant="outline" className="text-xs">
          {filteredHotels.length} hotels
        </Badge>
      </div>

      <div className="space-y-6 mt-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="min-input" className="text-xs text-muted-foreground mb-2 block">
              Minimum
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">$</span>
              <input
                id="min-input"
                type="number"
                value={minPrice}
                onChange={(e) => handleMinInput(e.target.value)}
                className="w-full pl-7 pr-3 py-2 bg-muted border border-border rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-accent"
                min={absoluteMin}
                max={maxPrice - 10}
              />
            </div>
          </div>
          <div>
            <label htmlFor="max-input" className="text-xs text-muted-foreground mb-2 block">
              Maximum
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">$</span>
              <input
                id="max-input"
                type="number"
                value={maxPrice}
                onChange={(e) => handleMaxInput(e.target.value)}
                className="w-full pl-7 pr-3 py-2 bg-muted border border-border rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-accent"
                min={minPrice + 10}
                max={absoluteMax}
              />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <input
            type="range"
            min={absoluteMin}
            max={absoluteMax}
            value={minPrice}
            onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 10))}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
            aria-label="Minimum price slider"
          />
          <input
            type="range"
            min={absoluteMin}
            max={absoluteMax}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 10))}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
            aria-label="Maximum price slider"
          />
        </div>

        <div className="space-y-2">
          {filteredHotels.map((hotel, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors text-sm"
            >
              <span className="font-medium">{hotel.name}</span>
              <span className="font-mono font-semibold text-accent">${hotel.price}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            <strong>UX Benefits:</strong> Precise control with keyboard input, accessible for users who prefer typing
            exact values
          </p>
        </div>
      </div>
    </Card>
  )
}

function SegmentedSliderDemo() {
  const [selectedTier, setSelectedTier] = useState("mid-range")

  const priceTiers = [
    { id: "budget", label: "Budget", range: "$0 - $100", min: 0, max: 100 },
    { id: "mid-range", label: "Mid-Range", range: "$100 - $200", min: 100, max: 200 },
    { id: "upscale", label: "Upscale", range: "$200 - $350", min: 200, max: 350 },
    { id: "luxury", label: "Luxury", range: "$350+", min: 350, max: 500 },
  ]

  const hotels = [
    { name: "Budget Inn", price: 75, rating: 3.5 },
    { name: "Comfort Suites", price: 120, rating: 4.0 },
    { name: "Grand Hotel", price: 180, rating: 4.5 },
    { name: "Luxury Resort", price: 320, rating: 4.8 },
    { name: "Downtown Stay", price: 95, rating: 3.8 },
  ]

  const currentTier = priceTiers.find((tier) => tier.id === selectedTier)!
  const filteredHotels = hotels.filter((hotel) => hotel.price >= currentTier.min && hotel.price <= currentTier.max)

  return (
    <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="text-lg font-semibold">Variant 4: Segmented Price Tiers</h4>
          <p className="text-sm text-muted-foreground mt-1">
            Simplified selection with predefined price categories for faster decisions
          </p>
        </div>
        <Badge variant="outline" className="text-xs">
          {filteredHotels.length} hotels
        </Badge>
      </div>

      <div className="space-y-6 mt-6">
        <div
          className="grid grid-cols-2 gap-2 p-1.5 bg-muted rounded-lg"
          role="radiogroup"
          aria-label="Select price tier"
        >
          {priceTiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`px-4 py-3 rounded-md text-sm font-medium transition-all ${
                selectedTier === tier.id
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              role="radio"
              aria-checked={selectedTier === tier.id}
            >
              <div className="font-semibold">{tier.label}</div>
              <div className="text-xs mt-0.5 opacity-90">{tier.range}</div>
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm font-medium">{hotel.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(hotel.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">{hotel.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="font-mono text-sm font-semibold text-accent">${hotel.price}</p>
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-muted-foreground text-sm">No hotels found in this price tier</div>
          )}
        </div>

        <div className="pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            <strong>UX Benefits:</strong> Fastest interaction, clear mental model, ideal for mobile, reduces decision
            fatigue
          </p>
        </div>
      </div>
    </Card>
  )
}

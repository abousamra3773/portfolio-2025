"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, MapPin, X } from "lucide-react"

interface Resort {
  id: string
  name: string
  location: string
  description: string
  image: string
  videoId: string
  tags: string[]
}

const resorts: Resort[] = [
  {
    id: "1",
    name: "Bora Bora Overwater Retreat",
    location: "Bora Bora, French Polynesia",
    description:
      "Surrounded by sand-fringed islets and an outer coral reef that encloses a turquoise lagoon. Stay in overwater bungalow suites with stunning views of Mount Otemanu.",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoId: "6PcJFxZl2BA",
    tags: ["Luxury", "Beach", "Overwater"],
  },
  {
    id: "2",
    name: "Hard Rock Hotel Riviera Maya",
    location: "Riviera Maya, Mexico",
    description:
      "Experience the perfect blend of rock 'n' roll atmosphere and tropical paradise. Enjoy world-class amenities, stunning ocean views, and exclusive access to private beaches.",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoId: "q1CtdxdNNwY",
    tags: ["All-Inclusive", "Beach", "Entertainment"],
  },
  {
    id: "3",
    name: "Singapore Skyline Resort",
    location: "Singapore",
    description:
      "An integrated resort fronting Marina Bay in Singapore. Features the world's largest rooftop Infinity Pool, award-winning dining, and shopping.",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoId: "nHOAkgEB5c0",
    tags: ["Urban", "Luxury", "Rooftop Pool"],
  },
  {
    id: "4",
    name: "Maldives Paradise Villa",
    location: "Maldives",
    description:
      "Private island experience with crystal-clear waters, pristine white beaches, and world-class diving. Each villa features a private pool and direct ocean access.",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoId: "Y6u1pRluRGI",
    tags: ["Private Island", "Diving", "Exclusive"],
  },
]

export function LuxuryResortsDemo() {
  const [selectedResort, setSelectedResort] = useState<Resort | null>(null)

  return (
    <div className="space-y-6">
      {/* Resort Cards Grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {resorts.map((resort) => (
          <Card
            key={resort.id}
            className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            onClick={() => setSelectedResort(resort)}
          >
            {/* Resort Image */}
            <div className="relative aspect-video overflow-hidden bg-muted">
              <img
                src={resort.image || "/placeholder.svg"}
                alt={resort.name}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              {/* Play Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-primary/90 rounded-full p-4">
                  <Play className="h-8 w-8 text-primary-foreground fill-current" />
                </div>
              </div>
              {/* Tags */}
              <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                {resort.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs backdrop-blur-sm bg-background/90">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Resort Info */}
            <div className="p-5 space-y-3">
              <div>
                <h3 className="font-semibold text-lg text-balance leading-tight">{resort.name}</h3>
                <div className="flex items-center gap-1.5 mt-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{resort.location}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{resort.description}</p>

              <Button
                variant="default"
                size="sm"
                className="w-full mt-2"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedResort(resort)
                }}
              >
                Book Now
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Video Modal */}
      {selectedResort && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedResort(null)}
        >
          <div
            className="bg-background rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-background border-b px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h3 className="font-semibold text-xl">{selectedResort.name}</h3>
                <div className="flex items-center gap-1.5 mt-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{selectedResort.location}</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setSelectedResort(null)} aria-label="Close modal">
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Video Player */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedResort.videoId}?autoplay=1`}
                  title={selectedResort.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedResort.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Description */}
              <div>
                <h4 className="font-semibold mb-2">About This Destination</h4>
                <p className="text-muted-foreground leading-relaxed">{selectedResort.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feature Note */}
      <div className="text-center text-sm text-muted-foreground pt-4 border-t">
        <p className="leading-relaxed">
          Interactive resort cards with video modals, responsive grid layout, and smooth animations. Built with
          accessibility in mind using proper ARIA labels and keyboard navigation.
        </p>
      </div>
    </div>
  )
}

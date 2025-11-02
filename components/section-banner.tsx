"use client"
import React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function SectionBanner({
  images,
  heightClass = "h-56 md:h-72",
}: {
  images: string[]
  heightClass?: string
}) {
  if (!images?.length) return null
  return (
    <div className="relative mb-10">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((src) => (
            <CarouselItem key={src}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow">
                <Image
                  src={src}
                  alt="模块横幅"
                  width={1600}
                  height={600}
                  className={`w-full object-cover ${heightClass}`}
                  priority={false}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 md:-left-10 bg-white/80 hover:bg-white" />
        <CarouselNext className="-right-4 md:-right-10 bg-white/80 hover:bg-white" />
      </Carousel>
    </div>
  )
}

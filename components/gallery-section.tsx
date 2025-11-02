"use client"
import Image from "next/image"
import React from "react"

// Simple gallery section to showcase uploaded images with a polished, commercial look
export function GallerySection() {
  // The images are copied into public/gallery
  const images = [
    "1.webp","2.webp","3.webp","4.jpeg","5.jpeg","6.webp","7.jpg","8.jpeg","9.webp","10.webp","12.jpeg","13.webp","14.png","15.jpg",
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-950 via-blue-950/40 to-slate-900 overflow-hidden">
      {/* decorative glow */}
      <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-5xl text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent">
            案例画廊
          </h2>
          <p className="mt-3 text-slate-300/90">
            精选实拍图片，呈现更专业、更具商业气息的形象展示。
          </p>
        </div>

        {/* responsive grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((name) => (
            <figure
              key={name}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg transition-all hover:shadow-cyan-500/30 hover:-translate-y-1"
            >
              <Image
                src={`/gallery/${name}`}
                alt="商业展示图片"
                width={600}
                height={400}
                className="h-40 md:h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority={false}
              />
              {/* subtle gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </figure>
          ))}
        </div>

        {/* call to action */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-purple-500/30 transition-shadow"
          >
            了解更多服务
          </a>
        </div>
      </div>
    </section>
  )
}


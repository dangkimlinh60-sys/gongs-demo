import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Use system fonts to avoid network fetch in dev/build

export const metadata: Metadata = {
  title: "力量集团 - 专业工商财税服务",
  description: "提供公司注册、代理记账、税务服务、审计服务等专业企业服务",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`antialiased font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

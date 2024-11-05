"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site-config"
import { cn } from "@/lib/utils"
import { AppWindowMac } from 'lucide-react'


export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex md:w-full md:justify-between">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <AppWindowMac className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Home
        </Link>
      </nav>
    </div>
  )
}
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteConfig } from '@/config/site-config'
import { cn } from '@/lib/utils'
import { AppWindowMac } from 'lucide-react'
import { Button } from './ui/button'
import { useHeroCtx } from './hero-options'

export function MainNav() {
  const pathname = usePathname()
  const {setToggle, toggle} = useHeroCtx()

  return (
    <div className="mr-4 hidden md:flex md:w-full md:justify-between font-[family-name:var(--font-geist-sans)]">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <AppWindowMac className="h-6 w-6" />
        <span className="hidden font-semibold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {siteConfig.mainNav.map((item, i) => (
          <Link key={i}
            href={item.href}
            className={cn(
              'transition-colors hover:text-foreground/60 capitalize ',
              pathname === '/' ? 'text-foreground' : 'text-foreground/80'
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <Button onClick={() => setToggle(!toggle)} size={'sm'}>cambio</Button>
    </div>
  )
}

import { MainNav } from '@/components/main-nav'
import { MobileNav } from '@/components/mobile-nav'


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="max-w-screen-xl flex h-14 w-full justify-center items-center mx-auto">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  )
}

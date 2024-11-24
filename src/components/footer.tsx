'use client'
import SocialMediaNav from './social-media-nav'

export default function Footer() {
  const copyright = `© ${new Date().getFullYear()} MultiDevOps, Inc. All rights reserved.`
  return (
    <footer className="flex items-center justify-between text-center py-4 border-t container px-4">
      <span className="text-sm whitespace-nowrap">{copyright}</span>
      <SocialMediaNav />
    </footer>
  )
}

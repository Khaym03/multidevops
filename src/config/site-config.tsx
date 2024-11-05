import { Instagram, Facebook, LucideIcon } from 'lucide-react'

export interface MainNavProps {
  name: string
  href: string
}

const mainNav: MainNavProps[] = [
  {
    name: 'servicos',
    href: '/'
  },
  {
    name: 'contactos',
    href: '/#'
  }
]

export interface SocialMedia {
  name: string
  href: string
  icon: LucideIcon
}

const socialMedias: SocialMedia[] = [
  {
    name: 'instangram',
    href: 'https://www.instagram.com/lamediadigitalco/',
    icon: Instagram
  },
  {
    name: 'facebook',
    href: 'https://www.facebook.com/Lamediadigitalco',
    icon: Facebook
  }
]

export const siteConfig = {
  name: 'MultiDevOps',
  description:
    'MultiDevOps es una plataforma que brinda soluciones para la gestión de proyectos de desarrollo de software.',
  socialMedias,
  mainNav
}

export type SiteConfig = typeof siteConfig

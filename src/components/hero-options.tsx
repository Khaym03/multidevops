"use client"
import { createContext, useState, useContext } from 'react'
import Hero from './hero'
import Hero1 from './hero-1'

type HeroContext = {
  toggle: boolean
  setToggle: (value: boolean) => void
}

const HeroCtx = createContext<HeroContext | null>(null)

export const useHeroCtx = () => {
  const context = useContext(HeroCtx)
  if (!context) {
    throw new Error('useHeroCtx must be used within a HeroSwapProvider')
  }
  return context
}



export const HeroSwapProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [toggle, setToggle] = useState(false)

  const values = {
    toggle,
    setToggle
  }

  return <HeroCtx.Provider value={values}>{children}</HeroCtx.Provider>
}

export default function HeroOptions() {
    const { toggle } = useHeroCtx()

  return (
    <>
      {toggle ? <Hero /> : <Hero1 />}
    </>
  )
}

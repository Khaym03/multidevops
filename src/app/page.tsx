// import Automatization from '@/components/automatization'
import BackendSection from '@/components/backend-section'
import FrontendSection from '@/components/frontend-section'
// import DashboardsShowcases from '@/components/dash boards-showcases'
import HeroOptions from '@/components/hero-options'
import Integrations from '@/components/integrations'
import TechStack from '@/components/tech-stack'
import WhatWeDo from '@/components/what-we-do'
import Image from 'next/image'
// import ToolsKit from '@/components/tools-kit'

export default function Home() {
  return (
    <>
      <HeroOptions />

      <WhatWeDo />

      <div className="flex flex-col items-center relative w-full">
        <div className="absolute right-0 bottom-0  w-full h-[800px] overflow-hidden">
          <Image
            className="absolute -left-[75%] top-0 aspect-video w-full"
            src="/ui/blur-yellow.svg"
            alt="blur"
            width={800}
            height={800}
          />
        </div>

        <div className="absolute left-0 -top-28  w-full h-[800px] overflow-hidden">
          <Image
            className="absolute -right-[45%] bottom-0 aspect-video w-full"
            src="/ui/blur-blue.svg"
            alt="blur"
            width={800}
            height={800}
          />
        </div>

        <BackendSection />
        <FrontendSection />

        <Integrations />

        <TechStack />
      </div>
    </>
  )
}

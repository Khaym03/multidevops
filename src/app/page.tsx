// import Automatization from '@/components/automatization'
import BackendSection from '@/components/backend-section'
import FrontendSection from '@/components/frontend-section'
// import DashboardsShowcases from '@/components/dashboards-showcases'
import HeroOptions from '@/components/hero-options'
import Integrations from '@/components/integrations'
import WhatWeDo from '@/components/what-we-do'
// import ToolsKit from '@/components/tools-kit'

export default function Home() {
  return (
    <>
      <HeroOptions />
      <WhatWeDo />
      <BackendSection />
      <FrontendSection />
      {/* <ToolsKit /> */}
      {/* 
      <DashboardsShowcases /> */}
      <Integrations />
    </>
  )
}

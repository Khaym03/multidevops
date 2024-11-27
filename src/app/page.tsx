// import Automatization from '@/components/automatization'
import BackendSection from '@/components/backend-section'
// import DashboardsShowcases from '@/components/dashboards-showcases'
import HeroOptions from '@/components/hero-options'
import Integrations from '@/components/integrations'
// import ToolsKit from '@/components/tools-kit'

export default function Home() {
  return (
    <>
      <HeroOptions />
      <BackendSection />
      {/* <ToolsKit /> */}
      {/* 
      <DashboardsShowcases /> */}
      <Integrations />
    </>
  )
}

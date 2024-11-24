import Automatization from '@/components/automatization'
import DashboardsShowcases from '@/components/dashboards-showcases'
import HeroOptions from '@/components/hero-options'
import Trusted from '@/components/trusted'

export default function Home() {
  return (
    <>
      <HeroOptions />
      {/* <Trusted /> */}
      <Automatization />
      <DashboardsShowcases />
    </>
  )
}

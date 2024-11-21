import { Card } from './ui/card'
import Image from 'next/image'

export default function DashboardsShowcases() {
  return (
    <section className="flex flex-col h-[calc(100vh-3.5rem)] w-full overflow-hidden mt-10">
      <Header />
      <section className="flex flex-start relative gap-8 grow w-full shadow-[inset_0_4px_10px_rgba(255,255,255,0.5)]">
        <div className="flex flex-col gap-8 w-[300px] h-full overflow-hidden">
          <Card className="w-[450px] bg-slate-50">
            <Image
              className=""
              src={'/show-case-2.png'}
              alt="dashboard"
              width={450}
              height={300}
            />
          </Card>
          <Card className="w-full bg-slate-50 overflow-hidden">
            <Image
              className="w-full"
              src={'/show-case-6.png'}
              alt="dashboard"
              width={400}
              height={300}
            />
          </Card>
        </div>

        <div className="flex flex-col gap-8 w-[300px] h-full">
          <Card className="w-full h-full grow bg-slate-50 overflow-hidden">
            <Image
              className="w-full "
              src={'/show-case-mobile.png'}
              alt="dashboard"
              width={400}
              height={300}
            />
          </Card>
        </div>

        <div className="flex flex-col gap-8 w-[500px] h-full">
          <Card className="w-full  bg-slate-50 overflow-hidden">
            <Image
              className="w-full "
              src={'/show-case-la-media.png'}
              alt="dashboard"
              width={400}
              height={300}
            />
          </Card>
          <Card className="w-full grow bg-slate-50 overflow-hidden">
            <Image
              className="w-full h-full"
              src={'/show-case-3.png'}
              alt="dashboard"
              width={300}
              height={400}
            />
          </Card>
        </div>
        <div className="flex flex-col gap-8 w-[300px] h-full">
          <Card className="w-[600px] h-[400px] bg-slate-50 overflow-hidden">
            <Image
              className=""
              src={'/show-case-5.webp'}
              alt="dashboard"
              width={600}
              height={400}
            />
          </Card>
          <Card className="w-full grow bg-slate-50 overflow-hidden">
            <Image
              className="w-full h-full"
              src={'/show-1.avif'}
              alt="dashboard"
              width={300}
              height={400}
            />
          </Card>
        </div>
        <BottomFade/>
      </section>
    </section>
  )
}

function Header() {
  return (
    <div className="flex flex-col items-center justify-center text-left my-8">
      <h3 className="text-4xl font-bold text-balance">
        Muestra de Dashboards y CRMs
      </h3>
    </div>
  )
}

function BottomFade() {
  return (
    <span className="absolute bottom-32 left-0 w-full bg-gradient-to-b from-transparent to-white h-40"></span>
  )
}

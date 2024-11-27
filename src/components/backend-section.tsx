import { CloudCog, SquareTerminal, Webhook } from 'lucide-react'

import { Button } from './ui/button'

export default function BackendSection() {
  return (
    <section className=" py-10 font-[family-name:var(--font-geist-sans)] px-8  rounded-2xl max-w-6xl">
      <div className="grid md:grid-cols-2 lg:gap-8 ">
        {/* Info Area */}

        <div className="flex flex-col max-w-lg">
          <h3 className="text-2xl md:text-5xl font-light ">
            <p>
              El Poder del Desarrollo de{' '}
              <strong className="font-bold"> Backend a Medida</strong>
            </p>
          </h3>
        </div>

        <div className="flex flex-col justify-start items-start  rounded-lg h-full mt-10 md:mt-0 ">
          <p className=" text-slate-600 text-pretty md:text-lg ">
            Soluciones de backend a medida que impulsan tu proyecto. Desde
            arquitecturas escalables hasta API eficientes, transformamos tus
            ideas en realidades digitales. ¡Déjanos llevar tu visión al
            siguiente nivel!
          </p>
          <Button className="mt-8">Descubre</Button>
        </div>
      </div>

      <BackendServices />
    </section>
  )
}

const servicesItems = [
  { name: 'Cloud', icon: CloudCog },
  { name: 'APIs', icon: SquareTerminal },
  { name: 'WebHooks', icon: Webhook }
]

function BackendServices() {
  return (
    <ul className="grid lg:grid-cols-3 gap-8  rounded-lg mt-20 w-full  max-w-6xl">
      {servicesItems.map((item, index) => (
        <li
          key={index}
          className="flex flex-col items-center justify-center py-6 bg-slate-50 rounded-lg aspect-video border"
        >
          <item.icon size={'2.5rem'} className=" mb-2" />
          <h4 className="text-lg ">{item.name}</h4>
        </li>
      ))}
    </ul>
  )
}

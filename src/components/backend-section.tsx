import { CircleCheck } from 'lucide-react'
import Tag from './tag'

const whatWeDoItems = [
  {
    title: 'APIs'
  },
  {
    title: 'Arquitectura SOLID'
  },
  {
    title: 'Sólidas medidas de seguridad'
  },
  {
    title: 'Escalabilidad y flexibilidad'
  }
]

export default function BackendSection() {
  return (
    <section className=" py-10 font-[family-name:var(--font-geist-sans)] px-8  rounded-2xl max-w-6xl">
      <div className="grid md:grid-cols-2 lg:gap-8 ">
        {/* Info Area */}
        <div className="flex flex-col max-w-lg">
          <Tag>Backend</Tag>
          <h3 className="text-2xl md:text-5xl font-light mt-4">
            <p>
              El Poder del Desarrollo de{' '}
              <strong className="font-bold"> Backend a Medida</strong>
            </p>
          </h3>

          <p className=" text-slate-600 text-pretty md:text-lg mt-4">
            Soluciones de backend a medida que impulsan tu proyecto. Desde
            arquitecturas escalables hasta API eficientes, transformamos tus
            ideas en realidades digitales. ¡Déjanos llevar tu visión al
            siguiente nivel!
          </p>

          <ul className="flex flex-col gap-4 mt-6">
            {whatWeDoItems.map((item, index) => (
              <li key={index} className="flex gap-4">
                <CircleCheck />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

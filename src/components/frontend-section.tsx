import { CircleCheck } from 'lucide-react'
import Tag from './tag'

const whatWeDoItems = [
  {
    title: 'Diseño Web Responsivo'
  },
  {
    title: 'SEO'
  },
  {
    title: 'Mejora del rendimiento'
  },
  {
    title: 'SSR'
  }
]

export default function FrontendSection() {
  return (
    <section className=" py-10 font-[family-name:var(--font-geist-sans)] px-8  rounded-2xl max-w-6xl">
      <div className="grid md:grid-cols-2 lg:gap-8 ">
        {/* Info Area */}
        <div className="flex flex-col max-w-lg">
          <Tag>Frontend</Tag>
          <h3 className="text-2xl md:text-5xl font-light mt-4">
            <strong className="font-bold">Desarrollo y modernización </strong>
            <p>de interfaces</p>
          </h3>

          <p className=" text-slate-600 text-pretty md:text-lg mt-4">
            Hoy en día, tener un sitio web es fundamental para mantener la
            relevancia en el mercado y conectar con tus clientes. Para no
            quedarte atrás, es esencial contar con una presencia web sólida.
            Nuestros servicios de desarrollo front-end te ayudarán a lograrlo,
            creando interfaces atractivas y funcionales que cautivan a tus
            usuarios.
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

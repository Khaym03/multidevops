import Tag from './tag'
import Image from 'next/image'

export default function Automatization() {
  return (
    <section className="grid md:grid-cols-2 py-10 font-[family-name:var(--font-geist-sans)] px-4 lg:gap-16">
      {/* Info Area */}
      <div className="grid place-items-center">
        <div className="flex flex-col max-w-lg">
          <Tag>Automatizaciones</Tag>
          <h3 className="text-2xl md:text-5xl font-light mt-4">
            <strong className="font-bold"> Acelera el Crecimiento de</strong>
            <p>tu Negocio con Automatización</p>
          </h3>
          <p className="mt-4 text-slate-600 text-pretty md:text-lg ">
            Automatizar tus procesos no solo ahorra tiempo y reduce errores,
            sino que también permite a tu equipo enfocarse en lo que realmente
            importa: hacer crecer tu negocio. Con nuestras soluciones
            personalizadas, transformarás la eficiencia de tu empresa.
          </p>
        </div>
      </div>

      {/* Picture section */}

      <div className="flex justify-center items-center bg-slate-50 rounded-lg h-full">
        {' '}
        <Image
          src="/woman-testing.svg"
          alt="a woman testing"
          width={300}
          height={300}
        />{' '}
      </div>
    </section>
  )
}

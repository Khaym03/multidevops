// import Image from 'next/image'
export default function Automatization() {
  return (
    <section className="grid md:grid-cols-2 py-10 font-[family-name:var(--font-geist-sans)] px-4">
      {/* Info Area */}
      <div className="grid place-items-center">
        <div className="flex flex-col max-w-lg">
          <span className="text-primary text-sm px-4 py-1 rounded-full bg-primary/10 text-center w-min">
            Automatizaciones
          </span>
          <h3 className="text-2xl font-medium mt-4">
            Automatiza tus procesos
          </h3>
          <p className="mt-4 text-slate-600 text-pretty ">
            Automatizar o computarizar tus procesos no solo ahorra tiempo, sino
            que también reduce errores y mejora la productividad. Imagina poder
            delegar tareas repetitivas a sistemas inteligentes que trabajen por
            ti, permitiéndote centrarte en lo que realmente importa hacer crecer
            tu negocio.
          </p>
        </div>
      </div>

      {/* Picture section */}
      <div className="px-4">
        {/* <Image
            src="/woman-testing.svg"
            alt="a woman testing"
            width={300}
            height={300}
          /> */}
        
        <div className="bg-slate-100 rounded-lg w-full h-full"> {" "}</div>
      </div>
    </section>
  )
}

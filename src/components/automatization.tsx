import Image from 'next/image'
export default function Automatization() {
  return (
    <section className="flex justify-center items-center w-full py-10">
      <div className="grid grid-cols-4 container items-center justify-items-center  font-[family-name:var(--font-geist-sans)] px-4 ">
        <div className="col-start-1 col-end-3 flex flex-col items-center justify-center gap-8 text-left  h-full">
          <div className="font-medium text-primary text-lg w-full">
            Automatizaciones
          </div>
          <h1 className="text-4xl font-bold text-balance text-left w-full">
            Automatiza tus procesos
          </h1>
          <p className="text-base text-foreground/60 text-balance font-medium">
            Automatizar o computarizar tus procesos no solo ahorra tiempo, sino
            que también reduce errores y mejora la productividad. Imagina poder
            delegar tareas repetitivas a sistemas inteligentes que trabajen por
            ti, permitiéndote centrarte en lo que realmente importa hacer
            crecer tu negocio.
          </p>
        </div>

        <div className="flex justify-center items-center col-start-3 col-end-6 w-full h-full overflow-hidden ">
          <Image
            src="/woman-testing.svg"
            alt="a woman testing"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  )
}

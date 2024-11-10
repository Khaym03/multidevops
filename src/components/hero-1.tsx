// import Image from 'next/image'
import { Button } from './ui/button'

export default function Hero1() {
  return (
    <section className="w-full flex flex-col justify-center items-center min-h-[calc(100vh-3.5rem)]">
      <div className="grid grid-cols-4 container items-center justify-items-center   font-[family-name:var(--font-geist-sans)] px-4 ">
        <div className="col-start-1 col-end-6 flex flex-col items-center justify-center gap-8 text-center h-full">
          <h1 className="text-6xl font-bold text-balance">
            Impulsa la Transformación Digital de Tu Negocio con MultiDevOps
          </h1>
          <p className="text-lg text-foreground/60 text-balance">
            Transforma tu negocio con MultiDevOps. Ofrecemos soluciones
            personalizadas en desarrollo web, gestión de bases de datos y
            automatización de procesos para optimizar tu operación.
          </p>

          <div className="flex justify-center items-center w-full">
            <Button>call to action</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

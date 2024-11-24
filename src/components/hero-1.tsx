// import Image from 'next/image'
import Trusted from './trusted'
import { Button } from './ui/button'

export default function Hero1() {
  return (
    <section className="w-full flex flex-col justify-center items-center min-h-[calc(100vh-3.5rem)]">
      <div className="grid grid-cols-4 container items-center justify-items-center   font-[family-name:var(--font-geist-sans)] px-4 relative">
        <div className="col-start-1 col-end-6 flex flex-col items-center justify-center gap-8 text-center h-full">
          <h1 className="text-2xl md:text-7xl font-light">
            <p>
              {'Soluciones '}
              <span className="bg-yellow-400 ">Personalizadas</span>
              {' en'}
            </p>
            <p>
              <strong className="md:text-8xl tracking-tighter font-bold">
                Desarrollo de Software
              </strong>
            </p>
          </h1>
          <p className="md:text-2xl max-w-[50rem] mx-auto text-foreground/90 text-balance">
            Transforma tu negocio con MultiDevOps. Ofrecemos soluciones
            personalizadas en desarrollo web, gestión de bases de datos y
            automatización de procesos para optimizar tu operación.
          </p>

          <div className="flex justify-center items-center gap-4 w-full">
            <Button>contáctenos</Button>
            <Button className="border-primary border-2" variant={'outline'}>
              descubre
            </Button>
          </div>
        </div>
      </div>
      <div className='mt-8 hidden md:block md:mt-16 mx-auto'>
        <Trusted />
      </div>
    </section>
  )
}

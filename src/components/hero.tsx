import Image from 'next/image'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <div className="grid grid-cols-4 container items-center justify-items-center min-h-[calc(100vh-3.5rem)]  font-[family-name:var(--font-geist-sans)] px-4">
      <div className="col-start-1 col-end-3 flex flex-col items-center justify-center gap-8 text-left h-full">
        <h1 className="text-6xl font-bold text-balance">
          ¡Transforma tu forma de trabajar y lleva tus proyectos al siguiente
          nivel! 💻✨
        </h1>
        <p className="text-base text-foreground/60 text-balance">
          En MultiDevOps, facilitamos la **transformación tecnológica** de tu
          negocio. Ofrecemos soluciones personalizadas para el desarrollo de
          **páginas web**, gestión de **bases de datos** y **automatizaciones**
          que optimizan tus procesos.
        </p>

        <div className='flex flex-start w-full'>
          <Button>call to action</Button>
        </div>
      </div>

      <div className="flex justify-center items-center col-start-3 col-end-6 w-full h-full overflow-hidden ">
        <Image
          src={'/Programmer-amico.svg'}
          alt="programmer-amico"
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}

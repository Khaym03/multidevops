import Image from 'next/image'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <div className="grid grid-cols-4 container items-center justify-items-center min-h-[calc(100vh-3.5rem)]  font-[family-name:var(--font-geist-sans)] px-4">
      <div className="col-start-1 col-end-3 flex flex-col items-center justify-center gap-8 text-left h-full">
        <h1 className="text-6xl font-bold text-balance">
          Impulsa la Transformación Digital de Tu Negocio con MultiDevOps
        </h1>
        <p className="text-base text-foreground/60 text-balance">
          Transforma tu negocio con MultiDevOps. Ofrecemos soluciones
          personalizadas en desarrollo web, gestión de bases de datos y
          automatización de procesos para optimizar tu operación.
        </p>

        <div className="flex flex-start gap-2 w-full">
          <Button>contáctenos</Button>
          <Button className='border-primary border-2' variant={'outline'}>descubre</Button>
        </div>
      </div>

      <div className="flex justify-center items-center col-start-3 col-end-6 w-full h-full overflow-hidden relative z-10">
        {/* <span className="w-[200px] h-[200px] absolute bg-gradient-to-r from-[#006FE6] to-[#FFD700] rounded-full filter blur-2xl opacity-40"></span> */}
        <Image
          src={'/coding-frame.svg'}
          alt="programmer-amico"
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}

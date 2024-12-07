// import { url } from 'inspector'
// import { title } from 'process'
// import { Card, CardTitle } from './ui/card'
// import { Button } from '@/components/ui/button'
// import { ChevronRight } from 'lucide-react'
// import Image from 'next/image'



export default function WhatWeDo() {
  return (
    <section className="flex flex-col justify-center items-center py-6  w-full mb-8">
      <div className="flex max-w-6xl rounded-xl p-6  gap-16 relative">
        <div className="flex flex-col text-center max-w-4xl">
          <h3 className="text-2xl md:text-5xl font-bold ">¿Qué hacemos?</h3>
          <p className="mt-4 text-base md:text-xl lg:text-2xl max-w-[45rem] mx-auto text-foreground/90 ">
            La adopción de soluciones digitales puede transformar la forma en
            que las empresas interactúan con sus consumidores, impulsar la
            creatividad en el desarrollo de nuevos servicios y optimizar la
            eficiencia operativa, lo que se traduce en un crecimiento sostenible
            y una mayor satisfacción del cliente.
          </p>

          {/* <ul className="grid grid-cols-2 gap-4 gap-x-8  mt-8">
            {whatWeDoItems.map((item, index) => (
              <li key={index} className="flex justify-start">
                <Button
                  className="group flex justify-start h-auto gap-4 py-3 text-left w-full"
                  variant="outline"
                >
                  <div className="space-y-1">
                    <h3>{item.title}</h3>
                  </div>
                  <ChevronRight
                    className="opacity-60 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Button>
              </li>
            ))}
          </ul> */}
        </div>

        {/* <Image
          className=" aspect-video rounded-lg"
          src={'/py-code.jpg'}
          alt="PyCode"
          width={400}
          height={300}
        /> */}
      </div>
    </section>
  )
}

// Dependencies: pnpm install lucide-react

import Image from 'next/image'

export default function TechTransform() {
  return (
    <section className="flex justify-center items-center w-full py-20">
      <div className="grid grid-cols-4 container items-center justify-items-center  font-[family-name:var(--font-geist-sans)] px-4 ">
        <div className="col-start-1 col-end-3 flex flex-col items-center justify-center gap-8 text-left  h-full">
          <div className="font-medium text-primary text-lg w-full">
            Acerca de MultiDevOps
          </div>
          <h1 className="text-4xl font-bold text-balance">
            Estamos aumentando el éxito empresarial con la tecnología
          </h1>
          <p className="text-base text-foreground/60 text-balance">
            transformamos tus procesos manuales en soluciones digitales
            efectivas. Nuestro objetivo es optimizar tu negocio a través de la
            automatización y la innovación tecnológica. ¡Descubre cómo podemos
            ayudarte a alcanzar nuevos niveles de eficiencia y éxito!
          </p>
        </div>

        <div className="flex justify-center items-center col-start-3 col-end-6 w-full h-full overflow-hidden ">
          <Image
            src="/Developer activity-rafiki.svg"
            alt="guy coding"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}

import IntegrationsCol from './integrations-col'
import Tag from './tag'

const integrations = [
  {
    name: 'Meta',
    description: 'Plataforma para crear y gestionar contenidos fácilmente.',
    image: '/LogosMetaIcon.svg'
  },
  {
    name: 'PayPal',
    description:
      'Plataforma de pagos en línea para procesar pagos de forma segura.',
    image: '/LogosPaypal.svg'
  },
  {
    name: 'Stripe',
    description: 'Permite a tus clientes pagar de manera rápida y segura.',
    image: '/LogosStripe.svg'
  },
  {
    name: 'Calendar',
    description:
      'Herramienta para organizar y gestionar eventos eficientemente.',
    image: '/LogosGoogleCalendar.svg'
  },
  {
    name: 'Google Drive',
    description:
      'Almacenamiento en la nube para compartir archivos fácilmente.',
    image: '/LogosGoogleDrive.svg'
  },
  {
    name: 'Google Maps',
    description: 'Herramienta de mapas para visualizar y explorar el mundo.',
    image: '/LogosGoogleMaps.svg'
  }
]

export type IntegrationType = typeof integrations

export default function Integrations() {
  return (
    <section className="grid lg:grid-cols-2 lg:gap-16 py-24 items-center  px-4 relative overflow-hidden max-w-6xl">
      <div className="max-w-lg">
        <Tag>Integrations</Tag>
        <h3 className="text-2xl md:text-5xl font-light mt-4">
          <strong className="font-bold">Potencia Tu Proyecto</strong>{' '}
          <p>con Integraciones de</p>
          Servicios Externos
        </h3>
        <p className="mt-4 text-slate-600 text-pretty md:text-lg">
          Transforma tu proyecto al integrar potentes herramientas como Google
          Suite y PayPal, optimizando procesos y elevando la experiencia del
          usuario al siguiente nivel.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 max-w-lg h-[400px] lg:h-[600px] mt-8 lg:mt-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <IntegrationsCol integrations={integrations} />
        <IntegrationsCol
          integrations={integrations.slice().reverse()}
          className="hidden md:flex"
          reverse
        />
      </div>
    </section>
  )
}

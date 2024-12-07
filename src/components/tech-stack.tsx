import Image from 'next/image'

const techStack = [
  {
    name: '.NET',
    image: '/icons/tech/mono/dotnet.svg'
  },
  {
    name: 'GO',
    image: '/icons/tech/mono/go.svg'
  },
  {
    name: 'Python',
    image: '/icons/tech/mono/python.svg'
  },
  {
    name: 'PostgreSQL',
    image: '/icons/tech/mono/postgres.svg'
  },
  {
    name: 'React',
    image: '/icons/tech/mono/react.svg'
  },
  {
    name: 'Next.js',
    image: '/icons/tech/mono/next.svg'
  },
  {
    name: 'Tailwind',
    image: '/icons/tech/mono/tailwind.svg'
  },
  {
    name: 'Framer Motion',
    image: '/icons/tech/mono/framer-motion.svg'
  }
]

type TechStackProps = typeof techStack

export default function TechStack() {
  return (
    <section className="py-10  max-w-6xl  px-8 relative">
      <div className="rounded-2xl p-6 w-full">
        {/* <Tag>Tecnologías</Tag> */}
        <h3 className="text-2xl md:text-4xl font-light text-center text-black/80 mt-4">
          Estas son algunas de las tecnologías que utilizamos
        </h3>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <TechRow items={techStack.slice(0, 4)} />
          <TechRow items={techStack.slice(4, 8)} />
        </div>
      </div>
    </section>
  )
}

function TechRow({ items }: { items: TechStackProps }) {
  return (
    <ul className="flex gap-8 md:gap-16 items-center justify-center mt-12">
      {items.map(item => (
        <li key={item.image} className="grid place-items-center">
          <Image
            src={item.image}
            alt={item.name}
            className="w-12 h-12 md:w-14 md:h-14"
            width={50}
            height={50}
          />
        </li>
      ))}
    </ul>
  )
}

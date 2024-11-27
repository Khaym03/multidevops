

export const frontEnd = [
  {
    name: 'React',
    image: '/icons/tech/React.svg'
  },
  {
    name: 'Nextjs',
    image: '/icons/tech/Nextjs.svg'
  },
  {
    name: 'Tailwind',
    image: '/icons/tech/Tailwind.svg'
  },
  {
    name: 'Framer Motion',
    image: '/icons/tech/FramerMotion.svg'
  },
]



export default function ToolsKit() {
  return (
    <section className="grid lg:grid-cols-2 lg:gap-16 py-24 items-center overflow-hidden px-4 bg-slate-100 w-full">
      <div className='flex flex-col w-full'>
        <h3 className="text-2xl md:text-5xl font-light mt-4">
          Backends hechos con <strong className='font-bold'>tegnologías modernas</strong>
        </h3>

        {/* <BackendGrp /> */}
      </div>
    </section>
  )
}



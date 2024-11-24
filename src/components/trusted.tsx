import Image from 'next/image'

const svgSize = 100 

export default function Trusted() {
  return (
    <div className='flex flex-col justify-center items-center max-w-screen-xl mx-auto px-5'>
      <h1 className='text-center text-slate-500'>Con la confianza de startups populares que conoces</h1>

      <ul className="flex gap-x-8 gap-y-4 md:gap-20 lg:gap-28 items-center justify-center mt-6 flex-wrap">
        <li>
          <Image
            className="text-gray-500 my-2 h-7 md:h-9"
            src="/aware-5.svg"
            alt="aware"
            width={svgSize}
            height={svgSize}
          />
        </li>
        <li>
          <Image
            className="text-gray-500 my-2 h-7 md:h-9"
            src="/avia-1.svg"
            alt="avia"
            width={svgSize}
            height={svgSize}
          />
        </li>
        <li>
          <Image
            className="text-gray-500 my-2 h-7 md:h-9"
            src="/feedfall-2.svg"
            alt="feedfall-2"
            width={svgSize}
            height={svgSize}
          />
        </li>
        <li>
          <Image
            className="text-gray-500 my-2 h-7 md:h-9"
            src="/deltabase-1.svg"
            alt="deltabase-1"
            width={svgSize}
            height={svgSize}
          />
        </li>
      </ul>
    </div>
  )
}

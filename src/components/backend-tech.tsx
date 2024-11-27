import Image from 'next/image'

export const backend = [
  {
    name: 'Nodejs',
    image: '/icons/tech/Nodejs.svg'
  },
  {
    name: '.NET',
    image: '/icons/tech/Dotnetcore.svg'
  },
  {
    name: 'golang',
    image: '/icons/tech/Golang.svg'
  }
]

export default function BackendTech() {
  return (
    <ul className="flex gap-8 mt-8">
      {backend.map(item => (
        <li key={item.image}>
          <Image src={item.image} alt={item.name} width={50} height={50} />
        </li>
      ))}
    </ul>
  )
}

export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-primary text-sm px-4 py-1 rounded-full bg-primary/10 text-center w-min">
      {children}
    </span>
  )
}

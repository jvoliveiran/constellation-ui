type Props = {
  children: React.ReactNode
}

export default function Center({ children }: Props) {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      {children}
    </div>
  )
}
/**
 * Generated with v0 by Vercel. (https://v0.dev/t/MqW2cIkwT16)
 */

export interface BodyProps {
  children?: React.ReactNode
}

export default function Body({ children }: BodyProps) {
  return (
    <main className="w-full flex-1 px-4 py-12 md:px-6 md:pb-20 lg:pb-28">
      <div className="container grid gap-8">{children}</div>
    </main>
  )
}

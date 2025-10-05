/**
 * Generated with v0 by Vercel. (https://v0.dev/t/MqW2cIkwT16)
 */

import { cn } from '@/lib/utils'

export interface SectionProps {
  children?: React.ReactNode
  title: string
}

export default function Section({ children, title }: SectionProps) {
  return (
    <section className={cn('mb-3 md:mb-5 lg:mb-7')}>
      <h2 className={cn('text-3xl font-bold tracking-tighter text-foreground')}>{title}</h2>
      {children}
    </section>
  )
}

/**
 * Generated with v0 by Vercel. (https://v0.dev/t/MqW2cIkwT16)
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export interface ExperienceProps {
  children?: React.ReactNode
  company: string
  duration: string
  title: string
}

export default function Experience({ children, company, duration, title }: ExperienceProps) {
  return (
    <Card className={cn('mt-4')}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {company} | {duration}
        </CardDescription>
      </CardHeader>
      {children ? <CardContent>{children}</CardContent> : null}
    </Card>
  )
}

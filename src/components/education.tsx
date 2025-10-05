/**
 * Generated with v0 by Vercel. (https://v0.dev/t/MqW2cIkwT16)
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export interface EducationProps {
  children?: React.ReactNode
  completed: string
  organization: string
  title: string
}

export default function Education({ children, completed, organization, title }: EducationProps) {
  return (
    <Card className={cn('mt-4')}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {organization} | {completed}
        </CardDescription>
      </CardHeader>
      {children ? <CardContent>{children}</CardContent> : null}
    </Card>
  )
}

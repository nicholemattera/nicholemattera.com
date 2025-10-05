/**
 * Generated with v0 by Vercel. (https://v0.dev/t/MqW2cIkwT16)
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export interface CertificateProps {
  children?: React.ReactNode
  expires?: string
  expired?: string
  issued: string
  title: string
}

export default function Certificate({ children, expires, expired, issued, title }: CertificateProps) {
  return (
    <Card className={cn('mt-4')}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Issued {issued}
          {(expires && ` | Expires ${expires}`) || (expired && ` | Expired ${expired}`)}
        </CardDescription>
      </CardHeader>
      {children ? <CardContent>{children}</CardContent> : null}
    </Card>
  )
}

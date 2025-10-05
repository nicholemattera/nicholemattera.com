/**
 * Generated with v0 by Vercel. (https://v0.dev/t/MqW2cIkwT16)
 */

import { useId } from 'react'

export interface HeroProps {
  children?: React.ReactNode
  title: string
  description: string
  image: string
  imageSet: string
}

export default function Hero({ children, title, description, image, imageSet }: HeroProps) {
  const titleId = useId()

  return (
    <header className="w-full bg-primary py-12 md:py-20 lg:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1
                id={titleId}
                className="text-center text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl lg:text-left xl:text-6xl/none">
                {title}
              </h1>
              <p className="text-center text-primary-foreground/80 md:text-xl lg:max-w-[600px] lg:text-left">
                {description}
              </p>
              {children}
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={image}
              srcSet={imageSet}
              width="400"
              height="400"
              aria-labelledby={titleId}
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

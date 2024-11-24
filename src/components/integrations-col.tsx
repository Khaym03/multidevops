'use client'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle
} from './ui/card'
import { type IntegrationType } from './integrations'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Fragment } from 'react'

export default function IntegrationsCol({
  integrations,
  className,
  reverse
}: {
  integrations: IntegrationType
  className?: string
  reverse?: boolean
}) {
  return (
    <motion.div
      initial={{ y: reverse ? '-50%' : 0 }}
      animate={{ y: reverse ? 0 : '-50%' }}
      transition={{
        duration: 45,
        repeat: Infinity,
        ease: 'linear'
      }}
      className={cn('flex flex-col gap-4 pb-4', className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map((item, i) => (
            <Card key={i}>
              <CardContent className="flex justify-center pt-6">
                <Image
                  className="aspect-square size-24 rounded-3xl"
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-4 justify-start items-start">
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardFooter>
            </Card>
          ))}
        </Fragment>
      ))}
    </motion.div>
  )
}

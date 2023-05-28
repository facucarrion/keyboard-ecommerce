'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

export default function ChakraProviders({ children }: Props) {
  return (
    <ChakraProvider>
      <CacheProvider>{children}</CacheProvider>
    </ChakraProvider>
  )
}

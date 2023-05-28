import { Header } from '@/components/Header'
import ChakraProviders from '@/contexts/Chakra.context'

export const metadata = {
  title: 'QUERTY Keyboards',
  description: 'E-commerce website for QUERTY keyboards'
}
interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>
        <ChakraProviders>
          <Header />
          {children}
        </ChakraProviders>
      </body>
    </html>
  )
}

import { Header } from '@/components/Header'
import AuthProvider from '@/contexts/Auth.context'
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
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </ChakraProviders>
      </body>
    </html>
  )
}

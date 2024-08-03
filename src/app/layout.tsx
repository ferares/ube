import type { Metadata } from 'next'
import { Open_Sans, EB_Garamond } from 'next/font/google'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/styles/main.css'

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })
const garamond = EB_Garamond({ subsets: ['latin'], variable: '--font-garamond' })

export const metadata: Metadata = {
  title: 'Diccionario Urbano',
  description: 'Diccionario Urbano',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${openSans.variable} ${garamond.variable}`} lang='es'>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import './globals.css'
import { Providers } from '@/components/Providers'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Víctor Prado Trujillo | Full Stack Developer',
  description: 'Soy Víctor un desarrollador de software con experiencia en el desarrollo de aplicaciones web y móviles.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <main className='w-full overflow-x-hidden bg-gradient-to-r from-slate-50 to-gray-300 dark:bg-gradient-to-r dark:from-zinc-950 dark:to-slate-800'>
            <Header />
            <section className='mt-12 md:my-16'>
              {children}
            </section>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}

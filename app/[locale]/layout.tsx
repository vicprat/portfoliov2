import './globals.css'
import { Providers } from '@/components/Providers'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }]
}

const inter = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Victor Prado Trujillo | Full Stack Web Developer',
  description: 'Soy Víctor un desarrollador de software con experiencia en el desarrollo de aplicaciones web y móviles.'
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}): JSX.Element {
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>

          <Providers>
            <main className='w-full overflow-x-hidden bg-gradient-to-r from-slate-50 to-gray-300 dark:bg-gradient-to-r dark:from-zinc-950 dark:to-slate-800'>
              <Header />
              <section className='mt-12 md:my-16'>
                {children}
              </section>
              <Footer />
            </main>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

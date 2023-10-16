import { Proyects } from '@/components/Proyects'
import { Container } from '@/components/Container'
import { ContactForm } from '@/components/ContactForm'
import { useTranslations } from 'next-intl'

import { getProjects } from '@/services'

export const dynamic = 'force-dynamic'

function Banner () {
  const t = useTranslations('ProjectsPage')
  return (
    <>
      <div className='my-8 xl:mx-auto xl:max-w-7xl xl:px-8'>
        <img
          src='https://media.graphassets.com/BliIEsBrTTeOPNTWs2FP?_gl=1*2yp5uz*_ga*ODgyNzA2NTU0LjE2ODk5NjQ5NDc.*_ga_G6FYGSYGZ4*MTY5Mjc1OTYzNy4yNi4xLjE2OTI3NjAxNzQuNjAuMC4w'
          alt='Banner'
          className='aspect-[5/2] w-full object-cover rounded-xl xl:rounded-3xl'
        />
      </div>
      <div className='my-12 md:text-center'>
        <p className='my-4 text-2xl font-bold tracking-tight md:text-3xl text-zinc-800 dark:text-zinc-100 sm:text-4xl'>
          {t('title')}
        </p>
        <p className='my-8 leading-8 text-md md:text-lg text-zinc-600 dark:text-zinc-400'>
          {t('subtitle')}
        </p>
      </div>
    </>
  )
}
export default async function page (): Promise<JSX.Element> {
  const projects = await getProjects()
  return (
    <section>

      <Container className='py-8 sm:py-12'>
        <Banner />

        {/* <div className="my-12 md:text-center">

                    <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                        Echa un vistazo a mi portafolio de proyectos y servicios.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        Explora mis proyectos y servicios, y si te gusta lo que ves, no dar click en alguno para que puedas verlo en vivo. Conoce la funcionalidad y el diseño de cada uno de ellos.
                    </p>
                </div>
                <div className="my-12 md:my-24 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <img
                        src='https://media.graphassets.com/VxumbNjsQFuKtdI9dyFG?_gl=1*1txalyj*_ga*ODgyNzA2NTU0LjE2ODk5NjQ5NDc.*_ga_G6FYGSYGZ4*MTY5MjcyMjU0My4yNC4xLjE2OTI3MjI1NTkuNDQuMC4w'
                        alt="contributions graph"
                        className="aspect-[5/2] w-full object-cover rounded-xl xl:rounded-3xl"
                    />
                </div> */}

        <Proyects projects={projects} />
        <div className='my-24'>
          <ContactForm />
        </div>
      </Container>
    </section>
  )
}

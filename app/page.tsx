import Link from 'next/link'
import { Container } from '../components/Container'
import { HeroSection, CallToAction, FeatureList } from '../components/Home'
import { LogoClouds } from '../components/LogoClouds'
import { ContactForm } from '../components/ContactForm'
import { Resume } from '../components/Resume'
import { Proyects } from '../components/Proyects'
import { ScrollReveal } from '../components/ScrollReveal'
import FeaturedPosts from '../components/FeaturedPosts'
import { AnimatedBg } from '../components/AnimatedBg'
import { getProjects, getExperiences } from '@/services'

export const revalidate = 60
export default async function Home (): Promise<JSX.Element> {
  const projects = await getProjects()
  const experiences = await getExperiences()

  return (
    <main>
      <HeroSection />
      <CallToAction />
      <AnimatedBg>
        <ScrollReveal>
          <Container className='py-12'>
            <div className='grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2 md:gap-x-12'>
              <div className='flex items-center justify-center space-y-10'>
                <Resume experiences={experiences} />
              </div>
              <div className='flex flex-col justify-start '>
                <h2 className='mb-8 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl'>
                  Post Destacados
                </h2>
                <FeaturedPosts />
                <Link href='/blog' className='text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100 hover:text-zinc-500 dark:hover:text-zinc-300'>
                  más posts <span aria-hidden='true'>→</span>
                </Link>
              </div>
            </div>
          </Container>
        </ScrollReveal>
      </AnimatedBg>
      <LogoClouds />
      <div className='w-full mx-auto max-w-7xl lg:px-8'>
        <ScrollReveal>
          <Container className='py-8 sm:py-12'>
            <div className='md:text-center'>
              <p className='my-12 text-2xl font-bold tracking-tight md:text-3xl text-zinc-800 dark:text-zinc-100 sm:text-4xl'>
                Conoce mis proyectos más recientes y descubre cómo puedo ayudarte a crear tu próximo producto digital.
              </p>
              <Proyects projects={projects} />
            </div>
          </Container>
        </ScrollReveal>
      </div>
      <FeatureList />
      <ContactForm />
    </main>
  )
}

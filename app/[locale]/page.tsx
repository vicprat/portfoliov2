import { getProjects, getExperiences, getFeaturedPosts } from '@/services'
import { getFeaturedPostsEng, getExperiencesEng } from '@/services/schemas'

import { Container } from '@/components/Container'
import { HeroSection, CallToAction, FeatureList } from '@/components/Home'
import { LogoClouds } from '@/components/LogoClouds'
import { ContactForm } from '@/components/ContactForm'
import { Resume } from '@/components/Resume'
import { Proyects } from '@/components/Proyects'
import { ScrollReveal } from '@/components/ScrollReveal'
import FeaturedPosts from '@/components/FeaturedPosts'
import { AnimatedBg } from '@/components/AnimatedBg'

export const dynamic = 'force-dynamic'
export default async function Home (): Promise<JSX.Element> {
  const projects = await getProjects()
  const experiences = await getExperiences()
  const experiencesEng = await getExperiencesEng()
  const featuredPosts = await getFeaturedPosts()
  const featuredPostsEng = await getFeaturedPostsEng()

  return (
    <main>
      <HeroSection />
      <CallToAction />
      <AnimatedBg>
        <ScrollReveal>
          <Container className='py-12'>
            <div className='grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2 md:gap-x-12'>
              <div className='flex items-center justify-center space-y-10'>
                <Resume experiences={experiences} experiencesEng={experiencesEng} />
              </div>
              <FeaturedPosts featuredPosts={featuredPosts} featuredPostsEng={featuredPostsEng} />
            </div>
          </Container>
        </ScrollReveal>
      </AnimatedBg>
      <LogoClouds />
      <div className='w-full mx-auto max-w-7xl lg:px-8'>
        <ScrollReveal>
          <Container className='py-8 sm:py-12'>
            <Proyects projects={projects} />
          </Container>
        </ScrollReveal>
      </div>
      <FeatureList />
      <ContactForm />
    </main>
  )
}

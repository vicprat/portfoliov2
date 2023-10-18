import React from 'react'
import { getAuthors, getExperiences } from '@/services'
import { getAuthorsEng, getExperiencesEng } from '@/services/schemas'
import { Container } from '@/components/Container'
import { AnimatedBg } from '@/components/AnimatedBg'
import { AboutInfo } from '@/components/AboutInfo'

export const dynamic = 'force-dynamic'
export default async function page (): Promise<JSX.Element> {
  const authors = await getAuthors()
  const authorsEng = await getAuthorsEng()
  const experiences = await getExperiences()
  const experiencesEng = await getExperiencesEng()

  return (
    <section>
      <AnimatedBg>
        <Container className='py-8 sm:py-12'>
          <AboutInfo authors={authors} authorsEng={authorsEng} experiences={experiences} experiencesEng={experiencesEng} />
        </Container>
      </AnimatedBg>
    </section>
  )
}

import React from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { getAuthors, getExperiences } from '@/services'
import { getAuthorsEng, getExperiencesEng } from '@/services/schemas'
import { Container } from '@/components/Container'
import { AnimatedBg } from '@/components/AnimatedBg'
import { Resume } from '@/components/Resume'

import { useTranslations } from 'next-intl'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  MailIcon
} from '@/components/SocialIcons'
import clsx from 'clsx'
import { AboutInfo } from '@/components/AboutInfo'

export const dynamic = 'force-dynamic'

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>
interface SocialLinkProps {
  className?: string
  href: string
  icon: IconType
  children: React.ReactNode
}

function SocialLink ({ className, href, children, icon: Icon }: SocialLinkProps): JSX.Element {
  return (
    <li className={clsx(className, 'flex')}>
      <a
        href={href}
        target='_blank'
        className='flex text-sm font-medium transition group text-zinc-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-300' rel='noreferrer'
      >
        <Icon className='flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-indigo-600' />
        <span className='ml-4'>{children}</span>
      </a>
    </li>
  )
}

function SocialLinkList () {
  const t = useTranslations('Contactme')
  return (
    <ul role='list'>

      <SocialLink href='https://github.com/vicprat' icon={GitHubIcon} className='my-4'>
        {t('title')} Github
      </SocialLink>
      <SocialLink href='https://linkedin.com/in/vicprat/' icon={LinkedInIcon} className='my-4'>
        {t('title')} LinkedIn
      </SocialLink>
      <SocialLink href='https://twitter.com/vic_prat' icon={TwitterIcon} className='my-4'>
        {t('title')} Twitter
      </SocialLink>
      <SocialLink href='https://instagram.com/vic_prat' icon={InstagramIcon} className='my-4'>
        {t('title')} Instagram
      </SocialLink>
      <SocialLink
        href='mailto:hey@vicprat.dev'
        icon={MailIcon}
        className='my-4'
      >
        hey@vicprat.dev
      </SocialLink>
    </ul>
  )
}

function Certifications () {
  const t = useTranslations('Certifications')
  return (
    <ScrollReveal>
      <div className='my-12 md:my-24 '>
        <h2 className='my-6 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl'>
          {t('title')}
        </h2>
        <a
          href='https://platzi.com/p/vicprat182/'
          target='_blank' rel='noreferrer'
        >
          <img
            src='https://media.graphassets.com/ieB7axMfSfuQAjiNYvdQ?_gl=1*2uyl0s*_ga*ODgyNzA2NTU0LjE2ODk5NjQ5NDc.*_ga_G6FYGSYGZ4*MTY5MjcyMjU0My4yNC4xLjE2OTI3MjI1NTkuNDQuMC4w'
            alt=''
            className='object-cover w-full transition cursor-pointer hover:opacity-80 '
          />

        </a>
      </div>
    </ScrollReveal>
  )
}
export default async function page (): Promise<JSX.Element> {
  const authors = await getAuthors()
  const authorsEng = await getAuthorsEng()
  const experiences = await getExperiences()
  const experiencesEng = await getExperiencesEng()

  return (
    <section>
      <AnimatedBg>
        <Container className='py-8 sm:py-12'>
          <AboutInfo authors={authors} authorsEng={authorsEng} />
          <div className='lg:pl-20'>
            <Resume experiences={experiences} experiencesEng={experiencesEng} />
            <Certifications />
            <SocialLinkList />

          </div>
        </Container>
      </AnimatedBg>
    </section>
  )
}

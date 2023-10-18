// @ts-nocheck
'use client'
import parse from 'html-react-parser'
import { usePathname } from 'next/navigation'
import { Image } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import { ScrollReveal } from '@/components/ScrollReveal'
import clsx from 'clsx'
import { Resume } from '@/components/Resume'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  MailIcon
} from '@/components/SocialIcons'

interface Author {
  id: string // You may have a unique identifier for each author
  name?: string
  aboutTitle?: string | null // Changed from string | null | undefined
  aboutDescription?: {
    html?: string
    // Define other properties as needed
  } | null // It's optional, so handle null cases
  aboutPhoto?: {
    url: string
    // Define other properties as needed
  } | null // It's optional, so handle null cases
  // Define other properties as needed
}

interface Experience {
  __typename?: 'Experience' | undefined
  actualJob: boolean
  companyName: string
  date: string
  description: string
  role: string
}

interface AboutInfoProps {
  authors: Author[]
  authorsEng: Author[]
  experiences: Experience[]
  experiencesEng: Experience[]
}

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>
interface SocialLinkProps {
  className?: string
  href: string
  icon: IconType
  children: React.ReactNode
}

function convertToHTMLWithParagraphs (text: string): string {
  const paragraphs = text.split('\n').map((paragraph, index) => (
        `<p key=${index}>${paragraph}</p>`
  ))
  return paragraphs.join('')
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
          <Image
            src='https://media.graphassets.com/ieB7axMfSfuQAjiNYvdQ?_gl=1*2uyl0s*_ga*ODgyNzA2NTU0LjE2ODk5NjQ5NDc.*_ga_G6FYGSYGZ4*MTY5MjcyMjU0My4yNC4xLjE2OTI3MjI1NTkuNDQuMC4w'
            alt=''
            className='object-cover w-full transition cursor-pointer hover:opacity-80 '
          />

        </a>
      </div>
    </ScrollReveal>
  )
}

export function AboutInfo({ authors, authorsEng, experiences, experiencesEng }: AboutInfoProps): JSX.Element {
  const pathname = usePathname()
  const isSpanish = pathname.includes('/es')

  return (
    <>
      {isSpanish
        ? (authors.map((author) => (
          <div key={author.id} className='grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:grid-rows-[auto_1fr]'>
            <div className='lg:pl-20'>
              <div className='max-w-xs px-2.5 lg:max-w-none'>
                <Image
                  src={author.aboutPhoto?.url}
                  alt={author.name}
                  sizes='(min-width: 1024px) 32rem, 20rem'
                  className='object-cover aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-800'
                />

              </div>
            </div>
            <div className='lg:order-first lg:row-span-2'>
              <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
                {author.aboutTitle}
              </h1>
              <div className='mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400'>

                <div className='mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-400'>
                  {author && (author.aboutDescription != null) && author.aboutDescription.html && (
                    parse(convertToHTMLWithParagraphs(author.aboutDescription.html))
                  )}
                </div>

              </div>
            </div>
            <div className='lg:pl-20'>
              <Resume experiences={experiences} experiencesEng={experiencesEng} />
              <Certifications />
              <SocialLinkList />

            </div>
          </div>
          )))
        : (authorsEng.map((author) => (
          <div key={author.id} className='grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:grid-rows-[auto_1fr]'>
            <div className='lg:pl-20'>
              <div className='max-w-xs px-2.5 lg:max-w-none'>
                <img
                  src={author.aboutPhoto?.url}
                  alt={author.name}
                  sizes='(min-width: 1024px) 32rem, 20rem'
                  className='object-cover aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-800'
                />

              </div>
            </div>
            <div className='lg:order-first lg:row-span-2'>
              <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
                {author.aboutTitle}
              </h1>
              <div className='mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400'>

                <div className='mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-400'>
                  {author && (author.aboutDescription != null) && author.aboutDescription.html && (
                    parse(convertToHTMLWithParagraphs(author.aboutDescription.html))
                  )}
                </div>

              </div>
            </div>
            <div className='lg:pl-20'>
              <Resume experiences={experiences} experiencesEng={experiencesEng} />
              <Certifications />
              <SocialLinkList />

            </div>


          </div>

        )))}

    </>
  )
}

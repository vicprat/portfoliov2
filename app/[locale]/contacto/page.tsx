import { ContactForm } from '@/components/ContactForm'
import { Container } from '@/components/Container'
import { useTranslations } from 'next-intl'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  MailIcon
} from '@/components/SocialIcons'
import clsx from 'clsx'
import { AnimatedBg } from '@/components/AnimatedBg'

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>
interface SocialLinkProps {
  className?: string
  href: string
  icon: IconType
  children: React.ReactNode
}

function Banner () {
  const t = useTranslations('ContactPage')
  return (
    <div>
      <h2 className='max-w-2xl mx-auto text-3xl font-bold tracking-tight text-left text-zinc-800 dark:text-zinc-100 sm:text-4xl'>
        {t('title')}
      </h2>
      <p className='my-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
        {t('subtitle')}
      </p>
    </div>
  )
}

function SocialLink ({ className, href, children, icon: Icon }: SocialLinkProps): JSX.Element {
  return (
    <li className={clsx(className, 'flex')}>
      <a
        href={href}
        target='_blank'
        className='flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500' rel='noreferrer'
      >
        <Icon className='flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500' />
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

export default function page (): JSX.Element {
  return (
    <section className='h-screen md:py-8'>
      <AnimatedBg>
        <Container className='my-24'>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
            <div className=' lg:pl-20'>
              <Banner />
              <SocialLinkList />
            </div>
            <ContactForm />
          </div>
        </Container>
      </AnimatedBg>
    </section>
  )
}

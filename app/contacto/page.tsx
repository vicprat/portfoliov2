import { ContactForm } from '../../components/ContactForm'
import { Container } from '../../components/Container'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  MailIcon
} from '../../components/SocialIcons'
import clsx from 'clsx'
import { AnimatedBg } from '../../components/AnimatedBg'

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
        className='flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500' rel='noreferrer'
      >
        <Icon className='flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500' />
        <span className='ml-4'>{children}</span>
      </a>
    </li>
  )
}

export default function page (): JSX.Element {
  return (
    <section className='md:py-8'>
      <AnimatedBg>
        <Container className='my-24'>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
            <div className=' lg:pl-20'>
              <div>
                <h2 className='max-w-2xl mx-auto text-3xl font-bold tracking-tight text-left text-zinc-800 dark:text-zinc-100 sm:text-4xl'>
                  Tu proxima idea de negocio esta esperando a ser desarrollada.
                </h2>
                <p className='my-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
                  Lleva el control de tu negocio con la suit de herramientas que se adapte más a tus necesidades de forma escalable y segura.
                </p>
              </div>
              <ul role='list' className='my-12'>
                <SocialLink href='https://github.com/vicprat' icon={GitHubIcon} className='my-4'>
                  Sigueme en Github
                </SocialLink>
                <SocialLink href='https://linkedin.com/in/vicprat/' icon={LinkedInIcon} className='my-4'>
                  Sigueme en LinkedIn
                </SocialLink>
                <SocialLink href='https://twitter.com/vic_prat' icon={TwitterIcon} className='my-4'>
                  Sigueme en Twitter
                </SocialLink>
                <SocialLink href='https://instagram.com/vic_prat' icon={InstagramIcon} className='my-4'>
                  Sigueme en Instagram
                </SocialLink>
                <SocialLink
                  href='mailto:hey@vicprat.dev'
                  icon={MailIcon}
                  className='my-4'
                >
                  hey@vicprat.dev
                </SocialLink>
              </ul>
            </div>
            <ContactForm />
          </div>
        </Container>
      </AnimatedBg>
    </section>
  )
}

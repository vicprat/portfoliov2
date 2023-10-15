'use client'
import { Fragment, useEffect } from 'react'
import Link from 'next-intl/link'
import { useTranslations } from 'next-intl'

import { Popover, Transition } from '@headlessui/react'
import { MoonIcon, SunIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Container } from './Container'

interface MobileNavItemProps {
  href: string
  children: React.ReactNode
  locale?: string
}

interface NavItemProps {
  href: string
  children: React.ReactNode
}

function MobileNavItem ({ href, children, locale }: MobileNavItemProps): JSX.Element {
  return (
    <li>
      <Popover.Button as={Link} href={href} className='block py-2' locale={locale}>
        {children}
      </Popover.Button>
    </li>
  )
}

function MobileNavigation (props: React.HTMLProps<HTMLDivElement>): JSX.Element {
  const t = useTranslations('Nav')
  return (
    // @ts-expect-error
    <Popover {...props}>
      <Popover.Button className='flex items-center px-4 py-2 text-sm font-medium shadow-lg rounded-xl group bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'>
        {t('menu')}
        <ChevronDownIcon className='w-4 h-auto ml-3 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400' />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Popover.Overlay className='fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='fixed z-50 p-8 origin-top bg-white inset-x-4 top-8 rounded-3xl ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800'
          >
            <div className='flex flex-row-reverse items-center justify-around'>
              <Popover.Button aria-label='Close menu' className='p-1 -m-1'>
                <XMarkIcon className='w-6 h-6 text-zinc-500 dark:text-zinc-400' />
              </Popover.Button>
              <h2 className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>
                Menu
              </h2>
            </div>
            <nav className='mt-6'>
              <ul className='-my-2 text-base divide-y divide-zinc-100 text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300'>
                <MobileNavItem href='/'><h2 className='font-semibold'>{t('home')}</h2></MobileNavItem>
                <MobileNavItem href='/perfil'>{t('about')}</MobileNavItem>
                <MobileNavItem href='/blog'>{t('blog')}</MobileNavItem>
                <MobileNavItem href='/proyectos'>{t('projects')}</MobileNavItem>
                <MobileNavItem href='/contacto'>{t('contact')}</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem ({ href, children }: NavItemProps): JSX.Element {
  return (
    <li>
      <Link
        href={href}
        className='relative block px-3 py-2 transition hover:text-indigo-600 dark:hover:text-indigo-300'
      >
        {children}
      </Link>
    </li>
  )
}

function DesktopNavigation (props: React.HTMLProps<HTMLDivElement>): JSX.Element {
  const t = useTranslations('Nav')
  return (
    <nav {...props}>
      <ul className='flex justify-around px-3 text-sm font-medium shadow-lg rounded-xl bg-white/90 text-zinc-800 shadow-zinc-800/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 '>
        <NavItem href='/'>{t('home')}</NavItem>
        <NavItem href='/perfil'>{t('about')}</NavItem>
        <NavItem href='/blog'>{t('blog')}</NavItem>
        <NavItem href='/proyectos'>{t('projects')}</NavItem>
        <NavItem href='/contacto'>{t('contact')}</NavItem>
      </ul>
    </nav>
  )
}

function ModeToggle (): JSX.Element {
  function disableTransitionsTemporarily () {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode () {
    disableTransitionsTemporarily()

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const isSystemDarkMode = darkModeMediaQuery.matches
    const isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type='button'
      aria-label='Toggle dark mode'
      className='px-3 py-2 transition shadow-lg rounded-xl group bg-white/90 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20'
      onClick={toggleMode}
    >
      <SunIcon className='h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600' />
      <MoonIcon className='hidden h-6 w-6 fill-zinc-800/90 stroke-indigo-400 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-gray-300 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500' />
    </button>
  )
}

function ToggleLanguage (props: React.HTMLProps<HTMLDivElement>): JSX.Element {
  const t = useTranslations('Language')
  return (
    // @ts-expect-error
    <Popover {...props}>
      <Popover.Button className='flex items-center px-4 py-2 text-sm font-medium shadow-lg rounded-xl group bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'>
        {t('title')}
        <ChevronDownIcon className='w-4 h-auto ml-3 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400' />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Popover.Overlay className='fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='fixed z-50 p-8 origin-top bg-white inset-x-4 top-8 rounded-3xl ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800'
          >
            <div className='flex flex-row-reverse items-center justify-items-end'>
              <Popover.Button aria-label='Close menu' className='p-1 -m-1'>
                <XMarkIcon className='w-6 h-6 text-zinc-500 dark:text-zinc-400' />
              </Popover.Button>
            </div>
            <nav className='mt-6'>
              <ul className='-my-2 text-base divide-y divide-zinc-100 text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300'>
                <MobileNavItem href='/' locale='en'>English</MobileNavItem>
                <MobileNavItem href='/' locale='es'>Español</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}
export function Header (): JSX.Element {
  useEffect(() => {
    function hideMenuOnScroll () {
      let prevScrollpos = window.pageYOffset
      window.onscroll = function () {
        const currentScrollPos = window.pageYOffset
        const header = document.getElementById('header')
        if (header != null) {
          if (prevScrollpos > currentScrollPos) {
            header.style.top = '0'
          } else {
            header.style.top = '-100px'
          }
        }
        prevScrollpos = currentScrollPos
      }
    }

    hideMenuOnScroll()

    return () => {
      window.onscroll = null
    }
  }, [])

  return (
    <nav
      className='fixed left-0 right-0 z-50 flex flex-col items-end justify-center flex-none duration-300 pointer-events-none md:items-center transition-top'
      id='header'
    >
      <div className='top-0 z-10 h-16 pt-6'>
        <Container className='top-[var(--header-top,theme(spacing.6))] w-full '>
          <div className='relative flex gap-4'>
            <div className='flex flex-1 pointer-events-auto' />
            <div className='flex justify-end flex-1 md:justify-around'>
              <MobileNavigation className='w-full pointer-events-auto md:hidden' />
              <DesktopNavigation className='hidden pointer-events-auto md:block' />
            </div>
            <div className='flex justify-end gap-2 md:flex-1'>
              <ToggleLanguage className='w-full pointer-events-auto' />
              <div className='pointer-events-auto'>
                <ModeToggle />
              </div>
            </div>
          </div>
        </Container>
      </div>

    </nav>
  )
}

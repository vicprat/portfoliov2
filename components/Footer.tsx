import Link from 'next/link'
import { useTranslations } from 'next-intl'

export const Footer = () => {
  const t = useTranslations('Nav')
  return (

    <footer className='m-4 '>
      <div className='w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>© {new Date().getFullYear()} <Link href='/' className='hover:underline'>vic_prat</Link>
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <Link href='/perfil' className='mr-4 hover:underline md:mr-6'>{t('about')}</Link>
          </li>
          <li>
            <Link href='/blog' className='mr-4 hover:underline md:mr-6'>{t('blog')}</Link>
          </li>
          <li>
            <Link href='/proyectos' className='mr-4 hover:underline md:mr-6'>{t('projects')}</Link>
          </li>
          <li>
            <Link href='/contacto' className='hover:underline'>{t('contact')}</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

'use client'
// import { ArrowDownIcon } from '@heroicons/react/20/solid'
import { ScrollReveal } from './ScrollReveal'
// import { Button } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

interface Experience {
  companyName: string
  role: string
  date: string
  description: string
  actualJob: boolean
}

export function Resume ({ experiences, experiencesEng }: { experiences: Experience[] }) {
  const t = useTranslations('Resume')
  const pathname = usePathname()
  const isSpanish = pathname.includes('/es')

  return (
    <ScrollReveal>
      <h2 className='text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl'>
        {t('title')}
      </h2>
      <div className='my-8'>
        <ol>

          {isSpanish
            ? (
                experiences.map((experience) => (
                  <li key={experience.companyName} className='mb-10 ml-6'>
                    <ScrollReveal>
                      <div className='relative py-2 border-l border-zinc-400 dark:border-gray-700'>
                        <div className='ml-4'>
                          <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>{experience.companyName} {experience.actualJob && <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3'>Actual</span>}</h3>
                          <h3 className='mb-1 text-gray-900 text-md dark:text-white'>{experience.role}</h3>
                          <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>{experience.date}</time>
                          <p className='text-base font-normal text-gray-500 dark:text-gray-400'>{experience.description}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  </li>
                ))
              )
            : (
                experiencesEng.map((experience) => (
                  <li key={experience.companyName} className='mb-10 ml-6'>
                    <ScrollReveal>
                      <div className='relative py-2 border-l border-zinc-400 dark:border-gray-700'>
                        <div className='ml-4'>
                          <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>{experience.companyName} {experience.actualJob && <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3'>Actual</span>}</h3>
                          <h3 className='mb-1 text-gray-900 text-md dark:text-white'>{experience.role}</h3>
                          <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>{experience.date}</time>
                          <p className='text-base font-normal text-gray-500 dark:text-gray-400'>{experience.description}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  </li>
                ))
              )}
        </ol>
      </div>

    </ScrollReveal>
  )
}

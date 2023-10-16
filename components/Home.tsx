'use client'
import Link from 'next-intl/link'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Image } from '@nextui-org/react'

import { buttonVariants, paragraphVariants, titleVariants, variants } from '../utils/animations'
import { links } from '../utils/constants'
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

import { AnimatedBg } from './AnimatedBg'
import { SocialLinks } from './SocialLink'
import { ScrollReveal } from './ScrollReveal'

export function HeroSection (): JSX.Element {
  const t = useTranslations('Index')
  return (
    <div className='flex items-center justify-center'>
      <AnimatedBg>
        <motion.article
          initial='hidden'
          animate='enter'
          exit='exit'
          variants={variants}
          className='relative'
        >
          <div className='md:py-12 '>
            <div className='px-6 mx-auto max-w-7xl lg:px-8'>
              <div className='max-w-2xl mx-auto '>
                <Image
                  src='https://media.graphassets.com/jAdzQh8sREuC2V7MBO3D?_gl=1*5rgsfd*_ga*ODgyNzA2NTU0LjE2ODk5NjQ5NDc.*_ga_G6FYGSYGZ4*MTY5MzQ5ODM2Mi4zNy4xLjE2OTM1MDAwMTguMzYuMC4w'
                  alt=''
                  className='w-24 h-24 mx-auto mb-8 rounded-full md:w-32 md:h-32'
                />
                <motion.h1 variants={titleVariants} className='title'>
                  {t('title')}
                </motion.h1>
                <motion.p variants={paragraphVariants} className='paragraph'>
                  {t('shortDescription')}
                </motion.p>
                <div className='flex gap-6 '>
                  <SocialLinks links={links} />
                </div>
                <div className='flex items-center justify-center mt-4 gap-x-6'>
                  <Link href='/proyectos'>
                    <motion.button
                      className='rounded-md dark:bg-indigo-600 bg-indigo-600  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm dark:hover:bg-indigo-500 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      variants={buttonVariants}
                    >
                      {t('projectsBtn')}
                    </motion.button>
                  </Link>
                  <Link href='/perfil'>
                    <motion.button className='text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100' variants={buttonVariants}>
                      {t('aboutBtn')} <span aria-hidden='true'>→</span>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </AnimatedBg>
    </div>
  )
}

export function CallToAction (): JSX.Element {
  const t = useTranslations('CallToAction')
  return (
    <ScrollReveal>
      <div className='my-24 overflow-hidden'>
        <div className='px-6 py-12 mx-auto max-w-7xl lg:flex lg:px-8'>
          <div className='grid max-w-2xl grid-cols-1 mx-auto gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
            <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
              <ScrollReveal delay={0.2}>
                <h2 className='text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl'>{t('title')}</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className='mt-6 text-xl leading-8 text-zinc-600 dark:text-zinc-400'>
                  {t('description')}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.6}>
                <p className='mt-6 text-base leading-7text-zinc-600 dark:text-zinc-400'>
                  {t('description2')}
                </p>
              </ScrollReveal>
            </div>
            <div className='flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents'>
              <div className='flex-auto w-0 lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
                <ScrollReveal delay={0.2}>
                  <Image
                    src='https://media.graphassets.com/vKyhLj3RQwGDA1GiPDz1?_gl=1*118wbx9*_ga*ODgyNzA2NTU0LjE2ODk5NjQ5NDc.*_ga_G6FYGSYGZ4*MTY5MzQ5ODM2Mi4zNy4xLjE2OTM0OTk1NTkuNDYuMC4w'
                    alt=''
                    className='aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                  />
                </ScrollReveal>
              </div>
              <div className='contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8'>
                <div className='flex self-end justify-end flex-none order-first w-64 lg:w-auto'>
                  <ScrollReveal delay={0.4}>
                    <Image
                      src='https://media.graphassets.com/J5Wyf7GBQcGYEbb8i4bg?_gl=1*1qpqzd3*_ga*ODgyNzA2NTU0LjE2ODk5NjQ5NDc.*_ga_G6FYGSYGZ4*MTY5MzQ5ODM2Mi4zNy4xLjE2OTM0OTk1NTkuNDYuMC4w'
                      alt=''
                      className='aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                    />
                  </ScrollReveal>
                </div>
                <div className='flex justify-end flex-auto w-96 lg:w-auto lg:flex-none'>
                  <ScrollReveal delay={0.6}>
                    <Image
                      src='https://media.graphassets.com/7uvsaF4GSnSJzCidWZSA?_gl=1*1m4c74*_ga*ODgyNzA2NTU0LjE2ODk5NjQ5NDc.*_ga_G6FYGSYGZ4*MTY5MzQ5ODM2Mi4zNy4xLjE2OTM0OTk1NTkuNDYuMC4w'
                      alt=''
                      className='aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                    />
                  </ScrollReveal>
                </div>
                <div className='hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none'>
                  <ScrollReveal delay={0.8}>
                    <Image
                      src='https://media.graphassets.com/u11cObf5RCmvZuD6G5m5?_gl=1*r6426y*_ga*ODgyNzA2NTU0LjE2ODk5NjQ5NDc.*_ga_G6FYGSYGZ4*MTY5MzQ5ODM2Mi4zNy4xLjE2OTM0OTk1NTkuNDYuMC4w'
                      alt=''
                      className='aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                    />
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export function FeatureList (): JSX.Element {
  const t = useTranslations('FeatureList')
  const features = [
    {
      name: t('name1'),
      description:
        t('description1'),
      icon: CloudArrowUpIcon,
      delayTime: 0.2
    },
    {
      name: t('name2'),
      description:
        t('description2'),
      icon: LockClosedIcon,
      delayTime: 0.4
    },
    {
      name: t('name3'),
      description:
        t('description3'),
      icon: ArrowPathIcon,
      delayTime: 0.6
    }
  ]
  return (
    <AnimatedBg>
      <div className='py-24 sm:py-32'>
        <ScrollReveal>
          <div className='px-6 mx-auto max-w-7xl lg:px-8'>
            <div className='max-w-2xl mx-auto lg:text-center'>
              <h2 className='text-base font-semibold leading-7 text-blue-800 dark:text-blue-300'>{t('title')}</h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl'>{t('subtitle')}
              </p>
              <p className='mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
                {t('description')}
              </p>
            </div>
            <div className='max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none'>
              <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
                {features.map((feature) => (
                  <ScrollReveal key={feature.name} className='flex flex-col' delay={feature.delayTime}>
                    <dt className='flex items-center text-base font-semibold leading-7 text-zinc-800 dark:text-zinc-100 gap-x-3'>
                      <feature.icon className='flex-none w-5 h-5 text-blue-800 dark:text-blue-300' aria-hidden='true' />
                      {feature.name}
                    </dt>
                    <dd className='flex flex-col flex-auto mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400'>
                      <p className='flex-auto'>{feature.description}</p>

                    </dd>
                  </ScrollReveal>
                ))}
              </dl>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </AnimatedBg>
  )
}

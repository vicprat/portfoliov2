import { getPosts } from '@/services'
import { getPostsEng } from '@/services/schemas'

import { Container } from '@/components/Container'
import { useTranslations } from 'next-intl'
import { PostsContainer } from '@/components/PostsContainer'

import {
  BoltIcon,
  BeakerIcon,
  NewspaperIcon
} from '@heroicons/react/20/solid'

export const dynamic = 'force-dynamic'

function Banner () {
  const t = useTranslations('BlogPage')
  return (
    <>
      <div className='my-8 xl:mx-auto xl:max-w-7xl xl:px-8'>
        <img
          src='https://media.graphassets.com/ETSQhU3CQ9SdJtKCM8XD?_gl=1*18dgkkp*_ga*ODgyNzA2NTU0LjE2ODk5NjQ5NDc.*_ga_G6FYGSYGZ4*MTY5MjYzNjI1OC4yMS4xLjE2OTI2MzYyNjguNTAuMC4w'
          alt='Banner'
          className='aspect-[5/2] w-full object-cover rounded-xl xl:rounded-3xl'
        />
      </div>
      <div className='my-12 md:text-center'>
        <p className='my-4 text-2xl font-bold tracking-tight md:text-3xl text-zinc-800 dark:text-zinc-100 sm:text-4xl'>
          {t('title')}
        </p>
        <p className='my-8 leading-8 text-md md:text-lg text-zinc-600 dark:text-zinc-400'>
          {t('subtitle')}
        </p>
      </div>
    </>
  )
}

function BlogCard () {
  const t = useTranslations('BlogCardComponent')

  const primaryFeatures = [
    {
      name: t('primaryFeatureTitle1'),
      description: t('primaryFeatureDescription1'),
      icon: BoltIcon
    },
    {
      name: t('primaryFeatureTitle2'),
      description: t('primaryFeatureDescription2'),
      icon: BeakerIcon
    },
    {
      name: t('primaryFeatureTitle3'),
      description: t('primaryFeatureDescription3'),
      icon: NewspaperIcon
    }
  ]

  return (
    <div className='mx-auto my-12 max-w-7xl sm:px-6 lg:px-8'>
      <div className='relative px-6 py-24 overflow-hidden bg-gray-900 isolate sm:rounded-3xl sm:px-10 lg:py-24 xl:px-24'>
        <div className='grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0'>
          <div className='lg:row-start-2 lg:max-w-md'>
            <h2 className='my-4 text-2xl font-bold tracking-tight text-white md:text-3xl sm:text-4xl'>
              {t('title1')}
              <br />
              {t('title2')}

            </h2>
            <p className='my-4 leading-8 text-md md:text-lg text-zinc-300'>
              {t('description')}
            </p>
          </div>
          <img
            src='https://media.graphassets.com/xxUKepOdRxGgCyG3vCZR?_gl=1*7c8u9f*_ga*ODgyNzA2NTU0LjE2ODk5NjQ5NDc.*_ga_G6FYGSYGZ4*MTY5MjYzNjI1OC4yMS4xLjE2OTI2Mzc2MDYuNTMuMC4w'
            alt='Product screenshot'
            className='relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none'
            width={2432}
            height={1442}
          />
          <div className='max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10'>
            <dl className='max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none'>
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className='relative'>
                  <dt className='inline-block font-semibold text-white ml-9'>
                    <feature.icon className='absolute w-5 h-5 text-indigo-500 left-1 top-1' aria-hidden='true' />
                    {feature.name}
                  </dt>{' '}
                  <dd className='inline'>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div
          className='pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu'
          aria-hidden='true'
        >
          <div
            className='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default async function page (): Promise<JSX.Element> {
  const posts = await getPosts()
  const postsEng = await getPostsEng()

  return (
    <section>
      <Container className='py-8 sm:py-12'>
        <Banner />

        <p className='mt-2 text-2xl font-bold tracking-tight md:text-3xl text-zinc-800 dark:text-zinc-100 sm:text-4xl'>
          Posts
        </p>
        <PostsContainer posts={posts} postsEng={postsEng} />
      </Container>
      <BlogCard />

    </section>
  )
}

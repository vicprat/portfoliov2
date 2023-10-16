'use client'
import PostCard from './Card'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

interface FeaturedPost {
  title: string
  slug: string
  excerpt: string
  createdAt: string
  categories: Array<{ name: string }>
}

interface FeaturedPostsProps {
  featuredPosts: FeaturedPost[]
  featuredPostsEng: FeaturedPost[]
}

export default function FeaturedPosts ({ featuredPosts, featuredPostsEng }: FeaturedPostsProps) {
  const t = useTranslations('FeaturedPosts')
  const pathname = usePathname()
  const isSpanish = pathname.includes('/es')

  return (
    <div className='flex flex-col justify-start '>
      <h2 className='mb-8 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl'>
        {t('title')}
      </h2>
      <div>
        {isSpanish
          ? (
              featuredPosts.map((post) => (
                <PostCard post={post} key={post.title} />
              ))
            )
          : (
              featuredPostsEng.map((post) => (
                <PostCard post={post} key={post.title} />
              ))
            )}
      </div>
      <Link href='/blog' className='text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100 hover:text-zinc-500 dark:hover:text-zinc-300'>
        {t('btn')} <span aria-hidden='true'>→</span>
      </Link>
    </div>
  )
}

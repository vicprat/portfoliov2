import moment from 'moment'
import Link from 'next/link'
import { ScrollReveal } from './ScrollReveal'

export interface PostCardProps {
  post: {
    title: string
    slug: string
    excerpt: string
    createdAt: string
    categories: Array<{
      name: string
    }>
  }
}

export default function PostCard ({ post }: PostCardProps) {
  return (
    <article key={post.title} className='flex flex-col items-start justify-between max-w-xl'>
      <ScrollReveal>
        <Link href={`/blog/${post.slug}`}>
          <div className='relative mb-8 group'>

            <div className='flex items-center mt-4 text-xs gap-x-4 '>
              <h3 className='text-lg font-semibold leading-6 text-zinc-800 dark:text-zinc-100 group-hover:text-zinc-600 dark:hover:text-zinc-300'>
                <div>
                  <span className='absolute inset-0' />
                  {post.title}
                </div>
              </h3>
              <>
                <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-200 ml-3'>{post.categories[0].name}</span>

              </>
            </div>
            <time dateTime={post.createdAt} className='block my-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </time>
            <p className='paragraph'>{post.excerpt}</p>
          </div>
        </Link>
      </ScrollReveal>

    </article>
  )
}

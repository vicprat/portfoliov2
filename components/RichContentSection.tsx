'use client'
import moment from 'moment'
import parse from 'html-react-parser'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Image } from '@nextui-org/react'

interface Post {
  title: string
  slug: string
  excerpt: string
  createdAt: string
  categories: Array<{
    name: string
  }>
  content: {
    html: string
  }
  featuredImage: {
    url: string
  }
}

interface PostProps {
  post: Post
  postEng: Post
}

function convertToHTMLWithParagraphs (text: string): string {
  const paragraphs = text.split('\n').map((paragraph, index) => (
        `<p key=${index}>${paragraph}</p>`
  ))
  return paragraphs.join('')
}

export function RichContentSection ({ post, postEng }: PostProps) {
  const pathname = usePathname()
  const isSpanish = pathname.includes('/es')

  // Choose the content based on the pathname
  const contentToRender = isSpanish ? post : postEng

  return (
    <div className='grid grid-cols-1'>
      <div className='my-12 md:my-24 md:mx-auto '>

        <Image
          src={contentToRender.featuredImage.url}
          alt={`${contentToRender.title} featured image`}
          className='aspect-[5/2] w-full object-cover rounded-xl xl:rounded-3xl'
        />
      </div>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold tracking-tight md:text-3xl text-zinc-800 dark:text-zinc-100 sm:text-4xl'>{contentToRender.title}</h2>
        <Link href={contentToRender.categories[0].name}>
          <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-200 ml-3'>
            {contentToRender.categories[0].name}
          </span>
        </Link>
      </div>

      <p className='my-2 leading-8 text-md text-zinc-500 dark:text-zinc-400'>{moment(contentToRender.createdAt).format('MMM DD, YYYY')}</p>
      <p className='mt-6 text-sm font-light leading-8 text-zinc-500 dark:text-zinc-400'>
        {contentToRender.excerpt}
      </p>

      <div className='my-6 space-y-4 text-base text-zinc-600 dark:text-zinc-400'>
        {parse(convertToHTMLWithParagraphs(contentToRender.content.html))}
      </div>

    </div>
  )
}

'use client'
import moment from 'moment'
import parse from 'html-react-parser'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { Image } from '@nextui-org/react'

interface Project {
  title: string
  slug: string
  excerpt: string
  createdAt: string
  technologies: Array<{
    name: string
  }>
  content: {
    html: string
  }
  projectLink: string
  featuredImage: {
    url: string
  }
}

interface ProjectProps {
  project: Project
  projectEng: Project
}

function convertToHTMLWithParagraphs (text: string): string {
  const paragraphs = text.split('\n').map((paragraph, index) => (
    `<p key=${index}>${paragraph}</p>`
  ))
  return paragraphs.join('')
}

export function RichContentSectionProjects ({ project, projectEng }: ProjectProps) {
  const pathname = usePathname()
  const isSpanish = pathname.includes('/es')

  // Choose the content based on the pathname
  const contentToRender = isSpanish ? project : projectEng

  return (
    <div className='grid grid-cols-1'>
      <div className='my-12 md:my-24 '>

        <Image
          src={contentToRender.featuredImage.url}
          alt={`${contentToRender.title} featured image`}
          className='aspect-[5/2] w-full object-cover rounded-xl xl:rounded-3xl'
        />
      </div>

      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold tracking-tight md:text-3xl text-zinc-800 dark:text-zinc-100 sm:text-4xl'>{contentToRender.title}</h2>
        <Link href={contentToRender.technologies[0].name}>
          <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-200 ml-3'>
            {contentToRender.technologies[0].name}
          </span>
        </Link>
      </div>

      <p className='my-2 leading-8 text-md text-zinc-500 dark:text-zinc-400'>{moment(contentToRender.createdAt).format('MMM DD, YYYY')}</p>
      <a
        href={contentToRender.projectLink ?? '#'}
        target='_blank'
        className='flex items-center text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 hover:dark:text-indigo-300' rel='noreferrer'
      >
        <ArrowTopRightOnSquareIcon className='w-4 h-4' />
        <p className='my-2 ml-4 leading-8 cursor-pointer text-md '>
          {contentToRender.projectLink ?? 'No link available'}
        </p>
      </a>

      <p className='mt-6 leading-8 text-md md:text-xl text-zinc-600 dark:text-zinc-400'>
        {contentToRender.excerpt}
      </p>

      <div className='my-6 space-y-4 text-base text-zinc-600 dark:text-zinc-400'>
        {parse(convertToHTMLWithParagraphs(contentToRender.content.html))}
      </div>

    </div>
  )
}

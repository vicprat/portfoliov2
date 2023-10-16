'use client'
import parse from 'html-react-parser'
import { usePathname } from 'next/navigation'

interface Author {
  id: string; // You may have a unique identifier for each author
  name: string;
  aboutTitle: string;
  aboutDescription: {
    html: string;
    // Define other properties as needed
  } | null; // It's optional, so handle null cases
  aboutPhoto: {
    url: string;
    // Define other properties as needed
  } | null; // It's optional, so handle null cases
  // Define other properties as needed
}

interface AuthorProps {
  authors: Author[]
  authorsEng: Author[]
}

function convertToHTMLWithParagraphs (text: string): string {
  const paragraphs = text.split('\n').map((paragraph, index) => (
        `<p key=${index}>${paragraph}</p>`
  ))
  return paragraphs.join('')
}
export function AboutInfo({ authors, authorsEng }: AuthorProps) {
  const pathname = usePathname()
  const isSpanish = pathname.includes('/es')

  return (
    <>
      {isSpanish
        ? (authors.map((author) => (
          <div key={author.id} className='grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:grid-rows-[auto_1fr]'>
            <div className='lg:pl-20'>
              <div className='max-w-xs px-2.5 lg:max-w-none'>
                <img
                  src={author.aboutPhoto?.url}
                  alt={author.name}
                  sizes='(min-width: 1024px) 32rem, 20rem'
                  className='object-cover aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-800'
                />

              </div>
            </div>
            <div className='lg:order-first lg:row-span-2'>
              <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
                {author.aboutTitle}
              </h1>
              <div className='mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400'>

                <div className='mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-400'>
                  {author && (author.aboutDescription != null) && author.aboutDescription.html && (
                    parse(convertToHTMLWithParagraphs(author.aboutDescription.html))
                  )}
                </div>

              </div>
            </div>
          </div>
          )))
        : (authorsEng.map((author) => (
          <div key={author.id} className='grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:grid-rows-[auto_1fr]'>
            <div className='lg:pl-20'>
              <div className='max-w-xs px-2.5 lg:max-w-none'>
                <img
                  src={author.aboutPhoto?.url}
                  alt={author.name}
                  sizes='(min-width: 1024px) 32rem, 20rem'
                  className='object-cover aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-800'
                />

              </div>
            </div>
            <div className='lg:order-first lg:row-span-2'>
              <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
                {author.aboutTitle}
              </h1>
              <div className='mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400'>

                <div className='mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-400'>
                  {author && (author.aboutDescription != null) && author.aboutDescription.html && (
                    parse(convertToHTMLWithParagraphs(author.aboutDescription.html))
                  )}
                </div>

              </div>
            </div>

          </div>
          )))}
    </>
  )
}

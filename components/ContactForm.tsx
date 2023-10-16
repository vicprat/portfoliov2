import { ScrollReveal } from './ScrollReveal'
import { Whatsapp } from './SocialIcons'
import { useTranslations } from 'next-intl'
export function ContactForm () {
  const t = useTranslations('ContactForm')
  return (
    <ScrollReveal>
      <div className='mx-auto max-w-7xl'>
        <div className='relative px-6 py-24 overflow-hidden bg-gray-900 shadow-2xl sm:rounded-lg isolate md:rounded-3xl sm:px-24 xl:py-32'>
          <h2 className='max-w-2xl mx-auto text-3xl font-bold tracking-tight text-center text-white sm:text-4xl'>
            {t('title')}
          </h2>
          <p className='max-w-xl mx-auto mt-2 text-lg leading-8 text-center text-gray-300'>
            {t('description')}
          </p>
          <div className='flex justify-center max-w-md mx-auto mt-10 gap-x-4'>
            <a
              href='https://calendly.com/vic_prat/desarrollo-web'
              target='_blank' rel='noreferrer'
            >
              <button
                type='button'
                className='flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 hover:text-gray-950  shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                {t('meetingBtn')}
              </button>
            </a>
            <a
              href='https://w.app/BEuiW1'
              target='_blank' rel='noreferrer'
            >
              <button className='flex items-center rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-zinc-50 hover:text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
                <Whatsapp className='w-6 h-6 transition stroke-white group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50' />
                <p className='ml-2'>whatsapp</p>
              </button>
            </a>
          </div>
          <svg
            viewBox='0 0 1024 1024'
            className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2'
            aria-hidden='true'
          >
            <circle cx={512} cy={512} r={512} fill='url(#759c1415-0410-454c-8f7c-9a820de03641)' fillOpacity='0.7' />
            <defs>
              <radialGradient
                id='759c1415-0410-454c-8f7c-9a820de03641'
                cx={0}
                cy={0}
                r={1}
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(512 512) rotate(90) scale(512)'
              >
                <stop stopColor='#7775D6' />
                <stop offset={1} stopColor='#E935C1' stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </ScrollReveal>
  )
}

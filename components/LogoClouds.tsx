import { ScrollReveal } from './ScrollReveal'
import ParallaxText from './ParallaxText'

const designAndDevelopment = [
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/ts.svg?alt=media&token=e96d333e-a6f8-470a-b1be-736438423ca8',
    alt: 'ts',
    width: 158,
    height: 48,
    label: 'Typescript',
  },
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/react.svg?alt=media&token=0ada86e9-eefb-4699-979d-be1cf21f8ad2',
    alt: 'React',
    width: 158,
    height: 48,
    label: 'React',
  },
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/redux.svg?alt=media&token=5028d54e-c375-4cda-844c-92cfd5b5d7ec',
    alt: 'Redux',
    width: 158,
    height: 48,
    label: 'Redux',
  },
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/tailwind.svg?alt=media&token=018a241f-117d-4f4d-800b-06e352ab5de7',
    alt: 'Tailwindcss',
    width: 158,
    height: 48,
    label: 'Tailwindcss',
  },
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/next.svg?alt=media&token=8f53041d-9758-4b53-aeea-5e2de521a02d',
    alt: 'Next.js',
    width: 158,
    height: 48,
    label: 'Next.js',
  }
];

const databaseAndServer = [
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/node.svg?alt=media&token=81e8a1e8-ae20-4237-abdf-2d23e1fe4f08',
    alt: 'Node',
    width: 158,
    height: 48,
    label: 'Node.js',
  },
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/prisma.svg?alt=media&token=30c09192-cbc0-4ab2-9fed-9dc54e04ba4c',
    alt: 'Prisma',
    width: 158,
    height: 48,
    label: 'PrismaORM',
  },
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/postgresql.svg?alt=media&token=27592620-fc0d-4eb9-a828-73f4e2c608ec',
    alt: 'PostgreSQL',
    width: 158,
    height: 48,
    label: 'PostgreSQL',
  },
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/mongo.svg?alt=media&token=083cf2cd-5d90-4f29-bd30-7c6e1a632606',
    alt: 'MongoDB',
    width: 158,
    height: 48,
    label: 'MongoDB',
  },
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/graphql.svg?alt=media&token=09c77f11-fac7-493d-83a7-d275854e85d1',
    alt: 'GraphQL',
    width: 158,
    height: 48,
    label: 'GraphQL',
  }
];
export function LogoClouds() {
  return (
    <ScrollReveal>
      <div className='mx-auto max-w-7xl'>
        <div className='relative px-6 py-24 overflow-hidden text-center bg-gray-900 shadow-2xl isolate sm:rounded-3xl sm:px-16'>
          <h2 className='max-w-2xl mx-auto text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Actualizado con las tecnologías estandar de la industria.
          </h2>
          <p className='max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-300'>
            La mejor convinacion entre diseño, rendimiento y seguridad para tus usuarios.
          </p>
          <h2 className='my-8 text-2xl font-bold text-transparent - bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text'>
            Diseño y desarrollo de interfaces de usuario.
          </h2>
          <ParallaxText baseVelocity={-5}>
            {designAndDevelopment.map((item, index) => (
              <div className='mx-6' key={index}>
                <img
                  className='object-contain w-full col-span-2 max-h-12 lg:col-span-1'
                  src={item.imageSrc}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                />
                <h2 className='mt-4 font-semibold text-gray-300'>{item.label}</h2>
              </div>
            ))}
          </ParallaxText>

          <h2 className='my-8 text-2xl font-bold text-transparent bg-gradient-to-r from-slate-500 to-slate-300 bg-clip-text'>
            Bases de datos y apliciones de servidor.
          </h2>
          <ParallaxText baseVelocity={5}> 
            {databaseAndServer.map((item, index) => (
              <div className='mx-6' key={index}>
                <img
                  className='object-contain w-full col-span-2 max-h-12 lg:col-span-1'
                  src={item.imageSrc}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                />
                <h2 className='mt-4 font-semibold text-gray-300'>{item.label}</h2>
              </div>
            ))}
          </ParallaxText>

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

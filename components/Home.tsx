'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { buttonVariants, paragraphVariants, titleVariants, variants } from '../utils/animations'
import { links } from '../utils/constants'
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

import { AnimatedBg } from './AnimatedBg'
import { SocialLinks } from './SocialLink'
import { ScrollReveal } from './ScrollReveal'

const features = [
  {
    name: 'Despliega tu aplicación de forma segura',
    description:
            'Lo más importante es que tu aplicación esté disponible a todo momento. Por eso, utiliza los mejores servicios para que tu siempre estés conectado, sin importar la cantidad de trafico que puedas tener.',
    icon: CloudArrowUpIcon,
    delayTime: 0.2
  },
  {
    name: 'Brinda certificados de seguridad a tus usuarios',
    description:
            'Asegurate de que la información privada, sea privada. Manten la integridad de tus usuarios y de tu negocio con certificados de seguridad SSL y sesiones encriptados para que nadie pueda acceder a información sensible.',
    icon: LockClosedIcon,
    delayTime: 0.4
  },
  {
    name: 'Entrega de manera continua y escalable',
    description:
            'Escucha a tus usuarios. Desarrolla de manera iterativa y continua para que puedas tener feedback y mejorar tu producto. Confia en la información que te brindará tu audiencia.',
    icon: ArrowPathIcon,
    delayTime: 0.6
  }
]

export function HeroSection() {
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
          <div className='py-6 md:py12 '>
            <div className='px-6 mx-auto max-w-7xl lg:px-8'>
              <div className='max-w-2xl mx-auto '>
                <img
                  src='https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/vicprat.jpg?alt=media&token=d7c52ece-48b0-42b1-a599-dd8293e9cef3'
                  alt=''
                  className='w-24 h-24 mx-auto mb-8 rounded-full md:w-32 md:h-32'
                />
                <motion.h1 variants={titleVariants} className='title'>
                  Desarrollador web, entusiasta de la UI y apasionado por las montañas.
                </motion.h1>
                <motion.p variants={paragraphVariants} className='paragraph'>
                  ¡Hola! Me llamo Víctor. Soy creador de experiencias digitales sorprendentes y fáciles de usar. Con experiencia en el ecosistema de React y Node, he desarrollado aplicaciones web y móbiles desde 2020. He trabajado como freelancer y en agencias de marketing, donde he aprendido a fusionar creatividad y funcionalidad.
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
                      Proyectos
                    </motion.button>
                  </Link>
                  <Link href='/perfil'>
                    <motion.button className='text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100' variants={buttonVariants}>
                      más sobre mi <span aria-hidden='true'>→</span>
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

export function CallToAction() {
  return (
    <ScrollReveal>
      <div className='my-24 overflow-hidden'>
        <div className='px-6 py-12 mx-auto max-w-7xl lg:flex lg:px-8'>
          <div className='grid max-w-2xl grid-cols-1 mx-auto gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
            <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
              <ScrollReveal delay={0.2}>
                <h2 className='text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl'>Desbloquea la web</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className='mt-6 text-xl leading-8 text-zinc-600 dark:text-zinc-400'>
                  ¡Haz tus sueños realidad! Desarrolla aplicaciones y proyectos únicos. Acércate a tus usuarios, maximiza la eficiencia de tus contactos y logra crecer tus negocios como nunca antes.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.6}>
                <p className='mt-6 text-base leading-7text-zinc-600 dark:text-zinc-400'>
                  Desafía los límites de la web. Abre la puerta a la innovación, desarrolla soluciones vanguardistas y lleva tu proyecto al siguiente nivel. ¡Juntos, alcanzaremos nuevas cimas digitales!
                </p>
              </ScrollReveal>
            </div>
            <div className='flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents'>
              <div className='flex-auto w-0 lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
                <ScrollReveal delay={0.2}>
                  <img
                    src='https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/simon_of_dub_A_liquid_dreamscape_unfolds_where_vibrant_creature_459f821a-695b-4a08-8329-0549f4fcddcd.png?alt=media&token=1a48dbe5-ec98-4484-a008-5f25ef5c2d68'
                    alt=''
                    className='aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                  />
                </ScrollReveal>
              </div>
              <div className='contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8'>
                <div className='flex self-end justify-end flex-none order-first w-64 lg:w-auto'>
                  <ScrollReveal delay={0.4}>
                    <img
                      src='https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/vic_prat_A_seamless_background_picture_of_a_monstera_monstera_g_df5bcac0-af81-45f0-a3ba-e2a4beec5b53%20(1).png?alt=media&token=4ebfd939-dda4-4263-be09-d0561b8d14bb'
                      alt=''
                      className='aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                    />
                  </ScrollReveal>
                </div>
                <div className='flex justify-end flex-auto w-96 lg:w-auto lg:flex-none'>
                  <ScrollReveal delay={0.6}>
                    <img
                      src='https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/vic_prat_a_portrayal_ilustration_of_a_cosmic_landscape_from_a_d_c5226c7b-1b0a-48b0-a727-c4570c1686db.png?alt=media&token=7bd4c041-9560-4831-b6c9-394f0a343b1d'
                      alt=''
                      className='aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                    />
                  </ScrollReveal>
                </div>
                <div className='hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none'>
                  <ScrollReveal delay={0.8}>
                    <img
                      src='https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/vic_prat_Bright_colors_pop_art_portrait_of_a_cute_adorable_cros_94714102-6e82-46dc-bd26-97dfe240533a.png?alt=media&token=bf56d6db-3fcf-40ce-b2d9-f06e0dc159f2'
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

export function FeatureList() {
  return (
    <AnimatedBg>
      <div className='py-24 sm:py-32'>
        <ScrollReveal>
          <div className='px-6 mx-auto max-w-7xl lg:px-8'>
            <div className='max-w-2xl mx-auto lg:text-center'>
              <h2 className='text-base font-semibold leading-7 text-blue-800 dark:text-blue-300'>Despliega más rapido</h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl'>
                Todo lo que necesitas para tener tu aplicación en producción con las mejores prácticas.
              </p>
              <p className='mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
                Lleva el control de tu negocio con la suit de herramientas que se adapte más a tus necesidades de forma escalable y segura.
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

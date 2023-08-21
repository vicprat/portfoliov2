import Link from "next/link"
import { Container } from "./components/Container"
import { Button } from "./components/Button"
import { HeroSection, CallToAction, FeatureList } from "./components/Home"
import { LogoClouds } from "./components/LogoClouds"

import { ArrowDownIcon } from '@heroicons/react/20/solid'

import { Proyects } from "./components/Proyects"
import { ScrollReveal } from "./components/ScrollReveal"

import FeaturedPosts from "./components/FeaturedPosts"
import { AnimatedBg } from "./components/AnimatedBg"

function Resume() {
  return (
    <ScrollReveal >
      <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
        Experiencia
      </h2>
      <div className="my-8">
        <ol className="relative border-l border-zinc-400 dark:border-gray-700">
          <ScrollReveal delay={0.1}>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <div className="ml-4">
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Application UI v2.0.0 <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span></h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                <p className="paragraph">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
              </div>

            </li>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <div className="ml-4">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
              </div>
            </li>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <div className="ml-4">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
              </div>
            </li>
          </ScrollReveal>
        </ol>
      </div>
      <ScrollReveal delay={0.4}>
        <Button href="#" variant="primary" className="w-full mt-6 group">
          Download CV
          <ArrowDownIcon className="w-4 h-4 transition stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </ScrollReveal>
    </ScrollReveal>
  )
}




export default async function Home() {

  return (
    <main>

      <HeroSection />
      <CallToAction />

      <AnimatedBg>
        <ScrollReveal>
          <Container className="my-12">
            <div className="grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2 md:gap-x-12">

              <div className="flex items-center justify-center space-y-10">
                <Resume />
              </div>
              <div className="flex flex-col justify-start ">
                <h2 className="mb-8 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                  Post Destacados
                </h2>
                <FeaturedPosts />

                <Link href='/blog' className="text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100 hover:text-zinc-500 dark:hover:text-zinc-300">
                  más posts <span aria-hidden="true">→</span>
                </Link>
              </div>

            </div>
          </Container>
        </ScrollReveal>
      </AnimatedBg>

      <LogoClouds />
      <Proyects />
      <FeatureList />

      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative px-6 py-24 overflow-hidden bg-gray-900 rounded-lg shadow-2xl isolate sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="max-w-2xl mx-auto text-3xl font-bold tracking-tight text-center text-white sm:text-4xl">
            Get notified when we’re launching.
          </h2>
          <p className="max-w-xl mx-auto mt-2 text-lg leading-8 text-center text-gray-300">
            Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.
          </p>
          <form className="flex max-w-md mx-auto mt-10 gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Notify me
            </button>
          </form>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>


    </main>
  )
}

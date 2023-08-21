import React from 'react'
import { Proyects } from '../components/Proyects'
import { Container } from '../components/Container'
import { ScrollReveal } from '../components/ScrollReveal'

export default function page() {
    return (
        <ScrollReveal>
            <Container className="my-12 md:my-24">
                <div className="max-w-2xl mx-auto my-12 lg:text-center">

                    <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                        Todo lo que necesitas para tener tu aplicación en producción con las mejores prácticas.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        Lleva el control de tu negocio con la suit de herramientas que se adapte más a tus necesidades de forma escalable y segura.
                    </p>
                </div>
                <div className="my-12 md:my-24 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <img
                        src="https://media.graphassets.com/TXrqQDn7TFS7uCIyE0ui?_gl=1*1mgb2dc*_ga*ODgyNzA2NTU0LjE2ODk5NjQ5NDc.*_ga_G6FYGSYGZ4*MTY5MjU2NzY2MS4xNy4xLjE2OTI1Njg3MzYuNC4wLjA."
                        alt="contributions graph"
                        className="object-cover w-full  rounded-xl xl:rounded-3xl"
                    />
                </div>
                <Proyects />


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
            </Container>
        </ScrollReveal>
    )
}


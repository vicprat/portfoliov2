import React from 'react'
import { Proyects } from '../components/Proyects'
import { Container } from '../components/Container'
import { ScrollReveal } from '../components/ScrollReveal'
import { ContactForm } from '../components/ContactForm'

export default function page() {
    return (
        <section>
            <Container className="my-12 md:my-24">
                <div className="my-12 md:text-center">

                    <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                        Echa un vistazo a mi portafolio de proyectos y servicios.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        Explora mis proyectos y servicios, y si te gusta lo que ves, no dar click en alguno para que puedas verlo en vivo. Conoce la funcionalidad y el diseño de cada uno de ellos. 
                    </p>
                </div>
                <div className="my-12 md:my-24 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <img
                        src='https://media.graphassets.com/VxumbNjsQFuKtdI9dyFG?_gl=1*1txalyj*_ga*ODgyNzA2NTU0LjE2ODk5NjQ5NDc.*_ga_G6FYGSYGZ4*MTY5MjcyMjU0My4yNC4xLjE2OTI3MjI1NTkuNDQuMC4w'
                        alt="contributions graph"
                        className="aspect-[5/2] w-full object-cover rounded-xl xl:rounded-3xl"
                    />
                </div>
                <Proyects />
            </Container>
            <ContactForm />
        </section>
    )
}


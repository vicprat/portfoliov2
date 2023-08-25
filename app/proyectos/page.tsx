import React from 'react'
import { Proyects } from '../../components/Proyects'
import { Container } from '../../components/Container'
import { ScrollReveal } from '../../components/ScrollReveal'
import { ContactForm } from '../../components/ContactForm'

export default function page() {
    return (
        <section>

            <Container className="py-8 sm:py-12">

                {/* <div className="my-12 md:text-center">

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
                </div> */}
                <div className="my-8 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <img
                        src="https://media.graphassets.com/BliIEsBrTTeOPNTWs2FP?_gl=1*2yp5uz*_ga*ODgyNzA2NTU0LjE2ODk5NjQ5NDc.*_ga_G6FYGSYGZ4*MTY5Mjc1OTYzNy4yNi4xLjE2OTI3NjAxNzQuNjAuMC4w"
                        alt=""
                        className="aspect-[5/2] w-full object-cover rounded-xl xl:rounded-3xl"
                    />
                </div>
                <div className="my-12 md:text-center">
                    <p className="my-4 text-2xl font-bold tracking-tight md:text-3xl text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                        Bienvenido a mi propio espacio digital donde comparto contenido para conectar, crecer y ayudar
                    </p>
                    <p className="my-8 leading-8 text-md md:text-lg text-zinc-600 dark:text-zinc-400">
                        En este espacio, no me limito a abordar únicamente el desarrollo web ni a explorar el creciente impacto de la tecnología. También comparto una variedad de temas que capturan mi interés personal y que espero resulten útiles para aquellos que los descubran en los rincones de la web. ¡Te doy la bienvenida a este cruce de experiencias y descubrimiento!
                    </p>
                </div>
                <Proyects />
            </Container>
            <ContactForm />
        </section>
    )
}


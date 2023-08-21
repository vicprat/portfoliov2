import { ScrollReveal } from "./ScrollReveal"
import ParallaxText from "./ParallaxText"

export function LogoClouds() {
    return (
        <ScrollReveal>
            <div className="mx-auto mt-24 max-w-7xl sm:px-6 lg:px-8">
                <div className="relative px-6 py-24 overflow-hidden text-center bg-gray-900 shadow-2xl isolate sm:rounded-3xl sm:px-16">
                    <h2 className="max-w-2xl mx-auto text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Actualizado con las tecnologías estandar de la industria.
                    </h2>
                    <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-300">
                        La mejor convinacion entre diseño, rendimiento y seguridad para tus usuarios.
                    </p>
                    <h2 className="my-8 text-2xl font-bold text-transparent - bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text">
                        Diseño y desarrollo de interfaces de usuario.
                    </h2>
                    <ParallaxText baseVelocity={-5} >
                        <div className="mx-6">
                            <img
                                className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                                src="https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/ts.svg?alt=media&token=e96d333e-a6f8-470a-b1be-736438423ca8"
                                alt="Transistor"
                                width={158}
                                height={48}
                            />
                            <h2 className='mt-4 font-semibold text-gray-300'>Typescript</h2>
                        </div>
                        <div className="mx-6">
                            <img
                                className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                                src="https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/react.svg?alt=media&token=0ada86e9-eefb-4699-979d-be1cf21f8ad2"
                                alt="Reform"
                                width={158}
                                height={48}
                            />
                            <h2 className='mt-4 font-semibold text-gray-300'>React</h2>
                        </div>
                        <div className="mx-6">
                            <img
                                className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                                src="https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/redux.svg?alt=media&token=5028d54e-c375-4cda-844c-92cfd5b5d7ec"
                                alt="Tuple"
                                width={158}
                                height={48}
                            />
                            <h2 className='mt-4 font-semibold text-gray-300'>Redux</h2>
                        </div>
                        <div className="mx-6">
                            <img
                                className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
                                src="https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/tailwind.svg?alt=media&token=018a241f-117d-4f4d-800b-06e352ab5de7"
                                alt="SavvyCal"
                                width={158}
                                height={48}
                            />
                            <h2 className='mt-4 font-semibold text-gray-300'>Tailwindcss</h2>
                        </div>
                        <div className="mx-6">
                            <img
                                className="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
                                src="https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/next.svg?alt=media&token=8f53041d-9758-4b53-aeea-5e2de521a02d"
                                alt="Statamic"
                                width={158}
                                height={48}
                            />
                            <h2 className='mt-4 font-semibold text-gray-300'>Next.js</h2>
                        </div>

                    </ParallaxText>

                    <h2 className="my-8 text-2xl font-bold text-transparent bg-gradient-to-r from-slate-500 to-slate-300 bg-clip-text">
                        Bases de datos y apliciones de servidor.
                    </h2>
                    <ParallaxText baseVelocity={5}>
                        <div className="mx-6">
                            <img
                                className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                                src="https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/node.svg?alt=media&token=81e8a1e8-ae20-4237-abdf-2d23e1fe4f08"
                                alt="Transistor"
                                width={158}
                                height={48}
                            />
                            <h2 className='mt-4 font-semibold text-gray-300'>Node.js</h2>
                        </div>
                        <div className="mx-6">
                            <img
                                className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                                src="https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/prisma.svg?alt=media&token=30c09192-cbc0-4ab2-9fed-9dc54e04ba4c"
                                alt="Reform"
                                width={158}
                                height={48}
                            />
                            <h2 className='mt-4 font-semibold text-gray-300'>PrismaORM</h2>
                        </div>
                        <div className="mx-6">
                            <img
                                className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                                src="https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/postgresql.svg?alt=media&token=27592620-fc0d-4eb9-a828-73f4e2c608ec"
                                alt="Tuple"
                                width={158}
                                height={48}
                            />
                            <h2 className='mt-4 font-semibold text-gray-300'>PostgreSQL</h2>
                        </div>
                        <div className="mx-6">
                            <img
                                className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
                                src="https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/mongo.svg?alt=media&token=083cf2cd-5d90-4f29-bd30-7c6e1a632606"
                                alt="SavvyCal"
                                width={158}
                                height={48}
                            />
                            <h2 className='mt-4 font-semibold text-gray-300'>MongoDB</h2>
                        </div>
                        <div className="mx-6">
                            <img
                                className="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
                                src="https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/graphql.svg?alt=media&token=09c77f11-fac7-493d-83a7-d275854e85d1"
                                alt="Statamic"
                                width={158}
                                height={48}
                            />
                            <h2 className='mt-4 font-semibold text-gray-300'>GraphQL</h2>
                        </div>
                    </ParallaxText>

                    <h2 className="my-8 text-2xl font-bold text-transparent bg-gradient-to-r from-slate-500 to-slate-300 bg-clip-text">
                        Despliegue e integración continua.
                    </h2>
                    <ParallaxText baseVelocity={-5}>
                        <div className="mx-6">
                            <img
                                className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                                src="https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/node.svg?alt=media&token=81e8a1e8-ae20-4237-abdf-2d23e1fe4f08"
                                alt="Transistor"
                                width={158}
                                height={48}
                            />
                            <h2 className='mt-4 font-semibold text-gray-300'>Node.js</h2>
                        </div>
                        <div className="mx-6">
                            <img
                                className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                                src="https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/prisma.svg?alt=media&token=30c09192-cbc0-4ab2-9fed-9dc54e04ba4c"
                                alt="Reform"
                                width={158}
                                height={48}
                            />
                            <h2 className='mt-4 font-semibold text-gray-300'>PrismaORM</h2>
                        </div>
                        <div className="mx-6">
                            <img
                                className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                                src="https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/postgresql.svg?alt=media&token=27592620-fc0d-4eb9-a828-73f4e2c608ec"
                                alt="Tuple"
                                width={158}
                                height={48}
                            />
                            <h2 className='mt-4 font-semibold text-gray-300'>PostgreSQL</h2>
                        </div>
                        <div className="mx-6">
                            <img
                                className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
                                src="https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/mongo.svg?alt=media&token=083cf2cd-5d90-4f29-bd30-7c6e1a632606"
                                alt="SavvyCal"
                                width={158}
                                height={48}
                            />
                            <h2 className='mt-4 font-semibold text-gray-300'>MongoDB</h2>
                        </div>
                        <div className="mx-6">
                            <img
                                className="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
                                src="https://firebasestorage.googleapis.com/v0/b/crwn-clothing-db-558ec.appspot.com/o/graphql.svg?alt=media&token=09c77f11-fac7-493d-83a7-d275854e85d1"
                                alt="Statamic"
                                width={158}
                                height={48}
                            />
                            <h2 className='mt-4 font-semibold text-gray-300'>GraphQL</h2>
                        </div>
                    </ParallaxText>

                    <div className="absolute right-0 -top-24 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                        <div
                            className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                            style={{
                                clipPath:
                                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}
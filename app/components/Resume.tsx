
import { ArrowDownIcon } from '@heroicons/react/20/solid'
import { ScrollReveal } from './ScrollReveal'
import { Button } from './Button'

const listItemInfo = [
    {
        title: 'Desarrollador Web Full Stack Freelance',
        date: '2021 - Presente',
        content: 'Desarrollo de aplicaciones web y móviles, utilizando tecnologías como React, React Native, NodeJS, Express, MongoDB, MySQL, PostgreSQL, GraphQL, Apollo, entre otras.',
        latest: true,
        delay: 0.1,
    },
    {
        title: 'Cervecero',
        date: '2017 - Presente',
        content: 'Elaboración de cerveza en Compañia Cervecera Hércules',
        latest: true,
        delay: 0.2,
    },
    {
        title: 'The  Future Agency',
        date: '2020 - 2021',
        content: 'Desarrollador web y creacion de contenido para aplicaciones web.',
        latest: false,
        delay: 0.3,
    },
];
export function Resume() {
    return (
        <ScrollReveal >
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                Experiencia
            </h2>
            <div className="my-8">
                <ol className="relative border-l border-zinc-400 dark:border-gray-700">
                    {listItemInfo.map((item, index) => (
                        <li key={index} className="mb-10 ml-6">
                            <ScrollReveal delay={item.delay}>
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </span>
                                <div className="ml-4">
                                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{item.title} {item.latest && <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Reciente</span>}</h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.date}</time>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">{item.content}</p>
                                </div>
                            </ScrollReveal>
                        </li>
                    ))}
                </ol>
            </div>
            <ScrollReveal delay={0.4}>
                <Button href="#" variant="primary" className="w-full mt-6 group">
                    Descarga C.V.
                    <ArrowDownIcon className="w-4 h-4 transition stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
                </Button>
            </ScrollReveal>
        </ScrollReveal>
    )
}
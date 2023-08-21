import { getPosts } from "../services"
import { ScrollReveal } from "../components/ScrollReveal"
import PostCard from "../components/Card";
import { Container } from "../components/Container";

import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'

const primaryFeatures = [
    {
        name: 'Push to deploy.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
        icon: ServerIcon,
    },
]
const secondaryFeatures = [
    {
        name: 'Push to deploy',
        description:
            'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
        href: '#',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates',
        description:
            'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
        href: '#',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple queues',
        description:
            'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
        href: '#',
        icon: ArrowPathIcon,
    },
]
export default async function page() {

    const posts = await getPosts()

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
                        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                        alt=""
                        className="aspect-[5/2] w-full object-cover rounded-xl xl:rounded-3xl"
                    />
                </div>
                <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                    Posts
                </p>
                <div className="grid grid-cols-1 gap-6 my-8 md:grid-cols-2">
                    {posts.map((post) => (
                        <PostCard post={post.node} key={post.node.title} />
                    ))}
                </div>
            </Container>
            <div className="mx-auto my-12 max-w-7xl sm:px-6 lg:px-8">
                <div className="relative px-6 py-24 overflow-hidden bg-gray-900 isolate sm:rounded-3xl sm:px-10 lg:py-24 xl:px-24">
                    <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
                        <div className="lg:row-start-2 lg:max-w-md">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Boost your productivity.
                                <br />
                                Start using our app today.
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel
                                nulla. Ac euismod vel sit maecenas.
                            </p>
                        </div>
                        <img
                            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                            alt="Product screenshot"
                            className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
                            width={2432}
                            height={1442}
                        />
                        <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                            <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                                {primaryFeatures.map((feature) => (
                                    <div key={feature.name} className="relative">
                                        <dt className="inline-block font-semibold text-white ml-9">
                                            <feature.icon className="absolute w-5 h-5 text-indigo-500 left-1 top-1" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div
                        className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </div>




        </ScrollReveal>
    );
}


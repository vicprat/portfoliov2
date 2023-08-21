
import { Container } from "./Container";
import { ScrollReveal } from "./ScrollReveal";
import { getProjects } from "../services";
import Link from "next/link";


// export function Proyects() {
//     return (
//         <ScrollReveal>
//             <Container className="mt-12">
//                 <div className="py-16 ">
//                     <div className="px-6 mx-auto max-w-7xl lg:px-8">
//                         <div className="max-w-2xl mx-auto lg:text-center">
//                             <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
//                                 Conoce mis proyectos más recientes.
//                             </p>
//                             <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//                                 En ésta sección podrás encontrar los proyectos más recientes en los que he trabajado para clientes y para probar nuevas tecnologías o probar nuevas ideas, si quieres saber más de que tratan, solo da click en alguno de ellos.
//                             </p>
//                         </div>

//                     </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
//                     <div className="grid gap-4">
//                         <div className="relative overflow-hidden">
//                             <img
//                                 className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
//                                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
//                                 alt=""
//                             />
//                             {/* <video
//                                 className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
//                                 autoPlay
//                                 loop
//                                 muted
//                             >
//                                 <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
//                             </video> */}

//                         </div>
//                         <div className="relative overflow-hidden">
//                             <img
//                                 className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
//                                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
//                                 alt=""
//                             />
//                         </div>
//                         <div className="relative overflow-hidden">
//                             <img
//                                 className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
//                                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                     <div className="grid gap-4">
//                         <div className="relative overflow-hidden">
//                             <img
//                                 className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
//                                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
//                                 alt=""
//                             />
//                         </div>
//                         <div className="relative overflow-hidden">
//                             <img
//                                 className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
//                                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
//                                 alt=""
//                             />
//                         </div>
//                         <div className="relative overflow-hidden">
//                             <img
//                                 className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
//                                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                     <div className="grid gap-4">
//                         <div className="relative overflow-hidden">
//                             <img
//                                 className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
//                                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
//                                 alt=""
//                             />
//                         </div>
//                         <div className="relative overflow-hidden">
//                             <img
//                                 className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
//                                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
//                                 alt=""
//                             />
//                         </div>
//                         <div className="relative overflow-hidden">
//                             <img
//                                 className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
//                                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                     <div className="grid gap-4">
//                         <div className="relative overflow-hidden">
//                             <img
//                                 className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
//                                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
//                                 alt=""
//                             />
//                         </div>
//                         <div className="relative overflow-hidden">
//                             <img
//                                 className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
//                                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
//                                 alt=""
//                             />
//                         </div>
//                         <div className="relative overflow-hidden">
//                             <img
//                                 className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
//                                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//         </ScrollReveal>
//     )
// }

export async function Proyects() {
    const projects = await getProjects();

    return (
        <ScrollReveal>
            <Container className="my-12">
                <div className="max-w-2xl mx-auto my-12 md:my-16 lg:text-center">

                    <p className="my-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                        Todo lo que necesitas para tener tu aplicación en producción con las mejores prácticas.
                    </p>
                    <p className="my-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        Lleva el control de tu negocio con la suit de herramientas que se adapte más a tus necesidades de forma escalable y segura.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-4">

                        <Link href={`/proyectos/${projects[0].slug}`}>
                            <div className="relative overflow-hidden">
                                <img
                                    className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
                                    src={projects[0].featuredImage.url}
                                    alt={`project-${projects[0].title}`}
                                    loading="lazy"
                                />
                            </div>
                        </Link>

                        <Link href={`/proyectos/${projects[1].slug}`}>
                            <div className="relative overflow-hidden">
                                <img
                                    className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
                                    src={projects[1].featuredImage.url}
                                    alt={`project-${projects[1].title}`}
                                    loading="lazy"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="grid gap-4">
                        <Link href={`/proyectos/${projects[2].slug}`}>
                            <div className="relative overflow-hidden">
                                <img
                                    className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
                                    src={projects[2].featuredImage.url}
                                    alt={`project-${projects[2].title}`}
                                    loading="lazy"
                                />
                            </div>
                        </Link>
                        <Link href={`/proyectos/${projects[3].slug}`}>
                            <div className="relative overflow-hidden">
                                <img
                                    className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
                                    src={projects[3].featuredImage.url}
                                    alt={`project-${projects[3].title}`}
                                    loading="lazy"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="grid gap-4">
                        <Link href={`/proyectos/${projects[4].slug}`}>
                            <div className="relative overflow-hidden">
                                <img
                                    className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
                                    src={projects[4].featuredImage.url}
                                    alt={`project-${projects[4].title}`}
                                    loading="lazy"
                                />
                            </div>
                        </Link>
                        <Link href={`/proyectos/${projects[5].slug}`}>
                            <div className="relative overflow-hidden">
                                <img
                                    className="h-auto max-w-full transition-transform duration-300 rounded-lg hover:scale-110"
                                    src={projects[5].featuredImage.url}
                                    alt={`project-${projects[5].title}`}
                                    loading="lazy"
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </ScrollReveal>
    )
}


import React from "react"
import { ScrollReveal } from "../components/ScrollReveal"
import { getAuthors } from "../services"
import { Container } from "../components/Container"
import { AnimatedBg } from "../components/AnimatedBg"
import parse from 'html-react-parser';


import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
    MailIcon,
} from "../components/SocialIcons"
import clsx from "clsx"
import { Resume } from "../components/Resume"

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;
interface SocialLinkProps {
    className?: string;
    href: string;
    icon: IconType;
    children: React.ReactNode;
}

function SocialLink({ className, href, children, icon: Icon }: SocialLinkProps) {
    return (
        <li className={clsx(className, 'flex')}>
            <a
                href={href}
                target="_blank"
                className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
                <span className="ml-4">{children}</span>
            </a>
        </li>
    )
}

function convertToHTMLWithParagraphs(text: string): string {
    const paragraphs = text.split('\n').map((paragraph, index) => (
        `<p key=${index}>${paragraph}</p>`
    ));
    return paragraphs.join('');
}
export default async function page() {
    const authors = await getAuthors();

    return (
        <ScrollReveal>
                    <AnimatedBg>
                <Container className="py-8 sm:py-12" >
                        {authors.map((author) => (
                            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:grid-rows-[auto_1fr]">
                                <div className="lg:pl-20">
                                    <div className="max-w-xs px-2.5 lg:max-w-none">
                                        <img
                                            src={author.aboutPhoto.url}
                                            alt={author.name}
                                            sizes="(min-width: 1024px) 32rem, 20rem"
                                            className="object-cover aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-800"
                                        />

                                    </div>
                                </div>
                                <div className="lg:order-first lg:row-span-2">
                                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                        {author.aboutTitle}
                                    </h1>
                                    <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">

                                        <div className="mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-400">
                                            {parse(convertToHTMLWithParagraphs(author.aboutDescription.html))}
                                        </div>

                                    </div>
                                </div>
                                <div className="lg:pl-20">
                                    <Resume />
                                    <ScrollReveal>
                                        <div className="my-12 md:my-24 ">
                                            <h2 className="my-6 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                                                Estudios y Certificaciones
                                            </h2>
                                            <a
                                                href="https://platzi.com/p/vicprat182/"
                                                target="_blank"
                                            >
                                                <img
                                                    src="https://media.graphassets.com/ieB7axMfSfuQAjiNYvdQ?_gl=1*2uyl0s*_ga*ODgyNzA2NTU0LjE2ODk5NjQ5NDc.*_ga_G6FYGSYGZ4*MTY5MjcyMjU0My4yNC4xLjE2OTI3MjI1NTkuNDQuMC4w"
                                                    alt=""
                                                    className="object-cover w-full transition cursor-pointer hover:opacity-80 "
                                                />

                                            </a>
                                        </div>
                                    </ScrollReveal>
                                    <ul role="list">

                                        <SocialLink href="https://github.com/vicprat" icon={GitHubIcon} className="my-4">
                                            Contactame en Github
                                        </SocialLink>
                                        <SocialLink href="https://linkedin.com/in/vicprat/" icon={LinkedInIcon} className="my-4">
                                            Contactame en LinkedIn
                                        </SocialLink>
                                        <SocialLink href="https://twitter.com/vic_prat" icon={TwitterIcon} className="my-4">
                                            Contactame en Twitter
                                        </SocialLink>
                                        <SocialLink href="https://instagram.com/vic_prat" icon={InstagramIcon} className="my-4">
                                            Contactame en Instagram
                                        </SocialLink>
                                        <SocialLink
                                            href="mailto:hey@vicprat.dev"
                                            icon={MailIcon}
                                            className="my-4"
                                        >
                                            hey@vicprat.dev
                                        </SocialLink>
                                    </ul>
                                </div>
                            </div>
                        ))}


                </Container>
            </AnimatedBg>
        </ScrollReveal>
    )
}








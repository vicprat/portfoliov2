
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
import Link from "next/link"
import clsx from "clsx"

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
            <Link
                href={href}
                className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
                <span className="ml-4">{children}</span>
            </Link>
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
        <main className="my-24">
            <ScrollReveal>
                <Container>
                    <AnimatedBg>
                        {authors.map((author) => (
                            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
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
                                    <ul role="list">

                                        <SocialLink href="#" icon={TwitterIcon}>
                                            Follow on Twitter
                                        </SocialLink>
                                        <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                                            Follow on Instagram
                                        </SocialLink>
                                        <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                                            Follow on GitHub
                                        </SocialLink>
                                        <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                                            Follow on LinkedIn
                                        </SocialLink>
                                        <SocialLink
                                            href="mailto:spencer@planetaria.tech"
                                            icon={MailIcon}
                                            className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
                                        >
                                            spencer@planetaria.tech
                                        </SocialLink>
                                    </ul>
                                </div>
                            </div>
                        ))}

                    </AnimatedBg>

                </Container>
            </ScrollReveal>
        </main>
    )
}








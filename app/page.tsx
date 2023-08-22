import Link from "next/link"
import { Container } from "./components/Container"
import { HeroSection, CallToAction, FeatureList } from "./components/Home"
import { LogoClouds } from "./components/LogoClouds"
import { ContactForm } from "./components/ContactForm"
import { Resume } from "./components/Resume"
import { Proyects } from "./components/Proyects"
import { ScrollReveal } from "./components/ScrollReveal"
import FeaturedPosts from "./components/FeaturedPosts"
import { AnimatedBg } from "./components/AnimatedBg"

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
      <ContactForm />
    </main>
  )
}

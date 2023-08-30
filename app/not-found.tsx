import { AnimatedBg } from '@/components/AnimatedBg'
import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
export default function NotFound (): JSX.Element {
  return (
    <AnimatedBg>
      <Header />
      <section className='grid items-center justify-center my-12 overflow-hidden align-middle md:text-center'>
        <Container className='py-24'>
          <h1 className='title'>
            404 Not Found
          </h1>
        </Container>
      </section>
    </AnimatedBg>
  )
}

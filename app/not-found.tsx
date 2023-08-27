import { AnimatedBg } from '@/components/AnimatedBg'
import { Container } from '@/components/Container'
export default function NotFound() {
  return (
    <AnimatedBg>

      <Container className='py-8 sm:py-12'>
        <section className='grid items-center my-12 align-middle md:text-center'>
          <h1 className='title'>
            404 Not Found
          </h1>
        </section>
      </Container>
    </AnimatedBg>
  )
}

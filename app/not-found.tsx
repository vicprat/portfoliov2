import { AnimatedBg } from "@/components/AnimatedBg"
import { Container } from "@/components/Container"
export default function NotFound() {
    return (
        <AnimatedBg>

            <Container className="py-8 sm:py-12">
                <div className="my-12 md:text-center">
                    <h1 className="title">
                        404 Not Found
                    </h1>
                </div>
            </Container>
        </AnimatedBg>
    )
}

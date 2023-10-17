import { getPostDetails } from '@/services'
import { getPostDetailsEng } from '@/services/schemas'
import { Container } from '@/components/Container'
import { RichContentSection } from '@/components/RichContentSection'
interface PageParams {
  params: {
    slug: string
  }
}

export default async function Page ({ params }: PageParams): Promise<JSX.Element> {
  const { slug } = params
  const post = await getPostDetails(slug)
  const postEng = await getPostDetailsEng(slug)

  return (
    <Container>

      <RichContentSection post={post} postEng={postEng} />

    </Container>
  )
}

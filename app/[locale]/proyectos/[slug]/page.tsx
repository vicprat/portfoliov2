// @ts-nocheck
import { getProjecttDetails } from '@/services'
import { getProjecttDetailsEng } from '@/services/schemas'
import { Container } from '@/components/Container'
import { ScrollReveal } from '@/components/ScrollReveal'
import { RichContentSectionProjects } from '@/components/RichContentProjects'

interface PageParams {
  params: {
    slug: string
  }
}
export default async function Page ({ params }: PageParams): Promise<JSX.Element> {
  const { slug } = params
  const project = await getProjecttDetails(slug)
  const projectEng = await getProjecttDetailsEng(slug)

  return (
    <Container>
      <ScrollReveal>

        <RichContentSectionProjects project={project} projectEng={projectEng} />
      </ScrollReveal>
    </Container>
  )
}

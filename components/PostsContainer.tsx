'use client'
import PostCard from '@/components/Card'
import { usePathname } from 'next/navigation'

export function PostsContainer ({ posts, postsEng }) {
  const pathname = usePathname()
  const isSpanish = pathname.includes('/es')

  return (
    <div className='grid grid-cols-1 gap-6 my-8 md:grid-cols-2'>
      {isSpanish ? (
        // Renderiza los posts en español si '/es' está en la URL
        posts.map((post) => (
          <PostCard post={post.node} key={post.node.title} />
        ))
      ) : (
        // Renderiza los posts en inglés si no contiene '/es' en la URL
        postsEng.map((post) => (
          <PostCard post={post.node} key={post.node.title} />
        ))
      )}
    </div>
  )
}

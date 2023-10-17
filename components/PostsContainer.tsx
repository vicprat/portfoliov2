// @ts-nocheck
'use client'
import PostCard from '@/components/Card'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Post {
  node: {
    title: string
    slug: string
    excerpt: string
    createdAt: string
    categories: Array<{
      name: string
    }>
  }
}

interface PostProps {
  posts: Post[]
  postsEng: Post[]
}

export function PostsContainer ({ posts, postsEng }: PostProps) {
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

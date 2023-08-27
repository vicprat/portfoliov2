import { getFeaturedPosts } from '../services'
import PostCard from './Card'
export default async function FeaturedPosts () {
  const featuredPosts = await getFeaturedPosts()

  return (
    <div>
      {featuredPosts.map((post) => (
        <PostCard post={post} key={post.title} />
      ))}
    </div>
  )
}

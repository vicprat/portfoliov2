import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

if (!graphqlAPI) {
  throw new Error('NEXT_PUBLIC_GRAPHCMS_ENDPOINT is not defined')
}

// Tipos de datos para los autores
interface AboutPhoto {
  url: string
}

interface AboutDescription {
  raw: {
    children: React.ReactNode[]
  }
  html: string
}

interface Author {
  aboutDescription: AboutDescription
  aboutTitle: string
  bio: string
  name: string
  title: string
  aboutPhoto: AboutPhoto
  id: string
  localizations: {
    aboutTitle: string[]
  }
}

export const getAuthors = async () => {
  const query = gql`
    query MyQuery {
      authors {
        id
        title
        name
        aboutTitle 
        bio
        aboutPhoto {
      url
    }
        aboutDescription {
          html  
        }
      }
    }
  `

  const result = await request(graphqlAPI, query) as { authors: Author[] }
  return result.authors
}

// export const getAuthorsEn = async () => {
//   const query = gql`
//     query MyQuery {
//       authors(locales: en) {
//         id
//         title
//         name
//         aboutTitle
//         bio
//         aboutPhoto(locales: esp) {
//       url
//     }
//         aboutDescription {
//           html
//         }
//       }
//     }
//   `;

//   const result = await request(graphqlAPI, query) as { authors: Author[] };
//   return result.authors;
// }

// Tipos de datos para los posts
interface Photo {
  url: string
}

interface Author {
  bio: string
  name: string
  id: string
  photo: Photo
}

interface Category {
  name: string
  slug: string
}

interface PostNode {
  author: Author
  createdAt: string
  slug: string
  title: string
  excerpt: string
  featuredImage: Photo
  categories: Category[]
}

interface Edge {
  cursor: string
  node: PostNode
}

interface PostsConnection {
  edges: Edge[]
}

export const getPosts = async () => {
  const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                    cursor
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `

  const result = await request(graphqlAPI, query) as { postsConnection: PostsConnection }
  return result.postsConnection.edges
}

interface FeaturedPost {
  categories: Category[]
  title: string
  excerpt: string
  slug: string
  createdAt: string
}

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: { featuredPost: true }) {
        categories {
          name
          slug
        }
        title
        excerpt
        slug
        createdAt
        id
      }
    }
  `

  const result = await request(graphqlAPI, query) as { posts: FeaturedPost[] }

  return result.posts
}

interface PostContent {
  raw: {
    children: React.ReactNode[]
  }
  html: string
}

interface PostDetails {
  title: string
  excerpt: string
  featuredImage: Photo
  author: Author
  createdAt: string
  slug: string
  content: PostContent
  categories: Category[]
}

export const getPostDetails = async (slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
          html
        }
        categories {
          name
          slug
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug }) as { post: PostDetails }

  return result.post
}

interface Project {
  content: ProjectContent
  excerpt: string
  id: string
  slug: string
  title: string
  projectLink: string
  featuredImage: Photo
}

interface ProjectContent {
  html: string
}

export const getProjects = async () => {
  const query = gql`
    query MyQuery {
      proyects {
        content {
          html
        }
        excerpt
        id
        slug
        title
        projectLink
        featuredImage {
          url
        }
      }
    }
  `

  const result = await request(graphqlAPI, query) as { proyects: Project[] }

  return result.proyects
}

interface Photo {
  url: string
}

interface Author {
  bio: string
  name: string
  photo: Photo
}

interface Technology {
  name: string
  slug: string
}

interface ProjectNode {
  author: Author
  createdAt: string
  slug: string
  title: string
  projectLink: string
  excerpt: string
  featuredImage: Photo
  content: ProjectContent
  technologies: Technology[]
}

export const getProjecttDetails = async (slug: string) => {
  const query = gql`
    query GetProyecttDetails($slug: String!) {
      proyect(where: { slug: $slug }) {
        title
        excerpt
        projectLink
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
          html
        }
        technologies {
          name
          slug
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug }) as { proyect: ProjectNode }

  return result.proyect
}


interface Experience {
  actualJob: boolean;
  companyName: string;
  date: string;
  description: string;
  role: string;
}

export const getExperiences = async () => {
  const query = gql`
    query MyQuery {
      experiences {
        actualJob
        companyName
        date
        description
        role
      }
    }
  `;

  const result = await request(graphqlAPI, query) as { experiences: Experience[] };

  return result.experiences;
};
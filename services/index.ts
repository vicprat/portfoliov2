import { request } from 'graphql-request'
import { graphql } from './gql'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

if (!graphqlAPI) {
  throw new Error('NEXT_PUBLIC_GRAPHCMS_ENDPOINT is not defined')
}
export const getAuthors = async () => {
  const query = graphql(`
    query getAuthors {
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
  `)

  const result = await request(graphqlAPI, query)
  if (!result.authors) {
    throw new Error('Authors not found')
  }
  return result.authors
}
export const getPosts = async () => {
  const query = graphql(`
        query getPosts {
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
    `)

  const result = await request(graphqlAPI, query)
  if (!result.postsConnection) {
    throw new Error('Posts not found')
  }
  return result.postsConnection.edges
}
export const getFeaturedPosts = async () => {
  const query = graphql(`
    query getFeaturedPosts {
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
  `)

  const result = await request(graphqlAPI, query)
  if (!result.posts) {
    throw new Error('Posts not found')
  }
  return result.posts
}

export const getFeaturedPostsEng = async () => {
  const query = graphql(`
    query getFeaturedPostsEng {
      posts(where: { featuredPost: true }, locales: en) {
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
  `)

  const result = await request(graphqlAPI, query)
  if (!result.posts) {
    throw new Error('Posts not found')
  }
  return result.posts
}
export const getPostDetails = async (slug: string) => {
  const query = graphql(`
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
  `)

  const result = await request(graphqlAPI, query, { slug })
  if (result.post == null) {
    throw new Error('Post not found')
  }
  return result.post
}
export const getProjects = async () => {
  const query = graphql(`
    query getProjects {
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
  `)

  const result = await request(graphqlAPI, query)
  if (!result.proyects) {
    throw new Error('Projects not found')
  }
  return result.proyects
}
export const getProjecttDetails = async (slug: string) => {
  const query = graphql(`
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
  `)

  const result = await request(graphqlAPI, query, { slug })
  if (result.proyect == null) {
    throw new Error('Project not found')
  }
  return result.proyect
}
export const getExperiences = async () => {
  const query = graphql(`
    query getExperiences {
      experiences {
        actualJob
        companyName
        date
        description
        role
      }
    }
  `)

  const result = await request(graphqlAPI, query)
  if (!result.experiences) {
    throw new Error('Experiences not found')
  }
  return result.experiences
}

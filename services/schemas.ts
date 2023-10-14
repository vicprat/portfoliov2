import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

if (!graphqlAPI) {
    throw new Error('NEXT_PUBLIC_GRAPHCMS_ENDPOINT is not defined')
}

export const getAuthors = async () => {
    const query = gql`
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
  `
}

export const getPosts = async () => {
    const query = gql`
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
    `
}

export const getFeaturedPosts = async () => {
    const query = gql`
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
    `
}

export const getPostDetails = async (slug: string) => {
    const query = gql`
    query getPostDetails($slug: String!) {
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
}

export const getProjects = async () => {
    const query = gql`
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
  `
}

export const getProjecttDetails = async (slug: string) => {
    const query = gql`
    query getProjecttDetails($slug: String!) {
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
}

export const getExperiences = async () => {
    const query = gql`
    query getExperiences {
      experiences {
        actualJob
        companyName
        date
        description
        role
      }
    }
  `
}
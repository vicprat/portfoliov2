/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query getAuthors {\n      authors {\n        id\n        title\n        name\n        aboutTitle \n        bio\n        aboutPhoto {\n      url\n    }\n        aboutDescription {\n          html  \n        }\n      }\n    }\n  ": types.GetAuthorsDocument,
    "\n    query getAuthorsEng {\n  authors(locales: en) {\n    id\n    title\n    name\n    aboutTitle\n    bio\n    aboutPhoto(locales: esp) {\n      url\n    }\n    aboutDescription {\n      html\n    }\n  }\n}\n  ": types.GetAuthorsEngDocument,
    "\n        query getPosts {\n            postsConnection {\n                edges {\n                    cursor\n                    node {\n                        author {\n                            bio\n                            name\n                            id\n                            photo {\n                                url\n                            }\n                        }\n                        createdAt\n                        slug\n                        title\n                        excerpt\n                        featuredImage {\n                            url\n                        }\n                        categories {\n                            name\n                            slug\n                        }\n                    }\n                }\n            }\n        }\n    ": types.GetPostsDocument,
    "\n        query getPostsEng {\n  postsConnection(locales: en) {\n    edges {\n      cursor\n      node {\n        author {\n          bio\n          name\n          id\n          photo(locales: esp) {\n            url\n          }\n        }\n        createdAt\n        slug\n        title\n        excerpt\n        featuredImage(locales: esp) {\n          url\n        }\n        categories {\n          name\n          slug\n        }\n      }\n    }\n  }\n}\n    ": types.GetPostsEngDocument,
    "\n    query getFeaturedPosts {\n      posts(where: { featuredPost: true }) {\n        categories {\n          name\n          slug\n        }\n        title\n        excerpt\n        slug\n        createdAt\n        id\n      }\n    }\n  ": types.GetFeaturedPostsDocument,
    "\n    query getFeaturedPostsEng {\n      posts(where: {featuredPost: true}, locales: en) {\n    categories {\n      name\n      slug\n    }\n    title\n    excerpt\n    slug\n    createdAt\n    id\n  }\n}\n  ": types.GetFeaturedPostsEngDocument,
    "\n    query GetPostDetails($slug: String!) {\n      post(where: { slug: $slug }) {\n        title\n        excerpt\n        featuredImage {\n          url\n        }\n        author {\n          name\n          bio\n          photo {\n            url\n          }\n        }\n        createdAt\n        slug\n        content {\n          raw\n          html\n        }\n        categories {\n          name\n          slug\n        }\n      }\n    }\n  ": types.GetPostDetailsDocument,
    "\n    query getProjects {\n      proyects {\n        content {\n          html\n        }\n        excerpt\n        id\n        slug\n        title\n        projectLink\n        featuredImage {\n          url\n        }\n      }\n    }\n  ": types.GetProjectsDocument,
    "\nquery getProjectsEng {\n  proyects(locales: en) {\n    content {\n      html\n    }\n    excerpt\n    id\n    slug\n    title\n    projectLink\n    featuredImage(locales: esp) {\n      url\n    }\n  }\n}\n  ": types.GetProjectsEngDocument,
    "\n    query GetProyecttDetails($slug: String!) {\n      proyect(where: { slug: $slug }) {\n        title\n        excerpt\n        projectLink\n        featuredImage {\n          url\n        }\n        author {\n          name\n          bio\n          photo {\n            url\n          }\n        }\n        createdAt\n        slug\n        content {\n          raw\n          html\n        }\n        technologies {\n          name\n          slug\n        }\n      }\n    }\n  ": types.GetProyecttDetailsDocument,
    "\n    query getExperiences {\n      experiences {\n        actualJob\n        companyName\n        date\n        description\n        role\n      }\n    }\n  ": types.GetExperiencesDocument,
    "\nquery getExperiencesEng {\n  experiences(locales: en) {\n    actualJob\n    companyName\n    date\n    description\n    role\n  }\n}\n\n  ": types.GetExperiencesEngDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getAuthors {\n      authors {\n        id\n        title\n        name\n        aboutTitle \n        bio\n        aboutPhoto {\n      url\n    }\n        aboutDescription {\n          html  \n        }\n      }\n    }\n  "): (typeof documents)["\n    query getAuthors {\n      authors {\n        id\n        title\n        name\n        aboutTitle \n        bio\n        aboutPhoto {\n      url\n    }\n        aboutDescription {\n          html  \n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getAuthorsEng {\n  authors(locales: en) {\n    id\n    title\n    name\n    aboutTitle\n    bio\n    aboutPhoto(locales: esp) {\n      url\n    }\n    aboutDescription {\n      html\n    }\n  }\n}\n  "): (typeof documents)["\n    query getAuthorsEng {\n  authors(locales: en) {\n    id\n    title\n    name\n    aboutTitle\n    bio\n    aboutPhoto(locales: esp) {\n      url\n    }\n    aboutDescription {\n      html\n    }\n  }\n}\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query getPosts {\n            postsConnection {\n                edges {\n                    cursor\n                    node {\n                        author {\n                            bio\n                            name\n                            id\n                            photo {\n                                url\n                            }\n                        }\n                        createdAt\n                        slug\n                        title\n                        excerpt\n                        featuredImage {\n                            url\n                        }\n                        categories {\n                            name\n                            slug\n                        }\n                    }\n                }\n            }\n        }\n    "): (typeof documents)["\n        query getPosts {\n            postsConnection {\n                edges {\n                    cursor\n                    node {\n                        author {\n                            bio\n                            name\n                            id\n                            photo {\n                                url\n                            }\n                        }\n                        createdAt\n                        slug\n                        title\n                        excerpt\n                        featuredImage {\n                            url\n                        }\n                        categories {\n                            name\n                            slug\n                        }\n                    }\n                }\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query getPostsEng {\n  postsConnection(locales: en) {\n    edges {\n      cursor\n      node {\n        author {\n          bio\n          name\n          id\n          photo(locales: esp) {\n            url\n          }\n        }\n        createdAt\n        slug\n        title\n        excerpt\n        featuredImage(locales: esp) {\n          url\n        }\n        categories {\n          name\n          slug\n        }\n      }\n    }\n  }\n}\n    "): (typeof documents)["\n        query getPostsEng {\n  postsConnection(locales: en) {\n    edges {\n      cursor\n      node {\n        author {\n          bio\n          name\n          id\n          photo(locales: esp) {\n            url\n          }\n        }\n        createdAt\n        slug\n        title\n        excerpt\n        featuredImage(locales: esp) {\n          url\n        }\n        categories {\n          name\n          slug\n        }\n      }\n    }\n  }\n}\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getFeaturedPosts {\n      posts(where: { featuredPost: true }) {\n        categories {\n          name\n          slug\n        }\n        title\n        excerpt\n        slug\n        createdAt\n        id\n      }\n    }\n  "): (typeof documents)["\n    query getFeaturedPosts {\n      posts(where: { featuredPost: true }) {\n        categories {\n          name\n          slug\n        }\n        title\n        excerpt\n        slug\n        createdAt\n        id\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getFeaturedPostsEng {\n      posts(where: {featuredPost: true}, locales: en) {\n    categories {\n      name\n      slug\n    }\n    title\n    excerpt\n    slug\n    createdAt\n    id\n  }\n}\n  "): (typeof documents)["\n    query getFeaturedPostsEng {\n      posts(where: {featuredPost: true}, locales: en) {\n    categories {\n      name\n      slug\n    }\n    title\n    excerpt\n    slug\n    createdAt\n    id\n  }\n}\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPostDetails($slug: String!) {\n      post(where: { slug: $slug }) {\n        title\n        excerpt\n        featuredImage {\n          url\n        }\n        author {\n          name\n          bio\n          photo {\n            url\n          }\n        }\n        createdAt\n        slug\n        content {\n          raw\n          html\n        }\n        categories {\n          name\n          slug\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GetPostDetails($slug: String!) {\n      post(where: { slug: $slug }) {\n        title\n        excerpt\n        featuredImage {\n          url\n        }\n        author {\n          name\n          bio\n          photo {\n            url\n          }\n        }\n        createdAt\n        slug\n        content {\n          raw\n          html\n        }\n        categories {\n          name\n          slug\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getProjects {\n      proyects {\n        content {\n          html\n        }\n        excerpt\n        id\n        slug\n        title\n        projectLink\n        featuredImage {\n          url\n        }\n      }\n    }\n  "): (typeof documents)["\n    query getProjects {\n      proyects {\n        content {\n          html\n        }\n        excerpt\n        id\n        slug\n        title\n        projectLink\n        featuredImage {\n          url\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getProjectsEng {\n  proyects(locales: en) {\n    content {\n      html\n    }\n    excerpt\n    id\n    slug\n    title\n    projectLink\n    featuredImage(locales: esp) {\n      url\n    }\n  }\n}\n  "): (typeof documents)["\nquery getProjectsEng {\n  proyects(locales: en) {\n    content {\n      html\n    }\n    excerpt\n    id\n    slug\n    title\n    projectLink\n    featuredImage(locales: esp) {\n      url\n    }\n  }\n}\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetProyecttDetails($slug: String!) {\n      proyect(where: { slug: $slug }) {\n        title\n        excerpt\n        projectLink\n        featuredImage {\n          url\n        }\n        author {\n          name\n          bio\n          photo {\n            url\n          }\n        }\n        createdAt\n        slug\n        content {\n          raw\n          html\n        }\n        technologies {\n          name\n          slug\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GetProyecttDetails($slug: String!) {\n      proyect(where: { slug: $slug }) {\n        title\n        excerpt\n        projectLink\n        featuredImage {\n          url\n        }\n        author {\n          name\n          bio\n          photo {\n            url\n          }\n        }\n        createdAt\n        slug\n        content {\n          raw\n          html\n        }\n        technologies {\n          name\n          slug\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getExperiences {\n      experiences {\n        actualJob\n        companyName\n        date\n        description\n        role\n      }\n    }\n  "): (typeof documents)["\n    query getExperiences {\n      experiences {\n        actualJob\n        companyName\n        date\n        description\n        role\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getExperiencesEng {\n  experiences(locales: en) {\n    actualJob\n    companyName\n    date\n    description\n    role\n  }\n}\n\n  "): (typeof documents)["\nquery getExperiencesEng {\n  experiences(locales: en) {\n    actualJob\n    companyName\n    date\n    description\n    role\n  }\n}\n\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
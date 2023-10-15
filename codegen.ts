
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://api-us-west-2.hygraph.com/v2/clbkvhnfn0bdo01ued6vzgd2w/master',
  documents: 'services/schemas.ts',
  generates: {
    'services/gql/': {
      preset: 'client'
    }
  }
}

export default config

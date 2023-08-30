
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
  documents: 'services/*.ts',
  generates: {
    'services/gql/': {
      preset: 'client',
    },
  }
};

export default config;

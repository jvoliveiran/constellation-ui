import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './supergraph.graphql',
  documents: ['src/graphql/queries/*.graphql'],
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;

//schema: './supergraph.graphql',
//documents: ['src/graphql/queries/*.graphql'],
//['typescript', 'typescript-operations', 'typescript-react-query'],
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## React Query 

Implemented with persisted queries in local storage. Prevent data fetch event if page is reloaded.

More [here](https://tanstack.com/query/latest/docs/framework/react/plugins/persistQueryClient#persistqueryclientprovider)

## GraphQL Codegen

Based on `supergraph.graphql` schema file, it's possible to generate code for interacting with queries and mutations.

This project uses `graphql-codegen` library for code generation based on schema.

### Generating code

Workflow:
1- Make graphql changes on services.
2- Use constellation-gateway for composing a new `supergraph.graphql` file.
3- Copy this new supergraph file into this project's root folder.
4- Writte all of you GraphQL queries and mutations under `src/graphql/queries` and `src/graphql/mutations`
4- Execute following command

Creating code based on GraphQL schema

```shell
$ npm run codegen
```

All new code will be generated under `src/graphql/generated`.

### Consuming generated code

Example:
```typescript
import { GetAllDocument } from '@/graphql/generated/graphql';
...
const { isPending, isError, data, error } = useQuery({
    queryKey: ['queryKey'],
    queryFn: () => getRequestClient().request(GetAllDocument),
    staleTime: 0.5 * 60 * 1000
  }, queryClient);
```

## React Query

Combined with library `graphql-request`, `react-query` is used for consuming and caching data in frontend.

Configuration is set in following file:
```shell
src/lib/react-query-client.ts
```

It uses browser's local storage for caching, allowing users to refresh page and not loosing cached data.

Usage example:
```typescript
const { isPending, isError, data, error } = useQuery({
    queryKey: ['queryKey'],
    queryFn: () => getRequestClient().request(GetAllDocument),
    staleTime: 0.5 * 60 * 1000
  }, queryClient);
```
```

## Tests

### Unit tests & MSW

Add request handlers to `src/mocks/handlers`

All handers are inject in MSW server, which is enabled/disabled automatically in `jest.setup.js`

Handler example: 
```typescript
const myHandler: GraphQLResponseResolver<GeneratedQuery, GraphQLVariables> = () => {
  return HttpResponse.json({
    data: {
      foo: bar
    }
  });
}
...
export const handlers = [
  graphql.query('GeneratedQuery', myHandler)
];
```

### E2E tests & Cypress

Test scenarios are added under `cypress/e2e` folder.

Custom commands are defined under `cypress/support/commands` file.

General configurations, like base URL are defined in `cypress.config.ts`

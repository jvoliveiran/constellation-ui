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

Based on `supergraph.graphql` schema file, it's possible to generate code for interacting with queries and mutations

WIP

## Apollo Client
*TODO*: Replace with react query docs

*Deprecated*
Client is created in `src/app/lib` and configured into `src/app/providers`

Configuration rely on two different env vars:
- NEXT_PUBLIC_GRAPHQL_ENDPOINT: graphql gateway endpoint
- NEXT_PUBLIC_AUTH_TOKEN_KEY: local storage key

## Tests

### Unit tests & MSW

Add request handlers to `src/mocks/handlers`

All handers are inject in MSW server, which is enabled/disabled automatically in `jest.setup.js`

Handler example: 
```
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

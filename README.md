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

## Apollo Client

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
import { GraphQLClient } from 'graphql-request';

export const getRequestClient = () => {
 return new GraphQLClient(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://localhost:3000'}`, {
  headers: () => {
    const token = global?.localStorage?.getItem(process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY || 'access_token');
    return {
      authorization: `Bearer ${token}`
    };
  },
});

};
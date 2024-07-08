import {
  graphql,
  GraphQLResponseResolver,
  GraphQLVariables,
  HttpResponse
} from 'msw';
import { GetAllQuery } from '../graphql/generated/graphql';

const getAllHandler: GraphQLResponseResolver<GetAllQuery, GraphQLVariables> = () => {
  return HttpResponse.json({
    data: {
      getAll: [
        {
          id: 1,
          name: 'person 1',
          age: 1
        },
        {
          id: 2,
          name: 'person 2',
          age: 2
        }
      ]
    }
  });
}

export const handlers = [
  graphql.query('GetAll', getAllHandler) 
];

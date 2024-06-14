import { gql } from '@apollo/client';

export const getAllPerson = gql`
query GetAll {
  getAll {
    age
    id
    name
  }
}
`;
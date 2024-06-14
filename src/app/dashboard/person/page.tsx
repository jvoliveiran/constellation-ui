"use client"

import { ApolloError, useQuery } from '@apollo/client';
import { Heading, Text } from '@radix-ui/themes';
import { getAllPerson } from '../../graphql/queries/person';
import { Person as PersonType } from '../../graphql/types/person';

export type QueryResult = { getAll: PersonType[] } | undefined

export default function Person(): React.ReactNode {
  const { loading, error, data } = useQuery<QueryResult>(getAllPerson);

  const getPageContent = (loading: boolean, error: ApolloError | undefined, data: QueryResult) => {
    if(loading) return <Text as="p">Loading data...</Text>
    if(error) {
      return <Text as="p">Error fetching people</Text>
    }
    if(!data) return <Text as="p">No results found!</Text>
    
    return <>{data.getAll.map(person => <Text as="p" key={person.id}>{person.name}</Text>)}</>
  }

  return (
    <>
      <Heading as="h1" size="8" className="text-dark">Person</Heading>
      <div className="flex flex-col mt-6">
        {getPageContent(loading, error, data)}
      </div>
    </>
  )
}
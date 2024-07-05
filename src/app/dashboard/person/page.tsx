"use client"

import { Callout, Heading, Table, Text } from '@radix-ui/themes';
import { GetAllDocument, Maybe, GetAllQuery } from '@/graphql/generated/graphql';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getRequestClient } from '@/lib/request-client';
import { InfoCircledIcon } from '@radix-ui/react-icons';

export default function Person(): React.ReactNode {
  const queryClient = useQueryClient();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['people'],
    queryFn: () => getRequestClient().request(GetAllDocument),
    staleTime: 0.5 * 60 * 1000 //Overwriting default staleTime to 30sec
  }, queryClient);

  const getPageContent = (loading: boolean, isError: boolean, data: GetAllQuery | undefined) => {
    if(loading) return <Text as="p">Loading data...</Text>
    if(isError) return

    if(!data) return <Text as="p">No results found!</Text> 

    return <>{data.getAll.map(person => {
      return (
        <Table.Row key={person.id}>
          <Table.RowHeaderCell>{person.id}</Table.RowHeaderCell>
          <Table.Cell>{person.name}</Table.Cell>
          <Table.Cell>{person.age}</Table.Cell>
        </Table.Row>
      )
    })}</>
  }

  const getErrorContent = (isError: boolean, error: Maybe<Error>) => {
    if (!isError) return;
    console.error('Error fetching people', error);
    return (
      <div className='mt-6'>
        <Callout.Root color="red">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            {`Error fetching data: ${error?.message}`}
          </Callout.Text>
        </Callout.Root>
      </div>
    );
  }

  return (
    <>
      <Heading as="h1" size="8" className="text-dark">Person</Heading>
      {getErrorContent(isError, error)}
      <div className="flex flex-col mt-6">
        <Table.Root>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Age</Table.ColumnHeaderCell>
          </Table.Row>

          {getPageContent(isPending, isError, data)}
        </Table.Root>
      </div>
    </>
  )
}
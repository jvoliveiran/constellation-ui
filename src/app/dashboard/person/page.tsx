"use client"

import { Callout, Heading, Spinner, Table } from '@radix-ui/themes';
import { Maybe, GetAllQuery } from '@/graphql/generated/graphql';
import { useQueryClient } from '@tanstack/react-query';
import { getRequestClient } from '@/lib/request-client';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { usePerson } from '@/services/person.queries';
import { usePersonData, usePersonActions } from '@/stores/person.store';
import { useEffect } from 'react';

export default function Person(): React.ReactNode {
  const queryClient = useQueryClient();

  const { isPending, isError, data, error } = usePerson(queryClient, getRequestClient());
  const { add: setPersonData } = usePersonActions();
  
  useEffect(() => {
    if(data) {
      setPersonData(data.getAll);
    } 
  }, [setPersonData, data]);

  const getPageContent = (loading: boolean, isError: boolean, data: GetAllQuery | undefined) => {
    if(isError || loading) return
    if(!data) return (
      <Table.Row>
        <Table.Cell>No results found</Table.Cell>
      </Table.Row>
    )

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
            {`Error fetching data`}
          </Callout.Text>
        </Callout.Root>
      </div>
    );
  }

  const showLoading = (isPending: boolean) => {
    if(isPending) return (
      <div className="flex justify-center items-center">
        <Spinner size="3" />
      </div>
    )
  }

  return (
    <>
      <Heading as="h1" size="8" className="text-dark">Person</Heading>
      {getErrorContent(isError, error)}
      {showLoading(isPending)}
      <div className="flex flex-col mt-6">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Age</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {getPageContent(isPending, isError, data)}
          </Table.Body>
        </Table.Root>
      </div>
    </>
  )
}